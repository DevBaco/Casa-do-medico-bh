import type { CatalogCategoryId, CatalogProduct } from "@/data/catalog-products";

export interface CatalogPopularFilter {
  id: string;
  label: string;
  productIds: CatalogProduct["id"][];
}

export const catalogPopularFilters: CatalogPopularFilter[] = [
  {
    id: "pressao-arterial",
    label: "Pressão arterial",
    productIds: ["aparelho-de-pressao-digital", "aparelho-de-pressao-manual"],
  },
  {
    id: "oximetros",
    label: "Oxímetros",
    productIds: ["oximetro-de-dedo"],
  },
  {
    id: "glicemia",
    label: "Glicemia",
    productIds: ["glicometro", "tiras-reagentes-para-glicose", "lancetas"],
  },
  {
    id: "joelheiras",
    label: "Joelheiras",
    productIds: ["joelheiras", "imobilizador-de-joelho"],
  },
  {
    id: "andadores",
    label: "Andadores",
    productIds: ["andador"],
  },
  {
    id: "cadeiras-de-banho",
    label: "Cadeiras de banho",
    productIds: ["cadeira-de-banho"],
  },
  {
    id: "curativos",
    label: "Curativos",
    productIds: ["gaze", "ataduras", "esparadrapo", "micropore", "curativos"],
  },
  {
    id: "luvas",
    label: "Luvas",
    productIds: ["luvas-descartaveis"],
  },
  {
    id: "fisioterapia",
    label: "Fisioterapia",
    productIds: ["bolsa-termica-gel", "hand-grip", "faixa-elastica-para-exercicios"],
  },
];

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
