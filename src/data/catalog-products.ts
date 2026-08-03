import type { StoreBrandId } from "@/data/brands";

export type CatalogCategoryId =
  | "monitoramento"
  | "ortopedia-mobilidade"
  | "cuidados-medico-hospitalares"
  | "fisioterapia-recuperacao";

export interface CatalogProductImage {
  src: string;
  alt: string;
  /** Set when the photo depicts one specific manufacturer's product, even though this
   * catalog entry is also sold under other brands — lets the brand filter avoid showing
   * a competitor's device as if it were generic. */
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

export const catalogProducts: CatalogProduct[] = [
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
    name: "Estetoscópio Littmann Classic III",
    summary: "Estetoscópio preto de dupla face para ausculta clínica de adultos e crianças.",
    description: "Possui tubo preto, olivas macias e auscultador de dupla face. O lado pediátrico pode ser usado como campânula aberta com o aro apropriado. Consulte a disponibilidade antes da compra.",
    images: [{ src: "/Produtos/estetoscopio-littmann-classic-iii.png", alt: "Estetoscópio preto Littmann Classic III com auscultador metálico", brandId: "3m" }],
    highlights: ["Dupla face", "Auscultador de dupla face", "Tubo preto"], badges: ["Ausculta", "Clínico"],
    consultation: ["Modelo", "Cor", "Disponibilidade"], keywords: ["estetoscopio littmann", "classic iii", "estetoscopio preto"],
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
    name: "Estetoscópio Simples",
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
    id: "lancetas",
    categoryId: "monitoramento",
    brandIds: ["gtech", "accumed-glicomed"],
    name: "Lancetas",
    imageFrame: { detailAspectRatio: "standard" },
    summary:
      "Lancetas descartáveis para obtenção da amostra capilar em testes de glicemia.",
    description:
      "As lancetas são utilizadas para a punção capilar durante o monitoramento da glicemia. Existem opções avulsas, universais e modelos próprios para determinados lancetadores, com diferentes calibres e apresentações. Consulte a compatibilidade antes da compra.",
    images: [
      {
        src: `${produtosBase}/lancetas.webp`,
        alt: "Conjunto de lancetas descartáveis",
      },
    ],
    highlights: [
      "Uso individual e descartável",
      "Calibres e formatos variados",
      "Compatibilidade conforme o lancetador",
    ],
    badges: ["Descartável", "Glicemia"],
    consultation: ["Compatibilidade", "Calibre", "Quantidade por embalagem"],
    keywords: ["lanceta", "lancetador", "punção capilar"],
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
    name: "Joelheiras",
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
    id: "joelheira-ajustavel-hastes-aco",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight"],
    name: "Joelheira Ajustável com Hastes de Aço Flexíveis",
    summary: "Joelheira ajustável com orifício patelar e hastes laterais flexíveis para suporte do joelho.",
    description: "Joelheira de tamanho único com abas de fecho aderente que permitem graduar a compressão. O orifício patelar e as hastes laterais flexíveis auxiliam na estabilidade da articulação conforme orientação profissional.",
    images: [{ src: "/Produtos/joelheira-ajustavel-hidrolight.webp", alt: "Joelheira ajustável preta com orifício patelar e hastes laterais" }],
    highlights: ["Hastes laterais flexíveis", "Compressão ajustável", "Orifício patelar"],
    badges: ["Joelho", "Tamanho único"],
    consultation: ["Medidas", "Finalidade de uso", "Orientação profissional"],
    keywords: ["joelheira ajustavel", "hastes aco", "orificio patelar", "joelho", "OR59"],
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
      "Órtese com duas talas, tecido respirável e ajuste extra no polegar para maior estabilidade.",
    description:
      "A Órtese Comfort Air com Polegar foi desenvolvida com tecido que permite a transpiração, favorece o conforto térmico através dos microfuros e possui duas talas para maior estabilidade e proteção, além de ajuste extra no polegar. É indicada para imobilização e alinhamento da articulação, período pré e pós-operatório, reabilitação de fraturas de punho, L.E.R., D.O.R.T., tendinites, tenossinovites, lesões ligamentares, síndrome do túnel do carpo e rizartrose.",
    images: [
      {
        src: `${hidrolightBase}/_MTS9456_.png`,
        alt: "Órtese Comfort Air com polegar",
      },
    ],
    highlights: [
      "Tecido respirável com microfuros",
      "Duas talas para estabilidade",
      "Ajuste extra no polegar",
    ],
    badges: ["Punho", "Órtese"],
    consultation: ["Lado de uso", "Medida do punho", "Indicação clínica"],
    keywords: ["ortese comfort air", "punho", "polegar", "tala", "carpo"],
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
    name: "Faixa Elástica Basic – 3 Painéis",
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
        alt: "Pessoa usando a Faixa Elástica Basic Hidrolight de 3 painéis",
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
    keywords: ["faixa elastica basic", "or2007", "faixa 3 paineis", "hidrolight"],
  },
  {
    id: "cinta-lombar",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight", "kestal", "medi"],
    name: "Cintas Lombares",
    imageInset: "medium",
    imageFrame: { detailFit: "cover" },
    summary:
      "Cintas ajustáveis para suporte da região lombar, com diferentes estruturas e reforços.",
    description:
      "A cinta lombar envolve a região inferior das costas e pode combinar tecido elástico, hastes flexíveis e faixas de ajuste. Os modelos oferecem diferentes níveis de contenção, e a escolha deve considerar medida, conforto e orientação de uso.",
    images: [
      {
        src: `${hidrolightBase}/_MTS9331_.png`,
        alt: "Pessoa ajustando cinta de suporte lombar",
      },
    ],
    highlights: [
      "Suporte da região lombar",
      "Faixas adicionais de ajuste",
      "Estruturas e alturas variadas",
    ],
    badges: ["Lombar", "Ajustável"],
    consultation: ["Circunferência da cintura", "Altura da cinta", "Nível de suporte"],
    keywords: ["cinta lombar", "colete lombar", "suporte coluna"],
  },
  {
    id: "colete-putti-basic-baixo",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight"],
    name: "Colete Putti Basic Baixo",
    imageFrame: { detailAspectRatio: "landscape" },
    summary:
      "Colete lombar com talas moldáveis e compressão ajustável para suporte da região lombossacra.",
    description:
      "O Colete Putti Basic Baixo (OR2011) combina tecido elástico, hastes flexíveis e talas semirrígidas moldáveis para oferecer estabilização e compressão na região lombar. O tamanho adequado deve ser definido pela circunferência abdominal e o uso deve seguir orientação profissional.",
    images: [
      {
        src: "/Produtos/colete-putti-basic-baixo-hidrolight.webp",
        alt: "Colete Putti Basic Baixo Hidrolight para suporte lombar",
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
    keywords: ["colete putti", "putti baixo", "putti basic", "or2011", "colete lombar", "hidrolight"],
  },
  {
    id: "bota-imobilizadora",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight", "kestal"],
    name: "Botas Imobilizadoras",
    imageInset: "medium",
    summary:
      "Bota ortopédica com estrutura e fechos ajustáveis para imobilização do tornozelo e do pé.",
    description:
      "A bota imobilizadora ajuda a limitar movimentos do pé e tornozelo durante a recuperação. Há versões curtas e longas, com diferenças em solado, estrutura e acolchoamento. O modelo e o tamanho devem seguir a indicação recebida.",
    images: [
      {
        src: `${hidrolightBase}/OR1030 - Bota Imobilizadora Longa diagonal.jpg`,
        alt: "Bota imobilizadora ortopédica longa",
      },
    ],
    highlights: [
      "Opções curtas e longas",
      "Fechos ajustáveis e estrutura acolchoada",
      "Solados e níveis de imobilização variados",
    ],
    badges: ["Pé e tornozelo", "Imobilização"],
    consultation: ["Modelo curto ou longo", "Numeração do calçado", "Lado e indicação"],
    keywords: ["bota imobilizadora", "bota ortopedica", "robofoot"],
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
    name: "Andadores",
    summary:
      "Auxiliar de marcha em versões fixas, articuladas, dobráveis ou com rodas.",
    description:
      "O andador amplia a base de apoio durante a marcha e está disponível em diferentes configurações. Modelos fixos, articulados, dobráveis ou com rodas atendem rotinas distintas. Altura, capacidade suportada e modo de uso devem ser conferidos antes da escolha.",
    images: [
      {
        src: `${produtosBase}/andador.jpg`,
        alt: "Andador de alumínio com regulagem de altura",
      },
    ],
    highlights: [
      "Modelos fixos, articulados ou com rodas",
      "Regulagem de altura",
      "Opções dobráveis para transporte",
    ],
    badges: ["Mobilidade", "Regulável"],
    consultation: ["Tipo de andador", "Altura do usuário", "Capacidade suportada"],
    keywords: ["andador", "auxiliar marcha", "mobilidade"],
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
    name: "Muletas Canadenses",
    imageFrame: { detailAspectRatio: "standard" },
    summary:
      "Muleta com apoio no antebraço e regulagens para diferentes alturas e necessidades de marcha.",
    description:
      "A muleta canadense utiliza braçadeira no antebraço e empunhadura para distribuir o apoio durante a marcha. Pode ter regulagem inferior e superior, além de diferentes formatos de braçadeira. Confirme altura, capacidade e uso unilateral ou em par.",
    images: [
      {
        src: `${produtosBase}/muleta-canadense.webp`,
        alt: "Par de muletas canadenses com apoio de antebraço",
      },
    ],
    highlights: [
      "Apoio de antebraço",
      "Regulagens conforme o modelo",
      "Venda unitária ou em par conforme estoque",
    ],
    badges: ["Mobilidade", "Antebraço"],
    consultation: ["Altura do usuário", "Capacidade suportada", "Quantidade necessária"],
    keywords: ["muleta canadense", "muleta antebraco", "mobilidade"],
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
    name: "Ponteira 22 mm para Muleta Axilar",
    summary:
      "Ponteira de borracha para reposição em muletas axilares compatíveis com tubo de 22 mm.",
    description:
      "A ponteira 22 mm é um acessório de reposição para a base da muleta axilar. Sua estrutura de borracha auxilia na aderência ao piso. Confirme o diâmetro do tubo e a compatibilidade com o modelo de muleta antes da compra.",
    images: [
      {
        src: "/Produtos/ponteira-22mm-muleta-axilar.png",
        alt: "Ponteira preta de borracha 22 milímetros para muleta axilar",
        brandId: "dellamed",
      },
    ],
    highlights: ["Diâmetro interno de 22 mm", "Borracha antiderrapante", "Peça de reposição"],
    badges: ["Reposição", "Muleta axilar"],
    consultation: ["Diâmetro do tubo", "Modelo da muleta", "Quantidade necessária"],
    keywords: ["ponteira 22mm", "ponteira muleta", "borracha muleta axilar", "d7"],
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
    id: "luvas-descartaveis",
    categoryId: "cuidados-medico-hospitalares",
    brandIds: ["medix", "descarpack"],
    name: "Luvas Descartáveis",
    imageFrame: { detailAspectRatio: "standard" },
    summary:
      "Luvas para proteção e higiene em diferentes materiais, tamanhos e apresentações.",
    description:
      "As luvas descartáveis atendem rotinas de cuidado, higiene e procedimentos conforme a especificação de cada modelo. Há opções em látex, nitrila ou vinil, com ou sem pó e em diferentes tamanhos. Informe a finalidade para conferir o material mais adequado.",
    images: [
      {
        src: `${produtosBase}/luvas-descartaveis.webp`,
        alt: "Par de luvas descartáveis claras",
      },
    ],
    highlights: [
      "Opções em látex, nitrila ou vinil",
      "Diversos tamanhos e apresentações",
      "Modelos com ou sem pó",
    ],
    badges: ["Proteção", "Descartável"],
    consultation: ["Material", "Tamanho", "Quantidade por embalagem"],
    keywords: ["luvas", "latex", "nitrila", "vinil", "descartavel"],
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
    name: "Gazes",
    imageFrame: { detailAspectRatio: "standard" },
    summary:
      "Compressas e rolos de gaze para limpeza, proteção e composição de curativos.",
    description:
      "A gaze é utilizada em diferentes etapas de cuidado e curativo, conforme a orientação recebida. Trabalhamos com compressas e rolos, opções estéreis ou não estéreis e diferentes medidas e quantidades por embalagem.",
    images: [
      {
        src: `${produtosBase}/gaze.webp`,
        alt: "Compressas e rolo de gaze branca",
      },
    ],
    highlights: [
      "Compressas ou rolos",
      "Opções estéreis e não estéreis",
      "Medidas e quantidades variadas",
    ],
    badges: ["Curativos", "Várias medidas"],
    consultation: ["Tipo de gaze", "Medida", "Quantidade por embalagem"],
    keywords: ["gaze", "compressa", "curativo"],
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
    id: "curativos",
    categoryId: "cuidados-medico-hospitalares",
    brandIds: ["3m", "medix"],
    name: "Curativos e Coberturas",
    imageFrame: { detailAspectRatio: "standard" },
    summary:
      "Coberturas em diferentes tamanhos, formatos e materiais para rotinas de cuidado da pele.",
    description:
      "Curativos e coberturas variam conforme a área, o tipo de cuidado e a frequência de troca. Trabalhamos com opções adesivas, absorventes e apresentações específicas. Informe a medida e a orientação recebida para que a equipe possa verificar alternativas compatíveis.",
    images: [
      {
        src: `${produtosBase}/curativos.webp`,
        alt: "Curativos adesivos e cobertura absorvente",
      },
    ],
    highlights: [
      "Formatos e medidas variadas",
      "Opções adesivas ou não adesivas",
      "Diferentes níveis de absorção",
    ],
    badges: ["Coberturas", "Cuidados"],
    consultation: ["Medida necessária", "Tipo de cobertura", "Apresentação"],
    keywords: ["curativo", "cobertura", "adesivo", "ferida"],
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
    summary: "Bandagem adesiva elástica em rolo, com 5 cm de largura e 5 m de comprimento.",
    description: "A fita kinesio é uma bandagem adesiva elástica utilizada conforme técnicas de aplicação específicas. A apresentação fotografada mede 5 cm por 5 m. Consulte a orientação de profissional habilitado para a aplicação adequada.",
    images: [{ src: "/Produtos/fita-kinesio-5cm-5m.png", alt: "Rolo azul de fita kinesio com uma faixa desenrolada" }],
    highlights: ["5 cm de largura", "Rolo de 5 m", "Bandagem adesiva elástica"],
    badges: ["Fisioterapia", "Bandagem"],
    consultation: ["Cor disponível", "Medida", "Orientação de aplicação"],
    keywords: ["fita kinesio", "bandagem adesiva", "kinesio tape", "5cm 5m"],
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
    id: "solucao-cloreto-sodio-09-100ml", categoryId: "cuidados-medico-hospitalares", brandIds: [], name: "Solução de Cloreto de Sódio 0,9% 100 mL",
    summary: "Solução de cloreto de sódio 0,9% em frasco de 100 mL para inalação.",
    description: "Solução de cloreto de sódio 0,9% apresentada em frasco de 100 mL. Utilize conforme orientação de profissional habilitado e confirme a disponibilidade.",
    images: [{ src: "/Produtos/solucao-cloreto-sodio-09-100ml.png", alt: "Frasco de solução de cloreto de sódio 0,9% de 100 mililitros" }],
    highlights: ["Concentração 0,9%", "Frasco de 100 mL", "Para inalação"], badges: ["Cuidados", "100 mL"], consultation: ["Apresentação", "Quantidade", "Orientação profissional"], keywords: ["soro fisiologico", "cloreto sodio", "09", "100ml", "inalacao"],
  },
  {
    id: "solucao-cloreto-sodio-09-250ml", categoryId: "cuidados-medico-hospitalares", brandIds: [], name: "Solução de Cloreto de Sódio 0,9% 250 mL",
    summary: "Solução de cloreto de sódio 0,9% em frasco de 250 mL para inalação.",
    description: "Solução de cloreto de sódio 0,9% apresentada em frasco de 250 mL. Utilize conforme orientação de profissional habilitado e confirme a disponibilidade.",
    images: [{ src: "/Produtos/solucao-cloreto-sodio-09-250ml.png", alt: "Frasco de solução de cloreto de sódio 0,9% de 250 mililitros" }],
    highlights: ["Concentração 0,9%", "Frasco de 250 mL", "Para inalação"], badges: ["Cuidados", "250 mL"], consultation: ["Apresentação", "Quantidade", "Orientação profissional"], keywords: ["soro fisiologico", "cloreto sodio", "09", "250ml", "inalacao"],
  },
  {
    id: "solucao-cloreto-sodio-09-500ml", categoryId: "cuidados-medico-hospitalares", brandIds: [], name: "Solução de Cloreto de Sódio 0,9% 500 mL",
    summary: "Solução de cloreto de sódio 0,9% em frasco de 500 mL para inalação.",
    description: "Solução de cloreto de sódio 0,9% apresentada em frasco de 500 mL. Utilize conforme orientação de profissional habilitado e confirme a disponibilidade.",
    images: [{ src: "/Produtos/solucao-cloreto-sodio-09-500ml.png", alt: "Frasco de solução de cloreto de sódio 0,9% de 500 mililitros" }],
    highlights: ["Concentração 0,9%", "Frasco de 500 mL", "Para inalação"], badges: ["Cuidados", "500 mL"], consultation: ["Apresentação", "Quantidade", "Orientação profissional"], keywords: ["soro fisiologico", "cloreto sodio", "09", "500ml", "inalacao"],
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
    images: [{ src: "/Produtos/agua-para-injecao-10ml.png", alt: "Cinco ampolas monodose de água para injeção de 10 mililitros" }],
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
    id: "alcool-70-100ml", categoryId: "cuidados-medico-hospitalares", brandIds: [], name: "Álcool Líquido 70% INPM 100 mL",
    summary: "Álcool líquido 70% INPM em frasco de 100 mL para higienização.",
    description: "Álcool líquido com graduação de 70% INPM, apresentado em frasco de 100 mL. Utilize conforme as orientações de segurança indicadas no rótulo.",
    images: [{ src: "/Produtos/alcool-70-100ml.png", alt: "Frasco de álcool líquido 70% INPM de 100 mililitros" }],
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
