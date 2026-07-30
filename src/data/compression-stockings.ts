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
        id: "venosan-comfortline-feminina",
        brandId: "venosan",
        brandName: "Venosan",
        line: "Comfortline",
        audience: "Unissex",
        displayName: "Venosan Comfortline · Unissex",
        summary:
          "Linha diária com toque macio, indicada para rotina, trabalho e longos períodos em pé ou sentado.",
        description:
          "A Comfortline reúne modelos de compressão graduada para uso cotidiano, com variações de altura, ponteira e tamanho conforme estoque.",
        compression: ["20-30 mmHg", "30-40 mmHg"],
        colors: [
          {
            name: "Bege · AD",
            swatch: colors.bege,
            image: `${venosanBase}/COMFORTLINE/16431149200351-adcomfortline.jpg`,
          },
          {
            name: "Bege · AGG",
            swatch: colors.bege,
            image: `${venosanBase}/COMFORTLINE/16431149201164-aggcomfortlinepernadireita.jpg`,
          },
          {
            name: "Bege · AGH",
            swatch: colors.bege,
            image: `${venosanBase}/COMFORTLINE/16431149205637-aghcomfortline.jpg`,
          },
          {
            name: "Bege · AT",
            swatch: colors.bege,
            image: `${venosanBase}/COMFORTLINE/16431149208895-atcomfortline.jpg`,
          },
        ],
        boxImage: `${venosanBase}/COMFORTLINE/COMFORTLINE - ESQUERDA.webp`,
        genericImage: `${venosanBase}/COMFORTLINE/16431149200351-adcomfortline.jpg`,
        sizeChartImage: `${venosanBase}/COMFORTLINE/TABELA DE MEDIDAS.jpg`,
        specifications: [
          {
            title: "Modelos oficiais",
            items: [
              "AD, pé aberto",
              "AGG unilateral direita ou esquerda, pé aberto",
              "AGH, pé aberto",
              "AT, pé aberto",
              "Cor bege",
            ],
          },
        ],
        badges: ["Unissex", "Uso diário"],
        keywords: ["comfortline", "unissex", "meia de compressão diária"],
        whatsappMessage: "Olá! Tenho interesse na Venosan Comfortline.",
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
        id: "venosan-legline",
        brandId: "venosan",
        brandName: "Venosan",
        line: "Legline",
        audience: "Unissex",
        displayName: "Venosan Legline · Unissex",
        summary:
          "Linha com variações de cores, compressões e modelos para diferentes rotinas.",
        description:
          "A Legline é uma linha com opções discretas para o dia a dia. As cores e modelos variam conforme estoque e devem ser confirmados no atendimento.",
        compression: ["15-23 mmHg", "20-30 mmHg"],
        colors: [
          {
            name: "Olinda · AD",
            swatch: colors.olinda,
            image: `${venosanBase}/LEGLINE/16419946764369-leglineadpeabertoolinda.jpg`,
          },
          {
            name: "Sahara · AD",
            swatch: colors.sahara,
            image: `${venosanBase}/LEGLINE/16419955489835-leglineadpeabertosahara.jpg`,
          },
          {
            name: "Olinda · AGH",
            swatch: colors.olinda,
            image: `${venosanBase}/LEGLINE/164199554985-leglineaghpeabertoolinda.jpg`,
          },
          {
            name: "Sahara · AGH",
            swatch: colors.sahara,
            image: `${venosanBase}/LEGLINE/16419965153307-leglineaghpeabertosahara.jpg`,
          },
          {
            name: "Olinda · AT",
            swatch: colors.olinda,
            image: `${venosanBase}/LEGLINE/16420072730389-leglineatpeabertoolinda.jpg`,
          },
          {
            name: "Sahara · AT",
            swatch: colors.sahara,
            image: `${venosanBase}/LEGLINE/16420072731121-leglineatpeabertosahara.jpg`,
          },
        ],
        boxImage: `${venosanBase}/LEGLINE/LEGLINE 15-23 - ESQUERDA.webp`,
        genericImage: `${venosanBase}/LEGLINE/16419946764369-leglineadpeabertoolinda.jpg`,
        sizeChartImage: `${venosanBase}/LEGLINE/TABELA DE MEDIDAS.jpg`,
        specifications: [
          {
            title: "Modelos oficiais",
            items: ["AD, AGH e AT, com pé aberto"],
          },
          {
            title: "Cores oficiais",
            items: ["Olinda", "Sahara"],
          },
        ],
        badges: ["Unissex", "Cores variadas"],
        keywords: ["legline", "olinda", "sahara"],
        whatsappMessage: "Olá! Tenho interesse na Venosan Legline.",
      },
      {
        id: "venosan-ultraline-feminina",
        brandId: "venosan",
        brandName: "Venosan",
        line: "Ultraline",
        audience: "Unissex",
        displayName: "Venosan Ultraline · Unissex",
        summary:
          "Linha Super Premium com opções em bege.",
        description:
          "A Ultraline é voltada a necessidades de compressão mais firme, com acompanhamento criterioso de medidas e confirmação de modelo pelo atendimento.",
        compression: ["20-30 mmHg", "30-40 mmHg"],
        colors: [
          {
            name: "Bege · AD",
            swatch: colors.bege,
            image: `${venosanBase}/ULTRALINE 4000/16420151769452-ultralineadpabertocorbege.jpg`,
          },
          {
            name: "Bege · AGG",
            swatch: colors.bege,
            image: `${venosanBase}/ULTRALINE 4000/1642015178229-ultralineaggesquerdocorbege.jpg`,
          },
          {
            name: "Bege · AGH",
            swatch: colors.bege,
            image: `${venosanBase}/ULTRALINE 4000/16420151784312-ultralineaghpabertocorbege.jpg`,
          },
          {
            name: "Bege · AT",
            swatch: colors.bege,
            image: `${venosanBase}/ULTRALINE 4000/ultraline-400-at-aberta-bege.png`,
          },
        ],
        boxImage: `${venosanBase}/ULTRALINE 4000/ULTRALINE - FRENTE.webp`,
        genericImage: `${venosanBase}/ULTRALINE 4000/16420151769452-ultralineadpabertocorbege.jpg`,
        sizeChartImage: `${venosanBase}/ULTRALINE 4000/TABELA DE MEDIDAS.jpg`,
        specifications: [
          {
            title: "Modelos oficiais",
            items: [
              "AD, AGH e AT, com pé aberto",
              "AGG unilateral direita ou esquerda, com pé aberto",
            ],
          },
        ],
        badges: ["Unissex", "Super Premium"],
        keywords: ["ultraline", "unissex", "bege"],
        whatsappMessage:
          "Olá! Tenho interesse na Venosan Ultraline.",
      },
      {
        id: "venosan-ultraline-bracadeira",
        brandId: "venosan",
        brandName: "Venosan",
        line: "Ultraline",
        subline: "Braçadeira",
        audience: "Unissex",
        displayName: "Venosan Ultraline Braçadeira · Unissex",
        summary:
          "Braçadeira da linha Ultraline, com tabela de medidas própria.",
        description:
          "A braçadeira Ultraline possui tabela específica e variações confirmadas por tamanho, lado e configuração.",
        compression: ["30-40 mmHg"],
        colors: [
          {
            name: "Bege · ZH",
            swatch: colors.bege,
            image: `${venosanBase}/ULTRALINE 4000/16420806755022-zhultralinecorbege.jpg`,
          },
          {
            name: "Bege · BH",
            swatch: colors.bege,
            image: `${venosanBase}/ULTRALINE 4000/16420806755796-bhultralinecorbege.jpg`,
          },
        ],
        boxImage: `${venosanBase}/ULTRALINE 4000/ULTRALINE BRAÇADEIRA - DIREITA.webp`,
        genericImage: `${venosanBase}/ULTRALINE 4000/16420806755022-zhultralinecorbege.jpg`,
        sizeChartImage: `${venosanBase}/ULTRALINE 4000/TABELA DE MEDIDAS - BRAÇADEIRA.jpg`,
        specifications: [
          {
            title: "Variações para consulta",
            items: [
              "ZH: até o metacarpo, com polegar",
              "BH: até o punho",
              "Cor bege e tabela própria",
            ],
          },
        ],
        badges: ["Braçadeira", "Alta compressão"],
        keywords: ["ultraline", "braçadeira", "manga compressiva"],
        whatsappMessage:
          "Olá! Tenho interesse na Venosan Ultraline Braçadeira.",
      },
      {
        id: "venosan-6000",
        brandId: "venosan",
        brandName: "Venosan",
        line: "6000",
        audience: "Unissex",
        displayName: "Venosan 6000 · Unissex",
        summary:
          "Linha unissex de textura fina e confortável, disponível em cores clássicas.",
        description:
          "A Venosan 6000 é indicada para homens e mulheres, com variações de cor, ponteira, tamanho e compressão conforme estoque.",
        compression: ["20-30 mmHg", "30-40 mmHg"],
        colors: [
          {
            name: "Bege · AD",
            swatch: colors.bege,
            image: `${venosanBase}/6000/16431198851026-02.ad6000bege.jpg`,
          },
          {
            name: "Bronze · AD",
            swatch: colors.bronze,
            image: `${venosanBase}/6000/16431198851415-03.ad6000bronze.jpg`,
          },
          {
            name: "Bege · AGH",
            swatch: colors.bege,
            image: `${venosanBase}/6000/16431198859595-07.agh6000begepaberto.jpg`,
          },
          {
            name: "Bronze · AGH",
            swatch: colors.bronze,
            image: `${venosanBase}/6000/16431198863246-08.agh6000bronzepaberto.jpg`,
          },
          {
            name: "Bege · AT",
            swatch: colors.bege,
            image: `${venosanBase}/6000/16431198863726-09.at6000begepaberto.jpg`,
          },
          {
            name: "Bronze · AT",
            swatch: colors.bronze,
            image: `${venosanBase}/6000/16431198866288-10.at6000bronzepaberto.jpg`,
          },
        ],
        boxImage: `${venosanBase}/6000/6000 - DIREITA.webp`,
        genericImage: `${venosanBase}/6000/16431198851026-02.ad6000bege.jpg`,
        sizeChartImage: `${venosanBase}/6000/TABELA DE MEDIDAS.jpg`,
        specifications: [
          {
            title: "Modelos oficiais",
            items: [
              "AD com pé aberto",
              "AGH com pé aberto",
              "AT com pé aberto",
            ],
          },
          {
            title: "Cores oficiais",
            items: ["Bege", "Bronze"],
          },
        ],
        badges: ["Unissex", "Clássica"],
        keywords: ["venosan 6000", "6000", "unissex", "bronze"],
        whatsappMessage: "Olá! Tenho interesse na Venosan 6000.",
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
        id: "venosan-aes-feminina",
        brandId: "venosan",
        brandName: "Venosan",
        line: "AES / antiembolia",
        audience: "Unissex",
        displayName: "Venosan AES Antiembolia · Unissex",
        summary:
          "Meia antiembolia para uso hospitalar ou pós-procedimento, conforme orientação.",
        description:
          "A linha AES é voltada ao contexto hospitalar, pós-operatório ou prevenção de trombose conforme prescrição. Medidas e modelo são confirmados no atendimento.",
        compression: ["18 mmHg", "Antiembolia"],
        colors: [
          {
            name: "Branca · AD",
            swatch: colors.branca,
            image: `${venosanBase}/AES/AD-AES-PERNA FEMININA.webp`,
          },
          {
            name: "Branca · AGH",
            swatch: colors.branca,
            image: `${venosanBase}/AES/16431212039486-03.aghaes.jpg`,
          },
        ],
        boxImage: `${venosanBase}/AES/AES - DIREITA.webp`,
        genericImage: `${venosanBase}/AES/AD-AES-DEITADA-PERNA-FEMNINA.webp`,
        sizeChartImage: `${venosanBase}/AES/TABELA DE MEDIDAS.jpg`,
        specifications: [
          {
            title: "Modelos oficiais",
            items: ["AD, até o joelho", "AGH, até a coxa", "Cor branca"],
          },
        ],
        badges: ["Unissex", "Antiembolia"],
        keywords: ["aes", "antiembolia", "unissex", "hospitalar"],
        whatsappMessage:
          "Olá! Tenho interesse na Venosan AES Antiembolia.",
      },
      {
        id: "venosan-aes-esteril",
        brandId: "venosan",
        brandName: "Venosan",
        line: "AES / antiembolia",
        subline: "Estéril",
        audience: "Unissex",
        displayName: "Venosan AES Estéril · Unissex",
        summary:
          "Sublinha estéril da AES antiembolia, com disponibilidade confirmada no atendimento.",
        description:
          "A AES Estéril é uma sublinha específica para contexto hospitalar. Consulte disponibilidade por tamanho, embalagem e indicação.",
        compression: ["18 mmHg", "Antiembolia"],
        colors: [
          {
            name: "Branca · AD",
            swatch: colors.branca,
            image: `${venosanBase}/AES/AD-AES-PERNA FEMININA.webp`,
          },
          {
            name: "Branca · AGH",
            swatch: colors.branca,
            image: `${venosanBase}/AES/16431212039486-03.aghaes.jpg`,
          },
        ],
        boxImage: `${venosanBase}/AES/AES ESTÉRIL - DIREITA.webp`,
        genericImage: `${venosanBase}/AES/AD-AES-PERNA FEMININA.webp`,
        sizeChartImage: `${venosanBase}/AES/TABELA DE MEDIDAS.jpg`,
        specifications: [
          {
            title: "Apresentação oficial",
            items: [
              "Versão estéril para uso durante cirurgia",
              "AD, até o joelho, e AGH, até a coxa",
              "Cor branca",
              "Tamanho confirmado pela tabela",
            ],
          },
        ],
        badges: ["Estéril", "Antiembolia"],
        keywords: ["aes", "estéril", "antiembolia"],
        whatsappMessage: "Olá! Tenho interesse na Venosan AES Estéril.",
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
        id: "sigvaris-dynaven-basic",
        brandId: "sigvaris",
        brandName: "Sigvaris",
        line: "Dynaven Basic",
        audience: "Unissex",
        displayName: "Sigvaris Dynaven Basic · Unissex",
        summary:
          "Meia medicinal com proposta de custo-benefício para tratamento compressivo no dia a dia.",
        description:
          "A Dynaven Basic combina compressão graduada, calcanhar anatômico e uma construção voltada ao uso cotidiano. Consulte o modelo disponível e confirme as medidas antes da compra.",
        compression: ["20-30 mmHg", "30-40 mmHg"],
        colors: [
          {
            name: "Bege",
            swatch: colors.bege,
            image: `${sigvarisBase}/Dynaven/DYN_Basic_NWG_OT_honey_alt1_NA_SA.jpg`,
          },
        ],
        boxImage: `${sigvarisBase}/Dynaven/DYN_BASIC_packing_calf_unisex_brazil_box.png`,
        genericImage: `${sigvarisBase}/Dynaven/DYN_Basic_NWG_OT_honey_alt1_NA_SA.jpg`,
        sizeChartImage: `${sigvarisBase}/Dynaven/SIZE_CHART_DYN_BASIC_SA.jpg`,
        specifications: [
          {
            title: "Apresentações da linha",
            items: [
              "Modelos panturrilha, meia-coxa e meia-calça",
              "Ponteira aberta",
              "Comprimentos normal e longo conforme modelo",
            ],
          },
        ],
        badges: ["Unissex", "Custo-benefício"],
        keywords: ["dynaven", "dynaven basic", "basic", "medicinal", "dia a dia"],
        whatsappMessage: "Olá! Tenho interesse na Sigvaris Dynaven Basic.",
      },
      {
        id: "sigvaris-essencial-algodao-super-tech",
        brandId: "sigvaris",
        brandName: "Sigvaris",
        line: "Essencial Fibras Naturais",
        subline: "Algodão Super Tech",
        audience: "Unissex",
        displayName: "Sigvaris Essencial Algodão Super Tech",
        summary:
          "Linha com toque macio, respirabilidade e controle climático para uso prolongado.",
        description:
          "A Essencial Algodão Super Tech foi desenvolvida para oferecer conforto diário, especialmente para quem prefere contato mais macio com a pele. Compressão, ponteira e tamanho são confirmados no atendimento.",
        compression: ["20-30 mmHg", "30-40 mmHg"],
        colors: [
          {
            name: "Bege",
            swatch: colors.bege,
            image: `${sigvarisBase}/Essencial/Algodão-fibras naturais/ESS_AlgodaoSuperTech_Unisex_Beige_SA.jpg`,
          },
          {
            name: "Preta",
            swatch: colors.preta,
            image: `${sigvarisBase}/Essencial/Algodão-fibras naturais/ESS_AlgodaoSuperTech_Unisex_CT_Black_SA_2.jpg`,
          },
        ],
        boxImage: `${sigvarisBase}/Essencial/Algodão-fibras naturais/ESS_AlgodaoSuperTech_packaging_SA_BR.png`,
        genericImage: `${sigvarisBase}/Essencial/Algodão-fibras naturais/ESS_AlgodaoSuperTech_Unisex_Beige_SA.jpg`,
        sizeChartImage: `${sigvarisBase}/Essencial/Algodão-fibras naturais/SIZE_CHART_ALGODAO_SUPER_TECH_CALF_SA_BR.jpg`,
        specifications: [
          {
            title: "Características da linha",
            items: [
              "Modelo panturrilha",
              "Opções de ponteira aberta e fechada conforme estoque",
              "Cores bege e preta",
            ],
          },
        ],
        badges: ["Unissex", "Fibras naturais"],
        keywords: ["essencial", "algodão", "algodao", "super tech", "fibras naturais"],
        whatsappMessage: "Olá! Tenho interesse na Sigvaris Essencial Algodão Super Tech.",
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
          {
            name: "Preta",
            swatch: colors.preta,
            image: `${sigvarisBase}/Essencial/Algodão-fibras naturais/ESS_NaturalFibers_Unisex_Black_2_SA.jpg`,
          },
          {
            name: "Chocolate",
            swatch: colors.chocolate,
            image: `${sigvarisBase}/Essencial/Algodão-fibras naturais/ESS_NaturalFibers_Unisex_Brown_2_SA.jpg`,
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
              "Cores bege, preta e chocolate",
            ],
          },
        ],
        badges: ["Unissex", "Algodão"],
        keywords: ["essencial", "fibras naturais", "algodão super", "algodao super"],
        whatsappMessage: "Olá! Tenho interesse na Sigvaris Essencial Fibras Naturais.",
      },
      {
        id: "sigvaris-essencial-conforto",
        brandId: "sigvaris",
        brandName: "Sigvaris",
        line: "Essencial Conforto",
        subline: "Select Comfort Premium",
        audience: "Unissex",
        displayName: "Sigvaris Essencial Conforto Select Comfort Premium",
        summary:
          "Linha premium com microfibra, controle climático e variedade de modelos para uso diário.",
        description:
          "A Essencial Conforto Select Comfort Premium possui revestimento interno de microfibra e construção voltada à durabilidade e ao conforto. Consulte a combinação disponível de modelo, cor, ponteira e compressão.",
        compression: ["20-30 mmHg", "30-40 mmHg"],
        colors: [
          {
            name: "Natural",
            swatch: colors.natural,
            image: `${sigvarisBase}/Essencial/Conforto/ESS_Confort_Pantyhouse_Sigvaris_Unisex_Suntan_SA.jpg`,
          },
        ],
        boxImage: `${sigvarisBase}/Essencial/Conforto/essencial-caixa-2.jpg`,
        genericImage: `${sigvarisBase}/Essencial/Conforto/ESS_Confort_Pantyhouse_Sigvaris_Unisex_Suntan_SA.jpg`,
        sizeChartImage: `${sigvarisBase}/Essencial/Conforto/SIZE_CHART_ESS_Conforto_TH.jpg`,
        specifications: [
          {
            title: "Apresentações da linha",
            items: [
              "Modelos panturrilha, meia-coxa e meia-calça",
              "Ponteiras aberta e fechada conforme modelo",
              "Comprimentos normal, curto e longo conforme configuração",
            ],
          },
        ],
        badges: ["Unissex", "Premium"],
        keywords: ["essencial", "conforto", "select comfort", "premium", "microfibra"],
        whatsappMessage: "Olá! Tenho interesse na Sigvaris Essencial Conforto.",
      },
      {
        id: "sigvaris-performance",
        brandId: "sigvaris",
        brandName: "Sigvaris",
        line: "Performance",
        audience: "Unissex",
        displayName: "Sigvaris Performance · Esportiva",
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
          {
            name: "Azul",
            swatch: colors.azul,
            image: `${sigvarisBase}/Performance (esportiva)/ACM_HighTech_CW_blue.jpg`,
          },
          {
            name: "Rosa",
            swatch: colors.pink,
            image: `${sigvarisBase}/Performance (esportiva)/ACM_HighTech_women_calf_pink.jpg`,
          },
          {
            name: "Branca",
            swatch: colors.branca,
            image: `${sigvarisBase}/Performance (esportiva)/ACM_HighTech_CM_white_1200x1200.jpg`,
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
              "Cores preta, azul, rosa e branca conforme estoque",
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
        id: "sigvaris-style-audace",
        brandId: "sigvaris",
        brandName: "Sigvaris",
        line: "Style Prevenção Audace",
        audience: "Unissex",
        displayName: "Sigvaris Style Prevenção Audace · Unissex",
        summary:
          "Linha transparente para prevenção, conforto e elegância no uso diário.",
        description:
          "A Style Prevenção Audace foi desenvolvida para combinar transparência, elasticidade e compressão suave. Os modelos e as cores variam conforme disponibilidade.",
        compression: ["15-20 mmHg"],
        colors: [
          {
            name: "Natural escura",
            swatch: colors.naturalEscura,
            image: `${sigvarisBase}/Style/Audace/STY_Preventive_Sigvaris_Woman_Pantyhouse_Open_NaturalEscura_alt3_SA.jpg`,
          },
          {
            name: "Preta",
            swatch: colors.preta,
            image: `${sigvarisBase}/Style/Audace/STY_Preventive_Sigvaris_Woman_Pantyhouse_Black_SA.jpg`,
          },
          {
            name: "Natural",
            swatch: colors.natural,
            image: `${sigvarisBase}/Style/Audace/sty_preventive_sigvaris_woman_pantyhouse_suntan_alt1_SA.jpg`,
          },
        ],
        boxImage: `${sigvarisBase}/Style/Audace/STY_Audace_Sigvaris_Unisex_Calf_BOX_SA.png`,
        genericImage: `${sigvarisBase}/Style/Audace/STY_Preventive_Sigvaris_Woman_Pantyhouse_Open_NaturalEscura_alt3_SA.jpg`,
        sizeChartImage: `${sigvarisBase}/Style/Audace/SIZE_CHART_STY_Prevencao_Pantyhouse.jpg`,
        specifications: [
          {
            title: "Apresentações da linha",
            items: [
              "Modelos panturrilha, meia-coxa e meia-calça",
              "Ponteiras aberta e fechada conforme modelo",
              "Tabela de medidas adaptada ao biótipo brasileiro",
            ],
          },
        ],
        badges: ["Unissex", "Prevenção"],
        keywords: ["style", "audace", "prevenção", "prevencao", "transparente", "unissex"],
        whatsappMessage: "Olá! Tenho interesse na Sigvaris Style Prevenção Audace.",
      },
      {
        id: "sigvaris-style-ever-sheer",
        brandId: "sigvaris",
        brandName: "Sigvaris",
        line: "Style Transparência Ever Sheer",
        audience: "Unissex",
        displayName: "Sigvaris Style Transparência Ever Sheer · Unissex",
        summary:
          "Linha transparente com efeito natural e opções para diferentes tons de pele.",
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
            title: "Apresentações da linha",
            items: [
              "Modelos panturrilha, meia-coxa e meia-calça",
              "Ponteiras aberta e fechada conforme modelo",
              "Opções de tons de pele confirmadas no atendimento",
            ],
          },
        ],
        badges: ["Unissex", "Transparente"],
        keywords: ["style", "ever sheer", "eversheer", "transparência", "transparencia", "nude"],
        whatsappMessage: "Olá! Tenho interesse na Sigvaris Style Transparência Ever Sheer.",
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
            image: "/Genoven/genoven-meias.webp",
          },
        ],
        boxImage: "/Genoven/genoven-meias.webp",
        genericImage: "/Genoven/genoven-meias.webp",
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
