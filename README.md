# Casa do Médico BH

Site institucional + catálogo de produtos (ortopédicos, meias de compressão e equipamentos de
saúde), com contato via WhatsApp e sem exibição de preços.

## Stack

- [Astro 7](https://astro.build) — geração de site estático (SSG)
- [React 19](https://react.dev) — apenas para ilhas interativas
- [Tailwind CSS 4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) — biblioteca de componentes padrão do projeto

## Comandos

| Comando | Ação |
| --- | --- |
| `npm install` | Instala as dependências |
| `npm run dev` | Servidor de desenvolvimento em `localhost:4321` |
| `npm run build` | Build estático em `./dist/` |
| `npm run preview` | Preview local do build |
| `npx shadcn@latest add <nome>` | Adiciona um componente shadcn |

## Convenções

Diretrizes de desenvolvimento (uso obrigatório do shadcn/ui e disciplina de hidratação para
hospedagem compartilhada) em [`AGENTS.md`](./AGENTS.md).

## Hospedagem

Deploy como site estático em hospedagem compartilhada (Hostinger, não-VPS): basta subir o
conteúdo de `dist/`. O servidor apenas serve arquivos — sem Node em runtime.

## Referências

- Escopo do projeto: `docs/escopo-briefing.pdf`
- Design system de referência: `docs/design-system.html` / `docs/design-system.css`
