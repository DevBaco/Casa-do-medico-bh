import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const dataFile = "src/data/compression-stockings.ts";
const assetRoot = "public/Venosan";
const source = fs.readFileSync(dataFile, "utf8");
const referencePattern = /\$\{venosanBase\}\/([^`"]+)/g;
const referencedRelativePaths = [
  ...new Set([...source.matchAll(referencePattern)].map((match) => match[1])),
];

const missing = referencedRelativePaths.filter(
  (relativePath) => !fs.existsSync(path.join(assetRoot, relativePath))
);

if (missing.length > 0) {
  throw new Error(`Assets Venosan ausentes:\n${missing.join("\n")}`);
}

const pngPaths = referencedRelativePaths.filter((relativePath) =>
  relativePath.toLowerCase().endsWith(".png")
);
const replacements = new Map();

for (const relativePath of pngPaths) {
  const sourcePath = path.join(assetRoot, relativePath);
  const outputRelativePath = relativePath.replace(/\.png$/i, ".webp");
  const outputPath = path.join(assetRoot, outputRelativePath);

  await sharp(sourcePath)
    .rotate()
    .resize({
      width: 1920,
      height: 1920,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({
      quality: 88,
      alphaQuality: 100,
      effort: 6,
      smartSubsample: true,
    })
    .toFile(outputPath);

  const metadata = await sharp(outputPath).metadata();
  if (!metadata.width || !metadata.height || fs.statSync(outputPath).size === 0) {
    throw new Error(`Falha ao validar o asset convertido: ${outputPath}`);
  }

  replacements.set(relativePath, outputRelativePath);
}

let updatedSource = source;
for (const [originalPath, optimizedPath] of replacements) {
  updatedSource = updatedSource.split(originalPath).join(optimizedPath);
}
fs.writeFileSync(dataFile, updatedSource);

const finalReferences = new Set(
  referencedRelativePaths.map((relativePath) => replacements.get(relativePath) ?? relativePath)
);

function walkFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walkFiles(entryPath) : [entryPath];
  });
}

const removed = [];
for (const filePath of walkFiles(assetRoot)) {
  const relativePath = path.relative(assetRoot, filePath);
  if (!finalReferences.has(relativePath)) {
    fs.rmSync(filePath);
    removed.push(relativePath);
  }
}

function removeEmptyDirectories(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory()) removeEmptyDirectories(path.join(directory, entry.name));
  }
  if (directory !== assetRoot && fs.readdirSync(directory).length === 0) {
    fs.rmdirSync(directory);
  }
}
removeEmptyDirectories(assetRoot);

const finalFiles = walkFiles(assetRoot);
const totalBytes = finalFiles.reduce((sum, filePath) => sum + fs.statSync(filePath).size, 0);

console.log(
  JSON.stringify(
    {
      convertedToWebp: replacements.size,
      retainedOriginals: finalReferences.size - replacements.size,
      removedFiles: removed.length,
      finalFiles: finalFiles.length,
      finalMiB: Number((totalBytes / 1024 / 1024).toFixed(1)),
    },
    null,
    2
  )
);
