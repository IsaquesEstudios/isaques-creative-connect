import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import {
  Accordion,
  Badge,
  Button,
  Card,
  CardDescription,
  CardTitle,
  DisplayHeading,
  Highlight,
  SectionHeader,
  ServiceCard,
  StatCard,
} from "@/design-system/the-reading-room-697922";
import { SiteShell } from "@/components/site/SiteShell";
import { ContactSection } from "@/components/site/ContactSection";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { SITE_NAME, homeFaq, services, whatsappLink } from "@/lib/site";

const title = "Empresa de Marketing Digital | Isaques Estúdios";
const description =
  "Agência de marketing para empresas com +8 anos de mercado. Diagnóstico do plano de negócios, tráfego pago, SEO, sites e branding sob medida com foco em ROI.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: SITE_NAME,
          description,
          telephone: "+55-11-98340-4368",
          areaServed: "BR",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Soluções de Marketing Digital",
            itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title } })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: homeFaq.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
        }),
      },
    ],
  }),
  component: Index,
});

const steps = [
  { t: "Imersão no Plano de Negócios", d: "Estudamos a estrutura atual da sua empresa, margens, capacidade de atendimento, público-alvo e histórico comercial." },
  { t: "Mapeamento de Pontos Altos e Baixos", d: "Identificamos exatamente onde sua empresa está perdendo vendas hoje e quais são as fortalezas que ainda não estão sendo exploradas na internet." },
  { t: "Reunião Apresentativa de Diagnóstico", d: "Apresentamos um plano diretor claro, mostrando onde estão as melhores oportunidades de retorno a curto, médio e longo prazo." },
  { t: "Implementação de Alta Performance", d: "Executamos as soluções necessárias com acompanhamento contínuo de métricas, relatórios transparentes e reuniões estratégicas." },
];

const audiences = [
  { t: "Pequenas Empresas em Expansão", d: "Que precisam profissionalizar sua presença na internet, sair da dependência exclusiva do \"boca a boca\" e criar um fluxo previsível de novos clientes todos os meses." },
  { t: "Médias Empresas em Consolidação", d: "Que já possuem operação validada, mas precisam escalar suas vendas, estruturar um funil comercial previsível e dominar seu nicho regional ou nacional." },
  { t: "Grandes Empresas e Corporações", d: "Que exigem um parceiro estratégico sênior para proteger seu market share, otimizar o Custo de Aquisição de Clientes (CAC), cobrir grandes eventos e fortalecer o branding institucional." },
];

const pillars = [
  { t: "Decisões Baseadas em Dados, Não em Achismos", d: "Monitoramos toda a jornada do seu cliente — do primeiro clique no anúncio ou busca orgânica no Google até o contato comercial." },
  { t: "Integração entre Marketing e Vendas", d: "Não entregamos apenas \"curtidas\" ou \"acessos\". Nosso foco é alimentar o seu time comercial com leads qualificados e prontos para negociar." },
  { t: "Sinergia de Canais", d: "Quando o seu site profissional, o seu posicionamento no Google (SEO), suas campanhas de tráfego pago e a sua identidade visual falam a mesma língua, o custo por venda cai drasticamente e a confiança do cliente dispara." },
];

