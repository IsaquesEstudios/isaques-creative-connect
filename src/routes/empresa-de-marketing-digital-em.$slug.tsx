import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Check, MapPin } from "lucide-react";
import {
  Accordion,
  Badge,
  Button,
  Card,
  CardDescription,
  CardTitle,
  DisplayHeading,
  Highlight,
  MediaCard,
  SectionHeader,
  ServiceCard,
  StatCard,
} from "@/design-system/the-reading-room-697922";
import { SiteShell } from "@/components/site/SiteShell";
import { ContactSection } from "@/components/site/ContactSection";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { SITE_NAME, homeFaq, services, whatsappLink } from "@/lib/site";
import { cityPath, findLocal, localLabel } from "@/lib/local-seo";

import teamPhoto from "@/assets/agency-team.jpg";
import workPhoto from "@/assets/creative-work.jpg";

export const Route = createFileRoute("/empresa-de-marketing-digital-em/$slug")({
  loader: ({ params }) => {
    const loc = findLocal(params.slug);
    if (!loc) throw notFound();
    return loc;
  },
  head: ({ params, loaderData }) => {
    const loc = loaderData ?? findLocal(params.slug);
    if (!loc) return { meta: [{ title: `Página não encontrada | ${SITE_NAME}` }] };
    const label = localLabel(loc);
    const title = `Empresa de Marketing Digital em ${label} | ${SITE_NAME}`;
    const description =
      loc.type === "city"
        ? `Empresa de marketing digital em ${loc.city.name} - ${loc.state.uf}. Estratégia, tráfego pago, SEO, sites e branding para empresas de ${loc.city.name} e região. Agende um diagnóstico.`
        : `Empresa de marketing digital no ${loc.state.name}. Estratégia, tráfego pago, SEO, sites e branding para empresas em todo o estado de ${loc.state.name}. Agende um diagnóstico.`;
    const url = `/empresa-de-marketing-digital-em/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: SITE_NAME,
            description,
            telephone: "+55-11-98340-4368",
            areaServed: {
              "@type": loc.type === "city" ? "City" : "State",
              name: label,
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Soluções de Marketing Digital",
              itemListElement: services.map((s) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: s.title },
              })),
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Início", item: "/" },
              { "@type": "ListItem", position: 2, name: "Onde atendemos", item: "/empresa-de-marketing-digital-em" },
              { "@type": "ListItem", position: 3, name: label, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: LocalPage,
});

const steps = [
  { t: "Imersão", d: "Entendemos seu plano de negócios, público e operação." },
  { t: "Mapeamento", d: "Identificamos oportunidades e o que limita suas vendas." },
  { t: "Diagnóstico", d: "Desenhamos um plano estratégico para o seu momento." },
  { t: "Performance", d: "Executamos, medimos e evoluímos com o seu negócio." },
];

const homeServices = services.filter((s) => s.slug !== "posicionamento-digital");

const audiences = [
  { t: "Pequenas empresas", d: "Uma presença profissional e novos caminhos para conquistar clientes." },
  { t: "Médias empresas", d: "Estratégia para escalar vendas e consolidar seu posicionamento." },
  { t: "Grandes empresas", d: "Um parceiro estratégico para fortalecer sua marca e operação." },
];

function LocalPage() {
  const loc = Route.useLoaderData();
  const label = localLabel(loc);
  const isCity = loc.type === "city";
  const localName = isCity ? loc.city.name : loc.state.name;

  const faq = [
    {
      question: `A Isaques Estúdios atende empresas em ${localName}?`,
      answer: `Sim. Atendemos empresas de ${localName} e de toda a região de forma remota, com reuniões online e acompanhamento próximo. O diagnóstico inicial é feito sem compromisso.`,
    },
    ...homeFaq,
  ];

  return (
    <div className="reference-home">
      <SiteShell>
        <section className="relative overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-6 pb-8 pt-10 text-center md:pb-10 md:pt-20">
            <nav aria-label="Caminho" className="mb-5 text-xs uppercase tracking-wider text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Início</Link>
              <span className="mx-2">›</span>
              <Link to="/empresa-de-marketing-digital-em" className="hover:text-foreground">Onde atendemos</Link>
              <span className="mx-2">›</span>
              <span className="text-foreground">{label}</span>
            </nav>
            <Badge variant="outline">
              <MapPin aria-hidden className="size-3" /> {SITE_NAME} · {label}
            </Badge>
            <DisplayHeading as="h1" size="xl" className="mx-auto mt-5 max-w-3xl">
              Empresa de marketing digital em <Highlight>{localName}.</Highlight>
            </DisplayHeading>
            <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground">
              Estratégia sob medida. Criatividade com propósito.<br />
              Marketing que acompanha a ambição do seu negócio em {localName}.
            </p>
            <div className="mt-6 flex justify-center">
              <Button asChild size="sm"><a href="#contato">Agendar diagnóstico <ArrowUpRight aria-hidden /></a></Button>
            </div>
          </div>
          <div className="agency-photo relative mx-auto max-w-7xl overflow-hidden">
            <img src={teamPhoto} alt={`Equipe de marketing digital atendendo empresas em ${localName}`} width={1536} height={1024} className="size-full object-cover" />
            <div className="photo-caption absolute bottom-0 left-0 flex w-full flex-wrap items-end justify-between gap-4 p-6 md:p-10">
              <div><p className="font-display text-2xl font-bold md:text-5xl">Ideias grandes.<br />Estratégias reais.</p><p className="mt-3 text-xs uppercase">{SITE_NAME} / Marketing para empresas em {localName}</p></div>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm">Vamos conversar <ArrowUpRight aria-hidden /></a>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-background py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader eyebrow="O que fazemos" title="Soluções para crescer." action={<Button asChild size="sm" variant="primary"><a href="#contato">Encontrar minha solução <ArrowUpRight aria-hidden /></a></Button>} />
          </div>
          <div className="services-marquee mt-10">
            <div className="services-marquee-track">
              {[0, 1].map((copy) => (
                <div key={copy} className="services-marquee-group" aria-hidden={copy === 1} inert={copy === 1}>
                  {homeServices.map((s) => (
                    <div key={s.slug} className="services-marquee-item">
                      <ServiceCard icon={<ServiceIcon name={s.icon} />} title={s.title} description={s.short} href={`/servicos/${s.slug}`} linkLabel="Conhecer solução" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-16">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader eyebrow="Atuação local" title={<>Marketing digital em <Highlight>{localName}.</Highlight></>} />
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  Empresas de {localName} disputam a atenção dos mesmos clientes no Google, nas redes sociais e em cada pesquisa feita no celular. Quem aparece primeiro — com um site profissional, anúncios bem segmentados e uma marca consistente — leva a melhor na hora da decisão de compra.
                </p>
                <p>
                  A {SITE_NAME} estrutura a presença digital da sua empresa em {localName} de ponta a ponta: do diagnóstico do plano de negócios à execução de tráfego pago, SEO local, criação de sites, redes sociais e identidade visual.
                </p>
              </div>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  {isCity
                    ? `Atendemos empresas de ${loc.city.name} e de toda a região de ${loc.state.name}, com reuniões online, relatórios transparentes e um time dedicado ao seu projeto.`
                    : `Atendemos empresas em todas as cidades do estado de ${loc.state.name}, com reuniões online, relatórios transparentes e um time dedicado ao seu projeto.`}
                </p>
                <p>
                  O primeiro passo é um diagnóstico estratégico sem compromisso: analisamos sua presença digital atual, a concorrência local e as oportunidades de retorno mais rápidas para o seu negócio.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center"><Badge>Experiência que faz diferença</Badge><DisplayHeading className="mt-4">Mais de 8 anos.<br />Sempre olhando à frente.</DisplayHeading><p className="mt-5 text-sm text-muted-foreground">Trabalhamos lado a lado com empresas que buscam autoridade, expansão sustentável e novas oportunidades de negócio.</p></div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <StatCard value="+8" label="Anos de mercado" variant="overlay" imageSrc={teamPhoto} />
              <StatCard value="360º" label="Visão do seu negócio" description="Da estratégia de marca à captação de clientes." />
              <StatCard value="100%" label="Estratégia personalizada" variant="highlight" description="Seu negócio não cabe em um pacote pronto." />
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader eyebrow="Nosso método" title="Entender. Planejar. Crescer." description="Antes de executar, mergulhamos na realidade do seu negócio." />
            <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => <li key={s.t} className="border-t border-border pt-6"><span className="font-display text-4xl font-bold text-primary">0{i + 1}</span><h3 className="mt-6 font-display text-xl font-semibold">{s.t}</h3><p className="mt-3 text-sm text-muted-foreground">{s.d}</p></li>)}
            </ol>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader eyebrow="Nossa essência" title="Criatividade encontra estratégia." />
            <div className="mt-10 grid items-start gap-5 md:grid-cols-2">
              <MediaCard imageSrc={workPhoto} imageAlt="Composição ilustrativa de design digital com notebook e objetos laranja" title="Presença que gera valor" tags={["Design", "Posicionamento"]} description="Site, identidade visual e comunicação alinhados à sua marca." href="/servicos/criacao-de-sites-profissionais" />
              <div className="space-y-5 md:pt-16">
                <StatCard value="ROI" label="O resultado é o norte" variant="highlight" description="Decisões baseadas em dados. Marketing conectado ao seu time de vendas." />
                <Card padding="lg"><CardTitle>Canais que trabalham juntos.</CardTitle><CardDescription className="mt-4">SEO, tráfego pago, site e identidade visual: uma estratégia integrada para construir confiança e gerar oportunidades qualificadas.</CardDescription><ul className="mt-6 space-y-3 text-sm">{["Decisões baseadas em dados", "Integração entre marketing e vendas", "Sinergia entre canais"].map(t => <li key={t} className="flex gap-2"><Check aria-hidden className="size-4 text-primary" />{t}</li>)}</ul></Card>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-16">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader eyebrow="Para quem é" title="Do seu tamanho. No seu ritmo." />
            <div className="mt-10 grid gap-4 md:grid-cols-3">{audiences.map(a => <Card key={a.t} variant="outline" padding="lg"><CardTitle>{a.t}</CardTitle><CardDescription className="mt-4">{a.d}</CardDescription></Card>)}</div>
          </div>
        </section>

        <section className="bg-background py-16">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader eyebrow="Onde atendemos" title={isCity ? `Também atendemos no ${loc.state.name}.` : `Cidades de ${loc.state.name}.`} />
            <ul className="mt-8 flex flex-wrap gap-3">
              {isCity && (
                <li>
                  <Link to="/empresa-de-marketing-digital-em/$slug" params={{ slug: loc.state.slug }} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground">
                    <MapPin aria-hidden className="size-3 text-primary" /> {loc.state.name} (estado)
                  </Link>
                </li>
              )}
              {loc.state.cities
                .filter((c) => !isCity || c.slug !== loc.city.slug)
                .map((c) => (
                  <li key={c.slug}>
                    <Link to="/empresa-de-marketing-digital-em/$slug" params={{ slug: cityPath(loc.state, c) }} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground">
                      <MapPin aria-hidden className="size-3 text-primary" /> {c.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="mx-auto max-w-3xl px-6">
            <SectionHeader align="center" eyebrow="Perguntas frequentes" title={<>Dúvidas? Vamos esclarecer.</>} />
            <Accordion className="mt-10" items={faq} defaultOpen={-1} />
          </div>
        </section>
        <ContactSection variant="reference" />
      </SiteShell>
    </div>
  );
}
