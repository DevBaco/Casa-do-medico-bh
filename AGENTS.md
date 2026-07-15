# Casa do Médico BH — Site Institucional + Catálogo

Site institucional e catálogo de produtos (ortopédicos, meias de compressão, equipamentos de
saúde) em **Astro**. Foco em geração de contato via **WhatsApp**, **sem exibição de preços**.
Escopo completo em `docs/escopo-briefing.pdf`.

## Stack

- **Astro 7** (SSG — site 100% estático)
- **React 19** (apenas ilhas interativas)
- **Tailwind CSS 4**
- **shadcn/ui** (preset `radix-nova`, base color `neutral`) — biblioteca de componentes oficial do projeto

## Regra nº 1: sempre use shadcn/ui

Toda UI nova deve ser construída a partir dos componentes em `src/components/ui/`. **Não crie
componentes de UI do zero** (botões, cards, inputs, modais, etc.) enquanto houver um equivalente
no shadcn.

- Precisa de um componente que ainda não existe? Instale com `npx shadcn@latest add <nome>`.
- Componha os primitivos do shadcn dentro de componentes `.astro` ou wrappers React do projeto.
- Use os tokens de tema (`bg-primary`, `text-muted-foreground`, etc.) — não hardcode cores.
- Ícones: `lucide-react`.

Componentes já instalados: `button`, `card`, `badge`, `input`, `separator`, `accordion`,
`sheet`, `navigation-menu`, `carousel`, `dialog`.

## Regra nº 2: hospedagem é shared (Hostinger, NÃO VPS) → minimize JS no cliente

O site será servido como arquivos estáticos em hospedagem compartilhada. O servidor **não roda
Node** — a "carga do servidor" é irrelevante; o que importa é o **peso do JavaScript no navegador
do visitante**. React/Radix custam ~45kb (gzip) por ilha hidratada.

Regras de hidratação (arquitetura de ilhas do Astro):

1. **Padrão = zero JS.** Use componentes shadcn dentro de `.astro` **sem** diretiva `client:*`.
   Eles renderizam para HTML no build e não enviam nenhum JS. Vale para tudo que é estático:
   Card, Badge, Button (como link `<a>`), layout do catálogo, etc.
2. **Hidrate só o que precisa de interatividade real**, e prefira `client:visible` ou
   `client:idle` (nunca `client:load` sem motivo). Exemplos que justificam hidratação:
   - busca interna do header
   - carrossel de logos de marcas e de avaliações do Google
   - menu mobile (`sheet`)
   - modais/`dialog`
3. **Botões de WhatsApp = link `<a href="https://wa.me/...">`**, nunca um componente React
   hidratado. Use o `Button` do shadcn com `asChild` ou as classes de variante em uma tag `<a>`.
4. Antes de adicionar `client:*`, pergunte: "isso precisa de JS ou só de estilo?". Na dúvida,
   deixe estático.

Verifique o peso rodando `npm run build` e conferindo o JS gerado em `dist/_astro/`.

## Estrutura de diretórios

```
src/
  components/
    ui/          # componentes shadcn (não editar manualmente; regenerados pelo CLI)
    ...          # componentes do projeto (cards de produto, header, etc.)
  layouts/       # layouts base (importam src/styles/global.css)
  pages/         # rotas
  data/          # dados do catálogo (categorias, marcas, linhas de meias)
  lib/           # utils (cn, helpers)
  styles/        # global.css (Tailwind + tema shadcn)
  assets/
    brands/      # imagens de marcas (Venosan, Sigvaris)
    products/    # imagens de produtos (IA / banco de imagens)
public/
  logo/          # logo Casa do Médico BH (color + P&B)
  images/        # assets estáticos
docs/            # escopo (PDF) e design-system de referência
```

> Importante: importe `src/styles/global.css` no layout base para ativar Tailwind e o tema shadcn.

## Identidade visual

Paleta baseada no logo do cliente (ver `docs/design-system.css`): verde `#009d43` como cor
primária e dourado `#e8a400` como acento. Ao construir o tema, ajuste as variáveis `--primary` /
`--accent` em `src/styles/global.css` para essas cores.

## Development

Servidor de dev em background:

```
astro dev --background
```

Gerencie com `astro dev stop`, `astro dev status`, `astro dev logs`.

## Documentação

- Astro: https://docs.astro.build
- shadcn/ui: https://ui.shadcn.com
- [Framework components (React) no Astro](https://docs.astro.build/en/guides/framework-components/)
- [Client directives / hidratação](https://docs.astro.build/en/reference/directives-reference/#client-directives)
- [Styling / Tailwind](https://docs.astro.build/en/guides/styling/)
