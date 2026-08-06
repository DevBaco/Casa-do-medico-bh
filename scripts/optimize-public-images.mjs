// Otimiza as imagens servidas cruas de public/ (que não passam pelo pipeline do
// Astro) e reescreve as referências no src/.
//
// Para cada imagem raster: redimensiona para no máximo MAX_EDGE px e reencoda em
// WebP. Quando a extensão muda, todas as referências no src/ são reescritas e o
// arquivo original é removido. Imagens sem nenhuma referência no src/ NÃO são
// apagadas — são apenas reportadas no fim.
//
// Uso:
//   node scripts/optimize-public-images.mjs --dry-run
//   node scripts/optimize-public-images.mjs

import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const DRY_RUN = process.argv.includes("--dry-run");
const MAX_EDGE = 1600;
const WEBP_OPTIONS = { quality: 82, alphaQuality: 100, effort: 6, smartSubsample: true };

const IMAGE_ROOTS = [
  "public/Produtos",
  "public/Sigvaris",
  "public/Venosan",
  "public/Genoven",
  "public/Marcas",
  "public/images",
  "public/logo",
  "public/Google-reviews",
];
const RASTER_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp"]);
const SOURCE_ROOT = "src";

function walkFiles(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walkFiles(entryPath) : [entryPath];
  });
}

// ---------------------------------------------------------------- fontes
const sourceFiles = walkFiles(SOURCE_ROOT).filter((filePath) =>
  /\.(astro|tsx|ts|jsx|js|mdx|md)$/.test(filePath)
);
const sourceContents = new Map(
  sourceFiles.map((filePath) => [filePath, fs.readFileSync(filePath, "utf8")])
);

// Candidatos de busca para um arquivo, do mais específico ao menos: o caminho
// público inteiro, depois sufixos cortados em cada barra. Isso cobre tanto
// `"/Produtos/Hidrolight/foo.png"` quanto `` `${hidrolightBase}/foo.png` ``.
//
// Todos os candidatos começam com "/" de propósito: um fallback pelo basename
// puro casaria "foo.png" dentro de "bar-foo.png" e corromperia o arquivo errado
// na hora da reescrita.
function referenceCandidates(publicPath) {
  const segments = publicPath.split("/").filter(Boolean);
  return segments.map((_, index) => "/" + segments.slice(index).join("/"));
}

function findReference(publicPath) {
  for (const candidate of referenceCandidates(publicPath)) {
    const hits = [];
    for (const [filePath, contents] of sourceContents) {
      if (contents.includes(candidate)) hits.push(filePath);
    }
    if (hits.length > 0) return { candidate, hits };
  }
  return null;
}

// ---------------------------------------------------------------- imagens
const images = IMAGE_ROOTS.flatMap(walkFiles).filter((filePath) =>
  RASTER_EXTENSIONS.has(path.extname(filePath).toLowerCase())
);

const rewrites = new Map(); // candidato antigo -> candidato novo
const converted = [];
const recompressed = [];
const unreferenced = [];
const skipped = [];
let bytesBefore = 0;
let bytesAfter = 0;

for (const filePath of images) {
  const publicPath = "/" + path.relative("public", filePath).split(path.sep).join("/");
  const originalBytes = fs.statSync(filePath).size;
  const reference = findReference(publicPath);

  if (!reference) {
    unreferenced.push({ publicPath, mib: +(originalBytes / 1024 / 1024).toFixed(2) });
    continue;
  }

  bytesBefore += originalBytes;

  const isWebp = path.extname(filePath).toLowerCase() === ".webp";
  const outputPath = isWebp ? filePath : filePath.replace(/\.(png|jpe?g)$/i, ".webp");
  const temporaryPath = outputPath + ".tmp";

  const pipeline = sharp(filePath)
    .rotate()
    .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true })
    .webp(WEBP_OPTIONS);

  if (DRY_RUN) {
    const buffer = await pipeline.toBuffer();
    bytesAfter += buffer.length;
    (isWebp ? recompressed : converted).push({
      publicPath,
      from: +(originalBytes / 1024 / 1024).toFixed(2),
      to: +(buffer.length / 1024 / 1024).toFixed(2),
    });
    if (!isWebp) {
      rewrites.set(reference.candidate, reference.candidate.replace(/\.(png|jpe?g)$/i, ".webp"));
    }
    continue;
  }

  await pipeline.toFile(temporaryPath);

  const metadata = await sharp(temporaryPath).metadata();
  const newBytes = fs.statSync(temporaryPath).size;
  if (!metadata.width || !metadata.height || newBytes === 0) {
    fs.rmSync(temporaryPath);
    throw new Error(`Falha ao validar o asset convertido: ${publicPath}`);
  }

  // Se o reencode ficou maior que o original (comum em WebP já otimizado),
  // mantém o arquivo original e não reescreve nada.
  if (isWebp && newBytes >= originalBytes) {
    fs.rmSync(temporaryPath);
    bytesAfter += originalBytes;
    skipped.push(publicPath);
    continue;
  }

  fs.renameSync(temporaryPath, outputPath);
  if (outputPath !== filePath) fs.rmSync(filePath);
  bytesAfter += newBytes;

  const entry = {
    publicPath,
    from: +(originalBytes / 1024 / 1024).toFixed(2),
    to: +(newBytes / 1024 / 1024).toFixed(2),
  };
  if (isWebp) {
    recompressed.push(entry);
  } else {
    converted.push(entry);
    rewrites.set(reference.candidate, reference.candidate.replace(/\.(png|jpe?g)$/i, ".webp"));
  }
}

// ---------------------------------------------------------------- reescrita
let rewrittenFiles = 0;
if (!DRY_RUN && rewrites.size > 0) {
  for (const [filePath, contents] of sourceContents) {
    let updated = contents;
    for (const [oldReference, newReference] of rewrites) {
      updated = updated.split(oldReference).join(newReference);
    }
    if (updated !== contents) {
      fs.writeFileSync(filePath, updated);
      sourceContents.set(filePath, updated);
      rewrittenFiles += 1;
    }
  }
}

// ------------------------------------------------------- verificação final
const broken = [];
if (!DRY_RUN) {
  const referencePattern = /["'`]([^"'`]*\.(?:png|jpe?g|webp))["'`]/gi;
  for (const [filePath, contents] of sourceContents) {
    for (const match of contents.matchAll(referencePattern)) {
      const value = match[1];
      if (!value.startsWith("/")) continue;
      if (!fs.existsSync(path.join("public", value))) broken.push({ filePath, value });
    }
  }
}

console.log(
  JSON.stringify(
    {
      dryRun: DRY_RUN,
      convertidasParaWebp: converted.length,
      recomprimidas: recompressed.length,
      mantidasComoEstavam: skipped.length,
      arquivosDeCodigoReescritos: rewrittenFiles,
      antesMiB: +(bytesBefore / 1024 / 1024).toFixed(1),
      depoisMiB: +(bytesAfter / 1024 / 1024).toFixed(1),
      maioresGanhos: [...converted, ...recompressed]
        .sort((a, b) => b.from - a.from)
        .slice(0, 10),
      semReferenciaNoSrc: {
        total: unreferenced.length,
        mib: +(unreferenced.reduce((sum, item) => sum + item.mib, 0).toFixed(1)),
        arquivos: unreferenced.sort((a, b) => b.mib - a.mib).slice(0, 20),
      },
      referenciasQuebradas: broken,
    },
    null,
    2
  )
);
