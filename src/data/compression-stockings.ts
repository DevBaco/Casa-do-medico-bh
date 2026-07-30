export interface StockingColor {
  name: string;
  swatch: string;
  image: string;
}

export interface StockingSpecGroup {
  title: string;
  items: string[];
}

export interface StockingLine {
  id: string;
  brandId: string;
  brandName: string;
  line: string;
  subline?: string;
  audience?: "Feminina" | "Masculina" | "Unissex";
  displayName: string;
  summary: string;
  description: string;
  compression: string[];
  colors: StockingColor[];
  boxImage: string;
  genericImage: string;
  sizeChartImage?: string;
  specifications: StockingSpecGroup[];
  badges: string[];
  keywords: string[];
  whatsappMessage: string;
}

export interface StockingBrand {
  id: string;
  name: string;
  logo: string;
  description: string;
  lines: StockingLine[];
}

const venosanBase = "/Venosan";
const sigvarisBase = "/Sigvaris";

const colors = {
  bege: "#d8b894",
  olinda: "#d6a982",
  sahara: "#b98b64",
  bronze: "#9d694c",
  preta: "#1f1f1f",
  branca: "#f3f0e8",
  marrom: "#6d4b37",
  caqui: "#9d8f72",
  azul: "#243d69",
  pink: "#d84f92",
  natural: "#c7a17f",
  naturalEscura: "#9d7254",
  chocolate: "#5d3a2a",
  grafite: "#414247",
};

const defaultSpecs: StockingSpecGroup[] = [
  {
    title: "Variações para consulta",
    items: [
      "Modelo, tamanho, compressão e ponteira variam conforme estoque",
      "Códigos como AD, AGH, AGG e AT são confirmados no atendimento",
      "A numeração deve ser conferida pela tabela de medidas da linha",
    ],
  },
];

