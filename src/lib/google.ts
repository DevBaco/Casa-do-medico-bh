// Link direto para escrever uma avaliação no Perfil da Empresa no Google.
// O sufixo `!12e1` abre a caixa de "escrever avaliação" em vez da ficha no Maps.
// Se o Perfil da Empresa fornecer o link curto (https://g.page/r/.../review),
// basta trocar o valor aqui — todos os botões do site usam esta constante.
export const GOOGLE_REVIEW_URL =
  "https://www.google.com/maps/place//data=!4m3!3m2!1s0xa699e4dd983f7b:0x9122992094dd8c9b!12e1";

// Nome do evento registrado no Google Analytics a cada clique nos botões de avaliação.
export const GOOGLE_REVIEW_EVENT = "clique_avaliacao_google";
