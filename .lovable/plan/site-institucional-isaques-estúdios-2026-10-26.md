# Site institucional — Isaques Estúdios

Site corporativo escuro com dourado, focado em SEO e conversão, seguindo o briefing enviado.

## Páginas
- `/` Home com as 8 seções do briefing (Hero com H1 "Agência de Marketing para Empresas...", 8 Anos, Metodologia 01–04, 7 Soluções, Para Quem É, Pilares, FAQ, Formulário + WhatsApp).
- 7 páginas de serviço em `/servicos/...` (os slugs exatos do briefing), cada uma com título, descrição, benefícios, etapas, mini-FAQ e chamada para diagnóstico.

## Elementos fixos
- Menu fixo: logo tipográfico "Isaques Estúdios" (branco + dourado), links Início, 8 Anos, Metodologia, Soluções (menu suspenso com os 7 serviços), Perguntas Frequentes, botão "Agendar Diagnóstico". Versão mobile com menu recolhível.
- Rodapé com serviços, contato e links.
- Botão flutuante de WhatsApp (11 98340-4368) no canto inferior direito.

## Formulário
Campos do briefing; ao enviar, abre o WhatsApp com uma mensagem pronta contendo os dados preenchidos.

## SEO
- Título, descrição e dados de compartilhamento exclusivos em cada página.
- Dados estruturados ProfessionalService + FAQPage na Home; Service nas páginas de serviço.
- Estrutura semântica (header, main, section, article, nav, footer), um H1 por página.

## Detalhes técnicos
- O briefing pede react-helmet-async e React Router; este projeto usa TanStack Router, então as metas ficam no `head()` de cada rota (mesmo resultado para SEO) e as rotas em `src/routes/servicos.*.tsx`.
- Cores e fontes vêm do design system anexado (fundo quase preto, cards escuros, dourado, seções claras), que já corresponde à paleta do briefing; não serão usados hex fixos.
- Conteúdo dos serviços centralizado em um arquivo de dados compartilhado por Home e subpáginas.
- Componentes do design system: Navbar, Footer, DisplayHeading, Highlight, SectionHeader, ServiceCard, StatCard, Accordion, Input, Textarea, Button, Badge.
