# Plano de migração — Wix → Astro (Hostinger)

Situação: site atual em Wix (sem acesso ao painel), domínio `casadomedicobh.com.br`,
acesso ao Google Search Console OK. Decisão: páginas "blank" e o blog **não serão
reaproveitados** — serão apenas redirecionados.

## Inventário (capturado em 15/07/2026, site ainda no ar)

- `sitemap-index.xml` + sitemaps do Wix, `urls-atuais.txt` (10 URLs indexáveis)
- `paginas-wix/` — HTML das 3 páginas que interessam: home, meias-de-compressão,
  venosan-e-sigvaris (backup de conteúdo, titles e descriptions)
- `gsc-performance/` — export do GSC, últimos 16 meses (Web)

## O que o GSC mostra (16 meses)

| Página | Cliques | Impressões | Posição |
|---|---|---|---|
| `/` (home) | 1.490 | 63.752 | 9,1 |
| `/blank-2` (Contato) | 62 | 8.038 | 10,1 |
| `/meias-de-compressão` | 48 | 4.112 | 8,3 |
| posts do blog + `/blank-1` + `/blog` | 7 | ~2.500 | — |

Leituras importantes:

1. **A home concentra ~92% dos cliques.** O tráfego é majoritariamente de **marca**
   ("casa do medico bh" e variações) e de buscas locais genéricas ("loja ortopédica bh",
   "loja de produtos hospitalares", "av afonso pena 981"). A home nova precisa responder
   bem a isso: nome, endereço, telefone/WhatsApp, horário — e schema LocalBusiness.
2. As buscas de **meias de compressão** ("onde comprar meias de compressão em bh",
   "lojas de meias de compressão em bh", posição ~10) têm potencial claro: o catálogo
   novo de `/meias-de-compressao` deve mirar essas consultas.
3. As páginas de blog e blank quase não têm tráfego — redirecionar sem recriar não
   perde nada relevante.
4. `/venosan-e-sigvaris-em-belo-horizonte` **nem aparece** no relatório (0 cliques) —
   apesar do title bom, não ranqueia. Redirect simples resolve.

## Mapa de redirects (.htaccess na Hostinger)

| URL antiga (Wix) | Destino (301) |
|---|---|
| `/meias-de-compressão` | `/meias-de-compressao` |
| `/venosan-e-sigvaris-em-belo-horizonte` | `/meias-de-compressao` |
| `/blank-1` (Sobre) | `/sobre` (ou home, se não houver página Sobre) |
| `/blank-2` (Contato) | `/contato` |
| `/blank-3` | `/` |
| `/blog` | `/` |
| `/post/*` (3 posts) | `/meias-de-compressao` |

Regras do `.htaccess`: as URLs acentuadas chegam **percent-encoded** ao servidor
(ex.: `meias-de-compress%C3%A3o`) — escrever as regras assim. Sempre 301, mantidos
permanentemente (custo zero em site estático).

## Checklist de lançamento

1. Confirmar **onde está o DNS do domínio**: se os nameservers estiverem no Wix e não
   houver acesso à conta, retomar o controle no registrador (Registro.br) antes de
   qualquer coisa. **Único bloqueador real da migração.**
2. Build Astro com: slugs definitivos, titles/descriptions (os da home e da página de
   meias no Wix eram bons — ver `paginas-wix/`), canonical, `@astrojs/sitemap`,
   `robots.txt`, schema **LocalBusiness** (endereço Av. Afonso Pena 981 aparece como
   consulta de busca — dado estruturado ajuda).
3. Subir `dist/` → `public_html/` na Hostinger **com o `.htaccess` junto**.
4. Apontar DNS → testar cada URL de `urls-atuais.txt` (todas devem dar 301 → 200).
5. GSC: enviar novo `sitemap.xml`, inspecionar home e `/meias-de-compressao`,
   acompanhar Indexação → Páginas por ~4 semanas. O export em `gsc-performance/` é o
   baseline de comparação.
6. Google Business Profile: conferir link do site e categorias.
