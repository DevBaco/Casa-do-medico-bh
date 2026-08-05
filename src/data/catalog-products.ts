import type { StoreBrandId } from "@/data/brands";

export type CatalogCategoryId =
  | "monitoramento"
  | "ortopedia-mobilidade"
  | "cuidados-medico-hospitalares"
  | "fisioterapia-recuperacao";

export interface CatalogProductImage {
  src: string;
  alt: string;
  brandId?: StoreBrandId;
  colorSwatch?: "clear" | "amber" | "white" | "black";
}

export interface CatalogProduct {
  id: string;
  categoryId: CatalogCategoryId;
  brandIds: StoreBrandId[];
  name: string;
  imageInset?: "medium" | "large";
  imageFrame?: {
    catalogScale?: number;
    detailScale?: number;
    catalogTranslateX?: number;
    detailTranslateX?: number;
    detailAspectRatio?: "square" | "standard" | "landscape";
    detailFit?: "contain" | "cover";
    detailPosition?: "center" | "bottom";
  };
  summary: string;
  description: string;
  images: CatalogProductImage[];
  highlights: string[];
  badges: string[];
  colorOptions?: Array<{
    label: string;
    swatch: "clear" | "amber" | "white" | "black";
  }>;
  consultation: string[];
  keywords: string[];
}

export interface CatalogCategory {
  id: CatalogCategoryId;
  name: string;
  shortName: string;
  description: string;
}

const produtosBase = "/Produtos";
const hidrolightBase = `${produtosBase}/Hidrolight`;
const acumedBase = `${produtosBase}/Acumed- G.Tech- premium`;

const catalogCategoryOrder: CatalogCategoryId[] = [
  "monitoramento",
  "ortopedia-mobilidade",
  "fisioterapia-recuperacao",
  "cuidados-medico-hospitalares",
];

const catalogCategoryOrderMap = new Map(
  catalogCategoryOrder.map((categoryId, index) => [categoryId, index] as const),
);

export const catalogCategories: CatalogCategory[] = [
  {
    id: "monitoramento",
    name: "Aparelhos de monitoramento de saúde",
    shortName: "Monitoramento",
    description:
      "Equipamentos para acompanhar sinais e indicadores de saúde com praticidade em casa ou no atendimento profissional.",
  },
  {
    id: "ortopedia-mobilidade",
    name: "Produtos ortopédicos e mobilidade",
    shortName: "Ortopedia e mobilidade",
    description:
      "Suportes, imobilizadores e auxiliares de mobilidade para diferentes necessidades de cuidado e recuperação.",
  },
  {
    id: "fisioterapia-recuperacao",
    name: "Fisioterapia e recuperação",
    shortName: "Fisioterapia",
    description:
      "Acessórios para exercícios orientados, fortalecimento, mobilidade e terapias com frio ou calor.",
  },
  {
    id: "cuidados-medico-hospitalares",
    name: "Materiais médico-hospitalares e cuidados em casa",
    shortName: "Cuidados em casa",
    description:
      "Materiais de uso profissional e domiciliar para higiene, proteção, curativos e apoio à rotina de cuidados.",
  },
];