export const compressionStockingBrands: StockingBrand[] = [
  {
    id: "venosan",
    name: "Venosan",
    logo: "/Marcas/logo-venosan-meias-compressivas.svg",
    description:
      "Linhas Venosan organizadas por linha e sublinha. Separação por feminino/masculino só aparece quando a linha não é apresentada como unissex nos assets.",
    lines: [
      {
        id: "venosan-comfortline-ad",
        brandId: "venosan",
        brandName: "Venosan",
        line: "Comfortline",
        audience: "Unissex",
        displayName: "Venosan Comfortline AD · Unissex",
        summary:
          "Linha diária com toque macio, modelo AD, indicada para rotina, trabalho e longos períodos em pé ou sentado.",
        description:
          "A Comfortline reúne modelos de compressão graduada para uso cotidiano, com variações de altura, ponteira e tamanho conforme estoque.",
        compression: ["20-30 mmHg", "30-40 mmHg"],
        colors: [
          {
            name: "Bege",
            swatch: colors.bege,
            image: `${venosanBase}/COMFORTLINE/16431149200351-adcomfortline.jpg`,
          },
        ],
        boxImage: `${venosanBase}/COMFORTLINE/COMFORTLINE - ESQUERDA.webp`,
        genericImage: `${venosanBase}/COMFORTLINE/16431149200351-adcomfortline.jpg`,
        sizeChartImage: `${venosanBase}/COMFORTLINE/TABELA DE MEDIDAS.jpg`,
        specifications: [
          {
            title: "Modelo oficial",
            items: ["AD, pé aberto", "Cor bege"],
          },
        ],
        badges: ["Unissex", "Uso diário"],
        keywords: ["comfortline", "unissex", "meia de compressão diária", "ad"],
        whatsappMessage: "Olá! Tenho interesse na Venosan Comfortline AD.",
      },
      {
        id: "venosan-comfortline-agh",
        brandId: "venosan",
        brandName: "Venosan",
        line: "Comfortline",
        audience: "Unissex",
        displayName: "Venosan Comfortline AGH · Unissex",
        summary:
          "Linha diária com toque macio, modelo AGH, indicada para rotina, trabalho e longos períodos em pé ou sentado.",
        description:
          "A Comfortline reúne modelos de compressão graduada para uso cotidiano, com variações de altura, ponteira e tamanho conforme estoque.",
        compression: ["20-30 mmHg", "30-40 mmHg"],
        colors: [
          {
            name: "Bege",
            swatch: colors.bege,
            image: `${venosanBase}/COMFORTLINE/16431149205637-aghcomfortline.jpg`,
          },
        ],
        boxImage: `${venosanBase}/COMFORTLINE/COMFORTLINE - ESQUERDA.webp`,
        genericImage: `${venosanBase}/COMFORTLINE/16431149205637-aghcomfortline.jpg`,
        sizeChartImage: `${venosanBase}/COMFORTLINE/TABELA DE MEDIDAS.jpg`,
        specifications: [
          {
            title: "Modelo oficial",
            items: ["AGH, pé aberto", "Cor bege"],
          },
        ],
        badges: ["Unissex", "Uso diário"],
        keywords: ["comfortline", "unissex", "meia de compressão diária", "agh"],
        whatsappMessage: "Olá! Tenho interesse na Venosan Comfortline AGH.",
      },
      {
        id: "venosan-comfortline-at",
        brandId: "venosan",
        brandName: "Venosan",
        line: "Comfortline",
        audience: "Unissex",
        displayName: "Venosan Comfortline AT · Unissex",
        summary:
          "Linha diária com toque macio, modelo AT, indicada para rotina, trabalho e longos períodos em pé ou sentado.",
        description:
          "A Comfortline reúne modelos de compressão graduada para uso cotidiano, com variações de altura, ponteira e tamanho conforme estoque.",
        compression: ["20-30 mmHg", "30-40 mmHg"],
        colors: [
          {
            name: "Bege",
            swatch: colors.bege,
            image: `${venosanBase}/COMFORTLINE/16431149208895-atcomfortline.jpg`,
          },
        ],
        boxImage: `${venosanBase}/COMFORTLINE/COMFORTLINE - ESQUERDA.webp`,
        genericImage: `${venosanBase}/COMFORTLINE/16431149208895-atcomfortline.jpg`,
        sizeChartImage: `${venosanBase}/COMFORTLINE/TABELA DE MEDIDAS.jpg`,
        specifications: [
          {
            title: "Modelo oficial",
            items: ["AT, pé aberto", "Cor bege"],
          },
        ],
        badges: ["Unissex", "Uso diário"],
        keywords: ["comfortline", "unissex", "meia de compressão diária", "at"],
        whatsappMessage: "Olá! Tenho interesse na Venosan Comfortline AT.",
      },
      {
        id: "venosan-comfortline-agg",
        brandId: "venosan",
        brandName: "Venosan",
        line: "Comfortline",
        audience: "Unissex",
        displayName: "Venosan Comfortline AGG · Unissex",
        summary:
          "Linha diária com toque macio, modelo AGG unilateral, indicada para rotina, trabalho e longos períodos em pé ou sentado.",
        description:
          "A Comfortline reúne modelos de compressão graduada para uso cotidiano, com variações de altura, ponteira e tamanho conforme estoque.",
        compression: ["20-30 mmHg", "30-40 mmHg"],
        colors: [
          {
            name: "Bege",
            swatch: colors.bege,
            image: `${venosanBase}/COMFORTLINE/16431149201164-aggcomfortlinepernadireita.jpg`,
          },
        ],
        boxImage: `${venosanBase}/COMFORTLINE/COMFORTLINE - ESQUERDA.webp`,
        genericImage: `${venosanBase}/COMFORTLINE/16431149201164-aggcomfortlinepernadireita.jpg`,
        sizeChartImage: `${venosanBase}/COMFORTLINE/TABELA DE MEDIDAS.jpg`,
        specifications: [
          {
            title: "Modelo oficial",
            items: ["AGG unilateral direita ou esquerda, pé aberto", "Cor bege"],
          },
        ],
        badges: ["Unissex", "Uso diário"],
        keywords: ["comfortline", "unissex", "meia de compressão diária", "agg"],
        whatsappMessage: "Olá! Tenho interesse na Venosan Comfortline AGG.",
      },
      {
        id: "venosan-comfortline-cotton",
        brandId: "venosan",
        brandName: "Venosan",
        line: "Comfortline Cotton",
        subline: "Meia",
        audience: "Unissex",
        displayName: "Venosan Comfortline Cotton · Unissex",
        summary:
          "Sublinha com algodão para quem prefere toque natural e maior conforto térmico.",
        description:
          "A Comfortline Cotton combina compressão graduada com composição voltada ao conforto no uso prolongado. Consulte disponibilidade por tamanho, compressão e modelo.",
        compression: ["20-30 mmHg", "30-40 mmHg"],
        colors: [
          {
            name: "Bege · AD",
            swatch: colors.bege,
            image: `${venosanBase}/COMFORTLINE COTTON/AD-COMFORT COTTON C ZÍPER - FRENTE.webp`,
          },
        ],
        boxImage: `${venosanBase}/COMFORTLINE COTTON/COMFORTLINE COTTON - DIREITA.webp`,
        genericImage: `${venosanBase}/COMFORTLINE COTTON/AD-COMFORT COTTON C ZÍPER - FRENTE.webp`,
        sizeChartImage: `${venosanBase}/COMFORTLINE COTTON/TABELA DE MEDIDAS.jpg`,
        specifications: [
          {
            title: "Modelos oficiais",
            items: [
              "AD sem zíper, pé aberto",
              "Cor bege",
            ],
          },
        ],
        badges: ["Algodão", "Unissex"],
        keywords: ["comfortline cotton", "algodão", "cotton"],
        whatsappMessage: "Olá! Tenho interesse na Venosan Comfortline Cotton.",
      },
      {
        id: "venosan-comfortline-cotton-ziper",
        brandId: "venosan",
        brandName: "Venosan",
        line: "Comfortline Cotton",
        subline: "Com zíper",
        audience: "Unissex",
        displayName: "Venosan Comfortline Cotton com Zíper · Unissex",
        summary:
          "Versão com zíper que facilita o calçar, mantendo o algodão em contato com a pele.",
        description:
          "A Comfortline Cotton com Zíper combina compressão graduada, algodão em contato com a pele e abertura lateral para facilitar o calçar. O tamanho e a compressão devem ser confirmados no atendimento.",
        compression: ["20-30 mmHg", "30-40 mmHg"],
        colors: [
          {
            name: "Bege · AD",
            swatch: colors.bege,
            image: `${venosanBase}/COMFORTLINE COTTON/16431111355127-02.adcomfortlinecottoncomziper.jpg`,
          },
        ],
        boxImage: `${venosanBase}/COMFORTLINE COTTON/COMFORTLINE COTTON COM ZÍPER - ESQUERDA.webp`,
        genericImage: `${venosanBase}/COMFORTLINE COTTON/16431111355127-02.adcomfortlinecottoncomziper.jpg`,
        sizeChartImage: `${venosanBase}/COMFORTLINE COTTON/TABELA DE MEDIDAS.jpg`,
        specifications: [
          {
            title: "Apresentação oficial",
            items: ["Modelo AD", "Pé aberto", "Zíper lateral", "Cor bege"],
          },
        ],
        badges: ["Com zíper", "Algodão"],
        keywords: ["comfortline cotton", "zíper", "algodão", "pé aberto"],
        whatsappMessage:
          "Olá! Tenho interesse na Venosan Comfortline Cotton com Zíper.",
      },
      {
        id: "venosan-legline-ad",
        brandId: "venosan",
        brandName: "Venosan",
        line: "Legline",
        audience: "Unissex",
        displayName: "Venosan Legline AD · Unissex",
        summary:
          "Linha com variações de cores, modelo AD, para diferentes rotinas.",
        description:
          "A Legline é uma linha com opções discretas para o dia a dia. As cores e modelos variam conforme estoque e devem ser confirmados no atendimento.",
        compression: ["15-23 mmHg", "20-30 mmHg"],
        colors: [
          {
            name: "Olinda",
            swatch: colors.olinda,
            image: `${venosanBase}/LEGLINE/16419946764369-leglineadpeabertoolinda.jpg`,
          },
          {
            name: "Sahara",
            swatch: colors.sahara,
            image: `${venosanBase}/LEGLINE/16419955489835-leglineadpeabertosahara.jpg`,
          },
        ],
        boxImage: `${venosanBase}/LEGLINE/LEGLINE 15-23 - ESQUERDA.webp`,
        genericImage: `${venosanBase}/LEGLINE/16419946764369-leglineadpeabertoolinda.jpg`,
        sizeChartImage: `${venosanBase}/LEGLINE/TABELA DE MEDIDAS.jpg`,
        specifications: [
          {
            title: "Modelo oficial",
            items: ["AD, com pé aberto"],
          },
          {
            title: "Cores oficiais",
            items: ["Olinda", "Sahara"],
          },
        ],
        badges: ["Unissex", "Cores variadas"],
        keywords: ["legline", "olinda", "sahara", "ad"],
        whatsappMessage: "Olá! Tenho interesse na Venosan Legline AD.",
      },
      {
        id: "venosan-legline-agh",
        brandId: "venosan",
        brandName: "Venosan",
        line: "Legline",
        audience: "Unissex",
        displayName: "Venosan Legline AGH · Unissex",
        summary:
          "Linha com variações de cores, modelo AGH, para diferentes rotinas.",
        description:
          "A Legline é uma linha com opções discretas para o dia a dia. As cores e modelos variam conforme estoque e devem ser confirmados no atendimento.",
        compression: ["15-23 mmHg", "20-30 mmHg"],
        colors: [
          {
            name: "Olinda",
            swatch: colors.olinda,
            image: `${venosanBase}/LEGLINE/164199554985-leglineaghpeabertoolinda.jpg`,
          },
          {
            name: "Sahara",
            swatch: colors.sahara,
            image: `${venosanBase}/LEGLINE/16419965153307-leglineaghpeabertosahara.jpg`,
          },
        ],
        boxImage: `${venosanBase}/LEGLINE/LEGLINE 15-23 - ESQUERDA.webp`,
        genericImage: `${venosanBase}/LEGLINE/164199554985-leglineaghpeabertoolinda.jpg`,
        sizeChartImage: `${venosanBase}/LEGLINE/TABELA DE MEDIDAS.jpg`,
        specifications: [
          {
            title: "Modelo oficial",
            items: ["AGH, com pé aberto"],
          },
          {
            title: "Cores oficiais",
            items: ["Olinda", "Sahara"],
          },
        ],
        badges: ["Unissex", "Cores variadas"],
        keywords: ["legline", "olinda", "sahara", "agh"],
        whatsappMessage: "Olá! Tenho interesse na Venosan Legline AGH.",
      },
      {
        id: "venosan-legline-at",
        brandId: "venosan",
        brandName: "Venosan",
        line: "Legline",
        audience: "Unissex",
        displayName: "Venosan Legline AT · Unissex",
        summary:
          "Linha com variações de cores, modelo AT, para diferentes rotinas.",
        description:
          "A Legline é uma linha com opções discretas para o dia a dia. As cores e modelos variam conforme estoque e devem ser confirmados no atendimento.",
        compression: ["15-23 mmHg", "20-30 mmHg"],
        colors: [
          {
            name: "Olinda",
            swatch: colors.olinda,
            image: `${venosanBase}/LEGLINE/16420072730389-leglineatpeabertoolinda.jpg`,
          },
          {
            name: "Sahara",
            swatch: colors.sahara,
            image: `${venosanBase}/LEGLINE/16420072731121-leglineatpeabertosahara.jpg`,
          },
        ],
        boxImage: `${venosanBase}/LEGLINE/LEGLINE 15-23 - ESQUERDA.webp`,
        genericImage: `${venosanBase}/LEGLINE/16420072730389-leglineatpeabertoolinda.jpg`,
        sizeChartImage: `${venosanBase}/LEGLINE/TABELA DE MEDIDAS.jpg`,
        specifications: [
          {
            title: "Modelo oficial",
            items: ["AT, com pé aberto"],
          },
          {
            title: "Cores oficiais",
            items: ["Olinda", "Sahara"],
          },
        ],
        badges: ["Unissex", "Cores variadas"],
        keywords: ["legline", "olinda", "sahara", "at"],
        whatsappMessage: "Olá! Tenho interesse na Venosan Legline AT.",
      },
      {
        id: "venosan-ultraline-ad",
        brandId: "venosan",
        brandName: "Venosan",
        line: "Ultraline",
        audience: "Unissex",
        displayName: "Venosan Ultraline AD · Unissex",
        summary:
          "Linha Super Premium com opções em bege e preto, modelo AD.",
        description:
          "A Ultraline é voltada a necessidades de compressão mais firme, com acompanhamento criterioso de medidas e confirmação de modelo pelo atendimento.",
        compression: ["20-30 mmHg", "30-40 mmHg"],
        colors: [
          {
            name: "Bege",
            swatch: colors.bege,
            image: `${venosanBase}/ULTRALINE 4000/16420151769452-ultralineadpabertocorbege.jpg`,
          },
          {
            name: "Preta",
            swatch: colors.preta,
            image: `${venosanBase}/ULTRALINE 4000/AD-ULTRALINE-PRETA- PÉ ABERTO.webp`,
          },
        ],
        boxImage: `${venosanBase}/ULTRALINE 4000/ULTRALINE - FRENTE.webp`,
        genericImage: `${venosanBase}/ULTRALINE 4000/16420151769452-ultralineadpabertocorbege.jpg`,
        sizeChartImage: `${venosanBase}/ULTRALINE 4000/TABELA DE MEDIDAS.jpg`,
        specifications: [
          {
            title: "Modelo oficial",
            items: ["AD, com pé aberto"],
          },
          {
            title: "Cores oficiais",
            items: ["Bege", "Preta"],
          },
        ],
        badges: ["Unissex", "Super Premium"],
        keywords: ["ultraline", "unissex", "bege", "preta", "ad"],
        whatsappMessage: "Olá! Tenho interesse na Venosan Ultraline AD.",
      },
      {
        id: "venosan-ultraline-agh",
        brandId: "venosan",
        brandName: "Venosan",
        line: "Ultraline",
        audience: "Unissex",
        displayName: "Venosan Ultraline AGH · Unissex",
        summary:
          "Linha Super Premium com opções em bege e preto, modelo AGH.",
        description:
          "A Ultraline é voltada a necessidades de compressão mais firme, com acompanhamento criterioso de medidas e confirmação de modelo pelo atendimento.",
        compression: ["20-30 mmHg", "30-40 mmHg"],
        colors: [
          {
            name: "Bege",
            swatch: colors.bege,
            image: `${venosanBase}/ULTRALINE 4000/16420151784312-ultralineaghpabertocorbege.jpg`,
          },
          {
            name: "Preta",
            swatch: colors.preta,
            image: `${venosanBase}/ULTRALINE 4000/16420151785355-ultralineaghpabertocorpreta.jpg`,
          },
        ],
        boxImage: `${venosanBase}/ULTRALINE 4000/ULTRALINE - FRENTE.webp`,
        genericImage: `${venosanBase}/ULTRALINE 4000/16420151784312-ultralineaghpabertocorbege.jpg`,
        sizeChartImage: `${venosanBase}/ULTRALINE 4000/TABELA DE MEDIDAS.jpg`,
        specifications: [
          {
            title: "Modelo oficial",
            items: ["AGH, com pé aberto"],
          },
          {
            title: "Cores oficiais",
            items: ["Bege", "Preta"],
          },
        ],
        badges: ["Unissex", "Super Premium"],
        keywords: ["ultraline", "unissex", "bege", "preta", "agh"],
        whatsappMessage: "Olá! Tenho interesse na Venosan Ultraline AGH.",
      },
      {
        id: "venosan-ultraline-at",
        brandId: "venosan",
        brandName: "Venosan",
        line: "Ultraline",
        audience: "Unissex",
        displayName: "Venosan Ultraline AT · Unissex",
        summary:
          "Linha Super Premium com opções em bege e preto, modelo AT.",
        description:
          "A Ultraline é voltada a necessidades de compressão mais firme, com acompanhamento criterioso de medidas e confirmação de modelo pelo atendimento.",
        compression: ["20-30 mmHg", "30-40 mmHg"],
        colors: [
          {
            name: "Bege",
            swatch: colors.bege,
            image: `${venosanBase}/ULTRALINE 4000/ultraline-400-at-aberta-bege.png`,
          },
          {
            name: "Preta",
            swatch: colors.preta,
            image: `${venosanBase}/ULTRALINE 4000/16420151797121-ultralineatpfechadocorpreta.jpg`,
          },
        ],
        boxImage: `${venosanBase}/ULTRALINE 4000/ULTRALINE - FRENTE.webp`,
        genericImage: `${venosanBase}/ULTRALINE 4000/ultraline-400-at-aberta-bege.png`,
        sizeChartImage: `${venosanBase}/ULTRALINE 4000/TABELA DE MEDIDAS.jpg`,
        specifications: [
          {
            title: "Modelo oficial",
            items: ["AT, com pé aberto", "AT em preta disponível apenas com pé fechado"],
          },
          {
            title: "Cores oficiais",
            items: ["Bege", "Preta"],
          },
        ],
        badges: ["Unissex", "Super Premium"],
        keywords: ["ultraline", "unissex", "bege", "preta", "at"],
        whatsappMessage: "Olá! Tenho interesse na Venosan Ultraline AT.",
      },
      {
        id: "venosan-ultraline-agg",
        brandId: "venosan",
        brandName: "Venosan",
        line: "Ultraline",
        audience: "Unissex",
        displayName: "Venosan Ultraline AGG · Unissex",
        summary:
          "Linha Super Premium com opções em bege, modelo AGG unilateral.",
        description:
          "A Ultraline é voltada a necessidades de compressão mais firme, com acompanhamento criterioso de medidas e confirmação de modelo pelo atendimento.",
        compression: ["20-30 mmHg", "30-40 mmHg"],
        colors: [
          {
            name: "Bege",
            swatch: colors.bege,
            image: `${venosanBase}/ULTRALINE 4000/1642015178229-ultralineaggesquerdocorbege.jpg`,
          },
        ],
        boxImage: `${venosanBase}/ULTRALINE 4000/ULTRALINE - FRENTE.webp`,
        genericImage: `${venosanBase}/ULTRALINE 4000/1642015178229-ultralineaggesquerdocorbege.jpg`,
        sizeChartImage: `${venosanBase}/ULTRALINE 4000/TABELA DE MEDIDAS.jpg`,
        specifications: [
          {
            title: "Modelo oficial",
            items: ["AGG unilateral direita ou esquerda, com pé aberto"],
          },
          {
            title: "Cores oficiais",
            items: ["Bege"],
          },
        ],
        badges: ["Unissex", "Super Premium"],
        keywords: ["ultraline", "unissex", "bege", "agg"],
        whatsappMessage: "Olá! Tenho interesse na Venosan Ultraline AGG.",
      },
      {
        id: "venosan-ultraline-bracadeira-zh",
        brandId: "venosan",
        brandName: "Venosan",
        line: "Ultraline",
        subline: "Braçadeira",
        audience: "Unissex",
        displayName: "Venosan Ultraline Braçadeira ZH · Unissex",
        summary:
          "Braçadeira da linha Ultraline, modelo ZH até o metacarpo, com tabela de medidas própria.",
        description:
          "A braçadeira Ultraline possui tabela específica e variações confirmadas por tamanho, lado e configuração.",
        compression: ["30-40 mmHg"],
        colors: [
          {
            name: "Bege",
            swatch: colors.bege,
            image: `${venosanBase}/ULTRALINE 4000/16420806755022-zhultralinecorbege.jpg`,
          },
        ],
        boxImage: `${venosanBase}/ULTRALINE 4000/ULTRALINE BRAÇADEIRA - DIREITA.webp`,
        genericImage: `${venosanBase}/ULTRALINE 4000/16420806755022-zhultralinecorbege.jpg`,
        sizeChartImage: `${venosanBase}/ULTRALINE 4000/TABELA DE MEDIDAS - BRAÇADEIRA.jpg`,
        specifications: [
          {
            title: "Modelo oficial",
            items: ["ZH: até o metacarpo, com polegar", "Cor bege e tabela própria"],
          },
        ],
        badges: ["Braçadeira", "Alta compressão"],
        keywords: ["ultraline", "braçadeira", "manga compressiva", "zh"],
        whatsappMessage: "Olá! Tenho interesse na Venosan Ultraline Braçadeira ZH.",
      },
      {
        id: "venosan-ultraline-bracadeira-bh",
        brandId: "venosan",
        brandName: "Venosan",
        line: "Ultraline",
        subline: "Braçadeira",
        audience: "Unissex",
        displayName: "Venosan Ultraline Braçadeira BH · Unissex",
        summary:
          "Braçadeira da linha Ultraline, modelo BH até o punho, com tabela de medidas própria.",
        description:
          "A braçadeira Ultraline possui tabela específica e variações confirmadas por tamanho, lado e configuração.",
        compression: ["30-40 mmHg"],
        colors: [
          {
            name: "Bege",
            swatch: colors.bege,
            image: `${venosanBase}/ULTRALINE 4000/16420806755796-bhultralinecorbege.jpg`,
          },
        ],
        boxImage: `${venosanBase}/ULTRALINE 4000/ULTRALINE BRAÇADEIRA - DIREITA.webp`,
        genericImage: `${venosanBase}/ULTRALINE 4000/16420806755796-bhultralinecorbege.jpg`,
        sizeChartImage: `${venosanBase}/ULTRALINE 4000/TABELA DE MEDIDAS - BRAÇADEIRA.jpg`,
        specifications: [
          {
            title: "Modelo oficial",
            items: ["BH: até o punho", "Cor bege e tabela própria"],
          },
        ],
        badges: ["Braçadeira", "Alta compressão"],
        keywords: ["ultraline", "braçadeira", "manga compressiva", "bh"],
        whatsappMessage: "Olá! Tenho interesse na Venosan Ultraline Braçadeira BH.",
      },
      {
        id: "venosan-6000-ad",
        brandId: "venosan",
        brandName: "Venosan",
        line: "6000",
        audience: "Unissex",
        displayName: "Venosan 6000 AD · Unissex",
        summary:
          "Linha unissex de textura fina e confortável, modelo AD, em cores clássicas.",
        description:
          "A Venosan 6000 é indicada para homens e mulheres, com variações de cor, ponteira, tamanho e compressão conforme estoque.",
        compression: ["20-30 mmHg", "30-40 mmHg"],
        colors: [
          {
            name: "Bege",
            swatch: colors.bege,
            image: `${venosanBase}/6000/16431198851026-02.ad6000bege.jpg`,
          },
          {
            name: "Bronze",
            swatch: colors.bronze,
            image: `${venosanBase}/6000/16431198851415-03.ad6000bronze.jpg`,
          },
        ],
        boxImage: `${venosanBase}/6000/6000 - DIREITA.webp`,
        genericImage: `${venosanBase}/6000/16431198851026-02.ad6000bege.jpg`,
        sizeChartImage: `${venosanBase}/6000/TABELA DE MEDIDAS.jpg`,
        specifications: [
          {
            title: "Modelo oficial",
            items: ["AD com pé aberto"],
          },
          {
            title: "Cores oficiais",
            items: ["Bege", "Bronze"],
          },
        ],
        badges: ["Unissex", "Clássica"],
        keywords: ["venosan 6000", "6000", "unissex", "bronze", "ad"],
        whatsappMessage: "Olá! Tenho interesse na Venosan 6000 AD.",
      },
      {
        id: "venosan-6000-agh",
        brandId: "venosan",
        brandName: "Venosan",
        line: "6000",
        audience: "Unissex",
        displayName: "Venosan 6000 AGH · Unissex",
        summary:
          "Linha unissex de textura fina e confortável, modelo AGH, em cores clássicas.",
        description:
          "A Venosan 6000 é indicada para homens e mulheres, com variações de cor, ponteira, tamanho e compressão conforme estoque.",
        compression: ["20-30 mmHg", "30-40 mmHg"],
        colors: [
          {
            name: "Bege",
            swatch: colors.bege,
            image: `${venosanBase}/6000/16431198859595-07.agh6000begepaberto.jpg`,
          },
          {
            name: "Bronze",
            swatch: colors.bronze,
            image: `${venosanBase}/6000/16431198863246-08.agh6000bronzepaberto.jpg`,
          },
        ],
        boxImage: `${venosanBase}/6000/6000 - DIREITA.webp`,
        genericImage: `${venosanBase}/6000/16431198859595-07.agh6000begepaberto.jpg`,
        sizeChartImage: `${venosanBase}/6000/TABELA DE MEDIDAS.jpg`,
        specifications: [
          {
            title: "Modelo oficial",
            items: ["AGH com pé aberto"],
          },
          {
            title: "Cores oficiais",
            items: ["Bege", "Bronze"],
          },
        ],
        badges: ["Unissex", "Clássica"],
        keywords: ["venosan 6000", "6000", "unissex", "bronze", "agh"],
        whatsappMessage: "Olá! Tenho interesse na Venosan 6000 AGH.",
      },
      {
        id: "venosan-6000-at",
        brandId: "venosan",
        brandName: "Venosan",
        line: "6000",
        audience: "Unissex",
        displayName: "Venosan 6000 AT · Unissex",
        summary:
          "Linha unissex de textura fina e confortável, modelo AT, em cores clássicas.",
        description:
          "A Venosan 6000 é indicada para homens e mulheres, com variações de cor, ponteira, tamanho e compressão conforme estoque.",
        compression: ["20-30 mmHg", "30-40 mmHg"],
        colors: [
          {
            name: "Bege",
            swatch: colors.bege,
            image: `${venosanBase}/6000/16431198863726-09.at6000begepaberto.jpg`,
          },
          {
            name: "Bronze",
            swatch: colors.bronze,
            image: `${venosanBase}/6000/16431198866288-10.at6000bronzepaberto.jpg`,
          },
        ],
        boxImage: `${venosanBase}/6000/6000 - DIREITA.webp`,
        genericImage: `${venosanBase}/6000/16431198863726-09.at6000begepaberto.jpg`,
        sizeChartImage: `${venosanBase}/6000/TABELA DE MEDIDAS.jpg`,
        specifications: [
          {
            title: "Modelo oficial",
            items: ["AT com pé aberto"],
          },
          {
            title: "Cores oficiais",
            items: ["Bege", "Bronze"],
          },
        ],
        badges: ["Unissex", "Clássica"],
        keywords: ["venosan 6000", "6000", "unissex", "bronze", "at"],
        whatsappMessage: "Olá! Tenho interesse na Venosan 6000 AT.",
      },
      {
        id: "venosan-supportline-soft",
        brandId: "venosan",
        brandName: "Venosan",
        line: "Supportline Soft",
        audience: "Unissex",
        displayName: "Venosan Supportline Soft · Unissex",
        summary:
          "Meia unissex de leve compressão com várias cores para conforto diário.",
        description:
          "A Supportline Soft é indicada para homens e mulheres em movimento ou por longos períodos na mesma posição. Cores e tamanhos variam conforme estoque.",
        compression: ["18-22 mmHg"],
        colors: [
          {
            name: "Preta · AD",
            swatch: colors.preta,
            image: `${venosanBase}/SUPPORTLINE SOFT/SUPPORTLINE SOFT - PRETA - DEITADA.webp`,
          },
          {
            name: "Cáqui · AD",
            swatch: colors.caqui,
            image: `${venosanBase}/SUPPORTLINE SOFT/SUPPORTLINE SOFT - CÁQUI - F.webp`,
          },
        ],
        boxImage: `${venosanBase}/SUPPORTLINE SOFT/SUPPORTLINE SOFT - DIREITA.webp`,
        genericImage: `${venosanBase}/SUPPORTLINE SOFT/SUPPORTLINE SOFT - PRETA - DEITADA.webp`,
        sizeChartImage: `${venosanBase}/SUPPORTLINE SOFT/TABELA DE MEDIDAS.jpg`,
        specifications: [
          {
            title: "Apresentação oficial",
            items: [
              "Modelo AD com pé aberto",
              "Indicada para homens e mulheres",
              "Cores cáqui e preta",
            ],
          },
        ],
        badges: ["Unissex", "Suporte leve"],
        keywords: ["supportline", "supportline soft", "unissex"],
        whatsappMessage: "Olá! Tenho interesse na Venosan Supportline Soft.",
      },
      {
        id: "venosan-aes-ad",
        brandId: "venosan",
        brandName: "Venosan",
        line: "AES / antiembolia",
        audience: "Unissex",
        displayName: "Venosan AES Antiembolia AD · Unissex",
        summary:
          "Meia antiembolia para uso hospitalar ou pós-procedimento, modelo AD, até o joelho. Disponível também em versão estéril.",
        description:
          "A linha AES é voltada ao contexto hospitalar, pós-operatório ou prevenção de trombose conforme prescrição. Disponível na versão padrão e na versão estéril para cirurgia. Medidas e modelo são confirmados no atendimento.",
        compression: ["18 mmHg", "Antiembolia"],
        colors: [
          {
            name: "Branca",
            swatch: colors.branca,
            image: `${venosanBase}/AES/AD-AES-PERNA FEMININA.webp`,
          },
        ],
        boxImage: `${venosanBase}/AES/AES ESTÉRIL - DIREITA.webp`,
        genericImage: `${venosanBase}/AES/AD-AES-PERNA FEMININA.webp`,
        sizeChartImage: `${venosanBase}/AES/TABELA DE MEDIDAS.jpg`,
        specifications: [
          {
            title: "Modelo oficial",
            items: [
              "AD, até o joelho",
              "Cor branca",
              "Disponível também em versão estéril para uso durante cirurgia",
            ],
          },
        ],
        badges: ["Unissex", "Estéril disponível"],
        keywords: ["aes", "antiembolia", "unissex", "hospitalar", "ad", "estéril"],
        whatsappMessage: "Olá! Tenho interesse na Venosan AES Antiembolia AD.",
      },
      {
        id: "venosan-aes-agh",
        brandId: "venosan",
        brandName: "Venosan",
        line: "AES / antiembolia",
        audience: "Unissex",
        displayName: "Venosan AES Antiembolia AGH · Unissex",
        summary:
          "Meia antiembolia para uso hospitalar ou pós-procedimento, modelo AGH, até a coxa. Disponível também em versão estéril.",
        description:
          "A linha AES é voltada ao contexto hospitalar, pós-operatório ou prevenção de trombose conforme prescrição. Disponível na versão padrão e na versão estéril para cirurgia. Medidas e modelo são confirmados no atendimento.",
        compression: ["18 mmHg", "Antiembolia"],
        colors: [
          {
            name: "Branca",
            swatch: colors.branca,
            image: `${venosanBase}/AES/16431212039486-03.aghaes.jpg`,
          },
        ],
        boxImage: `${venosanBase}/AES/AES ESTÉRIL - DIREITA.webp`,
        genericImage: `${venosanBase}/AES/16431212039486-03.aghaes.jpg`,
        sizeChartImage: `${venosanBase}/AES/TABELA DE MEDIDAS.jpg`,
        specifications: [
          {
            title: "Modelo oficial",
            items: [
              "AGH, até a coxa",
              "Cor branca",
              "Disponível também em versão estéril para uso durante cirurgia",
            ],
          },
        ],
        badges: ["Unissex", "Estéril disponível"],
        keywords: ["aes", "antiembolia", "unissex", "hospitalar", "agh", "estéril"],
        whatsappMessage: "Olá! Tenho interesse na Venosan AES Antiembolia AGH.",
      },
      {
        id: "venosan-ulcercomfort",
        brandId: "venosan",
        brandName: "Venosan",
        line: "Ulcercomfort",
        audience: "Unissex",
        displayName: "Venosan Ulcercomfort com Zíper · Unissex",
        summary:
          "Kit com zíper para tratamento de úlcera venosa, composto por três meias.",
        description:
          "O Ulcercomfort com Zíper combina duas meias internas Legline Silver de 10-15 mmHg para troca diária e uma meia externa Comfortline com zíper de 20-30 mmHg. Sobrepostas, atingem compressão média de 30-45 mmHg.",
        compression: ["30-45 mmHg"],
        colors: [
          {
            name: "Bege · AD",
            swatch: colors.bege,
            image: `${venosanBase}/ULCERCOMFORT/16431203901566-02.adulcercomfort.jpg`,
          },
        ],
        boxImage: `${venosanBase}/ULCERCOMFORT/ULCERCOMFORT COM ZIPER - DIREITA.webp`,
        genericImage: `${venosanBase}/ULCERCOMFORT/16431203901566-02.adulcercomfort.jpg`,
        sizeChartImage: `${venosanBase}/ULCERCOMFORT/TABELA DE MEDIDAS.jpg`,
        specifications: [
          {
            title: "Variações para consulta",
            items: [
              "AD com zíper e pé aberto",
              "2 meias internas Legline Silver brancas",
              "1 meia externa Comfortline bege com zíper",
            ],
          },
        ],
        badges: ["Úlcera venosa", "Cuidados especiais"],
        keywords: ["ulcer comfort", "ulcercomfort", "úlcera", "zíper"],
        whatsappMessage: "Olá! Tenho interesse na Venosan Ulcercomfort com Zíper.",
      },
      {
        id: "venosan-ulceraid-feminina",
        brandId: "venosan",
        brandName: "Venosan",
        line: "UlcerAid",
        audience: "Unissex",
        displayName: "Venosan UlcerAid · Unissex",
        summary:
          "Sistema para suporte em tratamento de úlceras venosas, conforme indicação.",
        description:
          "A UlcerAid é uma linha de cuidado específico. A escolha deve considerar tabela de medidas, indicação profissional e disponibilidade do kit.",
        compression: ["30-45 mmHg", "Sistema para úlcera venosa"],
        colors: [
          {
            name: "Bege · AD",
            swatch: colors.bege,
            image: `${venosanBase}/ULCERAID/AD-ULCERAID - PERNA FEMININA.webp`,
          },
        ],
        boxImage: `${venosanBase}/ULCERAID/ULCERAID - ESQUERDA.webp`,
        genericImage: `${venosanBase}/ULCERAID/AD-ULCERAID - PERNA FEMININA.webp`,
        sizeChartImage: `${venosanBase}/ULCERAID/TABELA DE MEDIDAS.jpg`,
        specifications: [
          {
            title: "Composição do kit",
            items: [
              "2 meias internas Legline Silver brancas, 10-15 mmHg",
              "1 meia externa Ultraline bege, 20-30 mmHg",
              "Modelo AD com pé aberto",
            ],
          },
        ],
        badges: ["Unissex", "Úlcera venosa"],
        keywords: ["ulceraid", "ulcer aid", "úlcera", "unissex"],
        whatsappMessage: "Olá! Tenho interesse na Venosan UlcerAid.",
      },
      {
        id: "venosan-sportactive",
        brandId: "venosan",
        brandName: "Venosan",
        line: "SportActive",
        audience: "Unissex",
        displayName: "Venosan SportActive · Unissex",
        summary:
          "Linha esportiva para atividade física, recuperação e uso ativo.",
        description:
          "A SportActive é voltada para quem busca compressão com linguagem esportiva. Cores e tamanhos variam conforme estoque.",
        compression: ["20-30 mmHg"],
        colors: [
          {
            name: "Preta · BD",
            swatch: colors.preta,
            image: `${venosanBase}/SPORTACTIVE/16431221946273-08.adsportactivecorpretafrente.jpg`,
          },
        ],
        boxImage: `${venosanBase}/SPORTACTIVE/SPORTACTIVE - DIREITA.webp`,
        genericImage: `${venosanBase}/SPORTACTIVE/16431221946273-08.adsportactivecorpretafrente.jpg`,
        sizeChartImage: `${venosanBase}/SPORTACTIVE/TABELA DE MEDIDAS.jpg`,
        specifications: [
          {
            title: "Apresentação oficial",
            items: [
              "Modelo BD esportivo",
              "Cor preta",
              "Tamanho confirmado pela tabela da linha",
            ],
          },
        ],
        badges: ["Unissex", "Esportiva"],
        keywords: ["sportactive", "sport active", "esportiva", "unissex"],
        whatsappMessage: "Olá! Tenho interesse na Venosan SportActive.",
      },
    ],
  },
  {
    id: "sigvaris",
    name: "Sigvaris",
    logo: "/Marcas/sig9000_sigvaris_group_160th_logo_dual_horizontal_darkblue_rgb.svg",
    description:
      "Linhas Sigvaris organizadas por coleção e finalidade, com modelos, cores, compressões e tamanhos confirmados no atendimento.",
    lines: [
      {
        id: "sigvaris-antitrombo",
        brandId: "sigvaris",
        brandName: "Sigvaris",
        line: "Antitrombo",
        audience: "Unissex",
        displayName: "Sigvaris Antitrombo · Unissex",
        summary:
          "Linha hospitalar para profilaxia de tromboembolismo venoso em períodos pré, intra e pós-operatórios.",
        description:
          "A Sigvaris Antitrombo foi desenvolvida para contextos hospitalares e períodos de repouso prolongado. O modelo e o tamanho devem seguir orientação profissional e a tabela específica da linha.",
        compression: ["18-23 mmHg"],
        colors: [
          {
            name: "Branca",
            swatch: colors.branca,
            image: `${sigvarisBase}/Antitrombo/HOS_Antitrombo_Sigvaris_Unisex_TighHigh_SA.jpg`,
          },
        ],
        boxImage: `${sigvarisBase}/Antitrombo/HOS_Antitrombo_Sigvaris_Unisex_Calf_BOX_ALT1_SA.png`,
        genericImage: `${sigvarisBase}/Antitrombo/HOS_Antitrombo_Sigvaris_Unisex_TighHigh_SA.jpg`,
        sizeChartImage: `${sigvarisBase}/Antitrombo/SIZE_CHART_HOS_Antitrombo.jpg`,
        specifications: [
          {
            title: "Apresentações da linha",
            items: [
              "Modelos panturrilha e meia-coxa",
              "Ponteira aberta/rebatível",
              "Uso hospitalar conforme orientação profissional",
            ],
          },
        ],
        badges: ["Unissex", "Hospitalar"],
        keywords: ["antitrombo", "antitrombose", "hospitalar", "cirurgia", "repouso"],
        whatsappMessage: "Olá! Tenho interesse na Sigvaris Antitrombo.",
      },
      {
        id: "sigvaris-dynaven-basic-panturrilha",
        brandId: "sigvaris",
        brandName: "Sigvaris",
        line: "Dynaven Basic",
        audience: "Unissex",
        displayName: "Sigvaris Dynaven Basic Panturrilha · Unissex",
        summary:
          "Meia medicinal com proposta de custo-benefício para tratamento compressivo no dia a dia, modelo panturrilha.",
        description:
          "A Dynaven Basic combina compressão graduada, calcanhar anatômico e uma construção voltada ao uso cotidiano. Consulte o modelo disponível e confirme as medidas antes da compra.",
        compression: ["20-30 mmHg", "30-40 mmHg"],
        colors: [
          {
            name: "Bege",
            swatch: colors.bege,
            image: `${sigvarisBase}/Dynaven/dyn_basic_women_calf_ot_honey_na_sa.webp`,
          },
        ],
        boxImage: `${sigvarisBase}/Dynaven/DYN_BASIC_packing_calf_unisex_brazil_box.png`,
        genericImage: `${sigvarisBase}/Dynaven/dyn_basic_women_calf_ot_honey_na_sa.webp`,
        sizeChartImage: `${sigvarisBase}/Dynaven/SIZE_CHART_DYN_BASIC_SA.jpg`,
        specifications: [
          {
            title: "Apresentação",
            items: ["Modelo panturrilha", "Ponteira aberta"],
          },
        ],
        badges: ["Unissex", "Custo-benefício"],
        keywords: ["dynaven", "dynaven basic", "basic", "medicinal", "dia a dia", "panturrilha"],
        whatsappMessage: "Olá! Tenho interesse na Sigvaris Dynaven Basic Panturrilha.",
      },
      {
        id: "sigvaris-dynaven-basic-meia-calca",
        brandId: "sigvaris",
        brandName: "Sigvaris",
        line: "Dynaven Basic",
        audience: "Unissex",
        displayName: "Sigvaris Dynaven Basic Meia-calça · Unissex",
        summary:
          "Meia medicinal com proposta de custo-benefício para tratamento compressivo no dia a dia, modelo meia-calça.",
        description:
          "A Dynaven Basic combina compressão graduada, calcanhar anatômico e uma construção voltada ao uso cotidiano. Consulte o modelo disponível e confirme as medidas antes da compra.",
        compression: ["20-30 mmHg", "30-40 mmHg"],
        colors: [
          {
            name: "Bege",
            swatch: colors.bege,
            image: `${sigvarisBase}/Dynaven/dyn_basic_women_pantyhose_ot_honey_na_sa.webp`,
          },
        ],
        boxImage: `${sigvarisBase}/Dynaven/DYN_BASIC_packing_calf_unisex_brazil_box.png`,
        genericImage: `${sigvarisBase}/Dynaven/dyn_basic_women_pantyhose_ot_honey_na_sa.webp`,
        sizeChartImage: `${sigvarisBase}/Dynaven/SIZE_CHART_DYN_BASIC_SA.jpg`,
        specifications: [
          {
            title: "Apresentação",
            items: ["Modelo meia-calça", "Ponteira aberta"],
          },
        ],
        badges: ["Unissex", "Custo-benefício"],
        keywords: ["dynaven", "dynaven basic", "basic", "medicinal", "dia a dia", "meia-calça"],
        whatsappMessage: "Olá! Tenho interesse na Sigvaris Dynaven Basic Meia-calça.",
      },
      {
        id: "sigvaris-dynaven-basic-meia-coxa",
        brandId: "sigvaris",
        brandName: "Sigvaris",
        line: "Dynaven Basic",
        audience: "Unissex",
        displayName: "Sigvaris Dynaven Basic Meia-coxa · Unissex",
        summary:
          "Meia medicinal com proposta de custo-benefício para tratamento compressivo no dia a dia, modelo meia-coxa.",
        description:
          "A Dynaven Basic combina compressão graduada, calcanhar anatômico e uma construção voltada ao uso cotidiano. Consulte o modelo disponível e confirme as medidas antes da compra.",
        compression: ["20-30 mmHg", "30-40 mmHg"],
        colors: [
          {
            name: "Bege",
            swatch: colors.bege,
            image: `${sigvarisBase}/Dynaven/dyn_basic_nwg_ot_honey_na_sa.webp`,
          },
        ],
        boxImage: `${sigvarisBase}/Dynaven/DYN_BASIC_packing_calf_unisex_brazil_box.png`,
        genericImage: `${sigvarisBase}/Dynaven/dyn_basic_nwg_ot_honey_na_sa.webp`,
        sizeChartImage: `${sigvarisBase}/Dynaven/SIZE_CHART_DYN_BASIC_SA.jpg`,
        specifications: [
          {
            title: "Apresentação",
            items: ["Modelo meia-coxa", "Ponteira aberta"],
          },
        ],
        badges: ["Unissex", "Custo-benefício"],
        keywords: ["dynaven", "dynaven basic", "basic", "medicinal", "dia a dia", "meia-coxa"],
        whatsappMessage: "Olá! Tenho interesse na Sigvaris Dynaven Basic Meia-coxa.",
      },
      {
        id: "sigvaris-essencial-fibras-naturais",
        brandId: "sigvaris",
        brandName: "Sigvaris",
        line: "Essencial Fibras Naturais",
        subline: "Algodão Super",
        audience: "Unissex",
        displayName: "Sigvaris Essencial Fibras Naturais",
        summary:
          "Meia de compressão com fibras naturais, indicada para quem busca respirabilidade e toque confortável.",
        description:
          "A linha Essencial Fibras Naturais combina compressão médica com algodão em contato com a pele. Consulte disponibilidade de cor, ponteira, compressão e tamanho.",
        compression: ["20-30 mmHg", "30-40 mmHg"],
        colors: [
          {
            name: "Bege",
            swatch: colors.bege,
            image: `${sigvarisBase}/Essencial/Algodão-fibras naturais/ESS_NaturalFibers_Unisex_Beige_SA.jpg`,
          },
        ],
        boxImage: `${sigvarisBase}/Essencial/Algodão-fibras naturais/ESS_ALGODÃO SUPER_PACKING_WOMAN_BRAZIL_BOX.png`,
        genericImage: `${sigvarisBase}/Essencial/Algodão-fibras naturais/ESS_NaturalFibers_Unisex_Beige_SA.jpg`,
        sizeChartImage: `${sigvarisBase}/Essencial/Algodão-fibras naturais/SIZE_CHART_ESS_FibrasNaturais_Calf.jpg`,
        specifications: [
          {
            title: "Características da linha",
            items: [
              "Modelo panturrilha",
              "Ponteiras aberta e fechada conforme configuração",
              "Cor bege",
            ],
          },
        ],
        badges: ["Unissex", "Algodão"],
        keywords: ["essencial", "fibras naturais", "algodão super", "algodao super"],
        whatsappMessage: "Olá! Tenho interesse na Sigvaris Essencial Fibras Naturais.",
      },
      {
        id: "sigvaris-essencial-conforto-panturrilha",
        brandId: "sigvaris",
        brandName: "Sigvaris",
        line: "Essencial Conforto",
        subline: "Select Comfort Premium",
        audience: "Unissex",
        displayName: "Sigvaris Essencial Conforto Select Comfort Premium Panturrilha",
        summary:
          "Linha premium com microfibra e controle climático para uso diário, modelo panturrilha.",
        description:
          "A Essencial Conforto Select Comfort Premium possui revestimento interno de microfibra e construção voltada à durabilidade e ao conforto. Consulte a combinação disponível de modelo, cor, ponteira e compressão.",
        compression: ["20-30 mmHg", "30-40 mmHg"],
        colors: [
          {
            name: "Natural",
            swatch: colors.natural,
            image: `${sigvarisBase}/Essencial/Conforto/ess_confort_calf_sigvaris_unisex_suntan_sa.webp`,
          },
        ],
        boxImage: `${sigvarisBase}/Essencial/Conforto/essencial-caixa-2.jpg`,
        genericImage: `${sigvarisBase}/Essencial/Conforto/ess_confort_calf_sigvaris_unisex_suntan_sa.webp`,
        sizeChartImage: `${sigvarisBase}/Essencial/Conforto/SIZE_CHART_ESS_Conforto_TH.jpg`,
        specifications: [
          {
            title: "Apresentação",
            items: ["Modelo panturrilha", "Ponteira aberta"],
          },
        ],
        badges: ["Unissex", "Premium"],
        keywords: ["essencial", "conforto", "select comfort", "premium", "microfibra", "panturrilha"],
        whatsappMessage: "Olá! Tenho interesse na Sigvaris Essencial Conforto Panturrilha.",
      },
      {
        id: "sigvaris-essencial-conforto-meia-calca",
        brandId: "sigvaris",
        brandName: "Sigvaris",
        line: "Essencial Conforto",
        subline: "Select Comfort Premium",
        audience: "Unissex",
        displayName: "Sigvaris Essencial Conforto Select Comfort Premium Meia-calça",
        summary:
          "Linha premium com microfibra e controle climático para uso diário, modelo meia-calça.",
        description:
          "A Essencial Conforto Select Comfort Premium possui revestimento interno de microfibra e construção voltada à durabilidade e ao conforto. Consulte a combinação disponível de modelo, cor, ponteira e compressão.",
        compression: ["20-30 mmHg", "30-40 mmHg"],
        colors: [
          {
            name: "Natural",
            swatch: colors.natural,
            image: `${sigvarisBase}/Essencial/Conforto/ess_confort_pantyhouse_sigvaris_unisex_suntan_sa.webp`,
          },
        ],
        boxImage: `${sigvarisBase}/Essencial/Conforto/essencial-caixa-2.jpg`,
        genericImage: `${sigvarisBase}/Essencial/Conforto/ess_confort_pantyhouse_sigvaris_unisex_suntan_sa.webp`,
        sizeChartImage: `${sigvarisBase}/Essencial/Conforto/SIZE_CHART_ESS_Conforto_TH.jpg`,
        specifications: [
          {
            title: "Apresentação",
            items: ["Modelo meia-calça", "Ponteira aberta"],
          },
        ],
        badges: ["Unissex", "Premium"],
        keywords: ["essencial", "conforto", "select comfort", "premium", "microfibra", "meia-calça"],
        whatsappMessage: "Olá! Tenho interesse na Sigvaris Essencial Conforto Meia-calça.",
      },
      {
        id: "sigvaris-essencial-conforto-meia-coxa",
        brandId: "sigvaris",
        brandName: "Sigvaris",
        line: "Essencial Conforto",
        subline: "Select Comfort Premium",
        audience: "Unissex",
        displayName: "Sigvaris Essencial Conforto Select Comfort Premium Meia-coxa",
        summary:
          "Linha premium com microfibra e controle climático para uso diário, modelo meia-coxa.",
        description:
          "A Essencial Conforto Select Comfort Premium possui revestimento interno de microfibra e construção voltada à durabilidade e ao conforto. Consulte a combinação disponível de modelo, cor, ponteira e compressão.",
        compression: ["20-30 mmHg", "30-40 mmHg"],
        colors: [
          {
            name: "Natural",
            swatch: colors.natural,
            image: `${sigvarisBase}/Essencial/Conforto/ess_confort_tighhigh_ct_sigvaris_unisex_beige_sa.webp`,
          },
        ],
        boxImage: `${sigvarisBase}/Essencial/Conforto/essencial-caixa-2.jpg`,
        genericImage: `${sigvarisBase}/Essencial/Conforto/ess_confort_tighhigh_ct_sigvaris_unisex_beige_sa.webp`,
        sizeChartImage: `${sigvarisBase}/Essencial/Conforto/SIZE_CHART_ESS_Conforto_TH.jpg`,
        specifications: [
          {
            title: "Apresentação",
            items: ["Modelo meia-coxa", "Ponteira aberta"],
          },
        ],
        badges: ["Unissex", "Premium"],
        keywords: ["essencial", "conforto", "select comfort", "premium", "microfibra", "meia-coxa"],
        whatsappMessage: "Olá! Tenho interesse na Sigvaris Essencial Conforto Meia-coxa.",
      },
      {
        id: "sigvaris-performance",
        brandId: "sigvaris",
        brandName: "Sigvaris",
        line: "Performance",
        audience: "Unissex",
        displayName: "Sigvaris Performance · Unissex",
        summary:
          "Meia de compressão para prática esportiva, com construção anatômica e variedade de cores.",
        description:
          "A linha Sigvaris Performance oferece compressão graduada e recursos voltados ao conforto durante atividades físicas. Consulte cores e tamanhos disponíveis.",
        compression: ["20-30 mmHg"],
        colors: [
          {
            name: "Preta",
            swatch: colors.preta,
            image: `${sigvarisBase}/Performance (esportiva)/ACM_HighTech_CW_black.jpg`,
          },
        ],
        boxImage: `${sigvarisBase}/Performance (esportiva)/Performance_Sigvaris_Unisex_Packaging_BR.jpg`,
        genericImage: `${sigvarisBase}/Performance (esportiva)/ACM_HighTech_CW_black.jpg`,
        sizeChartImage: `${sigvarisBase}/Performance (esportiva)/SIZE_CHART_SPO_all sports.jpg`,
        specifications: [
          {
            title: "Características da linha",
            items: [
              "Modelo panturrilha esportiva",
              "Formato anatômico",
              "Cor preta",
            ],
          },
        ],
        badges: ["Unissex", "Esportiva"],
        keywords: ["performance", "esportiva", "esporte", "atividade física", "corrida"],
        whatsappMessage: "Olá! Tenho interesse na Sigvaris Performance.",
      },
      {
        id: "sigvaris-style-actitud",
        brandId: "sigvaris",
        brandName: "Sigvaris",
        line: "Style Elegância Actitud",
        audience: "Masculina",
        displayName: "Sigvaris Style Elegância Actitud Masculina",
        summary:
          "Meia social masculina de compressão com visual discreto, canelado ou liso.",
        description:
          "A Style Elegância Actitud foi desenvolvida para o público masculino e combina aparência social com compressão graduada. Consulte cor, compressão e tamanho disponíveis.",
        compression: ["15-20 mmHg", "20-30 mmHg"],
        colors: [
          {
            name: "Preta",
            swatch: colors.preta,
            image: `${sigvarisBase}/Style/Actitud/STY_Elegance_Actitud_Sigvaris_Man_Black_1_SA.jpg`,
          },
          {
            name: "Caqui",
            swatch: colors.caqui,
            image: `${sigvarisBase}/Style/Actitud/STY_Elegance_Actitud_Sigvaris_Man_Khaki_SA (2).jpg`,
          },
        ],
        boxImage: `${sigvarisBase}/Style/Actitud/STY_Elegance_Actitud_Sigvaris_Man_Packaging_BR.png`,
        genericImage: `${sigvarisBase}/Style/Actitud/STY_Elegance_Actitud_Sigvaris_Man_Black_1_SA.jpg`,
        sizeChartImage: `${sigvarisBase}/Style/Actitud/SIZE_CHART_STY_Elegancia_Actitud.jpg`,
        specifications: [
          {
            title: "Características da linha",
            items: [
              "Modelo panturrilha",
              "Ponteira fechada",
              "Visual social masculino nas cores preta e caqui",
            ],
          },
        ],
        badges: ["Masculina", "Social"],
        keywords: ["style", "actitud", "elegância", "elegancia", "masculina", "social"],
        whatsappMessage: "Olá! Tenho interesse na Sigvaris Style Elegância Actitud.",
      },
      {
        id: "sigvaris-style-audace-panturrilha",
        brandId: "sigvaris",
        brandName: "Sigvaris",
        line: "Style Prevenção Audace",
        audience: "Unissex",
        displayName: "Sigvaris Style Prevenção Audace Panturrilha · Unissex",
        summary:
          "Linha transparente para prevenção, conforto e elegância no uso diário, modelo panturrilha.",
        description:
          "A Style Prevenção Audace foi desenvolvida para combinar transparência, elasticidade e compressão suave. Os modelos e as cores variam conforme disponibilidade.",
        compression: ["15-20 mmHg"],
        colors: [
          {
            name: "Natural",
            swatch: colors.natural,
            image: `${sigvarisBase}/Style/Audace/sty_preventive_sigvaris_woman_calf_closed_taupe_sa.webp`,
          },
          {
            name: "Natural escura",
            swatch: colors.naturalEscura,
            image: `${sigvarisBase}/Style/Audace/sty_preventive_sigvaris_woman_calf_open_suntan_sa.jpg`,
          },
        ],
        boxImage: `${sigvarisBase}/Style/Audace/STY_Audace_Sigvaris_Unisex_Calf_BOX_SA.png`,
        genericImage: `${sigvarisBase}/Style/Audace/sty_preventive_sigvaris_woman_calf_closed_taupe_sa.webp`,
        sizeChartImage: `${sigvarisBase}/Style/Audace/SIZE_CHART_STY_Prevencao_Pantyhouse.jpg`,
        specifications: [
          {
            title: "Apresentação",
            items: ["Modelo panturrilha", "Tabela de medidas adaptada ao biótipo brasileiro"],
          },
        ],
        badges: ["Unissex", "Prevenção"],
        keywords: ["style", "audace", "prevenção", "prevencao", "transparente", "unissex", "panturrilha"],
        whatsappMessage: "Olá! Tenho interesse na Sigvaris Style Prevenção Audace Panturrilha.",
      },
      {
        id: "sigvaris-style-audace-meia-calca",
        brandId: "sigvaris",
        brandName: "Sigvaris",
        line: "Style Prevenção Audace",
        audience: "Unissex",
        displayName: "Sigvaris Style Prevenção Audace Meia-calça · Unissex",
        summary:
          "Linha transparente para prevenção, conforto e elegância no uso diário, modelo meia-calça.",
        description:
          "A Style Prevenção Audace foi desenvolvida para combinar transparência, elasticidade e compressão suave. Os modelos e as cores variam conforme disponibilidade.",
        compression: ["15-20 mmHg"],
        colors: [
          {
            name: "Natural",
            swatch: colors.natural,
            image: `${sigvarisBase}/Style/Audace/STY_Preventive_Sigvaris_Woman_Pantyhouse_Open_NaturalEscura_alt3_SA.jpg`,
          },
          {
            name: "Natural escura",
            swatch: colors.naturalEscura,
            image: `${sigvarisBase}/Style/Audace/sty_preventive_sigvaris_woman_pantyhouse_suntan_alt1_SA.jpg`,
          },
        ],
        boxImage: `${sigvarisBase}/Style/Audace/STY_Audace_Sigvaris_Unisex_Calf_BOX_SA.png`,
        genericImage: `${sigvarisBase}/Style/Audace/STY_Preventive_Sigvaris_Woman_Pantyhouse_Open_NaturalEscura_alt3_SA.jpg`,
        sizeChartImage: `${sigvarisBase}/Style/Audace/SIZE_CHART_STY_Prevencao_Pantyhouse.jpg`,
        specifications: [
          {
            title: "Apresentação",
            items: ["Modelo meia-calça", "Tabela de medidas adaptada ao biótipo brasileiro"],
          },
        ],
        badges: ["Unissex", "Prevenção"],
        keywords: ["style", "audace", "prevenção", "prevencao", "transparente", "unissex", "meia-calça"],
        whatsappMessage: "Olá! Tenho interesse na Sigvaris Style Prevenção Audace Meia-calça.",
      },
      {
        id: "sigvaris-style-audace-meia-coxa",
        brandId: "sigvaris",
        brandName: "Sigvaris",
        line: "Style Prevenção Audace",
        audience: "Unissex",
        displayName: "Sigvaris Style Prevenção Audace Meia-coxa · Unissex",
        summary:
          "Linha transparente para prevenção, conforto e elegância no uso diário, modelo meia-coxa.",
        description:
          "A Style Prevenção Audace foi desenvolvida para combinar transparência, elasticidade e compressão suave. Os modelos e as cores variam conforme disponibilidade.",
        compression: ["15-20 mmHg"],
        colors: [
          {
            name: "Natural",
            swatch: colors.natural,
            image: `${sigvarisBase}/Style/Audace/sty_preventive_sigvaris_woman_th_open_taupe_sa.webp`,
          },
          {
            name: "Natural escura",
            swatch: colors.naturalEscura,
            image: `${sigvarisBase}/Style/Audace/sty_preventive_sigvaris_woman_th_closed_natural_sa.webp`,
          },
        ],
        boxImage: `${sigvarisBase}/Style/Audace/STY_Audace_Sigvaris_Unisex_Calf_BOX_SA.png`,
        genericImage: `${sigvarisBase}/Style/Audace/sty_preventive_sigvaris_woman_th_open_taupe_sa.webp`,
        sizeChartImage: `${sigvarisBase}/Style/Audace/SIZE_CHART_STY_Prevencao_Pantyhouse.jpg`,
        specifications: [
          {
            title: "Apresentação",
            items: ["Modelo meia-coxa", "Tabela de medidas adaptada ao biótipo brasileiro"],
          },
        ],
        badges: ["Unissex", "Prevenção"],
        keywords: ["style", "audace", "prevenção", "prevencao", "transparente", "unissex", "meia-coxa"],
        whatsappMessage: "Olá! Tenho interesse na Sigvaris Style Prevenção Audace Meia-coxa.",
      },
      {
        id: "sigvaris-style-ever-sheer-panturrilha",
        brandId: "sigvaris",
        brandName: "Sigvaris",
        line: "Style Transparência Ever Sheer",
        audience: "Unissex",
        displayName: "Sigvaris Style Transparência Ever Sheer Panturrilha · Unissex",
        summary:
          "Linha transparente com efeito natural, modelo panturrilha.",
        description:
          "A Style Transparência Ever Sheer combina compressão graduada, transparência e variedade de tons. Consulte a cor, o modelo e o tamanho disponíveis.",
        compression: ["20-30 mmHg"],
        colors: [
          {
            name: "Natural",
            swatch: colors.natural,
            image: `${sigvarisBase}/Style/Eversheer/sty_transparent_nude_calf_ot_sigvaris_women_cappuccino_brazil_site4.webp`,
          },
        ],
        boxImage: `${sigvarisBase}/Style/Eversheer/STY_EverSheer_Sigvaris_Unisex_Thigh_BOX_SA.png`,
        genericImage: `${sigvarisBase}/Style/Eversheer/sty_transparent_nude_calf_ot_sigvaris_women_cappuccino_brazil_site4.webp`,
        sizeChartImage: `${sigvarisBase}/Style/Eversheer/SIZE_CHART_STY_Transparencia_TH.jpg`,
        specifications: [
          {
            title: "Apresentação",
            items: ["Modelo panturrilha, com pé aberto", "Cor natural"],
          },
        ],
        badges: ["Unissex", "Transparente"],
        keywords: ["style", "ever sheer", "eversheer", "transparência", "transparencia", "nude", "panturrilha"],
        whatsappMessage: "Olá! Tenho interesse na Sigvaris Style Transparência Ever Sheer Panturrilha.",
      },
      {
        id: "sigvaris-style-ever-sheer-meia-calca",
        brandId: "sigvaris",
        brandName: "Sigvaris",
        line: "Style Transparência Ever Sheer",
        audience: "Unissex",
        displayName: "Sigvaris Style Transparência Ever Sheer Meia-calça · Unissex",
        summary:
          "Linha transparente com efeito natural, modelo meia-calça.",
        description:
          "A Style Transparência Ever Sheer combina compressão graduada, transparência e variedade de tons. Consulte a cor, o modelo e o tamanho disponíveis.",
        compression: ["20-30 mmHg"],
        colors: [
          {
            name: "Natural",
            swatch: colors.natural,
            image: `${sigvarisBase}/Style/Eversheer/STY_Transparent_EverSheer_Pantyhose_OT_Sigvaris_Women_Natural_Brazil_alt.jpg`,
          },
        ],
        boxImage: `${sigvarisBase}/Style/Eversheer/STY_EverSheer_Sigvaris_Unisex_Thigh_BOX_SA.png`,
        genericImage: `${sigvarisBase}/Style/Eversheer/STY_Transparent_EverSheer_Pantyhose_OT_Sigvaris_Women_Natural_Brazil_alt.jpg`,
        sizeChartImage: `${sigvarisBase}/Style/Eversheer/SIZE_CHART_STY_Transparencia_TH.jpg`,
        specifications: [
          {
            title: "Apresentação",
            items: ["Modelo meia-calça, com pé aberto", "Cor natural"],
          },
        ],
        badges: ["Unissex", "Transparente"],
        keywords: ["style", "ever sheer", "eversheer", "transparência", "transparencia", "nude", "meia-calça"],
        whatsappMessage: "Olá! Tenho interesse na Sigvaris Style Transparência Ever Sheer Meia-calça.",
      },
      {
        id: "sigvaris-style-ever-sheer-meia-coxa",
        brandId: "sigvaris",
        brandName: "Sigvaris",
        line: "Style Transparência Ever Sheer",
        audience: "Unissex",
        displayName: "Sigvaris Style Transparência Ever Sheer Meia-coxa · Unissex",
        summary:
          "Linha transparente com efeito natural, modelo meia-coxa.",
        description:
          "A Style Transparência Ever Sheer combina compressão graduada, transparência e variedade de tons. Consulte a cor, o modelo e o tamanho disponíveis.",
        compression: ["20-30 mmHg"],
        colors: [
          {
            name: "Natural",
            swatch: colors.natural,
            image: `${sigvarisBase}/Style/Eversheer/sty_transparent_eversheer_th_ot_sigvaris_women_natural_brazil_site2.webp`,
          },
        ],
        boxImage: `${sigvarisBase}/Style/Eversheer/STY_EverSheer_Sigvaris_Unisex_Thigh_BOX_SA.png`,
        genericImage: `${sigvarisBase}/Style/Eversheer/sty_transparent_eversheer_th_ot_sigvaris_women_natural_brazil_site2.webp`,
        sizeChartImage: `${sigvarisBase}/Style/Eversheer/SIZE_CHART_STY_Transparencia_TH.jpg`,
        specifications: [
          {
            title: "Apresentação",
            items: ["Modelo meia-coxa, com pé aberto", "Cor natural"],
          },
        ],
        badges: ["Unissex", "Transparente"],
        keywords: ["style", "ever sheer", "eversheer", "transparência", "transparencia", "nude", "meia-coxa"],
        whatsappMessage: "Olá! Tenho interesse na Sigvaris Style Transparência Ever Sheer Meia-coxa.",
      },
    ],
  },
  {
    id: "genoven",
    name: "Genoven",
    logo: "/Marcas/genoven.webp",
    description:
      "Meias compressivas Genoven organizadas por linha, compressão e modelo, com disponibilidade confirmada no atendimento.",
    lines: [
      {
        id: "genoven-basic",
        brandId: "genoven",
        brandName: "Genoven",
        line: "Basic",
        audience: "Unissex",
        displayName: "Genoven Basic 20-30 mmHg",
        summary:
          "Meia compressiva Genoven Basic 3/4 com compressão de 20-30 mmHg e opções conforme disponibilidade.",
        description:
          "A linha Genoven Basic reúne meias de compressão para uso conforme orientação profissional. Consulte tamanhos, ponteira e disponibilidade antes da compra.",
        compression: ["20-30 mmHg"],
        colors: [
          {
            name: "Bege",
            swatch: colors.bege,
            image: "/Genoven/genoven-basic-recortado.webp",
          },
        ],
        boxImage: "/Genoven/genoven-meias.webp",
        genericImage: "/Genoven/genoven-basic-recortado.webp",
        specifications: [
          {
            title: "Variações para consulta",
            items: [
              "Modelo 3/4",
              "Ponteira aberta conforme apresentação",
              "Tamanho confirmado no atendimento",
            ],
          },
        ],
        badges: ["Unissex", "Uso diário"],
        keywords: ["genoven", "basic", "meia 3/4", "20-30 mmHg"],
        whatsappMessage: "Olá! Tenho interesse na meia Genoven Basic 20-30 mmHg.",
      },
    ],
  },
];

