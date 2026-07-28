export const WHATSAPP_PHONE = "553132244407";
// Default href target: works everywhere with zero JS (crawlers, no-JS, SSR fallback).
// On mobile devices, a small script (see Layout.astro) rewrites these hrefs at runtime
// to the "whatsapp://send" app deep link, since wa.me only reliably opens WhatsApp Web on desktop.
export const WHATSAPP_ENDPOINT = "https://wa.me";
export const WHATSAPP_MESSAGE = "Olá, gostaria de conhecer mais sobre seus produtos!";

export const WHATSAPP_URL =
  `${WHATSAPP_ENDPOINT}/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export function buildProductWhatsAppMessage(productName: string) {
  return `${WHATSAPP_MESSAGE} Tenho interesse em adquirir ${productName} e consultar modelos, tamanhos, cores e disponibilidade.`;
}

export function buildProductWhatsAppUrl(productName: string) {
  return `${WHATSAPP_ENDPOINT}/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    buildProductWhatsAppMessage(productName)
  )}`;
}

export function buildCatalogProductWhatsAppMessage(productName: string) {
  return `${WHATSAPP_MESSAGE} Tenho interesse em ${productName} e quero consultar marcas, modelos e disponibilidade.`;
}

export function buildCatalogProductWhatsAppUrl(productName: string) {
  return `${WHATSAPP_ENDPOINT}/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    buildCatalogProductWhatsAppMessage(productName)
  )}`;
}