const rawCatalogProducts: CatalogProduct[] = [
  {
    id: "oximetro-de-dedo",
    categoryId: "monitoramento",
    brandIds: ["gtech", "accumed-glicomed"],
    name: "Oxímetro de Dedo",
    imageFrame: {
      catalogScale: 1.08,
      catalogTranslateX: -3,
      detailAspectRatio: "landscape",
    },
    summary:
      "Leitura prática da saturação de oxigênio e da frequência de pulso em um aparelho compacto.",
    description:
      "O oxímetro de dedo facilita a verificação rápida da saturação periférica de oxigênio (SpO₂) e da frequência de pulso. Trabalhamos com diferentes modelos, visores e recursos; a escolha e a interpretação dos resultados devem respeitar a orientação do profissional de saúde.",
    images: [
      {
        src: `${produtosBase}/oxímetro.png`,
        alt: "Oxímetro digital posicionado no dedo",
        brandId: "gtech",
      },
    ],
    highlights: [
      "Leitura de SpO₂ e frequência de pulso",
      "Formato compacto para uso cotidiano",
      "Visor e recursos variam conforme o modelo",
    ],
    badges: ["Uso domiciliar", "Portátil"],
    consultation: ["Marca e modelo", "Tipo de visor", "Disponibilidade em estoque"],
    keywords: ["oximetro", "saturacao", "spo2", "pulso"],
  },
  {
    id: "aparelho-de-pressao-digital",
    categoryId: "monitoramento",
    brandIds: ["gtech", "premium", "accumed-glicomed"],
    name: "Aparelho de Pressão Digital",
    imageFrame: { detailAspectRatio: "standard" },
    summary:
      "Modelos automáticos de braço ou pulso para acompanhar a pressão arterial com facilidade.",
    description:
      "Os aparelhos digitais automatizam a medição da pressão arterial e podem oferecer memórias, indicadores no visor e braçadeiras de diferentes tamanhos. Há opções de braço e de pulso; consulte nossa equipe para comparar o ajuste, os recursos e a disponibilidade de cada modelo.",
    images: [
      {
        src: `${produtosBase}/aparelho-de-pressao-digital.jpg (1).jpg`,
        alt: "Aparelho digital de pressão arterial com braçadeira",
        brandId: "gtech",
      },
      {
        src: `${acumedBase}/Aparelho de pressão digital pulso.jpg`,
        alt: "Aparelho digital de pressão arterial de pulso",
        brandId: "gtech",
      },
      {
        src: `${acumedBase}/BPSP11A 02.jpg (1).jpg (1).jpg`,
        alt: "Outra opção de aparelho digital de pressão com braçadeira",
        brandId: "gtech",
      },
    ],
    highlights: [
      "Opções de braço e de pulso",
      "Medição automática e leitura no visor",
      "Memória e indicadores variam por modelo",
    ],
    badges: ["Digital", "Vários modelos"],
    consultation: ["Modelo de braço ou pulso", "Tamanho da braçadeira", "Recursos do aparelho"],
    keywords: ["pressao digital", "esfigmomanometro digital", "pressao arterial"],
  },
  {
    id: "aparelho-de-pressao-manual",
    categoryId: "monitoramento",
    brandIds: ["premium", "accumed-glicomed"],
    name: "Aparelho de Pressão Manual",
    imageFrame: { detailAspectRatio: "landscape" },
    summary:
      "Esfigmomanômetros manuais para aferição da pressão arterial em rotinas profissionais ou domiciliares orientadas.",
    description:
      "O aparelho de pressão manual reúne manômetro, braçadeira e pera de insuflação para a aferição pelo método auscultatório. Trabalhamos com diferentes tamanhos de braçadeira, materiais e configurações, indicados principalmente para uso por pessoas treinadas na técnica.",
    images: [
      {
        src: `${produtosBase}/aparelho-de-pressao-manual.jpg`,
        alt: "Aparelho manual de pressão arterial com manômetro e braçadeira",
        brandId: "premium",
      },
    ],
    highlights: [
      "Conjunto com manômetro e braçadeira",
      "Opções para diferentes rotinas de aferição",
      "Uso adequado depende de técnica de medição",
    ],
    badges: ["Manual", "Uso profissional"],
    consultation: ["Tamanho da braçadeira", "Material e configuração", "Acessórios inclusos"],
    keywords: ["pressao manual", "esfigmomanometro", "afericao"],
  },
  {
    id: "manguito-adulto-esfigmomanometro",
    categoryId: "monitoramento",
    brandIds: ["premium", "accumed-glicomed"],
    name: "Manguito Adulto para Esfigmomanômetro",
    summary:
      "Manguito de reposição tamanho adulto para aparelhos manuais de pressão arterial.",
    description:
      "O manguito adulto é o componente que envolve o braço em um esfigmomanômetro manual. Possui fecho ajustável, bolsa inflável interna e conexões para o conjunto de aferição. Confirme a compatibilidade com o aparelho antes da compra.",
    images: [
      {
        src: "/Produtos/manguito-adulto-esfigmomanometro.png",
        alt: "Manguito adulto preto para esfigmomanômetro com tubos de conexão",
      },
    ],
    highlights: ["Tamanho adulto", "Fecho ajustável", "Acessório para aparelho manual"],
    badges: ["Reposição", "Adulto"],
    consultation: ["Compatibilidade com o aparelho", "Tamanho do manguito", "Tipo de conexão"],
    keywords: ["manguito adulto", "bracadeira pressao", "esfigmomanometro", "reposicao"],
  },
  {
    id: "bracadeira-modelo-universal-gtech",
    categoryId: "monitoramento",
    brandIds: ["gtech"],
    name: "Braçadeira Modelo Universal",
    summary:
      "Braçadeira reutilizável para aparelhos digitais de braço, com circunferência de 23 a 43 cm.",
    description:
      "Braçadeira modelo universal para aparelho digital de braço, compatível com LA250, LA800, LA850, BSP11, MA100 e AA1 da G-Tech. Para uso exclusivo em aparelho de pressão digital. Possui revestimento antibacteriano, bordas dobradas, velcro de alta qualidade e construção leve e resistente. Cor: preta. Circunferência de braço: 23 a 43 cm.",
    images: [
      {
        src: "/Produtos/-bracadeira-adulto-universal-23-a-43-cm-gtech.webp",
        alt: "Braçadeira universal G-Tech preta com mangueira para braço de 23 a 43 cm",
        brandId: "gtech",
      },
    ],
    highlights: [
      "Compatível com aparelhos digitais de braço selecionados",
      "Circunferência de braço de 23 a 43 cm",
      "Reutilizável, leve e resistente",
    ],
    badges: ["G-Tech", "Reposição"],
    consultation: ["Modelo do aparelho", "Circunferência do braço", "Disponibilidade"],
    keywords: ["bracadeira universal", "bracadeira gtech", "manguito gtech", "LA250", "LA800", "LA850", "BSP11", "MA100", "AA1", "23 a 43 cm"],
  },
  {
    id: "valvula-deflacao-esfigmomanometro",
    categoryId: "monitoramento", brandIds: ["premium", "accumed-glicomed"],
    name: "Válvula de Deflação para Esfigmomanômetro",
    summary: "Peça de reposição para controlar a liberação de ar em aparelhos manuais de pressão.",
    description: "A válvula de deflação é um componente de reposição do conjunto de insuflação de esfigmomanômetros aneroides. Confirme a compatibilidade com o modelo e a conexão antes da compra.",
    images: [{ src: "/Produtos/valvula-deflacao-esfigmomanometro.png", alt: "Válvula metálica de deflação para aparelho manual de pressão" }],
    highlights: ["Peça de reposição", "Controle de liberação de ar", "Conector para mangueira"], badges: ["Reposição", "Aparelho manual"],
    consultation: ["Compatibilidade", "Tipo de conexão", "Disponibilidade"], keywords: ["valvula deflacao", "esfigmomanometro", "reparo aparelho pressao"],
  },
  {
    id: "pera-esfigmomanometro",
    categoryId: "monitoramento", brandIds: ["premium", "accumed-glicomed"],
    name: "Pera para Esfigmomanômetro",
    summary: "Pera de borracha para insuflação em aparelhos manuais de pressão arterial.",
    description: "A pera é o componente usado para insuflar o manguito de um esfigmomanômetro aneroide. Confirme a compatibilidade das conexões antes da compra.",
    images: [{ src: "/Produtos/pera-esfigmomanometro.png", alt: "Pera preta de borracha para aparelho manual de pressão" }],
    highlights: ["Borracha flexível", "Acessório de reposição", "Para conjunto manual"], badges: ["Reposição", "Aparelho manual"],
    consultation: ["Compatibilidade", "Tipo de conexão", "Disponibilidade"], keywords: ["pera pressao", "pera esfigmomanometro", "insuflador"],
  },
  {
    id: "estetoscopio-littmann-classic-iii",
    categoryId: "monitoramento",
    brandIds: ["3m"],
    name: "Estetoscópio Littmann Classic III Profissional Original – 3M",
    summary: "Estetoscópio de dupla face para ausculta clínica adulto e pediátrico.",
    description: "Experimente a precisão e o conforto dos Estetoscópios Littmann Classic III, disponível nas versões adulto e pediátrica. Com alta sensibilidade acústica para desempenho excepcional, o estetoscópio Classic III é usado por estudantes e profissionais médicos para identificar, ouvir e estudar sons do coração, pulmões e outros sons corporais para avaliação física, monitoramento do paciente e diagnóstico. Possui olivas macias e auscultador de dupla face; o lado pediátrico pode ser usado como campânula aberta com o aro apropriado. Consulte a disponibilidade antes da compra.",
    images: [{ src: "/Produtos/estetoscopio-littmann-classic-iii.png", alt: "Estetoscópio Littmann Classic III com auscultador metálico", brandId: "3m" }],
    highlights: ["Dupla face", "Auscultador de dupla face", "Olivas macias"], badges: ["Ausculta", "Clínico"],
    consultation: ["Modelo", "Disponibilidade"], keywords: ["estetoscopio littmann", "classic iii"],
  },
  {
    id: "estetoscopio-rappaport",
    categoryId: "monitoramento",
    brandIds: ["accumed-glicomed"],
    name: "Estetoscópio Rappaport",
    summary: "Estetoscópio de dupla via com acessórios para diferentes tipos de ausculta.",
    description: "Estetoscópio do tipo Rappaport com tubo preto, auscultador metálico e conjunto de olivas, diafragmas e campânulas de reposição. Consulte a disponibilidade antes da compra.",
    images: [{ src: "/Produtos/RAPPAPORT_1-800x800-accumed-glicomed.webp", alt: "Estetoscópio Rappaport preto com acessórios de reposição", brandId: "accumed-glicomed" }],
    highlights: ["Dupla via", "Conjunto com acessórios", "Tubo preto"], badges: ["Ausculta", "Profissional"],
    consultation: ["Modelo", "Peças e acessórios", "Disponibilidade"], keywords: ["estetoscopio", "rappaport", "ausculta", "dupla via", "acessorios"],
  },
  {
    id: "martelo-buck-neurologico",
    categoryId: "monitoramento",
    brandIds: [],
    name: "Martelo Buck Neurológico",
    summary:
      "Martelo neurológico para avaliação de reflexos, acompanhado de ponta e pincel para estímulos complementares.",
    description:
      "O martelo Buck neurológico é utilizado em avaliações clínicas de reflexos. Possui cabeça com extremidades emborrachadas e acompanha acessórios para estímulos complementares, como ponta e pincel. O uso deve ser realizado por profissional habilitado.",
    images: [
      {
        src: "/Produtos/martelo-buck-neurologico.png",
        alt: "Martelo Buck neurológico preto e metálico com ponta e pincel",
      },
    ],
    highlights: [
      "Cabeça com extremidades emborrachadas",
      "Acompanha ponta e pincel",
      "Para avaliação clínica de reflexos",
    ],
    badges: ["Exame neurológico", "Instrumento clínico"],
    consultation: ["Modelo", "Acessórios incluídos", "Disponibilidade"],
    keywords: ["martelo buck", "martelo neurologico", "martelo de reflexos", "reflexos", "instrumento clinico"],
  },
  {
    id: "olivas-pretas-para-estetoscopio",
    categoryId: "monitoramento",
    brandIds: [],
    name: "Olivas Pretas para Estetoscópio",
    summary: "Par de olivas macias para reposição em estetoscópios compatíveis.",
    description: "As olivas são as pontas que se encaixam nas hastes auriculares do estetoscópio. Este par preto serve como peça de reposição; confirme a compatibilidade com o modelo antes da compra.",
    images: [{ src: "/Produtos/olivas-estetoscopio-pretas.png", alt: "Par de olivas pretas macias para estetoscópio" }],
    highlights: ["Par de reposição", "Material macio", "Cor preta"], badges: ["Reposição", "Ausculta"],
    consultation: ["Modelo do estetoscópio", "Compatibilidade", "Disponibilidade"], keywords: ["olivas estetoscopio", "oliva preta", "reposicao estetoscopio"],
  },
  {
    id: "estetoscopio",
    categoryId: "monitoramento",
    brandIds: ["premium", "accumed-glicomed"],
    name: "Estetoscópio Duplo",
    summary: "Estetoscópio clínico para ausculta em diferentes rotinas de atendimento.",
    description: "Estetoscópio com auscultador de face única, hastes metálicas, olivas macias e tubo flexível. Consulte as opções disponíveis para encontrar a configuração adequada à sua rotina.",
    images: [{ src: "/Produtos/estetoscopio-simples.png", alt: "Estetoscópio clínico simples preto com auscultador metálico" }],
    highlights: ["Auscultador de face única", "Tubo flexível", "Olivas macias"],
    badges: ["Ausculta", "Clínico"],
    consultation: ["Tipo de estetoscópio", "Cor", "Disponibilidade"],
    keywords: ["estetoscopio", "simples", "ausculta"],
  },
  {
    id: "termometro-digital",
    categoryId: "monitoramento",
    brandIds: ["gtech", "premium", "accumed-glicomed"],
    name: "Termômetro Digital",
    imageFrame: { detailAspectRatio: "landscape" },
    summary:
      "Medição de temperatura em formato compacto, com leitura simples em visor digital.",
    description:
      "O termômetro digital é uma opção prática para acompanhar a temperatura corporal. Tempo de leitura, sinal sonoro, memória e flexibilidade da ponta podem variar entre os modelos; confirme com a equipe as alternativas disponíveis no estoque.",
    images: [
      {
        src: `${produtosBase}/termometro-digital.jpg`,
        alt: "Termômetro clínico digital",
        brandId: "gtech",
      },
    ],
    highlights: [
      "Leitura em visor digital",
      "Formato compacto e fácil de guardar",
      "Tempo de medição varia por modelo",
    ],
    badges: ["Digital", "Uso domiciliar"],
    consultation: ["Tempo de leitura", "Recursos sonoros", "Modelo disponível"],
    keywords: ["termometro", "temperatura", "febre"],
  },
  {
    id: "glicometro",
    categoryId: "monitoramento",
    brandIds: ["gtech", "accumed-glicomed"],
    name: "Glicômetro",
    imageInset: "large",
    summary:
      "Aparelhos portáteis para monitoramento da glicemia, com opções de kits e recursos conforme a linha.",
    description:
      "O glicômetro permite acompanhar a glicemia a partir de uma pequena amostra de sangue, usando tiras compatíveis com o aparelho. Trabalhamos com diferentes marcas, kits e capacidades de memória. A escolha deve considerar também a disponibilidade contínua das tiras reagentes correspondentes.",
    images: [
      {
        src: `${produtosBase}/glicometro.jpg`,
        alt: "Kit de glicômetro digital",
        brandId: "gtech",
      },
      {
        src: `${acumedBase}/GTECH FREE.jpg`,
        alt: "Outra opção de glicômetro portátil",
        brandId: "gtech",
      },
    ],
    highlights: [
      "Leitura portátil da glicemia",
      "Kits e memórias variam por modelo",
      "Requer tiras compatíveis com o aparelho",
    ],
    badges: ["Glicemia", "Portátil"],
    consultation: ["Marca e modelo", "Itens do kit", "Compatibilidade das tiras"],
    keywords: ["glicometro", "glicemia", "medidor de glicose"],
  },
  {
    id: "tiras-reagentes-para-glicose",
    categoryId: "monitoramento",
    brandIds: ["gtech", "accumed-glicomed"],
    name: "Tiras Reagentes para Glicose",
    imageInset: "large",
    summary:
      "Tiras para testes de glicemia, selecionadas de acordo com a marca e o modelo do glicômetro.",
    description:
      "As tiras reagentes são específicas para cada família de glicômetros e não devem ser escolhidas apenas pela aparência. Antes da compra, confirme o nome exato do aparelho, a apresentação da embalagem e a compatibilidade indicada pelo fabricante.",
    images: [
      {
        src: `${produtosBase}/tiras-reagentes-para-glicose.jpg`,
        alt: "Embalagem de tiras reagentes para teste de glicose",
        brandId: "gtech",
      },
    ],
    highlights: [
      "Uso em testes de glicemia",
      "Compatibilidade específica por aparelho",
      "Apresentações variam por quantidade",
    ],
    badges: ["Glicemia", "Consumível"],
    consultation: ["Modelo do glicômetro", "Quantidade por embalagem", "Validade e estoque"],
    keywords: ["tiras glicose", "fitas glicemia", "tiras reagentes"],
  },
  {
    id: "lanceta-caneta-lancetadora",
    categoryId: "monitoramento",
    brandIds: ["gtech"],
    name: "Lanceta para Caneta Lancetadora",
    imageFrame: { detailAspectRatio: "standard" },
    summary:
      "Lanceta de ponta ultrafina para punção capilar indolor em testes de glicemia.",
    description:
      "Lanceta com espessura ultrafina e ponta triangular, desenvolvida para uma punção mais indolor e com penetração consistente. Esterilizada por radiação gama, tem formato universal, compatível com a maioria das canetas lancetadoras disponíveis no mercado. Disponível nas espessuras 28G e 30G. Consulte a disponibilidade antes da compra.",
    images: [
      {
        src: `${produtosBase}/LANCETA.webp`,
        alt: "Lanceta para caneta lancetadora",
      },
    ],
    highlights: [
      "Ponta ultrafina triangular, punção indolor",
      "Esterilizada por radiação gama",
      "Formato universal, espessuras 28G e 30G",
    ],
    badges: ["Descartável", "Glicemia"],
    consultation: ["Compatibilidade", "Espessura", "Quantidade por embalagem"],
    keywords: ["lanceta", "lancetador", "punção capilar"],
  },
  {
    id: "caneta-lancetadora",
    categoryId: "monitoramento",
    brandIds: ["gtech"],
    name: "Caneta Lancetadora",
    imageFrame: { detailAspectRatio: "standard" },
    summary:
      "Caneta lancetadora com ajuste de profundidade para punção capilar em testes de glicemia.",
    description:
      "Caneta lancetadora de acionamento suave, ideal para uso com lancetas universais. Possui 10 (dez) níveis de ajuste de profundidade de punção, permitindo adequar o procedimento ao tipo de pele do paciente. Consulte a disponibilidade antes da compra.",
    images: [
      {
        src: `${produtosBase}/CANETA_LANCETADORA.webp`,
        alt: "Caneta lancetadora para punção capilar",
      },
    ],
    highlights: [
      "Acionamento suave",
      "10 níveis de ajuste de profundidade",
      "Compatível com lancetas universais",
    ],
    badges: ["Glicemia", "Reutilizável"],
    consultation: ["Compatibilidade", "Disponibilidade"],
    keywords: ["caneta lancetadora", "lancetador", "punção capilar"],
  },
  {
    id: "coxal-elastico",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight", "kestal"],
    name: "Coxal Elástico",
    summary:
      "Suporte elástico para compressão e sensação de estabilidade na região da coxa.",
    description:
      "O coxal elástico envolve a musculatura da coxa e pode ser utilizado em atividades e rotinas de recuperação conforme orientação profissional. Trabalhamos com diferentes níveis de elasticidade e tamanhos; a medida da circunferência ajuda a selecionar um ajuste confortável.",
    images: [
      {
        src: `${hidrolightBase}/EL2021.1.png`,
        alt: "Pessoa usando coxal elástico preto",
      },
    ],
    highlights: [
      "Compressão na região da coxa",
      "Formato elástico e discreto",
      "Tamanhos definidos por circunferência",
    ],
    badges: ["Coxa", "Elástico"],
    consultation: ["Circunferência da coxa", "Tamanho", "Marca e modelo"],
    keywords: ["coxal", "suporte coxa", "compressao coxa"],
  },
  {
    id: "tornozeleira",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight", "kestal", "medi"],
    name: "Tornozeleiras",
    imageInset: "medium",
    summary:
      "Suporte para o tornozelo em versões elásticas, ajustáveis e com diferentes níveis de contenção.",
    description:
      "As tornozeleiras ajudam a oferecer compressão e sensação de estabilidade na região do tornozelo. Há modelos elásticos para uso simples e opções com ajustes adicionais. A escolha depende da medida, do nível de suporte desejado e da recomendação recebida.",
    images: [
      {
        src: `${hidrolightBase}/EL2022.1.png`,
        alt: "Pessoa usando tornozeleira elástica preta",
      },
    ],
    highlights: [
      "Compressão ao redor do tornozelo",
      "Opções elásticas ou ajustáveis",
      "Modelos e tamanhos variados",
    ],
    badges: ["Tornozelo", "Suporte"],
    consultation: ["Medida do tornozelo", "Nível de suporte", "Modelo e tamanho"],
    keywords: ["tornozeleira", "suporte tornozelo", "ortese tornozelo"],
  },
  {
    id: "joelheiras",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight", "kestal", "medi"],
    name: "Joelheira",
    imageInset: "medium",
    summary:
      "Modelos lisos, com reforço patelar ou ajustes para diferentes necessidades de suporte no joelho.",
    description:
      "As joelheiras podem oferecer compressão, proteção e suporte durante atividades ou recuperação. Trabalhamos com versões lisas, com abertura e reforço patelar, além de modelos com ajustes. A medida do joelho e a finalidade de uso orientam a escolha.",
    images: [
      {
        src: `${hidrolightBase}/Hidrolight_0522_edit_flat Lucas.jpg`,
        alt: "Joelheira lisa envolvendo a articulação",
      },
      {
        src: `${hidrolightBase}/_MTS9054_.png`,
        alt: "Joelheira com abertura e reforço patelar",
      },
    ],
    highlights: [
      "Versões lisas e com reforço patelar",
      "Diferentes níveis de compressão e ajuste",
      "Tamanhos conforme a circunferência do joelho",
    ],
    badges: ["Joelho", "Vários modelos"],
    consultation: ["Finalidade de uso", "Circunferência do joelho", "Tipo de reforço"],
    keywords: ["joelheira", "patela", "suporte joelho"],
  },
  {
    id: "joelheira-articulada-ajustavel",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight"],
    name: "Joelheira Articulada Ajustável",
    summary: "Joelheira articulada com talas laterais rígidas e compressão ajustável para suporte do joelho.",
    description:
      "A Joelheira Articulada Ajustável é indicada na prevenção e tratamento de lesões graves na região do joelho; Prevenção da recorrência de lesões durante a prática de exercícios; Auxílio no tratamento fisioterapêutico; Período pré e pós-operatório; Entorses, contusões, instabilidade rotatória, luxações, reabilitação de fraturas, lesões de ligamentos e tendões, artrite reumatoide, entre outras. A função ajustável permite graduar a compressão conforme o edema diminui. Possui talas laterais rígidas e articuladas com trava na hiperextensão permitindo movimento fisiológico (normal) do joelho.",
    images: [{ src: "/Produtos/joelheira-ajustavel-hidrolight.webp", alt: "Joelheira articulada ajustável preta com talas laterais rígidas" }],
    highlights: ["Talas laterais rígidas e articuladas", "Trava na hiperextensão", "Compressão ajustável"],
    badges: ["Joelho", "Tamanho único"],
    consultation: ["Medidas", "Finalidade de uso", "Orientação profissional"],
    keywords: ["joelheira articulada", "hastes aco", "joelho", "OR70"],
  },
  {
    id: "joelheira-ajustavel-hastes-aco",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight"],
    name: "Joelheira Ajustável com Hastes de Aço Flexíveis",
    summary: "Joelheira ajustável com hastes de aço flexíveis para suporte do joelho.",
    description:
      "A Joelheira Ajustável com Hastes de Aço Flexíveis é indicada na prevenção e tratamento de lesões graves na região do joelho; prevenção de lesões durante a prática de exercícios; auxílio no tratamento fisioterapêutico; entorses, contusões, condromalácia, edemas, distensões, tendinites, bursites, instabilidade patelar, luxações, periartrite, pré e pós-artroscopia, reabilitação de fraturas, lesões de ligamentos e tendões, artrite reumatoide, entre outras.",
    images: [{ src: "/Produtos/joelheira-ajustavel-com-hastes.webp", alt: "Joelheira ajustável preta com hastes de aço flexíveis" }],
    highlights: ["Hastes de aço flexíveis", "Compressão ajustável", "Indicada para fisioterapia"],
    badges: ["Joelho", "Tamanho único"],
    consultation: ["Medidas", "Finalidade de uso", "Orientação profissional"],
    keywords: ["joelheira ajustavel", "hastes aco", "joelho"],
  },
  {
    id: "imobilizador-de-joelho",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight", "kestal", "medi"],
    name: "Imobilizador de Joelho",
    imageInset: "medium",
    imageFrame: {
      catalogScale: 1.2,
      detailScale: 1.15,
      detailFit: "cover",
      detailPosition: "bottom",
    },
    summary:
      "Imobilizadores longos com talas e fechos ajustáveis para limitar o movimento da articulação.",
    description:
      "O imobilizador de joelho é utilizado para restringir movimentos e manter o membro alinhado durante situações de recuperação. Comprimento, posição das talas e sistema de fechamento variam por modelo; o tamanho correto deve seguir a medida e a orientação profissional.",
    images: [
      {
        src: `${hidrolightBase}/_MTS8359__edit.jpg`,
        alt: "Pessoa usando imobilizador longo de joelho",
      },
    ],
    highlights: [
      "Estrutura longa com fechos ajustáveis",
      "Modelos com diferentes comprimentos",
      "Seleção orientada por medida e indicação",
    ],
    badges: ["Joelho", "Imobilização"],
    consultation: ["Comprimento indicado", "Circunferência da perna", "Lado e tamanho"],
    keywords: ["imobilizador joelho", "tala joelho", "ortese joelho"],
  },
  {
    id: "protetor-para-punho",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight"],
    name: "Protetor para Punho",
    imageInset: "medium",
    summary:
      "Indicado para prevenção e tratamento de contusões, distensões e tendinites, sem limitar os movimentos.",
    description:
      "O Protetor para Punho é indicado para a prevenção e tratamento de contusões, distensões e tendinites; alívio de dores agudas e crônicas; prevenção de lesões durante a prática de exercícios; auxílio no tratamento fisioterapêutico; L.E.R. e D.O.R.T. Comprime a região do punho sem limitar seus movimentos, oferecendo suporte leve e conforto durante atividades físicas ou no dia a dia.",
    images: [
      {
        src: `${hidrolightBase}/_MTS9119_.jpg`,
        alt: "Protetor para punho ajustável",
      },
    ],
    highlights: [
      "Suporte leve para o punho",
      "Comprime sem limitar os movimentos",
      "Uso no dia a dia ou em exercícios",
    ],
    badges: ["Punho", "Ajustável"],
    consultation: ["Lado de uso", "Medida do punho", "Finalidade"],
    keywords: ["protetor para punho", "punho", "contusao", "distensao", "tendinite"],
  },
  {
    id: "munhequeira-ajustavel",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight"],
    name: "Munhequeira Ajustável",
    imageInset: "medium",
    summary:
      "Munhequeira com orifício para o polegar que promove alívio da dor e melhora da estabilidade.",
    description:
      "A Munhequeira Ajustável possui orifício para o polegar em sua extremidade e aba que envolve o punho promovendo alívio da dor e melhora da estabilidade. É indicada para prevenção e tratamento de contusões, distensões e tendinites; alívio de dores agudas e crônicas; prevenção de lesões durante a prática de exercícios; auxílio no tratamento fisioterapêutico; L.E.R. e D.O.R.T.",
    images: [
      {
        src: `${hidrolightBase}/Hidrolight_1215_edit_flat Lucas 2.png`,
        alt: "Munhequeira ajustável com apoio para o polegar",
      },
      {
        src: `${hidrolightBase}/_MTS0330__edit_preview.jpg`,
        alt: "Munhequeira ajustável com estrutura para punho e mão",
      },
    ],
    highlights: [
      "Orifício para o polegar",
      "Ajuste com estabilidade",
      "Uso preventivo e terapêutico",
    ],
    badges: ["Punho", "Ajustável"],
    consultation: ["Lado de uso", "Medida do punho", "Finalidade"],
    keywords: ["munhequeira ajustavel", "munhequeira", "punho", "polegar", "dort"],
  },
  {
    id: "ortese-comfort-air-com-polegar",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight"],
    name: "Órtese Comfort Air com Polegar",
    imageInset: "medium",
    summary:
      "Órtese com duas talas, tecido respirável e abertura com ajuste extra no polegar para maior estabilidade.",
    description:
      "A Órtese Comfort Air com Polegar foi desenvolvida com tecido que permite a transpiração, favorece o conforto térmico através dos microfuros e possui duas talas para maior estabilidade e proteção, além de abertura com ajuste extra no polegar (diferente da versão longa sem polegar). É indicada para imobilização e alinhamento da articulação, período pré e pós-operatório, reabilitação de fraturas de punho, L.E.R., D.O.R.T., tendinites, tenossinovites, lesões ligamentares, síndrome do túnel do carpo e rizartrose.",
    images: [
      {
        src: `${hidrolightBase}/_MTS9456_.png`,
        alt: "Órtese Comfort Air com polegar",
      },
    ],
    highlights: [
      "Tecido respirável com microfuros",
      "Duas talas para estabilidade",
      "Possui abertura com ajuste extra no polegar",
    ],
    badges: ["Punho", "Órtese", "Com polegar"],
    consultation: ["Lado de uso", "Medida do punho", "Indicação clínica"],
    keywords: ["ortese comfort air", "punho", "polegar", "tala", "carpo", "com polegar"],
  },
  {
    id: "ortese-comfort-air-longa-sem-polegar",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight"],
    name: "Órtese Comfort Air Longa Sem Polegar",
    imageInset: "medium",
    summary:
      "Órtese longa, sem abertura para o polegar, com tecido respirável para imobilização do punho.",
    description:
      "A Órtese Comfort Air Longa Sem Polegar foi desenvolvida com tecido que permite a transpiração, favorece o conforto térmico através dos seus microfuros. Imobilização e alinhamento da articulação; Período pré e pós-operatório; Reabilitação de fraturas de punho; L.E.R. (lesões por esforços repetitivos) e D.O.R.T. (distúrbios osteomusculares relacionados ao trabalho); Tendinites, tenossinovites, lesões ligamentares e síndrome do túnel do carpo.",
    images: [
      {
        src: "/Produtos/ortese-comfort-air.webp",
        alt: "Órtese Comfort Air longa sem polegar",
      },
    ],
    highlights: [
      "Tecido respirável com microfuros",
      "Modelo longo, sem abertura para o polegar",
      "Imobilização e alinhamento do punho",
    ],
    badges: ["Punho", "Órtese", "Sem polegar"],
    consultation: ["Lado de uso", "Medida do punho", "Indicação clínica"],
    keywords: ["ortese comfort air", "punho", "sem polegar", "longa", "carpo"],
  },
  {
    id: "cotoveleira",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight", "kestal", "medi"],
    name: "Cotoveleiras",
    summary:
      "Suporte ajustável para compressão e estabilização da região do cotovelo.",
    description:
      "A cotoveleira envolve a articulação e pode contar com abas ajustáveis para regular a compressão. Há opções para esporte, atividades repetitivas e recuperação orientada. Consulte tamanhos, materiais e configurações disponíveis.",
    images: [
      {
        src: `${hidrolightBase}/Hidrolight_1423_edit_flat Lucas 2.png`,
        alt: "Pessoa usando cotoveleira preta ajustável",
      },
    ],
    highlights: [
      "Suporte ao redor do cotovelo",
      "Ajuste por faixas aderentes",
      "Opções com diferentes níveis de compressão",
    ],
    badges: ["Cotovelo", "Ajustável"],
    consultation: ["Circunferência do braço", "Tipo de ajuste", "Finalidade de uso"],
    keywords: ["cotoveleira", "suporte cotovelo", "ortese cotovelo"],
  },
  {
    id: "tennis-elbow-ajustavel",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight"],
    name: "Tennis Elbow Ajustável",
    imageFrame: { detailFit: "contain" },
    summary:
      "Faixa ajustável para compressão localizada na região do antebraço e cotovelo.",
    description:
      "O modelo OR55 possui faixa ajustável e disco interno para aplicar compressão localizada no antebraço. A medida indicada é única, para circunferências entre 22,5 e 31,5 cm. Confirme a orientação de uso antes da compra.",
    images: [
      {
        src: "/Produtos/tennis-elbow-ajustavel-hidrolight.webp",
        alt: "Pessoa usando faixa ajustável para tennis elbow no antebraço",
        brandId: "hidrolight",
      },
    ],
    highlights: ["Modelo OR55", "Disco interno para compressão localizada", "Ajuste por fecho aderente"],
    badges: ["Cotovelo", "Tamanho único"],
    consultation: ["Circunferência do antebraço", "Orientação de uso", "Disponibilidade"],
    keywords: ["tennis elbow", "or55", "faixa cotovelo", "epicondilite"],
  },
  {
    id: "tipoias-e-suportes-de-ombro",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight", "kestal", "medi"],
    name: "Tipoia de Abdução",
    imageInset: "medium",
    summary:
      "A Tipoia de Abdução é utilizada para posicionar, estabilizar e sustentar o membro superior.",
    description:
      "A Tipoia de Abdução é utilizada para posicionar, estabilizar e sustentar o membro superior. Desenvolvida com design ergonômico e tecido com toque suave, oferece estabilização, sustentação e conforto durante o uso. É indicada para o pós-operatório e para patologias que exigem o posicionamento do membro em abdução. O tempo de uso deve ser determinado conforme avaliação e indicação médica.",
    images: [
      {
        src: `${hidrolightBase}/tipoia abdução lateral - Quadrado.png`,
        alt: "Pessoa usando tipoia com apoio de abdução lateral",
      },
    ],
    highlights: [
      "Posiciona e estabiliza o membro superior",
      "Tecido com toque suave",
      "Indicação pós-operatória",
    ],
    badges: ["Ombro", "Imobilização"],
    consultation: ["Lado de uso", "Tempo de uso", "Indicação médica"],
    keywords: ["tipoia de abducao", "ombro", "abducao", "imobilizador ombro"],
  },
  {
    id: "tipoia-estofada-imobilizadora-velpeau",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight"],
    name: "Tipoia Estofada Imobilizadora Velpeau",
    imageInset: "medium",
    summary:
      "Tipoia acolchoada com espuma interna e revestimento em algodão para imobilização de clavícula e braço.",
    description:
      "A Tipoia Estofada Imobilizadora Velpeau é acolchoada, com espuma interna de 5 mm e revestimento em algodão, proporciona conforto, sustentação e imobilização. Possui sistema de fixação prático e seguro, com fácil regulagem. Indicada para imobilização da clavícula e braço, sustentação do membro com instabilidade da artrite reumatoide, fratura do colo do úmero e cotovelo, contusões, luxações, sequelas de AVE e pós-operatório e apoio para gesso.",
    images: [
      {
        src: "/Produtos/tipoia-imobilizadora.webp",
        alt: "Tipoia estofada imobilizadora Velpeau",
      },
    ],
    highlights: [
      "Acolchoada com espuma interna de 5 mm",
      "Revestimento em algodão",
      "Fixação prática com fácil regulagem",
    ],
    badges: ["Ombro", "Imobilização"],
    consultation: ["Lado de uso", "Tempo de uso", "Indicação médica"],
    keywords: ["tipoia velpeau", "tipoia estofada", "ombro", "clavicula", "imobilizador braço"],
  },
  {
    id: "colar-cervical",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["kestal", "hidrolight", "medi"],
    name: "Colares Cervicais",
    imageFrame: { detailAspectRatio: "standard" },
    summary:
      "Suporte para a região cervical em diferentes alturas, densidades e níveis de contenção.",
    description:
      "O colar cervical auxilia no suporte e na limitação de movimentos do pescoço quando indicado. Modelos, alturas e rigidez variam bastante, por isso a medida e o tipo recomendado devem ser conferidos antes da compra.",
    images: [
      {
        src: `${produtosBase}/colar-cervical.webp`,
        alt: "Pessoa utilizando colar cervical de espuma",
      },
    ],
    highlights: [
      "Suporte para a região do pescoço",
      "Alturas e densidades variadas",
      "Modelos flexíveis ou estruturados",
    ],
    badges: ["Cervical", "Suporte"],
    consultation: ["Altura indicada", "Circunferência do pescoço", "Nível de rigidez"],
    keywords: ["colar cervical", "pescoco", "cervical"],
  },
  {
    id: "faixa-elastica-basic-3-paineis",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight"],
    name: "Faixa Elástica – 3 Painéis",
    imageFrame: {
      catalogScale: 1.3,
      detailScale: 1.1,
      detailFit: "cover",
    },
    summary:
      "Faixa com três painéis e fechamento ajustável para suporte do tronco.",
    description:
      "O modelo OR2007 possui três painéis. Sua estrutura modular acompanha os movimentos do corpo e o fechamento ajustável permite regular a compressão conforme a medida indicada.",
    images: [
      {
        src: "/Produtos/faixa-elastica-basic-3-paineis-hidrolight.webp",
        alt: "Pessoa usando a Faixa Elástica Hidrolight de 3 painéis",
        brandId: "hidrolight",
      },
    ],
    highlights: [
      "Modelo OR2007 com 3 painéis",
      "Estrutura modular para o tronco",
      "Fechamento ajustável",
    ],
    badges: ["Hidrolight", "3 painéis"],
    consultation: ["Circunferência abdominal", "Tamanho", "Orientação de uso"],
    keywords: ["faixa elastica", "or2007", "faixa 3 paineis", "hidrolight"],
  },
  {
    id: "faixa-elastica-4-paineis",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight"],
    name: "Faixa Elástica – 4 Painéis",
    imageFrame: {
      catalogScale: 1.3,
      detailScale: 1.1,
      detailFit: "cover",
    },
    summary:
      "Faixa com quatro painéis e fechamento ajustável para suporte do tronco.",
    description:
      "Possui quatro painéis. Sua estrutura modular acompanha os movimentos do corpo e o fechamento ajustável permite regular a compressão conforme a medida indicada.",
    images: [
      {
        src: "/Produtos/faixa-elastica-4-paineis.webp",
        alt: "Pessoa usando a Faixa Elástica Hidrolight de 4 painéis",
        brandId: "hidrolight",
      },
    ],
    highlights: [
      "4 painéis",
      "Estrutura modular para o tronco",
      "Fechamento ajustável",
    ],
    badges: ["Hidrolight", "4 painéis"],
    consultation: ["Circunferência abdominal", "Tamanho", "Orientação de uso"],
    keywords: ["faixa elastica", "faixa 4 paineis", "hidrolight"],
  },
  {
    id: "cinta-lombar",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight", "kestal", "medi"],
    name: "Cinta Lombar com Hastes de Aço Flexíveis",
    imageInset: "medium",
    imageFrame: { detailFit: "cover" },
    summary:
      "Cinta lombar com hastes de aço flexíveis para apoio compressivo e alívio de dores.",
    description:
      "A Cinta Lombar com Hastes de Aço Flexíveis é indicada na prevenção de lesões durante atividade física e/ou laboral, no alívio de dores agudas e crônicas, no pré e pós-operatório, como apoio compressivo e como auxílio no tratamento fisioterapêutico.",
    images: [
      {
        src: `${hidrolightBase}/_MTS9331_.png`,
        alt: "Pessoa ajustando cinta de suporte lombar",
      },
    ],
    highlights: [
      "Hastes de aço flexíveis",
      "Apoio compressivo",
      "Pré e pós-operatório",
    ],
    badges: ["Lombar", "Ajustável"],
    consultation: ["Circunferência da cintura", "Altura da cinta", "Nível de suporte"],
    keywords: ["cinta lombar", "hastes de aço", "colete lombar", "suporte coluna"],
  },
  {
    id: "cinta-modeladora-kestal-pink",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["kestal"],
    name: "Cinta Modeladora",
    summary:
      "Cinta modeladora com compressão abdominal e hastes para suporte e ajuste.",
    description:
      "A Cinta Modeladora proporciona suporte ao abdômen por meio das hastes distribuídas pela cinta e da compressão que ela exerce.",
    images: [
      {
        src: "/Produtos/cinta-modeladora-kestal-pink.png",
        alt: "Pessoa usando cinta modeladora Kestal preta com faixas rosas",
        brandId: "kestal",
      },
    ],
    highlights: ["Compressão abdominal", "Hastes distribuídas", "Faixas de ajuste"],
    badges: ["Kestal", "Modeladora"],
    consultation: ["Tamanho", "Circunferência abdominal", "Disponibilidade"],
    keywords: ["cinta modeladora", "kestal", "compressao abdominal", "cinta abdominal"],
  },
  {
    id: "colete-putti-basic-baixo",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight"],
    name: "Colete Putti Baixo",
    imageFrame: { detailAspectRatio: "landscape" },
    summary:
      "Colete lombar com talas moldáveis e compressão ajustável para suporte da região lombossacra.",
    description:
      "O Colete Putti Baixo (OR2011) combina tecido elástico, hastes flexíveis e talas semirrígidas moldáveis para oferecer estabilização e compressão na região lombar. O tamanho adequado deve ser definido pela circunferência abdominal e o uso deve seguir orientação profissional.",
    images: [
      {
        src: "/Produtos/colete-putti-basic-baixo-hidrolight.webp",
        alt: "Colete Putti Baixo Hidrolight para suporte lombar",
        brandId: "hidrolight",
      },
    ],
    highlights: [
      "Talas semirrígidas moldáveis em alumínio",
      "Hastes flexíveis para suporte lombar",
      "Fecho aderente com compressão ajustável",
    ],
    badges: ["Lombar", "Ajustável"],
    consultation: ["Circunferência abdominal", "Tamanho P, M, G ou GG", "Orientação de uso"],
    keywords: ["colete putti", "putti baixo", "or2011", "colete lombar", "hidrolight"],
  },
  {
    id: "colete-putti-alto",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight"],
    name: "Colete Putti Alto",
    imageFrame: { detailAspectRatio: "landscape" },
    summary:
      "Colete lombar com talas moldáveis e compressão ajustável, versão alta para maior sustentação do tronco.",
    description:
      "O Colete Putti Alto combina tecido elástico, hastes flexíveis e talas semirrígidas moldáveis para oferecer estabilização e compressão na região lombar, com corte mais alto para maior sustentação do tronco. O tamanho adequado deve ser definido pela circunferência abdominal e o uso deve seguir orientação profissional.",
    images: [
      {
        src: "/Produtos/colete_putti_basic_alto_hidrolight_1.webp",
        alt: "Colete Putti Alto Hidrolight para suporte lombar",
        brandId: "hidrolight",
      },
    ],
    highlights: [
      "Talas semirrígidas moldáveis em alumínio",
      "Corte alto para maior sustentação do tronco",
      "Fecho aderente com compressão ajustável",
    ],
    badges: ["Lombar", "Ajustável"],
    consultation: ["Circunferência abdominal", "Tamanho P, M, G ou GG", "Orientação de uso"],
    keywords: ["colete putti", "putti alto", "colete lombar", "hidrolight"],
  },
  {
    id: "colete-putti-max-baixo",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight"],
    name: "Colete Putti Max Baixo",
    imageFrame: { detailAspectRatio: "landscape" },
    summary:
      "Colete lombar reforçado para estabilização da coluna lombossacra em quadros de maior gravidade.",
    description:
      "O Colete Putti Max Baixo (OR1063) é indicado para estabilização da coluna lombossacra em casos de fraturas, contraturas e lesões nos discos vertebrais, artroses, espondilólises, espondilolisteses, lordoses e outras afecções da região. O tamanho adequado deve ser definido pela circunferência abdominal e o uso deve seguir orientação profissional.",
    images: [
      {
        src: "/Produtos/colete-putti-max-baixo.webp",
        alt: "Colete Putti Max Baixo Hidrolight para suporte lombossacro",
        brandId: "hidrolight",
      },
    ],
    highlights: [
      "Talas semirrígidas moldáveis em alumínio",
      "Indicado para fraturas, artroses e lesões discais",
      "Fecho aderente com compressão ajustável",
    ],
    badges: ["Lombar", "Ajustável"],
    consultation: ["Circunferência abdominal", "Tamanho P, M, G ou GG", "Orientação de uso"],
    keywords: ["colete putti", "putti max", "putti baixo", "or1063", "colete lombar", "hidrolight"],
  },
  {
    id: "colete-putti-max-alto",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight"],
    name: "Colete Putti Max Alto",
    imageFrame: { detailAspectRatio: "landscape" },
    summary:
      "Colete toracolombossacro reforçado para estabilização em quadros de maior gravidade.",
    description:
      "O Colete Putti Max Alto (OR1064) é indicado para estabilização da coluna toracolombossacra em casos de hérnias, traumatismos, fraturas osteoporóticas, artroses, lesão medular e pós-operatório. Produto não invasivo. O tamanho adequado deve ser definido pela circunferência abdominal e o uso deve seguir orientação profissional.",
    images: [
      {
        src: "/Produtos/colete-putti-max-alto.webp",
        alt: "Colete Putti Max Alto Hidrolight para suporte toracolombossacro",
        brandId: "hidrolight",
      },
    ],
    highlights: [
      "Talas semirrígidas moldáveis em alumínio",
      "Indicado para hérnias, fraturas e pós-operatório",
      "Corte alto para maior sustentação do tronco",
    ],
    badges: ["Lombar", "Ajustável"],
    consultation: ["Circunferência abdominal", "Tamanho P, M, G ou GG", "Orientação de uso"],
    keywords: ["colete putti", "putti max", "putti alto", "or1064", "colete lombar", "hidrolight"],
  },
  {
    id: "bota-imobilizadora-curta",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight", "kestal"],
    name: "Bota Imobilizadora Curta",
    imageInset: "medium",
    summary:
      "Bota ortopédica curta com estrutura e fechos ajustáveis para imobilização do pé e tornozelo.",
    description:
      "A bota imobilizadora curta ajuda a limitar movimentos do pé e tornozelo durante a recuperação. O modelo e o tamanho devem seguir a indicação recebida.",
    images: [
      {
        src: "/Produtos/bota-imobilizadora-curta.png",
        alt: "Bota imobilizadora ortopédica curta",
      },
    ],
    highlights: [
      "Modelo curto",
      "Fechos ajustáveis e estrutura acolchoada",
      "Para pé e tornozelo",
    ],
    badges: ["Pé e tornozelo", "Imobilização"],
    consultation: ["Numeração do calçado", "Lado e indicação", "Disponibilidade"],
    keywords: ["bota imobilizadora curta", "bota ortopedica", "robofoot"],
  },
  {
    id: "bota-imobilizadora-longa",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight", "kestal"],
    name: "Bota Imobilizadora Longa",
    imageInset: "medium",
    summary:
      "Bota ortopédica longa com estrutura e fechos ajustáveis para imobilização do pé, tornozelo e perna.",
    description:
      "A bota imobilizadora longa ajuda a limitar movimentos do pé, tornozelo e parte da perna durante a recuperação. O modelo e o tamanho devem seguir a indicação recebida.",
    images: [
      {
        src: `${hidrolightBase}/OR1030 - Bota Imobilizadora Longa diagonal.jpg`,
        alt: "Bota imobilizadora ortopédica longa",
      },
    ],
    highlights: [
      "Modelo longo",
      "Fechos ajustáveis e estrutura acolchoada",
      "Para pé, tornozelo e perna",
    ],
    badges: ["Pé e tornozelo", "Imobilização"],
    consultation: ["Numeração do calçado", "Lado e indicação", "Disponibilidade"],
    keywords: ["bota imobilizadora longa", "bota ortopedica", "robofoot"],
  },
  {
    id: "sandalia-pos-operatoria",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight"],
    name: "Sandália de Barouk",
    imageFrame: { detailAspectRatio: "landscape" },
    summary:
      "Calçado ortopédico indicado para proteção e apoio em períodos de recuperação do pé.",
    description:
      "A sandália de Barouk acomoda curativos e adaptações de volume com fechamento regulável. O formato do solado e a área de descarga podem variar conforme o modelo; confirme a indicação e o lado antes da compra.",
    images: [
      {
        src: `${hidrolightBase}/_MTS9534_.jpg`,
        alt: "Sandália ortopédica pós-operatória preta",
      },
    ],
    highlights: [
      "Abertura ampla com fechos ajustáveis",
      "Modelos com diferentes formatos de solado",
      "Lado conforme a necessidade",
    ],
    badges: ["Pé", "Pós-operatório"],
    consultation: ["Tipo de solado", "Lado de uso", "Indicação clínica"],
    keywords: ["sandalia barouk", "calcado ortopedico", "sandalia pos operatoria"],
  },
  {
    id: "calcanheira-de-silicone",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight"],
    name: "Calcanheiras de Silicone",
    imageFrame: { detailAspectRatio: "landscape" },
    summary:
      "Apoios para acomodação do calcanhar, disponíveis em diferentes formatos, densidades e tamanhos.",
    description:
      "As calcanheiras de silicone são colocadas dentro do calçado para acomodar e amortecer a região do calcanhar. Existem modelos simples, com ponto de alívio e diferentes alturas. O tamanho e o formato devem ser compatíveis com o calçado e a orientação de uso.",
    images: [
      {
        src: `${hidrolightBase}/_MTS9142_.jpg`,
        alt: "Pessoa posicionando calcanheira de silicone no pé",
      },
    ],
    highlights: [
      "Acomodação da região do calcanhar",
      "Opções com diferentes densidades e formatos",
      "Uso dentro de calçados compatíveis",
    ],
    badges: ["Pés", "Silicone"],
    consultation: ["Tamanho", "Formato e altura", "Tipo de calçado"],
    keywords: ["calcanheira", "silicone", "amortecimento calcanhar"],
  },
  {
    id: "andador",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["dellamed"],
    name: "Andador Articulado – 3 Barras",
    summary:
      "Andador articulado que amplia a base de apoio e melhora o equilíbrio durante a marcha.",
    description:
      "O andador articulado 03 barras é indicado para aumentar a base de apoio, facilitando o equilíbrio durante a deambulação. Serve também para maior estabilidade anterior e lateral e suporte do peso do usuário, em casos de fraqueza muscular, déficit de equilíbrio, pós-cirúrgico, entre outros.",
    images: [
      {
        src: `${produtosBase}/andador-articulado-3-barras.webp`,
        alt: "Andador articulado de 3 barras",
      },
    ],
    imageFrame: { catalogScale: 1.5, detailScale: 1.5 },
    highlights: [
      "Amplia a base de apoio",
      "Estabilidade anterior e lateral",
      "Indicado para pós-cirúrgico e déficit de equilíbrio",
    ],
    badges: ["Mobilidade", "Articulado"],
    consultation: ["Altura do usuário", "Capacidade suportada"],
    keywords: ["andador", "andador articulado", "3 barras", "auxiliar marcha", "mobilidade"],
  },
  {
    id: "andador-com-rodas",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["dellamed"],
    name: "Andador Articulado – 3 Barras com Rodas",
    summary:
      "Andador articulado com rodas dianteiras que amplia a base de apoio e melhora o equilíbrio durante a marcha.",
    description:
      "O andador articulado 03 barras com rodas é indicado para aumentar a base de apoio, facilitando o equilíbrio durante a deambulação. Serve também para maior estabilidade anterior e lateral e suporte do peso do usuário, em casos de fraqueza muscular, déficit de equilíbrio, pós-cirúrgico, entre outros. As rodas facilitam o deslocamento, reduzindo o esforço a cada passo.",
    images: [
      {
        src: `${produtosBase}/andador-articulado-3-barras-com-rodas.webp`,
        alt: "Andador articulado de 3 barras com rodas",
      },
    ],
    imageFrame: { catalogScale: 1.5, detailScale: 1.5 },
    highlights: [
      "Rodas dianteiras para facilitar o deslocamento",
      "Amplia a base de apoio",
      "Indicado para pós-cirúrgico e déficit de equilíbrio",
    ],
    badges: ["Mobilidade", "Articulado"],
    consultation: ["Altura do usuário", "Capacidade suportada"],
    keywords: ["andador", "andador articulado", "3 barras", "andador com rodas", "auxiliar marcha", "mobilidade"],
  },
  {
    id: "assento-elevado-sanitario",
    categoryId: "ortopedia-mobilidade",
    brandIds: [],
    name: "Assento Elevado Sanitário com Tampa",
    summary:
      "Assento elevado para vaso sanitário, com tampa e base de apoio em plástico resistente.",
    description:
      "O assento elevado sanitário com tampa auxilia o uso do vaso sanitário por pessoas que precisam de mais conforto, segurança e facilidade durante a higiene. Possui formato anatômico, tampa articulada e sistema de fixação para manter o assento estável durante o uso. Consulte a disponibilidade do modelo.",
    images: [
      {
        src: "/Produtos/assento-elevado-sanitario.png",
        alt: "Assento elevado sanitário branco com tampa, sem marca",
      },
    ],
    highlights: [
      "Com tampa articulada",
      "Formato anatômico",
      "Base de apoio estável",
    ],
    badges: ["Higiene", "Acessibilidade"],
    consultation: ["Modelo", "Sistema de fixação", "Disponibilidade"],
    keywords: [
      "assento elevado sanitario",
      "assento para vaso sanitario",
      "assento com tampa",
      "acessibilidade banheiro",
      "higiene",
      "apoio sanitario",
    ],
  },
  {
    id: "cadeira-de-banho",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["dellamed"],
    name: "Cadeiras de Banho",
    imageInset: "large",
    summary:
      "Cadeiras para higiene e transferência, com configurações fixas ou com rodas e apoio sanitário.",
    description:
      "A cadeira de banho auxilia a rotina de higiene e pode facilitar transferências com mais segurança. Há modelos com rodas, apoios de braço, pedais e assento sanitário. Dimensões, capacidade suportada e espaço disponível no ambiente são pontos importantes na escolha.",
    images: [
      {
        src: `${produtosBase}/cadeira-de-banho.png`,
        alt: "Cadeira de banho com rodas, braços e apoio para os pés",
      },
    ],
    highlights: [
      "Opções com ou sem rodas",
      "Apoios e assento sanitário conforme o modelo",
      "Diferentes capacidades e dimensões",
    ],
    badges: ["Banho", "Mobilidade"],
    consultation: ["Dimensões do ambiente", "Capacidade suportada", "Apoios necessários"],
    keywords: ["cadeira banho", "higiene", "cadeira sanitaria"],
  },
  {
    id: "bengala",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["dellamed"],
    name: "Bengalas",
    imageFrame: { detailAspectRatio: "standard" },
    summary:
      "Auxílio de marcha em modelos reguláveis, dobráveis e com diferentes tipos de apoio.",
    description:
      "A bengala oferece um ponto adicional de apoio durante a caminhada. Trabalhamos com modelos de altura regulável, dobráveis e com diferentes formatos de empunhadura e ponteira. O ajuste correto contribui para conforto e segurança no uso.",
    images: [
      {
        src: `${produtosBase}/bengala.webp`,
        alt: "Bengala metálica com regulagem de altura",
      },
    ],
    highlights: [
      "Altura regulável em diversos modelos",
      "Empunhaduras e ponteiras variadas",
      "Opções fixas ou dobráveis",
    ],
    badges: ["Mobilidade", "Apoio"],
    consultation: ["Altura do usuário", "Tipo de empunhadura", "Modelo fixo ou dobrável"],
    keywords: ["bengala", "apoio caminhada", "auxiliar marcha"],
  },
  {
    id: "muleta-canadense",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["dellamed"],
    name: "Muleta Canadense Articulada",
    imageFrame: { detailAspectRatio: "standard" },
    summary:
      "Muleta com apoio no antebraço, articulada, com regulagens para diferentes alturas e necessidades de marcha.",
    description:
      "A muleta canadense articulada utiliza braçadeira no antebraço e empunhadura para distribuir o apoio durante a marcha. A articulação acompanha o movimento do braço, e a muleta pode ter regulagem inferior e superior, além de diferentes formatos de braçadeira. Confirme altura, capacidade e uso unilateral ou em par.",
    images: [
      {
        src: `${produtosBase}/muleta-canadense.webp`,
        alt: "Muleta canadense articulada com apoio de antebraço",
      },
    ],
    highlights: [
      "Articulação que acompanha o movimento",
      "Apoio de antebraço",
      "Regulagens conforme o modelo",
    ],
    badges: ["Mobilidade", "Antebraço"],
    consultation: ["Altura do usuário", "Capacidade suportada", "Quantidade necessária"],
    keywords: ["muleta canadense", "muleta canadense articulada", "muleta antebraco", "mobilidade"],
  },
  {
    id: "muleta-canadense-fixa",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["dellamed"],
    name: "Muleta Canadense Fixa",
    imageFrame: { detailAspectRatio: "standard" },
    summary:
      "Muleta com apoio no antebraço, estrutura fixa, com regulagem de altura para marcha.",
    description:
      "A muleta canadense fixa utiliza braçadeira no antebraço e empunhadura para distribuir o apoio durante a marcha. Possui estrutura fixa, sem articulação, com regulagem de altura, além de diferentes formatos de braçadeira. Confirme altura, capacidade e uso unilateral ou em par.",
    images: [
      {
        src: `${produtosBase}/muleta-canadense-fixa.webp`,
        alt: "Muleta canadense fixa com apoio de antebraço",
      },
    ],
    highlights: [
      "Estrutura fixa",
      "Apoio de antebraço",
      "Regulagem de altura",
    ],
    badges: ["Mobilidade", "Antebraço"],
    consultation: ["Altura do usuário", "Capacidade suportada", "Quantidade necessária"],
    keywords: ["muleta canadense", "muleta canadense fixa", "muleta antebraco", "mobilidade"],
  },
  {
    id: "muleta-axilar",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["dellamed"],
    name: "Muletas Axilares",
    imageFrame: { detailAspectRatio: "standard" },
    summary:
      "Muleta com apoio axilar, empunhadura e regulagens para adaptação à altura do usuário.",
    description:
      "A muleta axilar oferece apoio durante a marcha por meio de estrutura regulável, apoio superior e empunhadura. Existem tamanhos e materiais diferentes. Para selecionar corretamente, confirme a altura do usuário, a capacidade suportada e a quantidade necessária.",
    images: [
      {
        src: `${produtosBase}/muleta-axilar.webp`,
        alt: "Par de muletas axilares metálicas",
      },
    ],
    highlights: [
      "Apoio axilar acolchoado",
      "Altura e empunhadura reguláveis",
      "Diferentes tamanhos e capacidades",
    ],
    badges: ["Mobilidade", "Axilar"],
    consultation: ["Altura do usuário", "Capacidade suportada", "Quantidade necessária"],
    keywords: ["muleta axilar", "muleta aluminio", "mobilidade"],
  },
  {
    id: "sonda-uretral-n08",
    categoryId: "cuidados-medico-hospitalares",
    brandIds: [],
    name: "Sonda Uretral",
    imageFrame: { catalogScale: 1, detailScale: 1, detailFit: "contain" },
    summary:
      "Sonda uretral descartável, estéril e de uso único.",
    description:
      "A sonda uretral é um dispositivo estéril, descartável e de uso único. A escolha da medida e a utilização devem seguir a orientação de um profissional habilitado.",
    images: [
      {
        src: "/Produtos/sonda-uretral-n08-produto.png",
        alt: "Sonda uretral em PVC com conector azul",
      },
      {
        src: "/Produtos/sonda-uretral-n08.png",
        alt: "Sonda uretral em embalagem estéril azul-clara",
      },
    ],
    highlights: ["Embalagem individual estéril", "Descartável e de uso único", "Uso único"],
    badges: ["Uso profissional", "Estéril"],
    consultation: ["Tipo de sonda", "Orientação profissional", "Comprimento"],
    keywords: ["sonda uretral", "cateter uretral", "material hospitalar"],
  },
  {
    id: "ponteira-22mm-muleta-axilar",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["dellamed"],
    name: "Ponteira para Muleta Axilar / Canadense",
    summary:
      "Ponteira de borracha para reposição em muletas axilares ou canadenses compatíveis.",
    description:
      "A ponteira é um acessório de reposição para a base da muleta axilar ou canadense. Sua estrutura de borracha auxilia na aderência ao piso. Confirme a compatibilidade com o modelo de muleta antes da compra.",
    images: [
      {
        src: "/Produtos/ponteira-22mm-muleta-axilar.png",
        alt: "Ponteira preta de borracha para muleta axilar ou canadense",
        brandId: "dellamed",
      },
    ],
    highlights: ["Borracha antiderrapante", "Peça de reposição", "Aderência ao piso"],
    badges: ["Reposição", "Axilar e canadense"],
    consultation: ["Modelo da muleta", "Quantidade necessária", "Compatibilidade"],
    keywords: ["ponteira muleta", "borracha muleta axilar", "borracha muleta canadense", "d7", "muleta axilar", "muleta canadense"],
  },
  {
    id: "frasco-para-nutricao-enteral",
    categoryId: "cuidados-medico-hospitalares",
    brandIds: [],
    name: "Frasco para Nutrição Enteral",
    imageInset: "medium",
    summary:
      "Frasco plástico com tampa para acondicionamento de dieta enteral em rotinas de cuidado.",
    description:
      "O frasco para nutrição enteral é destinado ao acondicionamento de dietas conforme a orientação de profissionais habilitados. Confirme a capacidade, os acessórios compatíveis e a disponibilidade durante o atendimento.",
    images: [
      {
        src: "/Produtos/frasco-nutricao-enteral.png",
        alt: "Frasco plástico branco para nutrição enteral com tampa cinza",
      },
    ],
    highlights: ["Frasco com tampa", "Uso em rotina de nutrição enteral", "Apresentações variam conforme o modelo"],
    badges: ["Nutrição enteral", "Uso profissional"],
    consultation: ["Capacidade do frasco", "Acessórios compatíveis", "Disponibilidade"],
    keywords: ["frasco nutricao enteral", "biofrasco nutri", "biobase", "dieta enteral"],
  },
  {
    id: "fronha-impermeavel-com-ziper",
    categoryId: "cuidados-medico-hospitalares",
    brandIds: [],
    name: "Fronha Impermeável com Zíper",
    imageFrame: { detailAspectRatio: "landscape" },
    summary:
      "Capa impermeável para travesseiro, com fechamento em zíper e acabamento macio.",
    description:
      "A fronha impermeável com zíper protege o travesseiro em rotinas de cuidado domiciliar. A embalagem fotografada indica composição em PVC siliconizado, com características laváveis e antiácaro. Confirme a medida e a cor disponíveis durante o atendimento.",
    images: [
      {
        src: "/Produtos/fronha-impermeavel-com-ziper.png",
        alt: "Fronha bege impermeável dobrada com zíper branco",
      },
    ],
    highlights: ["Fechamento em zíper", "Material impermeável", "Lavável"],
    badges: ["Proteção", "Cuidados em casa"],
    consultation: ["Medida do travesseiro", "Cor disponível", "Disponibilidade"],
    keywords: ["fronha impermeavel", "fronha com ziper", "protetor travesseiro", "pvc siliconizado", "senior care", "reluz"],
  },
  {
    id: "protetor-colchao-berco-americano",
    categoryId: "cuidados-medico-hospitalares",
    brandIds: [],
    name: "Protetor de Colchão para Berço Americano",
    imageFrame: { detailAspectRatio: "landscape", detailFit: "contain" },
    summary:
      "Capa impermeável com elástico para colchão de berço americano, na medida 130 × 70 cm.",
    description:
      "O protetor para colchão de berço americano possui elástico nas bordas para ajuste ao colchão. A apresentação fotografada é bege, lavável e feita em PVC siliconizado. Confirme a medida e a cor disponíveis durante o atendimento.",
    images: [
      {
        src: "/Produtos/protetor-colchao-berco-americano.png",
        alt: "Protetor bege impermeável com elástico instalado em colchão de berço americano",
      },
    ],
    highlights: ["Medida 130 × 70 cm", "Elástico nas bordas", "Material impermeável e lavável"],
    badges: ["Berço americano", "Impermeável"],
    consultation: ["Medida do colchão", "Cor disponível", "Disponibilidade"],
    keywords: ["protetor colchao berco americano", "capa colchao berco", "130 x 70", "impermeavel"],
  },
  {
    id: "protetor-colchao-casal",
    categoryId: "cuidados-medico-hospitalares",
    brandIds: [],
    name: "Protetor de Colchão Casal",
    imageFrame: { detailAspectRatio: "landscape", detailFit: "contain" },
    summary:
      "Capa impermeável com elástico para colchão casal padrão, na medida 190 × 140 cm.",
    description:
      "O protetor para colchão casal padrão possui elástico nas bordas para ajuste ao colchão. A apresentação fotografada é bege, lavável e feita em PVC siliconizado. Confirme a medida e a cor disponíveis durante o atendimento.",
    images: [
      {
        src: "/Produtos/protetor-colchao-casal.png",
        alt: "Protetor bege impermeável com elástico instalado em colchão casal",
      },
    ],
    highlights: ["Medida 190 × 140 cm", "Elástico nas bordas", "Material impermeável e lavável"],
    badges: ["Casal padrão", "Impermeável"],
    consultation: ["Medida do colchão", "Cor disponível", "Disponibilidade"],
    keywords: ["protetor colchao casal", "capa colchao casal", "190 x 140", "impermeavel"],
  },
  {
    id: "protetor-colchao-solteiro",
    categoryId: "cuidados-medico-hospitalares",
    brandIds: [],
    name: "Protetor de Colchão Solteiro",
    imageFrame: { detailAspectRatio: "landscape", detailFit: "contain" },
    summary: "Capa impermeável com elástico para colchão solteiro padrão, na medida 190 × 90 cm.",
    description: "O protetor para colchão solteiro padrão possui elástico nas bordas para ajuste ao colchão. A apresentação fotografada é bege, lavável e feita em PVC siliconizado. Confirme a medida e a cor disponíveis durante o atendimento.",
    images: [{ src: "/Produtos/protetor-colchao-solteiro.png", alt: "Protetor bege impermeável com elástico instalado em colchão solteiro" }],
    highlights: ["Medida 190 × 90 cm", "Elástico nas bordas", "Material impermeável e lavável"],
    badges: ["Solteiro padrão", "Impermeável"],
    consultation: ["Medida do colchão", "Cor disponível", "Disponibilidade"],
    keywords: ["protetor colchao solteiro", "capa colchao solteiro", "190 x 90", "impermeavel"],
  },
  {
    id: "mascara-para-dormir",
    categoryId: "cuidados-medico-hospitalares",
    brandIds: ["kestal"],
    name: "Máscara para Dormir",
    imageFrame: { detailAspectRatio: "square" },
    summary:
      "Máscara ajustável para bloquear a claridade e tornar os momentos de descanso mais confortáveis.",
    description:
      "A máscara para dormir (KSN055) possui faixa elástica ajustável e cobertura macia para os olhos. É uma opção para quem busca reduzir a incidência de luz durante o repouso, viagens ou pausas de descanso.",
    images: [
      {
        src: "/Produtos/mascara-para-dormir-kestal.jpeg",
        alt: "Pessoa usando máscara preta para dormir Kestal",
        brandId: "kestal",
      },
    ],
    highlights: ["Faixa elástica ajustável", "Bloqueio de claridade", "Tamanho único"],
    badges: ["Descanso", "Ajustável"],
    consultation: ["Modelo disponível", "Cor disponível", "Disponibilidade"],
    keywords: ["mascara dormir", "mascara sono", "tapa olho", "kestal", "ksn055"],
  },
  {
    id: "luva-de-latex",
    categoryId: "cuidados-medico-hospitalares",
    brandIds: [],
    name: "Luva de Látex",
    summary: "Luva descartável de látex para proteção e procedimentos de rotina.",
    description:
      "A luva de látex é indicada para proteção das mãos em rotinas de cuidado, higiene e procedimentos não cirúrgicos, conforme a finalidade de uso. Modelo ambidestro, descartável e de uso único. Tamanho, apresentação e demais informações devem ser consultados.",
    images: [{ src: "/Produtos/luva-latex.png", alt: "Caixa genérica e luva descartável de látex amarelada" }],
    highlights: ["Látex", "Ambidestra", "Descartável e de uso único"],
    badges: ["Proteção", "Descartável"],
    consultation: ["Tamanho", "Quantidade por embalagem", "Disponibilidade"],
    keywords: ["luva latex", "luva descartavel", "luva ambidestra", "protecao", "procedimentos"],
  },
  {
    id: "luva-de-vinil",
    categoryId: "cuidados-medico-hospitalares",
    brandIds: [],
    name: "Luva de Vinil",
    summary: "Luva descartável de vinil para proteção e procedimentos de rotina.",
    description:
      "A luva de vinil é confeccionada em PVC e indicada para proteção das mãos em atividades de cuidado, higiene e procedimentos não cirúrgicos, conforme a finalidade de uso. É lisa, ambidestra, descartável e de uso único. Tamanho, apresentação e demais informações devem ser consultados.",
    images: [{ src: "/Produtos/luva-vinil.png", alt: "Caixa genérica e luva descartável de vinil transparente" }],
    highlights: ["Vinil em PVC", "Ambidestra", "Descartável e de uso único"],
    badges: ["Proteção", "Descartável"],
    consultation: ["Tamanho", "Quantidade por embalagem", "Disponibilidade"],
    keywords: ["luva vinil", "luva pvc", "luva descartavel", "ambidestra", "protecao"],
  },
  {
    id: "luva-nitrilica",
    categoryId: "cuidados-medico-hospitalares",
    brandIds: [],
    name: "Luva Nitrílica",
    summary: "Luva descartável de nitrila para proteção em procedimentos não cirúrgicos.",
    description:
      "A luva nitrílica é indicada para proteção das mãos em procedimentos não cirúrgicos, exames e rotinas de cuidado, conforme a finalidade de uso. É ambidestra, descartável e de uso único. Tamanho, apresentação e demais informações devem ser consultados.",
    images: [{ src: "/Produtos/luva-nitrilica.png", alt: "Caixa genérica e luva descartável nitrílica azul" }],
    highlights: ["Nitrila", "Ambidestra", "Descartável e de uso único"],
    badges: ["Proteção", "Descartável"],
    consultation: ["Tamanho", "Quantidade por embalagem", "Disponibilidade"],
    keywords: ["luva nitrilica", "luva nitrila", "luva azul", "luva descartavel", "procedimentos"],
  },
  {
    id: "prope-descartavel",
    categoryId: "cuidados-medico-hospitalares",
    brandIds: [],
    name: "Propé Descartável",
    summary: "Sapatilha descartável em TNT com elástico para cobertura dos calçados.",
    description: "O propé descartável é uma sapatilha de uso único com borda elástica para ajuste sobre o calçado. A apresentação fotografada é azul e vendida em pacote. Confirme a gramatura e a quantidade disponíveis.",
    images: [{ src: "/Produtos/prope-descartavel-azul.png", alt: "Par de propés descartáveis azuis com elástico" }],
    highlights: ["TNT azul", "Borda elástica", "Uso único"], badges: ["Descartável", "Proteção"],
    consultation: ["Quantidade por pacote", "Gramatura", "Disponibilidade"], keywords: ["prope", "sapatilha descartavel", "tnt azul", "cobre sapato"],
  },
  {
    id: "gaze",
    categoryId: "cuidados-medico-hospitalares",
    brandIds: ["medix", "descarpack"],
    name: "Gaze Estéril - 10 unidades",
    imageFrame: { detailAspectRatio: "standard" },
    summary:
      "Compressas de gaze estéril para limpeza, proteção e composição de curativos.",
    description:
      "A gaze é utilizada em diferentes etapas de cuidado e curativo, conforme a orientação recebida. Trabalhamos com compressas estéreis, em diferentes medidas, com apresentação em pacote de 10 unidades.",
    images: [
      {
        src: `${produtosBase}/gaze.webp`,
        alt: "Compressas e rolo de gaze branca",
      },
    ],
    highlights: [
      "Compressas de gaze",
      "Produto estéril",
      "Apresentação com 10 unidades",
    ],
    badges: ["Curativos", "Estéril", "10 unidades"],
    consultation: ["Tipo de gaze", "Medida", "Disponibilidade"],
    keywords: ["gaze", "compressa", "curativo", "esteril", "10 unidades"],
  },
  {
    id: "gaze-karina-500-unidades",
    categoryId: "cuidados-medico-hospitalares",
    brandIds: ["medix"],
    name: "Gaze Não-Estéril - 500 unidades",
    imageFrame: { detailAspectRatio: "standard" },
    summary:
      "Compressa de gaze Linha Soft, não estéril, confeccionada em 100% algodão, 9/11/13 fios/cm², em pacote com 500 unidades.",
    description:
      "A Compressa de Gaze Karina — Linha Soft é confeccionada em tecido 100% algodão, de baixa densidade de fios por centímetro quadrado, embalada em embalagem plástica. Produto não estéril, disponível nas gramaturas de 9, 11 e 13 fios/cm², em pacote com 500 unidades.",
    images: [
      {
        src: "/Produtos/gaze-karina.webp",
        alt: "Pacote de compressas de gaze Karina com 500 unidades",
      },
    ],
    highlights: [
      "100% algodão — Linha Soft",
      "Produto não estéril",
      "Pacote com 500 unidades",
    ],
    badges: ["Curativos", "Não estéril", "500 unidades"],
    consultation: ["Gramatura (9, 11 ou 13 fios/cm²)", "Medida", "Disponibilidade"],
    keywords: ["gaze karina", "compressa", "curativo", "nao esteril", "500 unidades", "linha soft"],
  },
  {
    id: "ataduras",
    categoryId: "cuidados-medico-hospitalares",
    brandIds: ["medix"],
    name: "Ataduras",
    imageFrame: { detailAspectRatio: "standard" },
    summary:
      "Ataduras para fixação, proteção e suporte, em diferentes materiais, larguras e comprimentos.",
    description:
      "As ataduras podem ser utilizadas para fixar coberturas, proteger regiões ou oferecer suporte conforme o tipo de material. Há versões de crepom, elásticas e outras apresentações, com larguras e comprimentos variados. Consulte a opção indicada para sua necessidade.",
    images: [
      {
        src: `${produtosBase}/ataduras.webp`,
        alt: "Rolo de atadura elástica clara",
      },
    ],
    highlights: [
      "Materiais e elasticidades variadas",
      "Diferentes larguras e comprimentos",
      "Uso para fixação, proteção ou suporte",
    ],
    badges: ["Curativos", "Várias medidas"],
    consultation: ["Material", "Largura e comprimento", "Quantidade"],
    keywords: ["atadura", "crepom", "atadura elastica"],
  },
  {
    id: "esparadrapo",
    categoryId: "cuidados-medico-hospitalares",
    brandIds: ["3m"],
    name: "Esparadrapos",
    imageFrame: { detailAspectRatio: "standard" },
    summary:
      "Fitas de fixação com diferentes larguras, materiais e níveis de aderência.",
    description:
      "O esparadrapo é utilizado para fixação de curativos, tubos e outros materiais conforme a necessidade. Existem opções em tecido e diferentes larguras, comprimentos e adesivos. A escolha deve considerar a área de aplicação e a sensibilidade da pele.",
    images: [
      {
        src: `${produtosBase}/esparadrapo.webp`,
        alt: "Rolos de esparadrapo em diferentes larguras",
      },
    ],
    highlights: [
      "Boa fixação para diferentes cuidados",
      "Larguras e comprimentos variados",
      "Apresentações em rolo",
    ],
    badges: ["Fixação", "Curativos"],
    consultation: ["Largura", "Comprimento", "Material da fita"],
    keywords: ["esparadrapo", "fita curativo", "fixacao"],
  },
  {
    id: "micropore",
    categoryId: "cuidados-medico-hospitalares",
    brandIds: ["3m"],
    name: "Fita Microporosa",
    imageFrame: { detailAspectRatio: "standard" },
    summary:
      "Fita porosa e flexível para fixações delicadas, disponível em diferentes medidas.",
    description:
      "A fita microporosa é uma alternativa para fixações que pedem flexibilidade e respirabilidade. Cores, larguras, comprimentos e níveis de aderência variam por fabricante. Consulte as apresentações disponíveis e considere a sensibilidade da pele.",
    images: [
      {
        src: `${produtosBase}/micropore.webp`,
        alt: "Rolo de fita microporosa clara",
      },
    ],
    highlights: [
      "Material poroso e flexível",
      "Diferentes larguras e comprimentos",
      "Opções de cores conforme a marca",
    ],
    badges: ["Fixação", "Pele sensível"],
    consultation: ["Largura", "Comprimento", "Cor e marca"],
    keywords: ["micropore", "fita microporosa", "fita cirurgica"],
  },
  {
    id: "curativo-hidrocoloide",
    categoryId: "cuidados-medico-hospitalares",
    brandIds: [],
    name: "Curativo Hidrocoloide",
    imageFrame: { detailAspectRatio: "standard" },
    summary:
      "Curativo hidrocoloide extra fino que forma gel em contato com a ferida, acelerando a cicatrização.",
    description:
      "O Curativo Hidrocoloide é formado por partículas de hidrocoloides (gelatina, pectina e carboximetilcelulose sódica) inseridas em polímeros elastoméricos, que formam gel ao interagir com a umidade da ferida, favorecendo a cicatrização. Sua estrutura extra fina e flexível se adapta a diferentes áreas do corpo. Indicado para feridas superficiais com baixa exsudação, feridas cirúrgicas, lesões por atrito, úlceras de pressão, queimaduras superficiais, abrasões e incisões cirúrgicas.",
    images: [
      {
        src: "/Produtos/curativo-hidrocoloide.webp",
        alt: "Curativo hidrocoloide extra fino",
      },
    ],
    highlights: [
      "Forma gel em contato com a ferida",
      "Estrutura extra fina e flexível",
      "Baixa exsudação e feridas superficiais",
    ],
    badges: ["Coberturas", "Cuidados"],
    consultation: ["Medida necessária", "Tipo de ferida", "Apresentação"],
    keywords: ["curativo hidrocoloide", "cobertura", "cicatrizacao", "ferida"],
  },
  {
    id: "curativo-esteril-petrolatum",
    categoryId: "cuidados-medico-hospitalares",
    brandIds: [],
    name: "Curativo Estéril com Emulsão de Petrolatum",
    imageFrame: { detailAspectRatio: "standard" },
    summary:
      "Compressa estéril e não aderente, impregnada com emulsão de petrolatum, para tratamento de feridas.",
    description:
      "O Curativo Estéril com Emulsão de Petrolatum é uma compressa não aderente, impregnada com emulsão de petrolatum de origem mineral, esterilizada por radiação gama. Protege e auxilia na cicatrização mantendo o ambiente úmido ideal, sem aderir à lesão, permitindo remoção sem dor. Indicado para feridas não infectadas com pouco ou nenhum exsudato, como úlceras, queimaduras de primeiro e segundo grau, áreas doadoras e receptoras, e exposição de ossos e tendões. Pode permanecer na ferida por até 72 horas.",
    images: [
      {
        src: "/Produtos/curativo-estéril.webp",
        alt: "Curativo estéril com emulsão de petrolatum",
      },
    ],
    highlights: [
      "Não aderente — mantém o ambiente úmido",
      "Esterilizado por radiação gama",
      "Pode permanecer na ferida por até 72 horas",
    ],
    badges: ["Coberturas", "Estéril"],
    consultation: ["Medida necessária", "Tipo de ferida", "Apresentação"],
    keywords: ["curativo esteril", "petrolatum", "compressa", "cobertura", "ferida"],
  },
  {
    id: "seringas",
    categoryId: "cuidados-medico-hospitalares",
    brandIds: ["medix", "descarpack"],
    name: "Seringas",
    imageFrame: { detailAspectRatio: "standard" },
    summary:
      "Seringas descartáveis em diferentes capacidades, bicos e configurações, com ou sem agulha.",
    description:
      "As seringas são fornecidas em diferentes capacidades e tipos de bico, com opções acompanhadas ou não de agulha. Para consultar o item correto, informe o volume, a graduação, o tipo de conexão e a apresentação desejada.",
    images: [
      {
        src: `${produtosBase}/seringas.webp`,
        alt: "Seringas descartáveis em diferentes capacidades",
      },
    ],
    highlights: [
      "Diferentes capacidades e graduações",
      "Opções com ou sem agulha",
      "Tipos de bico conforme a aplicação",
    ],
    badges: ["Descartável", "Vários volumes"],
    consultation: ["Capacidade", "Tipo de bico", "Com ou sem agulha"],
    keywords: ["seringa", "descartavel", "agulha", "luer"],
  },
  {
    id: "agulhas-descartaveis",
    categoryId: "cuidados-medico-hospitalares",
    brandIds: ["descarpack"],
    name: "Agulhas Descartáveis",
    summary: "Agulhas hipodérmicas descartáveis em diferentes numerações e apresentações.",
    description: "Agulhas hipodérmicas estéreis e de uso único para procedimentos conforme orientação de profissional habilitado. Consulte a numeração, o comprimento e a apresentação necessários.",
    images: [{ src: "/Produtos/agulha-descarpack.webp", alt: "Agulha hipodérmica descartável com capa protetora" }],
    highlights: ["Uso único", "Estéreis", "Diversas numerações"],
    badges: ["Descartável", "Uso profissional"],
    consultation: ["Numeração", "Comprimento", "Quantidade"],
    keywords: ["agulha", "hipodermica", "descartavel", "esteril", "seringa"],
  },
  {
    id: "laminas-de-bisturi",
    categoryId: "cuidados-medico-hospitalares",
    brandIds: [],
    name: "Lâminas de Bisturi de Aço Carbono Estéril",
    summary:
      "Lâminas de bisturi estéreis e descartáveis para procedimentos cirúrgicos e odontológicos.",
    description:
      "Alta precisão, corte afiado e confiabilidade são essenciais em procedimentos cirúrgicos odontológicos. A Lâmina de Bisturi de Aço Carbono Estéril Solidor reúne esses atributos com excelência. É estéril e segura, com esterilização por raio gama. Há diversos tamanhos e modelos para cada necessidade clínica. De uso único e prático, oferece corte afiado, preciso e durável. Indicada para cirurgia e periodontia, atende desde procedimentos simples até os mais específicos. Consulte modelos, numerações, apresentação e disponibilidade.",
    images: [
      {
        src: "/Produtos/laminas-bisturi-aco-carbono.png",
        alt: "Lâminas de bisturi de aço carbono estéreis em diferentes formatos, sem numeração",
      },
    ],
    highlights: [
      "Aço carbono estéril",
      "Esterilização por raio gama",
      "Uso único com corte preciso e durável",
    ],
    badges: ["Estéril", "Uso único"],
    consultation: ["Modelo e numeração", "Apresentação", "Disponibilidade"],
    keywords: ["lamina bisturi", "lamina de bisturi", "aco carbono", "solidor", "esteril", "cirurgia", "periodontia"],
  },
  {
    id: "cabos-de-bisturi",
    categoryId: "cuidados-medico-hospitalares",
    brandIds: [],
    name: "Cabo de Bisturi em Aço Inox",
    summary:
      "Instrumento cirúrgico reutilizável para fixação de lâminas descartáveis com firmeza e precisão.",
    description:
      "O cabo de bisturi em aço inox é um instrumento cirúrgico reutilizável, autoclavável e resistente à corrosão, usado para fixar lâminas descartáveis com firmeza e precisão. Disponível nos modelos compatíveis com lâminas nº 3 e nº 4, conforme consulta e disponibilidade.",
    images: [
      {
        src: "/Produtos/cabos-bisturi-inox.png",
        alt: "Cabos de bisturi em aço inox para lâminas nº 3 e nº 4",
      },
    ],
    highlights: [
      "Aço inox reutilizável",
      "Autoclavável e resistente à corrosão",
      "Modelos para lâminas nº 3 e nº 4",
    ],
    badges: ["Reutilizável", "Instrumento cirúrgico"],
    consultation: ["Modelo nº 3 ou nº 4", "Compatibilidade com a lâmina", "Disponibilidade"],
    keywords: [
      "cabo bisturi",
      "cabo de bisturi",
      "cabo bisturi numero 3",
      "cabo bisturi numero 4",
      "aco inox",
      "autoclavavel",
      "instrumento cirurgico",
    ],
  },
  {
    id: "torneira-3-vias-luer-lock",
    categoryId: "cuidados-medico-hospitalares",
    brandIds: ["descarpack"],
    name: "Torneira 3 Vias Luer Lock",
    summary:
      "Dispositivo estéril e descartável com três vias para controle de fluxo em conexões Luer Lock.",
    description:
      "A torneira de três vias permite conectar e direcionar o fluxo entre linhas compatíveis com encaixe Luer Lock. É um produto estéril, descartável e de uso único. A escolha e a utilização devem seguir a orientação de profissional habilitado.",
    images: [
      {
        src: "/Produtos/torneira-3-vias-luer-lock.png",
        alt: "Torneira descartável transparente de três vias com comando vermelho",
        brandId: "descarpack",
      },
    ],
    highlights: ["Três vias", "Conexão Luer Lock", "Estéril e descartável"],
    badges: ["Uso profissional", "Uso único"],
    consultation: ["Tipo de conexão", "Quantidade necessária", "Orientação profissional"],
    keywords: ["torneira 3 vias", "luer lock", "acesso venoso", "descartavel"],
  },
  {
    id: "fita-kinesio-5cm-5m",
    categoryId: "fisioterapia-recuperacao",
    brandIds: [],
    name: "Fita Kinesio 5 cm × 5 m",
    imageFrame: { detailAspectRatio: "standard" },
    summary: "Bandagem elástica adesiva em rolo de 5 cm × 5 m, para aplicações funcionais.",
    description: "A fita kinesio é uma bandagem elástica adesiva desenvolvida para acompanhar a textura e a elasticidade da pele, oferecendo suporte sem restringir a amplitude de movimento. Confeccionada em algodão com elastano e adesivo hipoalergênico, é resistente à água e ao suor. É utilizada em aplicações orientadas para suporte muscular e articular, edemas, pós-operatório, prevenção de lesões e acompanhamento fisioterapêutico. A técnica de aplicação e o tempo de uso devem seguir orientação de profissional habilitado. Disponível em cores variadas; consulte a disponibilidade.",
    images: [{ src: "/Produtos/fita-kinesio-5cm-5m.png", alt: "Rolos de fita kinesio nas cores preta, bege, rosa e azul" }],
    highlights: ["Rolo de 5 cm × 5 m", "Elástica e hipoalergênica, resistente à água", "Preserva a amplitude de movimento"],
    badges: ["Fisioterapia", "Bandagem"],
    consultation: ["Cor desejada", "Quantidade", "Orientação de aplicação"],
    keywords: ["fita kinesio", "kinesio tape", "kinesiology tape", "bandagem elastica", "bandagem adesiva", "bandagem funcional", "5cm 5m"],
  },
  {
    id: "escalpe-21g", categoryId: "cuidados-medico-hospitalares", brandIds: ["descarpack"], name: "Escalpe Descartável",
    summary: "Dispositivo com agulha alada e tubo flexível para procedimentos.",
    description: "O escalpe é um dispositivo estéril e descartável para procedimentos conforme orientação profissional.",
    images: [{ src: "/Produtos/escalpe-21g.png", alt: "Escalpe descartável com tubo flexível" }], highlights: ["Estéril", "Uso único", "Tubo flexível"], badges: ["Uso profissional", "Descartável"], consultation: ["Quantidade", "Orientação profissional"], keywords: ["escalpe", "agulha alada", "butterfly"],
  },
  {
    id: "cateter-periferico-iv-14g", categoryId: "cuidados-medico-hospitalares", brandIds: ["descarpack"], name: "Cateter Periférico IV",
    summary: "Cateter periférico intravenoso estéril para acesso venoso.",
    description: "O cateter periférico intravenoso é um dispositivo de uso único para procedimentos conforme orientação de profissional habilitado.",
    images: [{ src: "/Produtos/cateter-periferico-iv-14g.png", alt: "Cateter periférico intravenoso com componente laranja" }], highlights: ["Estéril", "Uso único", "Acesso venoso"], badges: ["Uso profissional", "Descartável"], consultation: ["Tipo de cateter", "Orientação profissional"], keywords: ["cateter iv", "cateter periferico", "acesso venoso"],
  },
  {
    id: "equipo-nutricao-enteral", categoryId: "cuidados-medico-hospitalares", brandIds: [], name: "Equipo para Nutrição Enteral",
    summary: "Equipo para administração de dieta enteral com conector escalonado.",
    description: "O equipo para nutrição enteral possui tubo flexível, câmara de gotejamento e conector escalonado. A utilização deve seguir orientação profissional.",
    images: [{ src: "/Produtos/equipo-nutricao-enteral.png", alt: "Equipo para nutrição enteral com câmara azul e conector escalonado" }], highlights: ["Conector escalonado", "Uso único", "Para dieta enteral"], badges: ["Nutrição enteral", "Uso profissional"], consultation: ["Compatibilidade", "Quantidade", "Orientação profissional"], keywords: ["equipo enteral", "nutricao enteral", "conector escalonado"],
  },
  {
    id: "tubo-extensor-luer-lock-40cm", categoryId: "cuidados-medico-hospitalares", brandIds: [], name: "Tubo Extensor Luer Lock 40 cm",
    summary: "Tubo extensor com 40 cm e conectores Luer Lock nas extremidades.",
    description: "O tubo extensor é um acessório de conexão com 40 cm de comprimento e encaixes Luer Lock. Confirme a compatibilidade e a orientação de uso.",
    images: [{ src: "/Produtos/tubo-extensor-luer-lock-40cm.png", alt: "Tubo extensor transparente de 40 centímetros com conectores Luer Lock" }], highlights: ["40 cm", "Conexão Luer Lock", "Tubo transparente"], badges: ["Conexão", "Uso profissional"], consultation: ["Compatibilidade", "Tipo de conexão", "Orientação profissional"], keywords: ["tubo extensor", "luer lock", "40cm", "extensor"],
  },
  {
    id: "solucao-cloreto-sodio-09-100ml", categoryId: "cuidados-medico-hospitalares", brandIds: [], name: "Soro Fisiológico 0,9% Estéril e Injetável — Sistema Fechado, 100 mL",
    summary: "Soro fisiológico 0,9% estéril e injetável, sistema fechado, 100 mL.",
    description: "Soro fisiológico 0,9% estéril e apirogênico, em sistema fechado que preserva a esterilidade e facilita o manuseio seguro. Indicado para uso venoso injetável, diluição de medicamentos, fluidoterapia e outros procedimentos médicos. Frasco de 100 mL.",
    images: [{ src: "/Produtos/soro-100ml.jpg", alt: "Frasco de soro fisiológico estéril de 100 mililitros" }],
    highlights: ["Estéril e injetável", "Sistema fechado", "Frasco de 100 mL"], badges: ["Cuidados", "Estéril", "100 mL"], consultation: ["Apresentação", "Quantidade", "Orientação profissional"], keywords: ["soro fisiologico", "cloreto sodio", "09", "100ml", "esteril", "injetavel", "sistema fechado"],
  },
  {
    id: "solucao-cloreto-sodio-09-250ml", categoryId: "cuidados-medico-hospitalares", brandIds: [], name: "Soro Fisiológico 0,9% Estéril e Injetável — Sistema Fechado, 250 mL",
    summary: "Soro fisiológico 0,9% estéril e injetável, sistema fechado, 250 mL.",
    description: "Soro fisiológico 0,9% estéril e apirogênico, em sistema fechado que preserva a esterilidade e facilita o manuseio seguro. Indicado para uso venoso injetável, diluição de medicamentos, fluidoterapia e outros procedimentos médicos. Frasco de 250 mL.",
    images: [{ src: "/Produtos/soro-fisiologico-250.webp", alt: "Frasco de soro fisiológico estéril de 250 mililitros" }],
    highlights: ["Estéril e injetável", "Sistema fechado", "Frasco de 250 mL"], badges: ["Cuidados", "Estéril", "250 mL"], consultation: ["Apresentação", "Quantidade", "Orientação profissional"], keywords: ["soro fisiologico", "cloreto sodio", "09", "250ml", "esteril", "injetavel", "sistema fechado"],
  },
  {
    id: "solucao-cloreto-sodio-09-500ml", categoryId: "cuidados-medico-hospitalares", brandIds: [], name: "Soro Fisiológico 0,9% Estéril e Injetável — Sistema Fechado, 500 mL",
    summary: "Soro fisiológico 0,9% estéril e injetável, sistema fechado, 500 mL.",
    description: "Soro fisiológico 0,9% estéril e apirogênico, em sistema fechado que preserva a esterilidade e facilita o manuseio seguro. Indicado para uso venoso injetável, diluição de medicamentos, fluidoterapia e outros procedimentos médicos. Frasco de 500 mL.",
    images: [{ src: "/Produtos/soro-fisiologico-500ml.webp", alt: "Frasco de soro fisiológico estéril de 500 mililitros" }],
    highlights: ["Estéril e injetável", "Sistema fechado", "Frasco de 500 mL"], badges: ["Cuidados", "Estéril", "500 mL"], consultation: ["Apresentação", "Quantidade", "Orientação profissional"], keywords: ["soro fisiologico", "cloreto sodio", "09", "500ml", "esteril", "injetavel", "sistema fechado"],
  },
  {
    id: "solucao-cloreto-sodio-09-10ml", categoryId: "cuidados-medico-hospitalares", brandIds: [], name: "Solução de Cloreto de Sódio 0,9% 10 mL",
    summary: "Solução de cloreto de sódio 0,9% em ampolas monodose de 10 mL.",
    description: "Solução de cloreto de sódio 0,9% apresentada em ampolas monodose de 10 mL. Utilize conforme orientação de profissional habilitado e confirme a disponibilidade.",
    images: [{ src: "/Produtos/solucao-cloreto-sodio-09-10ml.png", alt: "Três ampolas monodose de solução de cloreto de sódio 0,9% de 10 mililitros" }],
    highlights: ["Concentração 0,9%", "Ampolas de 10 mL", "Uso monodose"], badges: ["Cuidados", "10 mL"], consultation: ["Apresentação", "Quantidade", "Orientação profissional"], keywords: ["soro fisiologico", "cloreto sodio", "09", "10ml", "ampola", "monodose"],
  },
  {
    id: "agua-para-injecao-10ml", categoryId: "cuidados-medico-hospitalares", brandIds: [], name: "Água para Injeção 10 mL",
    summary: "Água para injeção em ampolas monodose de 10 mL.",
    description: "Água para injeção apresentada em ampolas monodose de 10 mL. Utilize conforme orientação de profissional habilitado e confirme a disponibilidade.",
    images: [{ src: "/Produtos/agua-injecao.webp", alt: "Cinco ampolas monodose de água para injeção de 10 mililitros" }],
    highlights: ["Ampolas de 10 mL", "Uso monodose", "Para preparo"], badges: ["Cuidados", "10 mL"], consultation: ["Apresentação", "Quantidade", "Orientação profissional"], keywords: ["agua para injecao", "10ml", "ampola", "monodose", "preparo"],
  },
  {
    id: "bolsa-coletora-urina-sistema-fechado", categoryId: "cuidados-medico-hospitalares", brandIds: ["premium"], name: "Bolsa Coletora de Urina – Sistema Fechado",
    summary: "Bolsa coletora de urina em sistema fechado, com válvula antirrefluxo.",
    description: "Bolsa coletora de urina em sistema fechado, com tubo de conexão, graduação e válvula de drenagem. Utilize conforme orientação de profissional habilitado e confirme a disponibilidade.",
    images: [{ src: "/Produtos/bolsa-coletora-urina-sistema-fechado.png", alt: "Bolsa coletora de urina em sistema fechado" }],
    highlights: ["Sistema fechado", "Válvula antirrefluxo", "Com graduação"], badges: ["Cuidados", "Descartável"], consultation: ["Apresentação", "Quantidade", "Orientação profissional"], keywords: ["bolsa coletora", "urina", "sistema fechado", "antirrefluxo", "drenagem"],
  },
  {
    id: "esponja-com-escova-clorexidina",
    categoryId: "cuidados-medico-hospitalares",
    brandIds: [],
    name: "Esponja com Escova",
    summary:
      "Esponja médica estéril e descartável para antissepsia cirúrgica das mãos, braços e preparo da pele.",
    description:
      "A esponja com escova é um produto médico estéril e descartável indicado para a antissepsia cirúrgica das mãos, braços e preparo da pele de profissionais da saúde antes de procedimentos invasivos. Cada unidade vem impregnada com 22 ml de digliconato de clorexidina a 2% com tensoativos.",
    images: [
      {
        src: "/Produtos/esponja-com-escova-clorexidina.png",
        alt: "Esponja estéril com escova para antissepsia cirúrgica, sem marca",
      },
    ],
    highlights: [
      "Clorexidina 2% com tensoativos",
      "Estéril e descartável",
      "Esponja com escova integrada",
    ],
    badges: ["Estéril", "Uso único"],
    consultation: ["Apresentação", "Quantidade", "Disponibilidade"],
    keywords: [
      "esponja com escova",
      "clorexidina 2%",
      "antissepsia cirurgica",
      "escova cirurgica",
      "preparo da pele",
      "esteril",
      "descartavel",
    ],
  },
  {
    id: "alcool-70-100ml", categoryId: "cuidados-medico-hospitalares", brandIds: [], name: "Álcool Líquido 70% INPM 100 mL",
    summary: "Álcool líquido 70% INPM em frasco de 100 mL para higienização.",
    description: "Álcool líquido com graduação de 70% INPM, apresentado em frasco de 100 mL. Utilize conforme as orientações de segurança indicadas no rótulo.",
    images: [{ src: "/Produtos/alcool.png", alt: "Frasco de álcool líquido 70% INPM de 100 mililitros" }],
    highlights: ["70% INPM", "Frasco de 100 mL", "Uso externo"], badges: ["Higienização", "100 mL"], consultation: ["Apresentação", "Quantidade", "Orientações de uso"], keywords: ["alcool", "70", "inpm", "100ml", "higienizacao"],
  },
  {
    id: "corretor-postural-boost", categoryId: "ortopedia-mobilidade", brandIds: ["hidrolight"], name: "Corretor Postural Boost",
    summary: "Corretor postural com suporte torácico e tiras de ajuste por fecho aderente.",
    description: "Corretor postural com modelagem anatômica, suporte na região torácica e fechamento ajustável. Indicado para auxiliar na correção postural conforme orientação profissional.",
    images: [{ src: "/Produtos/corretor-postural-boost-hidrolight.webp", alt: "Corretor postural Boost preto" }],
    highlights: ["Suporte torácico", "Tiras ajustáveis", "Fecho aderente"], badges: ["Ortopedia", "Ajustável"], consultation: ["Tamanho", "Medidas", "Orientação profissional"], keywords: ["corretor postural", "boost", "postura", "coluna", "toracico", "OR1452"],
  },
  {
    id: "dispositivo-incontinencia-masculina-g", categoryId: "cuidados-medico-hospitalares", brandIds: [], name: "Dispositivo para Incontinência Urinária Masculina G",
    summary: "Dispositivo externo masculino para coleta de urina, no tamanho G.",
    description: "Dispositivo externo para incontinência urinária masculina, apresentado no tamanho G, com medida aproximada de 10 cm por 4 cm. Utilize conforme orientação de profissional habilitado.",
    images: [{ src: "/Produtos/dispositivo-incontinencia-masculina-g.png", alt: "Dispositivo externo para incontinência urinária masculina" }],
    highlights: ["Tamanho G", "Uso externo", "Para coleta de urina"], badges: ["Cuidados", "Descartável"], consultation: ["Tamanho", "Apresentação", "Orientação profissional"], keywords: ["incontinencia", "urinaria", "masculina", "coletor", "dispositivo", "tamanho g"],
  },
  {
    id: "bolas-algodao-100g", categoryId: "cuidados-medico-hospitalares", brandIds: [], name: "Bolas de Algodão 100 g",
    summary: "Bolas de algodão branco em embalagem de 100 g.",
    description: "Bolas de algodão macias para cuidados e higienização. Apresentação em embalagem de 100 g.",
    images: [{ src: "/Produtos/bolas-algodao-100g.png", alt: "Embalagem com bolas de algodão branco" }],
    highlights: ["Algodão branco", "Embalagem de 100 g", "Uso para cuidados"], badges: ["Cuidados", "100 g"], consultation: ["Apresentação", "Quantidade", "Disponibilidade"], keywords: ["algodao", "bolas de algodao", "100g", "higienizacao"],
  },
  {
    id: "caixa-descarpack-7-litros-perfuro-cortante", categoryId: "cuidados-medico-hospitalares", brandIds: ["descarpack"], name: "Caixa para Descarte de Perfuro Cortantes 7 Litros",
    summary: "Caixa coletora para descarte de material perfuro cortante, capacidade de 7 litros.",
    description: "Caixa composta de papel resistente e saco plástico resistente, com capacidade para 7 litros e alça dupla para transporte. Produzida de acordo com a norma NBR 13853.",
    images: [{ src: "/Produtos/caixa-descarpack-7-litros-perfuro-cortante.webp", alt: "Caixa coletora Descarpack para descarte de perfuro cortantes de 7 litros" }],
    highlights: ["Capacidade para 7 litros", "Alça dupla para transporte", "Conforme NBR 13853"], badges: ["Descarte", "7 litros"], consultation: ["Quantidade", "Disponibilidade"], keywords: ["caixa perfuro cortante", "descarpack", "coletor", "7 litros", "nbr 13853"],
  },
  {
    id: "caixa-descarpack-3-litros-perfuro-cortante", categoryId: "cuidados-medico-hospitalares", brandIds: ["descarpack"], name: "Caixa para Descarte de Perfuro Cortantes 3 Litros",
    summary: "Caixa coletora para descarte de material perfuro cortante, capacidade de 3 litros.",
    description: "Caixa composta de papel resistente e saco plástico resistente, com capacidade para 3 litros e alça dupla para transporte. Produzida de acordo com a norma NBR 13853.",
    images: [{ src: "/Produtos/caixa-perfurocortantes-3L.jpeg", alt: "Caixa coletora Descarpack para descarte de perfuro cortantes de 3 litros" }],
    highlights: ["Capacidade para 3 litros", "Alça dupla para transporte", "Conforme NBR 13853"], badges: ["Descarte", "3 litros"], consultation: ["Quantidade", "Disponibilidade"], keywords: ["caixa perfuro cortante", "descarpack", "coletor", "3 litros", "nbr 13853"],
  },
  {
    id: "tubo-recortavel-calos-malha-gel", categoryId: "ortopedia-mobilidade", brandIds: ["hidrolight"], name: "Tubo Recortável para Calos – Malha Revestida com Gel",
    summary: "Tubo recortável para proteção dos dedos, com malha macia revestida internamente em gel.",
    description: "Tubo para proteção dos dedos que ajuda a diminuir o atrito com o calçado. Possui malha revestida internamente em gel e pode ser cortado conforme o tamanho desejado.",
    images: [{ src: "/Produtos/tubo-recortavel-calos-hidrolight.png", alt: "Tubo recortável de malha bege revestido internamente com gel" }],
    highlights: ["Malha com gel", "Recortável", "Para proteção dos dedos"], badges: ["Foot care", "Ajustável"], consultation: ["Tamanho", "Apresentação", "Orientação profissional"], keywords: ["tubo recortavel", "calos", "gel", "dedos", "foot care", "FT305"],
  },
  {
    id: "mascara-tripla-descartavel-50", categoryId: "cuidados-medico-hospitalares", brandIds: ["medix"], name: "Máscara Tripla Descartável Branca – 50 Unidades",
    summary: "Máscara descartável branca de tripla camada, em caixa com 50 unidades.",
    description: "Máscara descartável branca com três camadas e elásticos auriculares. Apresentação em caixa com 50 unidades.",
    images: [{ src: "/Produtos/mascara-tripla-descartavel-50.png", alt: "Caixa com máscaras descartáveis brancas de tripla camada" }],
    highlights: ["Tripla camada", "Elásticos auriculares", "Caixa com 50 unidades"], badges: ["Descartável", "50 unidades"], consultation: ["Apresentação", "Quantidade", "Disponibilidade"], keywords: ["mascara", "tripla", "descartavel", "branca", "50 unidades"],
  },
  {
    id: "touca-descartavel-100", categoryId: "cuidados-medico-hospitalares", brandIds: [], name: "Touca Descartável – 100 Unidades",
    summary: "Touca descartável branca com elástico, em pacote com 100 unidades.",
    description: "Touca descartável sanfonada com elástico para cobertura dos cabelos. Apresentação em pacote com 100 unidades.",
    images: [{ src: "/Produtos/touca-descartavel-100.png", alt: "Pacote de toucas descartáveis brancas com uma touca aberta" }],
    highlights: ["Com elástico", "Sanfonada", "Pacote com 100 unidades"], badges: ["Descartável", "100 unidades"], consultation: ["Apresentação", "Quantidade", "Disponibilidade"], keywords: ["touca", "descartavel", "sanfonada", "elastico", "100 unidades"],
  },
  {
    id: "bolsa-agua-quente", categoryId: "fisioterapia-recuperacao", brandIds: ["hidrolight"], name: "Bolsa de Água Quente",
    summary: "Bolsa de borracha para aplicação de calor local, com tampa de vedação.",
    description: "Bolsa de água quente para termoterapia local e auxílio no relaxamento muscular. Encha conforme as instruções do produto, sem utilizar água fervente.",
    images: [{ src: "/Produtos/bolsa-agua-quente-hidrolight.png", alt: "Bolsa de água quente vermelha com tampa preta" }],
    highlights: ["Aplicação de calor", "Tampa de vedação", "Borracha flexível"], badges: ["Termoterapia", "Reutilizável"], consultation: ["Capacidade", "Apresentação", "Orientações de uso"], keywords: ["bolsa agua quente", "termoterapia", "calor", "relaxamento muscular", "BAQ101", "BAQ102"],
  },
  {
    id: "colchao-pneumatico",
    categoryId: "cuidados-medico-hospitalares",
    brandIds: ["hidrolight", "dellamed"],
    name: "Colchões Pneumáticos",
    imageFrame: { detailAspectRatio: "landscape" },
    summary:
      "Sistema com colchão de ar e compressor para apoio à rotina de pessoas com mobilidade reduzida.",
    description:
      "O colchão pneumático alterna pontos de apoio por meio de células de ar conectadas a um compressor. Modelos, ciclos, capacidade suportada e peças incluídas variam. Consulte o kit completo, as dimensões e a compatibilidade com a cama antes da escolha.",
    images: [
      {
        src: `${hidrolightBase}/SC400 - KIT Colchão Pneumático/COLCHÃO PNEUMÁTICO.png`,
        alt: "Colchão pneumático com células de ar",
      },
      {
        src: `${hidrolightBase}/SC400 - KIT Colchão Pneumático/Bomba-Compressora.png`,
        alt: "Compressor para colchão pneumático",
      },
      {
        src: `${hidrolightBase}/SC400 - KIT Colchão Pneumático/kit reparos.png`,
        alt: "Kit de reparo para colchão pneumático",
      },
    ],
    highlights: [
      "Colchão com células de ar",
      "Compressor para alternância de pressão",
      "Kits e acessórios variam por modelo",
    ],
    badges: ["Cuidados em casa", "Kit"],
    consultation: ["Dimensões", "Capacidade suportada", "Itens incluídos no kit"],
    keywords: ["colchao pneumatico", "colchao ar", "compressor", "cuidados casa"],
  },
  {
    id: "bolsa-termica-gel",
    categoryId: "fisioterapia-recuperacao",
    brandIds: ["hidrolight", "kestal"],
    name: "Bolsas Térmicas em Gel",
    imageFrame: { catalogScale: 1.1 },
    summary:
      "Bolsa reutilizável para aplicação de frio ou calor em terapias orientadas.",
    description:
      "A bolsa térmica em gel pode ser preparada para aplicação fria ou quente, seguindo as instruções do fabricante e a orientação recebida. Está disponível em diferentes formatos e tamanhos para se adaptar a diversas regiões do corpo.",
    images: [
      {
        src: `${hidrolightBase}/bolsa térmica gel 200g - frente.jpg`,
        alt: "Embalagem de bolsa térmica em gel reutilizável",
      },
    ],
    highlights: [
      "Uso frio ou quente conforme instruções",
      "Produto reutilizável",
      "Diferentes tamanhos e formatos",
    ],
    badges: ["Frio e calor", "Reutilizável"],
    consultation: ["Tamanho da bolsa", "Região de aplicação", "Modelo disponível"],
    keywords: ["bolsa termica", "gel", "compressa fria", "compressa quente"],
  },
  {
    id: "bolas-de-fisioterapia",
    categoryId: "fisioterapia-recuperacao",
    brandIds: [],
    name: "Bolas de Fisioterapia",
    summary:
      "Bolas para exercícios de preensão, fortalecimento e estímulo sensorial das mãos.",
    description:
      "As bolas de fisioterapia podem ser utilizadas em exercícios de preensão, fortalecimento, coordenação motora e estímulo sensorial. Disponíveis em modelos com superfície lisa ou texturizada, conforme a necessidade do exercício e a disponibilidade.",
    images: [
      {
        src: "/Produtos/bolas-fisioterapia-lisa-texturizada.png",
        alt: "Bolas de fisioterapia azuis, uma lisa e outra texturizada",
      },
    ],
    highlights: [
      "Modelos liso e texturizado",
      "Exercícios de preensão e fortalecimento",
      "Auxilia na coordenação motora",
    ],
    badges: ["Fisioterapia", "Exercícios"],
    consultation: ["Modelo", "Textura", "Disponibilidade"],
    keywords: [
      "bola fisioterapia",
      "bola exercicio mao",
      "bola lisa",
      "bola texturizada",
      "fortalecimento mao",
      "preensao",
      "coordenacao motora",
    ],
  },
  {
    id: "tubo-de-latex-200",
    categoryId: "cuidados-medico-hospitalares",
    brandIds: [],
    name: "Tubo de Látex",
    summary:
      "Tubo de látex para garroteamento, condução de oxigênio e fluidos, além de usos leves em fisioterapia.",
    description:
      "O tubo de látex número 200 serve para garroteamento em exames de sangue, condução de oxigênio e fluidos em hospitais, além de exercícios leves de fisioterapia e confecção de estilingues. Ele possui cerca de 3 mm de diâmetro interno e 5,5 mm de diâmetro externo.",
    images: [
      {
        src: "/Produtos/tubo-de-latex-200.png",
        alt: "Tubo de látex nº 200 enrolado, sem marca",
      },
    ],
    highlights: [
      "Para garroteamento em exames de sangue",
      "Condução de oxigênio e fluidos",
      "Diâmetro interno de aproximadamente 3 mm",
    ],
    badges: ["Uso hospitalar", "Látex"],
    consultation: ["Comprimento", "Medidas", "Disponibilidade"],
    keywords: [
      "tubo de latex 200",
      "tubo latex n 200",
      "tubo elastico",
      "garroteamento",
      "oxigenio",
      "fluidos hospitalares",
      "fisioterapia",
      "garrote latex",
    ],
  },
  {
    id: "hand-grip",
    categoryId: "fisioterapia-recuperacao",
    brandIds: ["hidrolight"],
    name: "Hand Grip",
    imageFrame: {
      catalogScale: 1.5,
      detailScale: 1.25,
      detailAspectRatio: "landscape",
    },
    summary:
      "Acessório portátil para exercícios de preensão e fortalecimento das mãos e antebraços.",
    description:
      "O hand grip oferece resistência ao movimento de fechamento da mão e pode integrar exercícios orientados de fortalecimento e coordenação. Resistência, formato da empunhadura e possibilidade de ajuste variam conforme o modelo.",
    images: [
      {
        src: `${hidrolightBase}/FL01 - Hand Grip Basic.jpg`,
        alt: "Hand grip com molas e empunhaduras laranjas",
      },
    ],
    highlights: [
      "Exercícios para mãos e antebraços",
      "Formato compacto e portátil",
      "Resistências variam por modelo",
    ],
    badges: ["Fortalecimento", "Portátil"],
    consultation: ["Nível de resistência", "Modelo fixo ou ajustável", "Finalidade do exercício"],
    keywords: ["hand grip", "fortalecimento mao", "exercicio antebraco"],
  },
  {
    id: "kit-mini-band-hidrolight",
    categoryId: "fisioterapia-recuperacao",
    brandIds: ["hidrolight"],
    name: "Kit Mini Band Hidrolight",
    summary:
      "Kit com 3 ou 5 faixas elásticas circulares para exercícios de força, mobilidade e reabilitação.",
    description:
      "O Kit Mini Band pode ser composto por 3 ou 5 faixas elásticas circulares, com tensões diferentes, que podem ser utilizadas individualmente ou sobrepostas para aumentar a resistência durante os exercícios. Treinos funcionais, reabilitação, yoga, pilates e academias.",
    images: [
      {
        src: "/Produtos/FL72-Mini-Band-kit-5-logo-vertical-1024x1024.webp",
        alt: "Kit Hidrolight com cinco faixas elásticas circulares Mini Band",
        brandId: "hidrolight",
      },
    ],
    highlights: [
      "Opções com 3 ou 5 faixas",
      "Uso individual ou sobreposto",
      "Para treinos, reabilitação, yoga e pilates",
    ],
    badges: ["Hidrolight", "Exercícios"],
    consultation: ["Nível de resistência", "Quantidade de faixas", "Disponibilidade"],
    keywords: ["mini band", "kit mini band", "faixa elastica circular", "hidrolight", "FL72", "resistencia"],
  },
  {
    id: "faixa-elastica-para-exercicios",
    categoryId: "fisioterapia-recuperacao",
    brandIds: ["hidrolight"],
    name: "Faixas Elásticas",
    imageFrame: {
      catalogScale: 1.55,
      detailScale: 1.3,
      detailAspectRatio: "landscape",
    },
    summary:
      "Faixas de resistência para exercícios orientados de força, mobilidade e reabilitação.",
    description:
      "As faixas elásticas permitem variar a resistência em exercícios para diferentes grupos musculares. Cores, comprimentos, formatos e níveis de tensão mudam entre as linhas. A intensidade deve ser selecionada de acordo com o exercício e a orientação profissional.",
    images: [
      {
        src: `${hidrolightBase}/FL42C - Faixa Elástica cinza - com resistencia NOVA.png`,
        alt: "Faixa elástica cinza para exercícios com resistência",
      },
    ],
    highlights: [
      "Diferentes níveis de resistência",
      "Uso em força, mobilidade e alongamento",
      "Formatos e comprimentos variados",
    ],
    badges: ["Exercícios", "Resistência"],
    consultation: ["Nível de resistência", "Comprimento", "Tipo de faixa"],
    keywords: ["faixa elastica", "resistencia", "fisioterapia", "exercicio"],
  },
  {
    id: "palmilhas-de-silicone",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight"],
    name: "Palmilhas de Silicone",
    summary:
      "Palmilhas com áreas de diferentes densidades para conforto e distribuição de pressão ao caminhar.",
    description:
      "A palmilha com arco brando, piloto e ponto azul é confeccionada em silicone e possui áreas de diferentes densidades. Ela auxilia a reduzir o impacto ao caminhar e a aliviar a pressão nas regiões do calcanhar e dos metatarsos. Consulte a grade de tamanhos e a orientação profissional para escolher o modelo adequado.",
    images: [
      {
        src: `${hidrolightBase}/hidrolight-03-22__edit_flat.png`,
        alt: "Palmilha de silicone branca com pontos azuis",
        brandId: "hidrolight",
      },
    ],
    highlights: [
      "Silicone com áreas de diferentes densidades",
      "Opções conforme a numeração do calçado",
      "Uso dentro do calçado",
    ],
    badges: ["Cuidados com os pés", "Silicone"],
    consultation: ["Modelo de palmilha", "Numeração do calçado", "Disponibilidade"],
    keywords: ["palmilha", "silicone", "ponto azul", "arco", "metatarso", "hidrolight"],
  },
  {
    id: "almotolias",
    categoryId: "cuidados-medico-hospitalares",
    brandIds: [],
    name: "Almotolias",
    summary:
      "Frascos com bico aplicador para organizar e dispensar líquidos em rotinas de cuidado e procedimentos.",
    description:
      "As almotolias são frascos com bico aplicador, disponíveis em versões transparentes e âmbar. São utilizadas para armazenar e aplicar líquidos conforme a rotina indicada; capacidade, material e tipo de tampa variam por modelo. Consulte a equipe para confirmar a opção disponível e a finalidade adequada.",
    images: [
      {
        src: `${produtosBase}/automolia-plastica-transparente.png`,
        alt: "Almotolia plástica transparente com bico aplicador",
        colorSwatch: "clear",
      },
      {
        src: `${produtosBase}/automolia-250-marrom.png`,
        alt: "Almotolia plástica âmbar com bico aplicador",
        colorSwatch: "amber",
      },
    ],
    highlights: ["Bico aplicador", "Versões transparente e âmbar", "Capacidades variam por modelo"],
    badges: ["Cuidados em casa", "Uso profissional"],
    colorOptions: [
      { label: "Transparente", swatch: "clear" },
      { label: "Âmbar", swatch: "amber" },
    ],
    consultation: ["Cor e capacidade", "Material", "Finalidade de uso"],
    keywords: ["almotolia", "frasco aplicador", "frasco bico", "liquidos"],
  },
  {
    id: "garrote",
    categoryId: "cuidados-medico-hospitalares",
    brandIds: ["premium"],
    name: "Garrote",
    summary:
      "Acessório ajustável para auxílio em procedimentos de coleta e acesso venoso realizados por profissional habilitado.",
    description:
      "O garrote é utilizado para produzir compressão temporária durante procedimentos de coleta ou acesso venoso. O modelo disponível possui faixa ajustável e fecho de liberação rápida. Deve ser utilizado apenas por profissional habilitado, seguindo os protocolos de segurança e higiene aplicáveis.",
    images: [
      {
        src: `${produtosBase}/garrote-premium.jpg`,
        alt: "Garrote azul ajustável com fecho branco",
        brandId: "premium",
      },
    ],
    highlights: ["Faixa ajustável", "Fecho de liberação rápida", "Uso profissional"],
    badges: ["Coleta", "Uso profissional"],
    consultation: ["Modelo", "Material", "Disponibilidade"],
    keywords: ["garrote", "coleta", "punção", "acesso venoso", "premium"],
  },
  {
    id: "forracao-ortopedica-para-calcanhar",
    categoryId: "ortopedia-mobilidade",
    brandIds: [],
    name: "Forração Ortopédica para Calcanhar",
    summary:
      "Suporte acolchoado ajustável para conforto e proteção da região do calcanhar em pessoas acamadas.",
    description:
      "A forração ortopédica para calcanhar é confeccionada em espuma no formato caixa de ovo e possui fecho de contato. Foi desenvolvida para ajudar a proteger a região do tornozelo de pessoas acamadas. Consulte a equipe sobre disponibilidade e a orientação profissional para o uso adequado.",
    images: [
      {
        src: "/Produtos/forracao-ortopedica-calcanhar.png",
        alt: "Forração ortopédica acolchoada para calcanhar",
      },
    ],
    highlights: ["Espuma acolchoada", "Fecho ajustável", "Produto lavável"],
    badges: ["Cuidados em casa", "Conforto"],
    consultation: ["Indicação profissional", "Tamanho e ajuste", "Disponibilidade"],
    keywords: ["forracao calcanhar", "protetor calcanhar", "chantal", "acamada"],
  },
  {
    id: "sandalia-para-gesso",
    categoryId: "ortopedia-mobilidade",
    brandIds: [],
    name: "Sandália para Gesso",
    summary:
      "Sandália bilateral com solado em EVA e fechos ajustáveis para uso sobre bota gessada.",
    description:
      "A sandália para gesso é uma opção de apoio e proteção para uso sobre bota gessada, quando liberado pelo profissional responsável. Possui solado de EVA, laterais em tecido sintético e fecho de contato, em tamanhos definidos pela numeração do calçado.",
    images: [
      {
        src: "/Produtos/sandalia-para-gesso-branca.png",
        alt: "Sandália ortopédica branca para uso sobre gesso",
        colorSwatch: "white",
      },
      {
        src: "/Produtos/sandalia-para-gesso-preta.png",
        alt: "Sandália ortopédica preta para uso sobre gesso",
        colorSwatch: "black",
      },
    ],
    highlights: ["Uso bilateral", "Solado em EVA", "Fechos ajustáveis"],
    badges: ["Órtese", "Imobilização"],
    colorOptions: [
      { label: "Branca", swatch: "white" },
      { label: "Preta", swatch: "black" },
    ],
    consultation: ["Número do calçado", "Uso indicado", "Disponibilidade"],
    keywords: ["sandalia gesso", "bota gessada", "imobilizacao", "chantal"],
  },
];

