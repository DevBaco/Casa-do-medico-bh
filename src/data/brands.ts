export type StoreBrandId =
  | "accumed-glicomed"
  | "premium"
  | "3m"
  | "gtech"
  | "medix"
  | "medi"
  | "genoven"
  | "hidrolight"
  | "kestal"
  | "descarpack"
  | "dellamed"
  | "venosan"
  | "sigvaris";

export interface StoreBrand {
  id: StoreBrandId;
  name: string;
  logo: string;
  catalog: "products" | "compression";
  href: string;
  darkInkOnLight?: boolean;
}

export const storeBrands: StoreBrand[] = [
  {
    id: "accumed-glicomed",
    name: "Accumed-Glicomed",
    logo: "/Marcas/Logo Glicomed 2011.webp",
    catalog: "products",
    href: "/produtos?marca=accumed-glicomed",
  },
  {
    id: "premium",
    name: "Premium",
    logo: "/Marcas/Logo Premium.webp",
    catalog: "products",
    href: "/produtos?marca=premium",
  },
  {
    id: "3m",
    name: "3M",
    logo: "/Marcas/Logo-pt.webp",
    catalog: "products",
    href: "/produtos?marca=3m",
  },
  {
    id: "gtech",
    name: "G-Tech",
    logo: "/Marcas/Logo_Gtech_Nova_sem outline.webp",
    catalog: "products",
    href: "/produtos?marca=gtech",
  },
  {
    id: "medix",
    name: "Medix Brasil",
    logo: "/Marcas/Medix_Brasil_-_Em_branco_200x.webp",
    catalog: "products",
    href: "/produtos?marca=medix",
    darkInkOnLight: true,
  },
  {
    id: "medi",
    name: "Medi",
    logo: "/Marcas/medi-logo.svg",
    catalog: "products",
    href: "/produtos?marca=medi",
  },
  {
    id: "genoven",
    name: "Genoven",
    logo: "/Marcas/genoven.webp",
    catalog: "compression",
    href: "/meias-de-compressão/genoven",
  },
  {
    id: "hidrolight",
    name: "Hidrolight",
    logo: "/Marcas/hidrolight-logo-horizontal-positivo.svg",
    catalog: "products",
    href: "/produtos?marca=hidrolight",
  },
  {
    id: "kestal",
    name: "Kestal",
    logo: "/Marcas/kestal.webp",
    catalog: "products",
    href: "/produtos?marca=kestal",
  },
  {
    id: "descarpack",
    name: "Descarpack",
    logo: "/Marcas/logo-pCE.webp",
    catalog: "products",
    href: "/produtos?marca=descarpack",
  },
  {
    id: "dellamed",
    name: "Dellamed",
    logo: "/Marcas/logo1.webp",
    catalog: "products",
    href: "/produtos?marca=dellamed",
    darkInkOnLight: true,
  },
  {
    id: "venosan",
    name: "Venosan",
    logo: "/Marcas/logo-venosan-meias-compressivas.svg",
    catalog: "compression",
    href: "/meias-de-compressão/venosan",
  },
  {
    id: "sigvaris",
    name: "Sigvaris",
    logo: "/Marcas/sig9000_sigvaris_group_160th_logo_dual_horizontal_darkblue_rgb.svg",
    catalog: "compression",
    href: "/meias-de-compressão/sigvaris",
  },
];
