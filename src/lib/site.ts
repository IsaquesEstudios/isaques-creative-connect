export const SITE_NAME = "Isaques Estúdios";
export const WHATSAPP_NUMBER = "5511983404368";
export const WHATSAPP_DISPLAY = "(11) 98340-4368";

export function whatsappLink(message = "Olá! Gostaria de falar com um consultor da Isaques Estúdios.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type ServiceIcon = "megaphone" | "search" | "monitor" | "crown" | "share" | "palette" | "camera";

export interface Service {
  slug: string;
  icon: ServiceIcon;
  title: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  benefits: string[];
  steps: { title: string; text: string }[];
  faq: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "trafego-pago-empresas",
    icon: "megaphone",
    title: "Gestão de Tráfego Pago (Google Ads e Social Ads)",
    short:
      "Captação imediata de demanda através da Rede de Pesquisa do Google (para quem já busca pelo seu serviço) e campanhas de geração de desejo e remarketing no Meta Ads (Instagram/Facebook) e LinkedIn Ads.",
    metaTitle: "Tráfego Pago para Empresas | Google Ads e Meta Ads | Isaques Estúdios",
    metaDescription:
      "Gestão de tráfego pago para empresas no Google Ads, Meta Ads e LinkedIn Ads com foco em leads qualificados, ROI e redução do custo por aquisição.",
    intro:
      "Campanhas desenhadas a partir do diagnóstico do seu negócio para gerar oportunidades comerciais desde a primeira semana, com controle rigoroso de investimento e retorno.",
    benefits: [
      "Anúncios na Rede de Pesquisa para quem já procura pelo seu serviço",
      "Campanhas de desejo e remarketing no Instagram, Facebook e LinkedIn",
      "Rastreamento de conversões ponta a ponta até o contato comercial",
      "Relatórios transparentes com custo por lead e por venda",
    ],
    steps: [
      { title: "Planejamento de mídia", text: "Definimos canais, públicos, palavras-chave e verba conforme metas comerciais." },
      { title: "Estruturação e criativos", text: "Montamos campanhas, anúncios e páginas de destino alinhados à oferta." },
      { title: "Otimização contínua", text: "Ajustes semanais de lances, segmentações e criativos com base em dados." },
    ],
    faq: [
      { question: "Qual verba mínima é necessária?", answer: "A verba é definida no diagnóstico conforme a região, a concorrência e a meta de vendas da sua empresa." },
      { question: "Em quanto tempo surgem os primeiros contatos?", answer: "O tráfego pago costuma gerar os primeiros contatos já nos primeiros dias após a ativação das campanhas." },
    ],
  },
  {
    slug: "otimizacao-de-seo",
    icon: "search",
    title: "Otimização de SEO (Posicionamento no Google)",
    short:
      "Estruturação técnica, semântica e de autoridade para fazer o site da sua empresa ocupar as primeiras posições orgânicas do Google para as palavras-chave mais lucrativas do seu setor.",
    metaTitle: "Otimização de SEO para Empresas | Primeiras Posições no Google | Isaques Estúdios",
    metaDescription:
      "Consultoria de SEO para empresas: otimização técnica, conteúdo estratégico e autoridade para posicionar seu site nas primeiras posições do Google.",
    intro:
      "Construímos patrimônio digital: um site que aparece para as buscas mais lucrativas do seu setor e gera clientes todos os meses sem depender apenas de anúncios.",
    benefits: [
      "Auditoria técnica completa do site",
      "Pesquisa das palavras-chave com maior potencial comercial",
      "Conteúdo estratégico e otimização on-page",
      "Construção de autoridade e SEO local",
    ],
    steps: [
      { title: "Auditoria", text: "Mapeamos erros técnicos, velocidade, indexação e concorrência." },
      { title: "Estratégia de conteúdo", text: "Planejamos páginas e artigos para cada intenção de busca relevante." },
      { title: "Autoridade e acompanhamento", text: "Fortalecemos a reputação do domínio e acompanhamos posições mês a mês." },
    ],
    faq: [
      { question: "SEO dá resultado rápido?", answer: "O SEO é uma construção de médio a longo prazo; os primeiros avanços costumam aparecer entre 3 e 6 meses." },
      { question: "Preciso ter um site novo?", answer: "Nem sempre. Avaliamos o site atual no diagnóstico e indicamos se vale otimizar ou reconstruir." },
    ],
  },
  {
    slug: "criacao-de-sites-profissionais",
    icon: "monitor",
    title: "Criação de Sites Profissionais e Landing Pages",
    short:
      "Desenvolvimento de sites institucionais corporativos e páginas de alta conversão, projetados com foco em velocidade, experiência do usuário (UX), credibilidade e SEO nativo.",
    metaTitle: "Criação de Sites Profissionais e Landing Pages | Isaques Estúdios",
    metaDescription:
      "Criação de sites institucionais e landing pages de alta conversão, rápidos, responsivos e com SEO nativo para empresas de todos os portes.",
    intro:
      "Seu site é o principal vendedor da empresa no ambiente digital. Projetamos cada página para transmitir credibilidade e transformar visitas em contatos.",
    benefits: [
      "Design corporativo alinhado à identidade da marca",
      "Carregamento rápido e adaptado a celulares",
      "Estrutura pronta para SEO desde o primeiro dia",
      "Formulários e WhatsApp integrados para captação",
    ],
    steps: [
      { title: "Arquitetura", text: "Definimos páginas, mensagens e caminhos de conversão." },
      { title: "Design e desenvolvimento", text: "Criamos o layout e desenvolvemos com foco em desempenho." },
      { title: "Publicação e medição", text: "Publicamos, configuramos métricas e acompanhamos resultados." },
    ],
    faq: [
      { question: "Quanto tempo leva para o site ficar pronto?", answer: "Landing pages ficam prontas em poucas semanas; sites institucionais completos variam conforme o escopo definido no diagnóstico." },
      { question: "Vocês fazem a manutenção?", answer: "Sim, oferecemos acompanhamento contínuo para atualizações, melhorias e segurança." },
    ],
  },
  {
    slug: "posicionamento-digital",
    icon: "crown",
    title: "Posicionamento Digital e Autoridade de Marca",
    short:
      "Construção de uma presença digital imponente que diferencia sua empresa da concorrência, elimina a guerra de preços e faz seu negócio ser percebido como líder do segmento.",
    metaTitle: "Posicionamento Digital e Autoridade de Marca | Isaques Estúdios",
    metaDescription:
      "Estratégia de posicionamento digital para empresas que querem sair da guerra de preços e ser reconhecidas como referência no seu segmento.",
    intro:
      "Quando o mercado reconhece sua empresa como referência, o preço deixa de ser o principal critério de decisão. Construímos essa percepção de forma estratégica.",
    benefits: [
      "Definição clara de proposta de valor e diferenciais",
      "Narrativa de marca consistente em todos os canais",
      "Conteúdo de autoridade para decisores",
      "Fortalecimento da reputação online",
    ],
    steps: [
      { title: "Diagnóstico de percepção", text: "Analisamos como mercado e concorrentes enxergam sua empresa hoje." },
      { title: "Plataforma de posicionamento", text: "Definimos mensagens, tom de voz e pilares de autoridade." },
      { title: "Ativação", text: "Aplicamos o posicionamento no site, redes, anúncios e materiais comerciais." },
    ],
    faq: [
      { question: "Posicionamento serve para pequenas empresas?", answer: "Sim. Empresas menores ganham ainda mais ao se diferenciar claramente dos concorrentes locais." },
      { question: "Como medir o resultado?", answer: "Acompanhamos ticket médio, taxa de fechamento, buscas pela marca e qualidade dos leads." },
    ],
  },
  {
    slug: "gestao-de-redes-sociais",
    icon: "share",
    title: "Gestão Estratégica de Redes Sociais",
    short:
      "Planejamento editorial, design corporativo e produção de conteúdo estratégico voltado para educar o mercado, fortalecer o relacionamento e gerar oportunidades comerciais.",
    metaTitle: "Gestão de Redes Sociais para Empresas | Isaques Estúdios",
    metaDescription:
      "Gestão estratégica de redes sociais para empresas: planejamento editorial, design corporativo e conteúdo que gera relacionamento e vendas.",
    intro:
      "Redes sociais profissionais não são sobre postar todos os dias, e sim sobre comunicar com estratégia para o público certo e gerar oportunidades reais.",
    benefits: [
      "Planejamento editorial mensal alinhado às metas",
      "Design corporativo consistente com a marca",
      "Conteúdo educativo e de prova social",
      "Relatórios de alcance, engajamento e contatos",
    ],
    steps: [
      { title: "Estratégia", text: "Definimos públicos, linhas editoriais e frequência ideal." },
      { title: "Produção", text: "Criamos textos, artes e vídeos com aprovação simples." },
      { title: "Análise", text: "Medimos desempenho e ajustamos o conteúdo continuamente." },
    ],
    faq: [
      { question: "Quais redes vocês gerenciam?", answer: "Instagram, Facebook, LinkedIn e outras redes conforme o perfil do seu público." },
      { question: "Preciso aprovar os posts?", answer: "Sim, todo conteúdo passa por um fluxo de aprovação antes da publicação." },
    ],
  },
  {
    slug: "identidade-visual-e-branding",
    icon: "palette",
    title: "Identidade Visual e Branding Corporativo",
    short:
      "Criação e modernização de logotipos, manuais de marca e diretrizes visuais que transmitem o verdadeiro porte, profissionalismo e maturidade da sua empresa.",
    metaTitle: "Identidade Visual e Branding Corporativo | Isaques Estúdios",
    metaDescription:
      "Criação e modernização de logotipos, manual de marca e identidade visual corporativa que transmite o porte e a maturidade da sua empresa.",
    intro:
      "A primeira impressão define a confiança. Desenvolvemos marcas que comunicam, à primeira vista, a solidez e o nível da sua empresa.",
    benefits: [
      "Criação ou redesenho de logotipo",
      "Paleta de cores, tipografia e elementos gráficos",
      "Manual de marca completo",
      "Aplicações para papelaria, digital e sinalização",
    ],
    steps: [
      { title: "Imersão", text: "Entendemos história, valores, público e concorrência." },
      { title: "Criação", text: "Desenvolvemos conceitos visuais e refinamos o escolhido." },
      { title: "Entrega", text: "Entregamos arquivos finais e manual de aplicação." },
    ],
    faq: [
      { question: "Vocês modernizam marcas existentes?", answer: "Sim, fazemos rebranding preservando o reconhecimento já conquistado." },
      { question: "O que recebo ao final?", answer: "Arquivos em todos os formatos necessários e um manual de marca com as regras de uso." },
    ],
  },
  {
    slug: "cobertura-de-eventos-corporativos",
    icon: "camera",
    title: "Cobertura de Eventos Corporativos",
    short:
      "Captação audiovisual profissional de feiras, congressos, inaugurações, treinamentos e eventos empresariais em tempo real, transformando momentos presenciais em ativos digitais de alto valor.",
    metaTitle: "Cobertura de Eventos Corporativos | Foto e Vídeo | Isaques Estúdios",
    metaDescription:
      "Cobertura audiovisual profissional de feiras, congressos, inaugurações e eventos empresariais, com entregas em tempo real para redes sociais.",
    intro:
      "Eventos são investimentos altos. Garantimos que cada momento vire conteúdo profissional que continua gerando valor muito depois do encerramento.",
    benefits: [
      "Fotografia e vídeo profissional",
      "Entregas em tempo real para as redes sociais",
      "Vídeos de resumo (aftermovie) e depoimentos",
      "Equipe experiente em eventos de grande porte",
    ],
    steps: [
      { title: "Pré-produção", text: "Alinhamos roteiro, momentos-chave e necessidades de entrega." },
      { title: "Captação", text: "Equipe no local registrando tudo com equipamentos profissionais." },
      { title: "Pós-produção", text: "Edição, tratamento e entrega organizada de todo o material." },
    ],
    faq: [
      { question: "Atendem eventos fora de São Paulo?", answer: "Sim, consulte a disponibilidade de agenda e a logística para a sua cidade." },
      { question: "Em quanto tempo recebo o material?", answer: "Parte do material pode ser entregue no mesmo dia; o conteúdo completo segue o prazo combinado." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

/** Título curto usado nos menus: remove o trecho entre parênteses. */
export function menuTitle(title: string) {
  return title.replace(/\s*\([^)]*\)/g, "").trim();
}

export const homeFaq = [
  {
    question: "Como funciona a reunião apresentativa de diagnóstico?",
    answer:
      "Primeiro analisamos profundamente o seu negócio: plano comercial, público, concorrência, pontos altos e baixos da presença digital. Depois apresentamos, em uma reunião, um plano sob medida com prioridades e oportunidades de retorno, sem pacotes engessados e sem compromisso de contratação.",
  },
  {
    question: "Qual a diferença entre anunciar no Google Ads e nas Redes Sociais (Meta Ads)?",
    answer:
      "No Google Ads você aparece para quem já está buscando ativamente pelo seu serviço, ou seja, há intenção de compra. No Meta Ads (Instagram e Facebook) geramos demanda e atenção em pessoas com o perfil do seu cliente ideal. Combinamos os dois conforme o momento e o objetivo do seu negócio.",
  },
  {
    question: "A agência atende empresas de qualquer porte e segmento?",
    answer:
      "Sim. Em mais de 8 anos de mercado atendemos desde pequenas empresas locais até grandes operações B2B e B2C, adaptando a estratégia à maturidade, ao caixa e à estrutura de cada negócio.",
  },
  {
    question: "Em quanto tempo minha empresa começa a ver os primeiros resultados?",
    answer:
      "Ações de retorno imediato, como o tráfego pago, podem gerar contatos já nos primeiros dias. Já SEO e posicionamento constroem patrimônio digital de médio e longo prazo. O equilíbrio entre os dois garante resultados rápidos e crescimento sustentável.",
  },
];
