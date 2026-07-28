export interface GoogleReview {
  name: string;
  avatar: string;
  rating: number;
  text: string;
}



export const googleReviews: GoogleReview[] = [
  {
    name: "Miguel Lima",
    avatar: "/Google-reviews/miguel.png",
    rating: 5,
    text: "Fui muito bem atendido na loja, especialmente pelo Sr. Guilherme. Ele foi super atencioso, educado e tirou todas as minhas dúvidas com muita paciência. Dá pra ver que entende do que está falando e realmente se importa em ajudar. Atendimento assim faz toda a diferença! Recomendo demais, principalmente se puder ser atendido por ele.",
  },
  {
    name: "Vitórya Lopes",
    avatar: "/Google-reviews/vitorya.png",
    rating: 5,
    text: "Atendimento Maravilhoso, preços Ótimos ☺️",
  },
  {
    name: "Raimundo Barbalho",
    avatar: "/Google-reviews/raimundo.png",
    rating: 5,
    text: "Excelente atendimento, produtos de qualidade",
  },
  {
    name: "Caroline Rodrigues",
    avatar: "/Google-reviews/caroline.png",
    rating: 5,
    text: "Super recomendo. Muito atenciosos e os preços excelente.",
  },
  {
    name: "Thiago Bones",
    avatar: "/Google-reviews/thiago.png",
    rating: 5,
    text: "Loja de família com tradição e qualidade... atendimento de primeira qualidade e preço excelente! Super recomendo!",
  },
  {
    name: "Adriano Machado",
    avatar: "/Google-reviews/adriano.png",
    rating: 5,
    text: "Excelente atendimento. E melhor preço do mercado. Parabéns a loja e toda a sua equipe.",
  },
];