function Index() {
  return (
    <SiteShell>
      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden bg-background">
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-96 rotate-45 rounded-2xl border border-primary opacity-30" />
        <div aria-hidden className="pointer-events-none absolute -bottom-32 right-40 size-72 rotate-12 rounded-2xl border border-primary opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <Badge variant="outline" size="md">Consultoria Estratégica e Performance Digital</Badge>
          <DisplayHeading as="h1" size="xl" className="mt-6 max-w-5xl">
            Empresa de Marketing <Highlight variant="text">Digital</Highlight>
          </DisplayHeading>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Não acreditamos em pacotes prontos ou fórmulas genéricas. Analisamos profundamente o plano de negócios da sua empresa, mapeamos
            seus pontos fortes e gargalos operacionais e desenhamos o caminho exato para posicionar sua marca e multiplicar seu faturamento.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg"><a href="#contato">Solicitar Reunião de Diagnóstico</a></Button>
            <Button asChild size="lg" variant="outline">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">Falar com Consultor via WhatsApp</a>
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            {["Atendimento para Pequenos, Médios e Grandes Negócios", "Diagnóstico 360º do Plano de Negócios", "Foco em Retorno sobre Investimento (ROI)"].map((t) => (
              <li key={t} className="flex items-center gap-2"><Check aria-hidden className="size-4 text-primary" />{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* AUTORIDADE */}
      <section id="experiencia" className="scroll-mt-20 bg-card py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div className="space-y-6">
            <Badge>+8 anos de mercado</Badge>
            <DisplayHeading>Mais de 8 Anos de Resultados em Marketing Digital</DisplayHeading>
            <p className="text-muted-foreground">
              Em um mercado repleto de promessas passageiras, nossa trajetória de mais de 8 anos foi construída sobre um único pilar: a entrega
              consistente de resultados reais. Atuamos lado a lado com empresários e diretores que buscam não apenas visibilidade, mas
              previsibilidade comercial, autoridade de mercado e expansão sustentável.
            </p>
            <p className="text-muted-foreground">
              Como uma <strong className="text-foreground">agência de marketing para empresas</strong> com visão executiva, compreendemos que
              pequenos, médios e grandes negócios possuem desafios distintos de caixa, operação e posicionamento. Por isso, nossa atuação vai
              além da execução técnica: mergulhamos na realidade comercial da sua organização para garantir que cada centavo investido em
              comunicação retorne em forma de oportunidades qualificadas e vendas.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <StatCard variant="highlight" value="+8 Anos" label="De atuação sólida e ininterrupta no mercado" className="sm:col-span-2" />
            <StatCard value="100%" label="Personalizado" description="Nenhum projeto segue um pacote engessado." />
            <StatCard value="360º" label="Visão completa" description="Da fundação da marca à captação diária de clientes." />
          </div>
        </div>
      </section>

      {/* METODOLOGIA */}
      <section id="metodologia" className="scroll-mt-20 bg-surface-light py-24 text-surface-light-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider">Nossa metodologia exclusiva</p>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Diagnóstico Estratégico Sob Medida
            </h2>
            <p className="text-lg">
              Cada empresa possui um momento de maturidade diferente. Aplicar a mesma estratégia para negócios distintos é o principal motivo
              pelo qual muitas empresas frustram seus investimentos em marketing.
            </p>
          </div>
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.t} className="rounded-xl border-t-4 border-primary bg-surface-white p-6 shadow-card">
                <span className="font-display text-5xl font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-xl font-bold">{s.t}</h3>
                <p className="mt-3 text-sm">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SOLUÇÕES */}
      <section id="solucoes" className="scroll-mt-20 bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Soluções"
            title="Soluções de Marketing Digital"
            description="Após o diagnóstico do seu negócio, alocamos as ferramentas exatas para destravar o seu crescimento. Conheça nossas frentes de atuação (clique em cada serviço para ver os detalhes):"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.slug}>
                <ServiceCard
                  className="h-full"
                  icon={<ServiceIcon name={s.icon} />}
                  title={s.title}
                  description={s.short}
                  href={`/servicos/${s.slug}`}
                  linkLabel="Conhecer Solução"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM */}
      <section className="bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader align="center" eyebrow="Para quem é" title="Para Empresas de Todos os Portes" className="mx-auto" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {audiences.map((a, i) => (
              <Card key={a.t} variant={i === 1 ? "highlight" : "outline"} padding="lg">
                <CardTitle>{a.t}</CardTitle>
                <CardDescription className="mt-4">{a.d}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="bg-surface-white py-24 text-surface-light-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="max-w-4xl font-display text-3xl font-bold tracking-tight md:text-4xl">
            Marketing Digital Orientado a Resultados
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {pillars.map((p) => (
              <article key={p.t} className="border-l-4 border-primary pl-6">
                <h3 className="font-display text-xl font-bold">{p.t}</h3>
                <p className="mt-3">{p.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 bg-card py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
          <SectionHeader eyebrow="FAQ" title="Perguntas Frequentes" />
          <Accordion className="lg:col-span-2" items={homeFaq} defaultOpen={0} />
        </div>
      </section>

      <ContactSection />
    </SiteShell>
  );
}