export const catalogProducts = [...rawCatalogProducts].sort((a, b) => {
  const categoryA = catalogCategoryOrderMap.get(a.categoryId) ?? catalogCategoryOrder.length;
  const categoryB = catalogCategoryOrderMap.get(b.categoryId) ?? catalogCategoryOrder.length;

  if (categoryA !== categoryB) return categoryA - categoryB;

  return a.name.localeCompare(b.name, "pt-BR", { sensitivity: "base" });
});

export function getCatalogCategory(categoryId: CatalogCategoryId) {
  return catalogCategories.find((category) => category.id === categoryId)!;
}

export function getCatalogProductPath(product: CatalogProduct) {
  return `/produtos/${product.id}`;
}

/**
 * Some supplied photos depict a specific manufacturer's product, even when the
 * generic catalog group is sold under more than one brand. This lets the brand
 * filter avoid presenting one manufacturer's photo as another manufacturer's
 * model.
 */
export function getCatalogExclusiveImageBrandIds(product: CatalogProduct): StoreBrandId[] {
  const detectedBrands = product.images.map((image) => {
    if (image.brandId) return image.brandId;
    if (image.src.startsWith(`${hidrolightBase}/`)) return "hidrolight" as const;
    return null;
  });

  if (detectedBrands.some((brandId) => brandId === null)) return [];

  return [...new Set(detectedBrands.filter((brandId) => brandId !== null))];
}
