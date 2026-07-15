export const WHATSAPP_PHONE = "553132244407";
export const WHATSAPP_ENDPOINT = "https://api.whatsapp.com/send";
export const WHATSAPP_MESSAGE = "Olá, gostaria de conhecer mais sobre seus produtos!";

export const WHATSAPP_URL =
  `${WHATSAPP_ENDPOINT}?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export function buildProductWhatsAppMessage(productName: string) {
  return `${WHATSAPP_MESSAGE} Tenho interesse em adquirir ${productName} e consultar modelos, tamanhos, cores e disponibilidade.`;
}

export function buildProductWhatsAppUrl(productName: string) {
  return `${WHATSAPP_ENDPOINT}?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
    buildProductWhatsAppMessage(productName)
  )}`;
}
