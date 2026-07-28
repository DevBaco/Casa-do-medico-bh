import type { StoreBrandId } from "@/data/brands";

export type CatalogCategoryId =
  | "monitoramento"
  | "ortopedia-mobilidade"
  | "cuidados-medico-hospitalares"
  | "fisioterapia-recuperacao";

export interface CatalogProductImage {
  src: string;
  alt: string;
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
    id: "cuidados-medico-hospitalares",
    name: "Materiais médico-hospitalares e cuidados em casa",
    shortName: "Cuidados em casa",
    description:
      "Materiais de uso profissional e domiciliar para higiene, proteção, curativos e apoio à rotina de cuidados.",
  },
  {
    id: "fisioterapia-recuperacao",
    name: "Fisioterapia e recuperação",
    shortName: "Fisioterapia",
    description:
      "Acessórios para exercícios orientados, fortalecimento, mobilidade e terapias com frio ou calor.",
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
      },
      {
        src: `${acumedBase}/Aparelho de pressão digital pulso.jpg`,
        alt: "Aparelho digital de pressão arterial de pulso",
      },
      {
        src: `${acumedBase}/BPSP11A 02.jpg (1).jpg (1).jpg`,
        alt: "Outra opção de aparelho digital de pressão com braçadeira",
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
    id: "estetoscopio",
    categoryId: "monitoramento",
    brandIds: ["premium", "accumed-glicomed"],
    name: "Estetoscópio",
    imageFrame: { detailAspectRatio: "landscape" },
    summary:
      "Opções para ausculta em diferentes rotinas de atendimento, com configurações simples ou Rappaport.",
    description:
      "O estetoscópio é um instrumento de ausculta utilizado por profissionais de saúde. O catálogo pode incluir modelos simples e versões Rappaport, com diferenças em auscultador, olivas, tubos e acessórios. Consulte as opções disponíveis para encontrar a configuração adequada à sua rotina.",
    images: [
      {
        src: `${produtosBase}/estetoscopio.jpg`,
        alt: "Estetoscópio preto com acessórios",
      },
      {
        src: `${acumedBase}/Estetoscopio Rappaport.jpg`,
        alt: "Estetoscópio do tipo Rappaport com acessórios",
      },
    ],
    highlights: [
      "Modelos simples e Rappaport",
      "Configurações para diferentes tipos de ausculta",
      "Acessórios variam conforme o conjunto",
    ],
    badges: ["Ausculta", "Profissional"],
    consultation: ["Tipo de estetoscópio", "Peças e acessórios", "Cores e disponibilidade"],
    keywords: ["estetoscopio", "rappaport", "ausculta"],
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
      },
      {
        src: `${acumedBase}/GTECH FREE.jpg`,
        alt: "Outra opção de glicômetro portátil",
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
    id: "munhequeiras-e-talas-para-punho",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight", "kestal", "medi"],
    name: "Munhequeiras e Talas para Punho",
    imageInset: "medium",
    summary:
      "Suportes elásticos, ajustáveis e imobilizadores para punho, mão e polegar.",
    description:
      "Munhequeiras e talas para punho estão disponíveis em diferentes construções: faixas simples de compressão, suportes com polegar e órteses mais estruturadas. O lado, a medida da mão e o grau de estabilização necessário devem ser confirmados antes da escolha.",
    images: [
      {
        src: `${hidrolightBase}/Hidrolight_1215_edit_flat Lucas 2.png`,
        alt: "Munhequeira ajustável com apoio para o polegar",
      },
      {
        src: `${hidrolightBase}/_MTS0330__edit_preview.jpg`,
        alt: "Suporte estruturado para punho e mão",
      },
      {
        src: `${hidrolightBase}/_MTS9119_.jpg`,
        alt: "Faixa ajustável para o punho",
      },
      {
        src: `${hidrolightBase}/_MTS9456_.png`,
        alt: "Órtese ventilada para punho e polegar",
      },
    ],
    highlights: [
      "Opções de compressão ou imobilização",
      "Modelos para punho, mão e polegar",
      "Variações para lado direito ou esquerdo",
    ],
    badges: ["Punho", "Várias opções"],
    consultation: ["Lado direito ou esquerdo", "Medida da mão e do punho", "Nível de suporte"],
    keywords: ["munhequeira", "tala punho", "ortese mao", "polegar"],
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
    id: "tipoias-e-suportes-de-ombro",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight", "kestal", "medi"],
    name: "Tipoias e Suportes de Ombro",
    imageInset: "medium",
    summary:
      "Tipoias para sustentação do braço, incluindo opções com apoio de abdução e ajustes no tronco.",
    description:
      "As tipoias mantêm o braço sustentado e ajudam a limitar movimentos conforme a necessidade de recuperação. Existem modelos simples, imobilizadores e opções com apoio para abdução do ombro. A configuração deve seguir a orientação recebida, considerando lado e tamanho.",
    images: [
      {
        src: `${hidrolightBase}/tipoia abdução lateral - Quadrado.png`,
        alt: "Pessoa usando tipoia com apoio de abdução lateral",
      },
    ],
    highlights: [
      "Sustentação do braço e do ombro",
      "Opções simples ou com apoio de abdução",
      "Ajustes de alça e faixa corporal",
    ],
    badges: ["Ombro", "Imobilização"],
    consultation: ["Lado de uso", "Tipo de suporte", "Tamanho e ajuste"],
    keywords: ["tipoia", "ombro", "abducao", "imobilizador ombro"],
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
    id: "faixas-abdominais",
    categoryId: "ortopedia-mobilidade",
    brandIds: ["hidrolight", "kestal"],
    name: "Faixas Abdominais",
    imageFrame: {
      catalogScale: 1.3,
      detailScale: 1.1,
      detailFit: "cover",
    },
    summary:
      "Faixas elásticas para suporte abdominal e torácico, em diferentes alturas e quantidades de painéis.",
    description:
      "As faixas abdominais envolvem o tronco para oferecer compressão, suporte e contenção. Há modelos com diferentes alturas, painéis e sistemas de fechamento, adequados a distintas rotinas de recuperação quando orientados por um profissional.",
    images: [
      {
        src: `${hidrolightBase}/Hidrolight_0934_edit_V2_flat.png`,
        alt: "Pessoa usando faixa abdominal ajustável bege",
      },
      {
        src: `${hidrolightBase}/OR2007.png`,
        alt: "Pessoa usando faixa elástica abdominal de painéis",
      },
    ],
    highlights: [
      "Compressão e suporte do tronco",
      "Diferentes alturas e quantidades de painéis",
      "Fechamento ajustável",
    ],
    badges: ["Abdômen", "Ajustável"],
    consultation: ["Altura da faixa", "Circunferência abdominal", "Quantidade de painéis"],
    keywords: ["faixa abdominal", "cinta abdominal", "faixa toracica"],
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
    name: "Sandália Pós-operatória",
    imageFrame: { detailAspectRatio: "landscape" },
    summary:
      "Calçado ortopédico com abertura ampla e fechos ajustáveis para períodos de recuperação do pé.",
    description:
      "A sandália pós-operatória acomoda curativos e adaptações de volume com fechamento regulável. O formato do solado e a área de descarga podem variar conforme o modelo; confirme a indicação, o lado e a numeração antes da compra.",
    images: [
      {
        src: `${hidrolightBase}/_MTS9534_.jpg`,
        alt: "Sandália ortopédica pós-operatória preta",
      },
    ],
    highlights: [
      "Abertura ampla com fechos ajustáveis",
      "Modelos com diferentes formatos de solado",
      "Numeração e lado conforme a necessidade",
    ],
    badges: ["Pé", "Pós-operatório"],
    consultation: ["Tipo de solado", "Lado de uso", "Numeração"],
    keywords: ["sandalia pos operatoria", "calcado ortopedico", "sandalia barouk"],
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
    if (image.src.startsWith(`${hidrolightBase}/`)) return "hidrolight" as const;
    return null;
  });

  if (detectedBrands.some((brandId) => brandId === null)) return [];

  return [...new Set(detectedBrands.filter((brandId) => brandId !== null))];
}
