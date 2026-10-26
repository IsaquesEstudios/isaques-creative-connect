export interface ServiceContent {
  h1: string;
  subtitle: string;
  challengeTitle: string;
  challenge: string[];
  fronts?: { label: string; title: string; text: string; points: string[] }[];
  method: { title: string; text: string }[];
  deliverables: { title: string; text: string }[];
  faq: { question: string; answer: string }[];
}

export const serviceContent: Record<string, ServiceContent> = {
  "trafego-pago-empresas": {
    h1: "Gestão de Tráfego Pago para Empresas: Google Ads, Meta Ads e LinkedIn Ads",
    subtitle:
      "Campanhas de alta performance que colocam sua empresa diante do cliente certo, no momento certo, com controle rigoroso do investimento e foco absoluto em custo por lead e retorno sobre investimento.",
    challengeTitle: "Sem tráfego qualificado, o concorrente fica com o cliente que procurava por você",
    challenge: [
      "Todos os dias, milhares de decisores digitam no Google exatamente o que a sua empresa vende. Quando sua marca não aparece nesse momento, a demanda já existente é capturada por concorrentes que, muitas vezes, entregam menos qualidade, mas investem em visibilidade.",
      "Ao mesmo tempo, campanhas mal estruturadas queimam verba com cliques irrelevantes, públicos genéricos e anúncios sem estratégia. O resultado é a sensação de que \"anúncio não funciona\", quando na verdade faltou método, segmentação e acompanhamento.",
      "Empresas que dependem apenas de indicação ficam reféns da sazonalidade. O tráfego pago bem gerido cria um fluxo previsível de oportunidades, permitindo que o comercial planeje metas com base em números reais.",
    ],
    fronts: [
      {
        label: "Frente 1",
        title: "Tráfego de Intenção no Google Ads (Rede de Pesquisa, Display e YouTube)",
        text:
          "Colocamos sua empresa no topo do Google no exato segundo em que o cliente digita que precisa comprar o seu produto ou contratar o seu serviço. É a forma mais direta de converter demanda ativa em contatos comerciais.",
        points: [
          "Mapeamento de palavras-chave com intenção de compra e alto potencial de fechamento",
          "Gestão contínua de palavras-chave negativas para eliminar cliques que não geram negócio",
          "Otimização do Índice de Qualidade (anúncio, relevância e página de destino) para pagar menos por clique",
          "Redução progressiva do Custo por Lead (CPL) com testes de anúncios, lances e horários",
          "Campanhas de Display e YouTube para ampliar alcance e reforçar a lembrança de marca",
        ],
      },
      {
        label: "Frente 2",
        title: "Tráfego de Desejo e Relacionamento em Redes Sociais (Instagram, Facebook e LinkedIn Ads)",
        text:
          "Geramos demanda em pessoas e empresas com o perfil exato do seu cliente ideal, antes mesmo que elas comecem a procurar, e construímos relacionamento até o momento da decisão.",
        points: [
          "Segmentação avançada por perfil demográfico, localização, comportamento e interesses",
          "Segmentação B2B por cargos decisores, setores e porte de empresa no LinkedIn Ads",
          "Remarketing Inteligente para recuperar visitantes que acessaram o site e ainda não compraram",
          "Criativos e mensagens adaptados a cada etapa da jornada de compra",
          "Públicos semelhantes aos seus melhores clientes para escalar com eficiência",
        ],
      },
    ],
    method: [
      { title: "Plano de mídia pós-diagnóstico", text: "Com base na reunião diagnóstica, definimos canais, verba, metas de CPL e distribuição entre intenção (Google) e desejo (redes sociais)." },
      { title: "Configuração de rastreamento", text: "Instalamos e validamos a medição de conversões (formulários, WhatsApp, ligações) para que cada real investido seja rastreável." },
      { title: "Estruturação de campanhas e criativos", text: "Criamos campanhas, grupos de anúncios, textos e peças visuais alinhados à proposta de valor da empresa." },
      { title: "Otimização semanal", text: "Ajustamos lances, públicos, palavras-chave negativas e criativos com base em dados, eliminando desperdícios." },
      { title: "Relatórios e reuniões estratégicas", text: "Apresentamos resultados com transparência: investimento, leads, custo por lead e oportunidades geradas para o comercial." },
    ],
    deliverables: [
      { title: "Campanhas no Google Ads", text: "Rede de Pesquisa, Display e YouTube estruturados para captar demanda ativa e reforçar a marca." },
      { title: "Campanhas no Meta Ads", text: "Anúncios no Instagram e Facebook para gerar desejo, relacionamento e novos contatos." },
      { title: "LinkedIn Ads para B2B", text: "Alcance direto de diretores, gerentes e tomadores de decisão nas empresas certas." },
      { title: "Remarketing Inteligente", text: "Sequências de anúncios para recuperar visitantes e aumentar a taxa de conversão." },
      { title: "Rastreamento de conversões", text: "Medição completa de formulários, cliques no WhatsApp e ligações vindas dos anúncios." },
      { title: "Relatórios executivos", text: "Indicadores claros de CPL, ROI e volume de oportunidades, sem métricas de vaidade." },
    ],
    faq: [
      { question: "Qual a diferença entre anunciar no Google Ads e no Meta Ads?", answer: "No Google Ads sua empresa aparece para quem já está buscando ativamente pelo serviço, ou seja, existe intenção de compra. No Meta Ads geramos atenção e desejo em pessoas com o perfil do seu cliente ideal. A combinação das duas frentes amplia o volume e reduz o custo por venda." },
      { question: "Quanto devo investir em tráfego pago por mês?", answer: "O investimento ideal depende da região, da concorrência, do ticket médio e da meta comercial. Na reunião diagnóstica calculamos uma verba realista para atingir o volume de leads desejado com segurança." },
      { question: "Em quanto tempo o tráfego pago começa a gerar contatos?", answer: "Por atuar sobre uma demanda já existente, as campanhas costumam gerar os primeiros contatos nos primeiros dias após a ativação. A otimização das semanas seguintes reduz o custo por lead e aumenta a qualidade dos contatos." },
    ],
  },

  "otimizacao-de-seo": {
    h1: "Consultoria e Otimização de SEO para Empresas: Domine o Topo do Google",
    subtitle:
      "Construa um ativo digital próprio que gera tráfego qualificado todos os meses, sem depender exclusivamente do pagamento por clique.",
    challengeTitle: "Quem não aparece na primeira página do Google, praticamente não existe para o comprador",
    challenge: [
      "A grande maioria dos cliques de uma busca fica concentrada nos primeiros resultados orgânicos. Empresas que não estão ali deixam de ser consideradas, mesmo quando oferecem a melhor solução do mercado.",
      "Depender apenas de anúncios significa pagar por cada visita para sempre. Quando a verba para, o fluxo de clientes para junto. O SEO inverte essa lógica: é a construção de um patrimônio da empresa, que continua gerando visitas e oportunidades mês após mês.",
      "Sites lentos, mal estruturados ou sem conteúdo relevante são penalizados pelo Google. Sem uma estratégia técnica e editorial, a empresa fica invisível para as buscas mais lucrativas do seu setor.",
    ],
    method: [
      { title: "Auditoria Técnica de SEO", text: "Analisamos Core Web Vitals, velocidade de carregamento, indexação, erros de rastreamento, estrutura de URLs e versão mobile." },
      { title: "Pesquisa de Palavras-Chave de Intenção Comercial", text: "Identificamos os termos que seus compradores realmente pesquisam e que têm maior potencial de gerar vendas." },
      { title: "SEO On-Page", text: "Estruturamos a hierarquia semântica de H1, H2 e H3, meta títulos, meta descrições e conteúdo denso e útil para cada página." },
      { title: "SEO Local", text: "Otimizamos o Perfil da Empresa no Google (Google Meu Negócio) para conquistar domínio nas buscas da sua região." },
      { title: "Autoridade de Domínio e acompanhamento", text: "Fortalecemos a reputação do site com menções e links relevantes e acompanhamos posições e tráfego todos os meses." },
    ],
    deliverables: [
      { title: "Relatório de auditoria técnica", text: "Diagnóstico completo de velocidade, indexação e Core Web Vitals com plano de correções priorizado." },
      { title: "Mapa de palavras-chave", text: "Lista estratégica de termos por página, com foco em intenção comercial e potencial de conversão." },
      { title: "Otimização on-page", text: "Títulos, descrições, estrutura de cabeçalhos e conteúdo revisados em todas as páginas estratégicas." },
      { title: "Conteúdo de autoridade", text: "Páginas e artigos que respondem às dúvidas reais dos compradores e posicionam a empresa como referência." },
      { title: "SEO Local", text: "Perfil da Empresa no Google otimizado para aparecer no mapa e nas buscas regionais." },
      { title: "Relatórios mensais", text: "Evolução de posições, tráfego orgânico e contatos gerados pelo Google." },
    ],
    faq: [
      { question: "Quanto tempo leva para o SEO trazer resultados?", answer: "O SEO é uma estratégia de médio e longo prazo. Normalmente os primeiros avanços de posição surgem entre 3 e 6 meses, com crescimento consistente a partir daí, dependendo da concorrência do setor." },
      { question: "SEO substitui o tráfego pago?", answer: "Não, eles se complementam. O tráfego pago gera resultado imediato enquanto o SEO constrói um ativo que reduz a dependência de anúncios ao longo do tempo." },
      { question: "O que é SEO Local e por que é importante?", answer: "É a otimização para buscas regionais, como \"empresa de serviço perto de mim\". Com o Perfil da Empresa no Google otimizado, seu negócio aparece no mapa e captura clientes da sua região." },
    ],
  },

  "criacao-de-sites-profissionais": {
    h1: "Criação de Sites Profissionais e Landing Pages de Alta Conversão",
    subtitle:
      "Seu site não é um cartão de visitas online: é a sede digital da empresa e o seu principal vendedor, trabalhando 24 horas por dia, 7 dias por semana.",
    challengeTitle: "Um site amador custa clientes todos os dias, mesmo que ninguém perceba",
    challenge: [
      "Antes de entrar em contato, praticamente todo comprador visita o site da empresa para avaliar se ela é confiável. Um site lento, desatualizado ou confuso transmite exatamente o oposto da seriedade que a empresa tem na vida real.",
      "Sites que não foram pensados para conversão até recebem visitas, mas não geram contatos. Faltam mensagens claras, provas de credibilidade e caminhos simples até o WhatsApp ou o formulário.",
      "Além disso, sites construídos sem estrutura técnica adequada não são bem posicionados pelo Google, o que obriga a empresa a pagar mais caro por cada visitante.",
    ],
    method: [
      { title: "Arquitetura da Informação", text: "Organizamos páginas e conteúdos com base na jornada de compra corporativa, do primeiro contato à decisão." },
      { title: "Design Sob Medida", text: "Criamos um layout exclusivo alinhado à identidade visual e ao porte da sua empresa, sem modelos genéricos." },
      { title: "Desenvolvimento de alta velocidade", text: "Código otimizado para carregamento rápido, com responsividade mobile impecável em qualquer tela." },
      { title: "SEO desde o código-fonte", text: "Estrutura semântica, meta tags, dados estruturados e boas práticas técnicas aplicadas desde a primeira linha." },
      { title: "Integrações e publicação", text: "Conectamos o site ao WhatsApp, ao CRM e às ferramentas de medição, publicamos e acompanhamos os resultados." },
    ],
    deliverables: [
      { title: "Site institucional corporativo", text: "Páginas completas de empresa, soluções, diferenciais e contato com linguagem executiva." },
      { title: "Landing pages de alta conversão", text: "Páginas focadas em uma única oferta ou campanha para maximizar a geração de leads." },
      { title: "Responsividade mobile", text: "Experiência impecável em celulares, tablets e computadores." },
      { title: "Alta velocidade de carregamento", text: "Desempenho otimizado para reter visitantes e melhorar o posicionamento no Google." },
      { title: "Integração com WhatsApp e CRM", text: "Contatos chegam direto ao time comercial, sem perda de oportunidades." },
      { title: "Estrutura pronta para SEO", text: "Base técnica preparada para conquistar as primeiras posições orgânicas." },
    ],
    faq: [
      { question: "Qual a diferença entre site institucional e landing page?", answer: "O site institucional apresenta a empresa de forma completa e transmite credibilidade. A landing page é uma página focada em uma oferta específica, ideal para campanhas de tráfego pago e geração de leads." },
      { question: "O site já sai preparado para aparecer no Google?", answer: "Sim. Desenvolvemos com estrutura semântica, velocidade otimizada, meta tags e dados estruturados, criando a base técnica necessária para o SEO." },
      { question: "Quanto tempo leva para criar um site profissional?", answer: "Landing pages costumam ficar prontas em poucas semanas. Sites institucionais completos variam conforme o número de páginas e o escopo definido na reunião diagnóstica." },
    ],
  },

  "posicionamento-digital": {
    h1: "Posicionamento Digital para Empresas: Autoridade e Liderança de Mercado",
    subtitle:
      "Transforme a qualidade real da sua empresa em percepção de valor na internet e deixe de competir apenas por preço.",
    challengeTitle: "Empresas excelentes perdem vendas para concorrentes inferiores por falha de percepção",
    challenge: [
      "É comum ver empresas com produtos e serviços excelentes perdendo negócios para concorrentes mais fracos. A diferença não está na entrega, mas na forma como cada um é percebido na internet.",
      "Quando o comprador não enxerga diferenças claras, a decisão passa a ser apenas pelo preço. Isso pressiona margens, atrai clientes de menor valor e enfraquece a marca no longo prazo.",
      "Um posicionamento digital estratégico comunica, de forma consistente em todos os canais, por que sua empresa é a escolha mais segura, permitindo cobrar o valor justo e conquistar contratos maiores.",
    ],
    method: [
      { title: "Diagnóstico de Percepção de Marca", text: "Avaliamos como clientes, mercado e buscadores enxergam sua empresa hoje em site, redes e avaliações." },
      { title: "Análise de Concorrentes", text: "Mapeamos discursos, pontos fortes e lacunas dos principais concorrentes para encontrar espaços de diferenciação." },
      { title: "Proposta Única de Valor (PUV)", text: "Definimos a mensagem central que explica, de forma objetiva, por que sua empresa é diferente e melhor." },
      { title: "Tom de Voz Corporativo", text: "Alinhamos linguagem, vocabulário e postura da marca em todos os pontos de contato." },
      { title: "Estratégia Multicanal", text: "Aplicamos o posicionamento em site, redes sociais, anúncios e materiais comerciais para transmitir segurança a pequenos, médios e grandes compradores." },
    ],
    deliverables: [
      { title: "Relatório de percepção e concorrência", text: "Visão clara de como a empresa é vista e onde estão as oportunidades de diferenciação." },
      { title: "Proposta Única de Valor", text: "Mensagem central e argumentos de venda validados para o seu público." },
      { title: "Guia de tom de voz", text: "Diretrizes de comunicação para equipe interna, redes e comercial." },
      { title: "Plataforma de mensagens", text: "Textos-chave para site, perfis, apresentações e anúncios." },
      { title: "Plano multicanal", text: "Roteiro de aplicação do posicionamento em cada canal digital." },
      { title: "Acompanhamento de indicadores", text: "Evolução de ticket médio, buscas pela marca e qualidade dos leads." },
    ],
    faq: [
      { question: "O que é posicionamento digital?", answer: "É a forma como sua empresa é percebida na internet em relação aos concorrentes. Um bom posicionamento deixa claro por que a sua empresa é a melhor escolha e reduz a disputa por preço." },
      { question: "Posicionamento digital funciona para empresas pequenas?", answer: "Sim. Pequenas empresas se beneficiam muito, pois um posicionamento claro as diferencia rapidamente dos concorrentes locais e permite conquistar clientes de maior valor." },
      { question: "Como medir o resultado do posicionamento?", answer: "Acompanhamos indicadores como aumento do ticket médio, maior taxa de fechamento, crescimento das buscas pelo nome da marca e melhoria na qualidade dos contatos recebidos." },
    ],
  },

  "gestao-de-redes-sociais": {
    h1: "Gestão Estratégica de Redes Sociais para Empresas",
    subtitle:
      "Muito além de postagens para preencher calendário: construímos uma vitrine ativa que valida a seriedade da sua empresa e apoia o fechamento de vendas.",
    challengeTitle: "Perfis abandonados ou amadores fazem o cliente desconfiar antes mesmo do contato",
    challenge: [
      "Antes de fechar negócio, o comprador visita o Instagram, o LinkedIn ou o Facebook da empresa. Perfis desatualizados, com artes improvisadas ou sem conteúdo relevante geram insegurança e fazem a venda esfriar.",
      "Muitas empresas publicam apenas para \"preencher tabela\", sem objetivo comercial. O resultado são curtidas sem impacto no faturamento e uma equipe frustrada com o investimento.",
      "Redes sociais gerenciadas com estratégia educam o mercado, mostram bastidores e resultados, e se tornam um argumento de venda poderoso nas mãos do time comercial.",
    ],
    method: [
      { title: "Planejamento Editorial Estratégico", text: "Definimos linhas de conteúdo, frequência e calendário alinhados aos objetivos de vendas da empresa." },
      { title: "Design Gráfico Corporativo", text: "Criamos artes e vídeos de alto padrão, fiéis à identidade visual da marca." },
      { title: "Copywriting para negócios", text: "Textos persuasivos que geram confiança, despertam interesse e conduzem o público ao contato." },
      { title: "Gestão de Comunidade", text: "Acompanhamos comentários e mensagens para fortalecer o relacionamento e não perder oportunidades." },
      { title: "Análise de Métricas", text: "Medimos alcance, engajamento e conversões e ajustamos a estratégia mês a mês." },
    ],
    deliverables: [
      { title: "Calendário editorial mensal", text: "Planejamento completo de temas, formatos e datas de publicação." },
      { title: "Artes e vídeos corporativos", text: "Peças profissionais para feed, stories e reels." },
      { title: "Legendas e roteiros", text: "Copywriting estratégico focado em autoridade e geração de oportunidades." },
      { title: "Gestão de comunidade", text: "Respostas e interação com seguidores e potenciais clientes." },
      { title: "Fluxo de aprovação", text: "Processo simples para a empresa revisar e aprovar todo o conteúdo." },
      { title: "Relatório de desempenho", text: "Indicadores de engajamento, crescimento e conversão com recomendações." },
    ],
    faq: [
      { question: "Quais redes sociais a agência gerencia?", answer: "Atuamos com Instagram, Facebook e LinkedIn, além de outras redes quando fazem sentido para o perfil do seu público." },
      { question: "Redes sociais realmente geram vendas para empresas?", answer: "Sim, quando há estratégia. O conteúdo certo educa o mercado, gera confiança e acelera a decisão de compra, além de apoiar o time comercial com provas de credibilidade." },
      { question: "Preciso aprovar as publicações antes de irem ao ar?", answer: "Sim. Todo conteúdo passa por um fluxo de aprovação, garantindo que a comunicação esteja sempre alinhada à empresa." },
    ],
  },

  "identidade-visual-e-branding": {
    h1: "Identidade Visual Corporativa e Branding para Empresas",
    subtitle:
      "Uma marca à altura do porte e da maturidade da sua empresa, capaz de atrair clientes de maior ticket médio e transmitir confiança à primeira vista.",
    challengeTitle: "Uma identidade amadora ou defasada afasta os clientes que mais valem a pena",
    challenge: [
      "Clientes de maior ticket médio avaliam cada detalhe antes de contratar. Um logotipo improvisado, cores inconsistentes ou materiais sem padrão comunicam falta de estrutura, mesmo quando a empresa é sólida.",
      "Com o tempo, marcas criadas no início do negócio ficam defasadas e deixam de representar o que a empresa se tornou. Isso enfraquece a confiança comercial e dificulta negociações maiores.",
      "Uma identidade visual profissional e bem aplicada cria reconhecimento imediato, aumenta o valor percebido e faz a empresa parecer exatamente do tamanho que ela é.",
    ],
    method: [
      { title: "Imersão na marca", text: "Entendemos história, valores, público e concorrência para definir a essência que a identidade deve comunicar." },
      { title: "Criação e Redesign de Logotipo", text: "Desenvolvemos ou modernizamos o logotipo corporativo preservando o reconhecimento já conquistado." },
      { title: "Psicologia das Cores e Tipografia", text: "Definimos paleta e tipografia institucional que transmitem os atributos corretos da empresa." },
      { title: "Manual de Identidade Visual", text: "Documentamos regras de uso, variações, espaçamentos e aplicações da marca." },
      { title: "Padronização de materiais", text: "Aplicamos a identidade em materiais digitais e apresentações comerciais, incluindo o material de apoio às reuniões de vendas." },
    ],
    deliverables: [
      { title: "Logotipo corporativo", text: "Versões principal, horizontal, vertical e símbolo em todos os formatos." },
      { title: "Paleta de cores e tipografia", text: "Sistema visual completo com justificativa estratégica." },
      { title: "Manual de identidade visual", text: "Guia completo para manter a marca consistente em qualquer aplicação." },
      { title: "Apresentação comercial", text: "Material de apoio às reuniões de vendas com padrão corporativo." },
      { title: "Materiais digitais", text: "Modelos para redes sociais, assinatura de e-mail e documentos." },
      { title: "Arquivos finais organizados", text: "Entrega em formatos para uso digital e gráfico." },
    ],
    faq: [
      { question: "Vocês fazem o redesign de marcas já existentes?", answer: "Sim. Modernizamos marcas preservando os elementos que já geram reconhecimento, para que a evolução seja percebida sem perder a história construída." },
      { question: "O que é um manual de identidade visual?", answer: "É o documento que define como a marca deve ser usada: cores, tipografia, variações do logotipo, espaçamentos e exemplos de aplicação, garantindo consistência em todos os materiais." },
      { question: "Branding influencia nas vendas?", answer: "Sim. Uma identidade profissional aumenta a confiança e o valor percebido, o que facilita negociações, justifica preços maiores e atrai clientes de maior ticket médio." },
    ],
  },

  "cobertura-de-eventos-corporativos": {
    h1: "Cobertura de Eventos Corporativos: Captação Audiovisual e Marketing em Tempo Real",
    subtitle:
      "Transformamos feiras, convenções, treinamentos e inaugurações em prova social, autoridade e conteúdo para meses de comunicação.",
    challengeTitle: "Eventos sem cobertura profissional desperdiçam um dos maiores investimentos da empresa",
    challenge: [
      "Feiras de negócios, convenções, treinamentos, inaugurações e encontros empresariais são verdadeiras minas de ouro: reúnem clientes, parceiros, executivos e momentos que comprovam a relevância da empresa.",
      "Sem uma captação profissional, tudo isso se resume a algumas fotos de celular. A oportunidade de gerar prova social, depoimentos e conteúdo de autoridade se perde assim que o evento termina.",
      "Com planejamento e equipe especializada, um único evento rende material para meses de redes sociais, site, apresentações comerciais e campanhas.",
    ],
    method: [
      { title: "Planejamento de Roteiro Pré-Evento", text: "Alinhamos objetivos, momentos-chave, pessoas a entrevistar e formatos de entrega antes do evento." },
      { title: "Captação Profissional de Foto e Vídeo", text: "Equipe e equipamentos profissionais para registrar palestras, estandes, networking e bastidores." },
      { title: "Depoimentos de clientes e executivos", text: "Gravação de entrevistas que se tornam prova social poderosa para vendas e marketing." },
      { title: "Cobertura Real-Time", text: "Publicações e stories durante o evento para ampliar o alcance e engajar quem não está presente." },
      { title: "Edição Ágil com padrão cinematográfico", text: "Pós-produção rápida de reels, aftermovies institucionais e galerias tratadas." },
    ],
    deliverables: [
      { title: "Fotografia profissional", text: "Galeria completa tratada com os melhores momentos do evento." },
      { title: "Aftermovie institucional", text: "Vídeo de resumo com padrão cinematográfico corporativo." },
      { title: "Reels e cortes para redes", text: "Vídeos curtos prontos para Instagram, LinkedIn e outras redes." },
      { title: "Depoimentos gravados", text: "Entrevistas com clientes, parceiros e executivos." },
      { title: "Cobertura em tempo real", text: "Stories e publicações durante o evento." },
      { title: "Banco de conteúdo", text: "Material organizado para meses de comunicação." },
    ],
    faq: [
      { question: "Quais tipos de eventos corporativos vocês cobrem?", answer: "Feiras de negócios, congressos, convenções de vendas, treinamentos, inaugurações, lançamentos de produtos e encontros empresariais em geral." },
      { question: "É possível publicar conteúdo durante o evento?", answer: "Sim. Oferecemos cobertura em tempo real, com stories e publicações feitas enquanto o evento acontece, ampliando o alcance e o engajamento." },
      { question: "Em quanto tempo recebo o material editado?", answer: "Parte do conteúdo pode ser entregue no mesmo dia para as redes sociais. O material completo, como aftermovie e galeria tratada, segue o prazo combinado no planejamento." },
    ],
  },
};
