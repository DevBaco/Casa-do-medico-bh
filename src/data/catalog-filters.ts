import { catalogProducts } from "@/data/catalog-products";
import type { CatalogCategoryId, CatalogProduct } from "@/data/catalog-products";

export interface CatalogSubcategory {
  id: string;
  categoryId: CatalogCategoryId;
  label: string;
  description: string;
  productIds: CatalogProduct["id"][];
  featuredProductId: CatalogProduct["id"];
}

const catalogProductNameById = new Map(catalogProducts.map((product) => [product.id, product.name] as const));
const catalogCategoryOrder: CatalogCategoryId[] = [
  "monitoramento",
  "ortopedia-mobilidade",
  "fisioterapia-recuperacao",
  "cuidados-medico-hospitalares",
];
const catalogCategoryOrderMap = new Map(
  catalogCategoryOrder.map((categoryId, index) => [categoryId, index] as const),
);

function sortProductIdsByName(productIds: CatalogProduct["id"][]) {
  return [...productIds].sort((a, b) => {
    const nameA = catalogProductNameById.get(a) ?? a;
    const nameB = catalogProductNameById.get(b) ?? b;
    return nameA.localeCompare(nameB, "pt-BR", { sensitivity: "base" });
  });
}

const rawCatalogSubcategories: CatalogSubcategory[] = [
  {
    id: "pressao-e-saturacao",
    categoryId: "monitoramento",
    label: "Pressão e saturação",
    description: "Oxímetros, aparelhos de pressão e acessórios",
    productIds: [
      "oximetro-de-dedo",
      "aparelho-de-pressao-digital",
      "aparelho-de-pressao-manual",
      "manguito-adulto-esfigmomanometro",
      "bracadeira-modelo-universal-gtech",
      "valvula-deflacao-esfigmomanometro",
      "pera-esfigmomanometro",
    ],
    featuredProductId: "aparelho-de-pressao-digital",
  },
  {
    id: "estetoscopios",
    categoryId: "monitoramento",
    label: "Estetoscópios",
    description: "Modelos clínicos, Rappaport e acessórios",
    productIds: [
      "estetoscopio-littmann-classic-iii",
      "estetoscopio-rappaport",
      "estetoscopio",
      "olivas-pretas-para-estetoscopio",
    ],
    featuredProductId: "estetoscopio-rappaport",
  },
  {
    id: "instrumentos-clinicos",
    categoryId: "monitoramento",
    label: "Instrumentos clínicos",
    description: "Martelos e acessórios para avaliação clínica",
    productIds: ["martelo-buck-neurologico"],
    featuredProductId: "martelo-buck-neurologico",
  },
  {
    id: "termometros",
    categoryId: "monitoramento",
    label: "Termômetros",
    description: "Medição de temperatura corporal",
    productIds: ["termometro-digital"],
    featuredProductId: "termometro-digital",
  },
  {
    id: "glicemia",
    categoryId: "monitoramento",
    label: "Glicemia",
    description: "Glicômetros, tiras e lancetas",
    productIds: ["glicometro", "tiras-reagentes-para-glicose", "lancetas"],
    featuredProductId: "glicometro",
  },
  {
    id: "ortopedia",
    categoryId: "ortopedia-mobilidade",
    label: "Ortopedia",
    description: "Joelheiras, tornozeleiras, talas, tipoias e suportes",
    productIds: [
      "coxal-elastico",
      "tornozeleira",
      "joelheiras",
      "joelheira-ajustavel-hastes-aco",
      "imobilizador-de-joelho",
      "protetor-para-punho",
      "munhequeira-ajustavel",
      "ortese-comfort-air-com-polegar",
      "cotoveleira",
      "tennis-elbow-ajustavel",
      "tipoias-e-suportes-de-ombro",
    ],
    featuredProductId: "joelheira-ajustavel-hastes-aco",
  },
  {
    id: "pes-e-calcados-ortopedicos",
    categoryId: "ortopedia-mobilidade",
    label: "Pés e calçados ortopédicos",
    description: "Botas, sandálias, palmilhas e proteção para os pés",
    productIds: [
      "bota-imobilizadora-curta",
      "bota-imobilizadora-longa",
      "sandalia-pos-operatoria",
      "calcanheira-de-silicone",
      "tubo-recortavel-calos-malha-gel",
      "palmilhas-de-silicone",
      "forracao-ortopedica-para-calcanhar",
      "sandalia-para-gesso",
    ],
    featuredProductId: "bota-imobilizadora-longa",
  },
  {
    id: "coluna-e-postura",
    categoryId: "ortopedia-mobilidade",
    label: "Coluna e postura",
    description: "Colares, cintas, coletes e corretores",
    productIds: [
      "colar-cervical",
      "faixa-elastica-basic-3-paineis",
      "cinta-lombar",
      "cinta-modeladora-kestal-pink",
      "colete-putti-basic-baixo",
      "corretor-postural-boost",
    ],
    featuredProductId: "colete-putti-basic-baixo",
  },
  {
    id: "mobilidade",
    categoryId: "ortopedia-mobilidade",
    label: "Mobilidade",
    description: "Andadores, cadeiras, bengalas e muletas",
    productIds: [
      "andador",
      "assento-elevado-sanitario",
      "cadeira-de-banho",
      "bengala",
      "muleta-canadense",
      "muleta-axilar",
      "ponteira-22mm-muleta-axilar",
    ],
    featuredProductId: "andador",
  },
  {
    id: "descartaveis-e-protecao",
    categoryId: "cuidados-medico-hospitalares",
    label: "Descartáveis e proteção",
    description: "Luvas, máscaras, toucas, propés e algodão",
    productIds: [
      "luva-de-latex",
      "luva-de-vinil",
      "luva-nitrilica",
      "mascara-tripla-descartavel-50",
      "touca-descartavel-100",
      "prope-descartavel",
      "bolas-algodao-100g",
    ],
    featuredProductId: "mascara-tripla-descartavel-50",
  },
  {
    id: "curativos-e-coberturas",
    categoryId: "cuidados-medico-hospitalares",
    label: "Curativos e coberturas",
    description: "Gazes, ataduras, fitas e coberturas",
    productIds: ["gaze", "ataduras", "esparadrapo", "micropore", "curativos"],
    featuredProductId: "curativos",
  },
  {
    id: "injecao-e-acesso",
    categoryId: "cuidados-medico-hospitalares",
    label: "Injeção e acesso vascular",
    description: "Seringas, agulhas, cateteres e conexões",
    productIds: [
      "seringas",
      "agulhas-descartaveis",
      "torneira-3-vias-luer-lock",
      "escalpe-21g",
      "cateter-periferico-iv-14g",
      "tubo-extensor-luer-lock-40cm",
      "solucao-cloreto-sodio-09-10ml",
      "agua-para-injecao-10ml",
      "garrote",
      "tubo-de-latex-200",
    ],
    featuredProductId: "seringas",
  },
  {
    id: "laminas-e-instrumentos",
    categoryId: "cuidados-medico-hospitalares",
    label: "Lâminas e instrumentos",
    description: "Lâminas e materiais para procedimentos clínicos",
    productIds: ["laminas-de-bisturi", "cabos-de-bisturi"],
    featuredProductId: "laminas-de-bisturi",
  },
  {
    id: "nutricao-enteral",
    categoryId: "cuidados-medico-hospitalares",
    label: "Nutrição enteral",
    description: "Frascos e equipos para alimentação enteral",
    productIds: ["frasco-para-nutricao-enteral", "equipo-nutricao-enteral"],
    featuredProductId: "frasco-para-nutricao-enteral",
  },
  {
    id: "urologia-e-incontinencia",
    categoryId: "cuidados-medico-hospitalares",
    label: "Urologia e incontinência",
    description: "Sondas, coletores e dispositivos externos",
    productIds: [
      "sonda-uretral-n08",
      "bolsa-coletora-urina-sistema-fechado",
      "dispositivo-incontinencia-masculina-g",
    ],
    featuredProductId: "bolsa-coletora-urina-sistema-fechado",
  },
  {
    id: "capas-e-protetores-de-colchao",
    categoryId: "cuidados-medico-hospitalares",
    label: "Capas e protetores de colchão",
    description: "Fronhas e protetores impermeáveis para cama",
    productIds: [
      "fronha-impermeavel-com-ziper",
      "protetor-colchao-berco-americano",
      "protetor-colchao-casal",
      "protetor-colchao-solteiro",
    ],
    featuredProductId: "protetor-colchao-casal",
  },
  {
    id: "cuidados-no-leito",
    categoryId: "cuidados-medico-hospitalares",
    label: "Cuidados no leito",
    description: "Conforto e prevenção para períodos de repouso",
    productIds: ["mascara-para-dormir", "colchao-pneumatico"],
    featuredProductId: "colchao-pneumatico",
  },
  {
    id: "higiene-e-recipientes",
    categoryId: "cuidados-medico-hospitalares",
    label: "Higiene, antissepsia e recipientes",
    description: "Produtos para higiene, antissepsia e apoio",
    productIds: ["solucao-cloreto-sodio-09-100ml", "solucao-cloreto-sodio-09-250ml", "solucao-cloreto-sodio-09-500ml", "alcool-70-100ml", "esponja-com-escova-clorexidina", "almotolias"],
    featuredProductId: "alcool-70-100ml",
  },
  {
    id: "termoterapia",
    categoryId: "fisioterapia-recuperacao",
    label: "Termoterapia",
    description: "Bolsas para aplicação de calor ou frio",
    productIds: ["bolsa-agua-quente", "bolsa-termica-gel"],
    featuredProductId: "bolsa-termica-gel",
  },
  {
    id: "bandagens-terapeuticas",
    categoryId: "fisioterapia-recuperacao",
    label: "Bandagens terapêuticas",
    description: "Fitas funcionais para aplicações orientadas",
    productIds: ["fita-kinesio-5cm-5m"],
    featuredProductId: "fita-kinesio-5cm-5m",
  },
  {
    id: "exercicios-e-fortalecimento",
    categoryId: "fisioterapia-recuperacao",
    label: "Exercícios e fortalecimento",
    description: "Faixas elásticas e acessórios para exercícios",
    productIds: ["hand-grip", "bolas-de-fisioterapia", "kit-mini-band-hidrolight", "faixa-elastica-para-exercicios"],
    featuredProductId: "faixa-elastica-para-exercicios",
  },
].map((subcategory) => ({
  ...subcategory,
  productIds: sortProductIdsByName(subcategory.productIds),
}));

export const catalogSubcategories = [...rawCatalogSubcategories].sort((a, b) =>
  {
    const categoryA = catalogCategoryOrderMap.get(a.categoryId) ?? catalogCategoryOrder.length;
    const categoryB = catalogCategoryOrderMap.get(b.categoryId) ?? catalogCategoryOrder.length;

    if (categoryA !== categoryB) return categoryA - categoryB;

    return a.label.localeCompare(b.label, "pt-BR", { sensitivity: "base" });
  });

export const catalogPopularFilters = catalogSubcategories;

export function getCatalogPopularFilterPath(filterId: string) {
  return `/produtos?tipo=${encodeURIComponent(filterId)}`;
}

export function getCatalogCategoryFilterPath(categoryId: CatalogCategoryId) {
  return `/produtos/categoria/${encodeURIComponent(categoryId)}`;
}

export function getCatalogPopularFilterIds(productId: CatalogProduct["id"]) {
  return catalogPopularFilters
    .filter((filter) => filter.productIds.includes(productId))
    .map((filter) => filter.id);
}