export const compressionStockingLines = compressionStockingBrands.flatMap(
  (brand) => brand.lines
);

export function getCompressionLineKey(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getCompressionBrandPath(brandId: string) {
  return `/meias-de-compressão/${brandId}`;
}

export function getCompressionLinePath(brandId: string, line: string) {
  return `${getCompressionBrandPath(brandId)}/linhas/${getCompressionLineKey(line)}`;
}

export function getCompressionStockingPath(
  line: Pick<StockingLine, "brandId" | "id">
) {
  const brandPrefix = `${line.brandId}-`;
  const productSlug = line.id.startsWith(brandPrefix)
    ? line.id.slice(brandPrefix.length)
    : line.id;

  return `/meias-de-compressão/${line.brandId}/${productSlug}`;
}

export const compressionStockingSearchIndex = compressionStockingLines.map((line) => ({
  id: line.id,
  title: line.displayName,
  category: "Meias compressivas",
  brand: line.brandName,
  line: line.line,
  subline: line.subline,
  audience: line.audience,
  href: getCompressionStockingPath(line),
  terms: [
    line.brandName,
    line.line,
    line.subline ?? "",
    line.audience ?? "",
    line.displayName,
    line.summary,
    ...line.compression,
    ...line.colors.map((color) => color.name),
    ...line.specifications.flatMap((group) => group.items),
    ...line.keywords,
  ].filter(Boolean),
}));
