export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: { heading?: string; paragraphs: string[] }[];
}

export const posts: BlogPost[] = [
  {
    slug: "trafego-pago-ou-seo-por-onde-comecar",
    title: "Tráfego pago ou SEO: por onde sua empresa deve começar?",
    excerpt:
      "Entenda as diferenças entre as duas principais frentes de aquisição de clientes no digital e como combinar resultados rápidos com crescimento sustentável.",
    date: "2026-10-12",
    readTime: "5 min",
    content: [
      {
        paragraphs: [
          "Essa é uma das perguntas mais comuns em diagnósticos estratégicos: vale mais investir em anúncios ou em posicionamento orgânico? A resposta honesta é que as duas frentes cumprem papéis diferentes — e as empresas que crescem de forma consistente usam as duas, cada uma no momento certo.",
          "O tráfego pago (Google Ads, Meta Ads, LinkedIn Ads) gera demanda imediata. É a forma mais rápida de colocar sua oferta na frente de quem já procura pelo serviço ou de quem tem o perfil exato do seu cliente ideal.",
        ],
      },
      {
        heading: "Quando priorizar o tráfego pago",
        paragraphs: [
          "Se a empresa precisa de leads e vendas no curto prazo, o tráfego pago é o caminho. Campanhas bem estruturadas começam a gerar contatos já nos primeiros dias, e os dados coletados revelam quais mensagens, ofertas e públicos realmente convertem.",
          "O ponto de atenção é a dependência: quando o investimento para, a geração de demanda para junto. Por isso o tráfego pago funciona melhor como acelerador, não como única fonte de clientes.",
        ],
      },
      {
        heading: "Quando priorizar o SEO",
        paragraphs: [
          "O SEO constrói patrimônio digital. Um site bem posicionado nas buscas mais lucrativas do seu setor gera clientes todos os meses, sem custo por clique. É um ativo que se valoriza com o tempo e reduz o custo de aquisição no longo prazo.",
          "A contrapartida é o prazo: os primeiros avanços costumam aparecer entre 3 e 6 meses. Por isso a estratégia mais eficiente combina as duas frentes — o tráfego pago sustenta os resultados enquanto o SEO ganha força.",
        ],
      },
      {
        heading: "O equilíbrio certo",
        paragraphs: [
          "No diagnóstico estratégico, analisamos o momento do negócio, a concorrência e o caixa disponível para definir a proporção ideal entre as frentes. Não existe fórmula única: existe o plano certo para o estágio da sua empresa.",
        ],
      },
    ],
  },
  {
    slug: "sinais-de-que-seu-site-esta-perdendo-vendas",
    title: "5 sinais de que o site da sua empresa está perdendo vendas",
    excerpt:
      "Seu site pode estar afastando clientes sem você perceber. Conheça os sinais mais comuns e o que fazer para transformar visitas em contatos.",
    date: "2026-09-28",
    readTime: "4 min",
    content: [
      {
        paragraphs: [
          "O site é o principal vendedor da empresa no ambiente digital — e trabalha 24 horas por dia. Quando ele não converte, o problema raramente é falta de visitas: é o que acontece (ou deixa de acontecer) depois que o visitante chega.",
        ],
      },
      {
        heading: "Os 5 sinais",
        paragraphs: [
          "1. Carregamento lento: cada segundo a mais de espera aumenta a desistência. Sites pesados perdem visitantes antes mesmo de mostrar a oferta.",
          "2. Mensagem confusa: se em cinco segundos o visitante não entende o que a empresa faz e para quem, ele sai. Clareza vende mais do que criatividade.",
          "3. Falta de prova social: sem cases, depoimentos e resultados, o visitante não tem motivos para confiar — e confiança é o que antecede o contato.",
          "4. Chamadas para ação fracas: botões genéricos como \"saiba mais\" não direcionam. O visitante precisa saber exatamente qual é o próximo passo.",
          "5. Experiência ruim no celular: a maior parte do tráfego vem de dispositivos móveis. Um site que não funciona bem na tela pequena perde a maior parte das oportunidades.",
        ],
      },
      {
        heading: "Por onde começar",
        paragraphs: [
          "Um diagnóstico profissional identifica quais desses pontos estão custando vendas à sua empresa e define prioridades: o que corrigir primeiro para gerar retorno mais rápido. Muitas vezes, ajustes pontuais de mensagem e velocidade já mudam o resultado.",
        ],
      },
    ],
  },
  {
    slug: "como-o-branding-influencia-o-preco",
    title: "Como o branding influencia o preço que sua empresa pode cobrar",
    excerpt:
      "Empresas percebidas como referência não competem por preço. Entenda como posicionamento e identidade visual transformam a percepção de valor do seu negócio.",
    date: "2026-09-10",
    readTime: "4 min",
    content: [
      {
        paragraphs: [
          "Duas empresas podem entregar serviços tecnicamente equivalentes e cobrar preços muito diferentes. A diferença quase nunca está na entrega — está na percepção de valor que cada marca constrói antes mesmo da primeira conversa comercial.",
        ],
      },
      {
        heading: "Percepção de valor começa antes da proposta",
        paragraphs: [
          "Quando um potencial cliente pesquisa sua empresa, ele forma uma impressão em segundos: o site, a identidade visual, o conteúdo das redes sociais e as avaliações contam uma história. Se essa história comunica solidez e especialização, o preço deixa de ser o principal critério de decisão.",
          "O contrário também é verdadeiro: uma apresentação visual amadora coloca a empresa na guerra de preços, competindo com concorrentes piores que cobram menos.",
        ],
      },
      {
        heading: "O que constrói uma marca forte",
        paragraphs: [
          "Identidade visual profissional e consistente, uma proposta de valor clara, conteúdo que demonstra autoridade e prova social constante. Nenhum desses elementos funciona isolado: é o conjunto, aplicado com consistência ao longo do tempo, que reposiciona a percepção do mercado.",
          "O resultado prático aparece nos números comerciais: ticket médio maior, taxa de fechamento mais alta e leads que chegam já convencidos do valor.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
