import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, ChevronRight } from "lucide-react";
import { serviceContent } from "@/lib/service-content";
import { Accordion, Badge, Button, Card, CardDescription, CardTitle, DisplayHeading, SectionHeader, ServiceCard } from "@/design-system/the-reading-room-697922";
import { SiteShell } from "@/components/site/SiteShell";
import { ContactSection } from "@/components/site/ContactSection";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { SITE_NAME, getService, services, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Serviço não encontrado | Isaques Estúdios" }, { name: "robots", content: "noindex" }] };
    const s = loaderData.service;
    return {
      meta: [
        { title: s.metaTitle },
        { name: "description", content: s.metaDescription },
        { property: "og:title", content: s.metaTitle },
        { property: "og:description", content: s.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/servicos/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/servicos/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            description: s.metaDescription,
            provider: { "@type": "ProfessionalService", name: SITE_NAME },
            areaServed: "BR",
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-6 py-32 text-center">
        <DisplayHeading as="h1">Serviço não encontrado</DisplayHeading>
        <Button asChild className="mt-8"><Link to="/">Voltar ao início</Link></Button>
      </section>
    </SiteShell>
  ),
  component: ServicePage,
});

function ServicePage() {
  const { service: s } = Route.useLoaderData();
  const c = serviceContent[s.slug];
  const others = services.filter((o) => o.slug !== s.slug).slice(0, 3);

  return (
    <SiteShell>
      <article>
        <section className="relative overflow-hidden bg-background">
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-96 rotate-45 rounded-2xl border border-primary opacity-30" />
          <div className="relative mx-auto max-w-7xl px-6 py-24">
            <nav aria-label="Trilha de navegação">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <li><Link to="/" className="hover:text-foreground">Início</Link></li>
                <li aria-hidden><ChevronRight className="size-4" /></li>
                <li><a href="/#solucoes" className="hover:text-foreground">Serviços</a></li>
                <li aria-hidden><ChevronRight className="size-4" /></li>
                <li aria-current="page" className="text-primary">{s.title}</li>
              </ol>
            </nav>
            <div className="mt-8 flex items-center gap-3">
              <span aria-hidden className="inline-flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground [&_svg]:size-5">
                <ServiceIcon name={s.icon} />
              </span>
              <Badge variant="outline" size="md">Solução para empresas</Badge>
            </div>
            <DisplayHeading as="h1" size="xl" className="mt-6 max-w-5xl">{c.h1}</DisplayHeading>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{c.subtitle}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg"><a href="#contato">Solicitar Reunião de Diagnóstico</a></Button>
              <Button asChild size="lg" variant="outline">
                <a href={whatsappLink(`Olá! Tenho interesse em: ${s.title}`)} target="_blank" rel="noopener noreferrer">Falar com Consultor via WhatsApp</a>
              </Button>
            </div>
          </div>
        </section>

        <section aria-labelledby="desafio" className="bg-card py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
            <div className="space-y-4 lg:col-span-2">
              <Badge>O desafio empresarial</Badge>
              <DisplayHeading id="desafio">{c.challengeTitle}</DisplayHeading>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground lg:col-span-3">
              {c.challenge.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
        </section>

        {c.fronts && (
          <section aria-labelledby="frentes" className="bg-background py-24">
            <div className="mx-auto max-w-7xl px-6">
              <SectionHeader eyebrow="Duas frentes estratégicas" title="Intenção e desejo trabalhando juntos" id="frentes" />
              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                {c.fronts.map((f, i) => (
                  <Card key={f.title} variant={i === 0 ? "highlight" : "outline"} padding="lg">
                    <p className="text-xs font-semibold uppercase tracking-wider">{f.label}</p>
                    <h3 className="mt-3 font-display text-2xl font-bold">{f.title}</h3>
                    <p className="mt-4">{f.text}</p>
                    <ul className="mt-6 space-y-3">
                      {f.points.map((pt) => (
                        <li key={pt} className="flex gap-3"><Check aria-hidden className="mt-1 size-4 shrink-0" />{pt}</li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        <section aria-labelledby="metodo" className="bg-surface-light py-24 text-surface-light-foreground">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-xs font-semibold uppercase tracking-wider">Após a reunião diagnóstica</p>
            <h2 id="metodo" className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">Como Executamos (Nosso Método)</h2>
            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {c.method.map((st, i) => (
                <li key={st.title} className="rounded-xl border-t-4 border-primary bg-surface-white p-6 shadow-card">
                  <span className="font-display text-4xl font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 font-display text-lg font-bold">{st.title}</h3>
                  <p className="mt-3 text-sm">{st.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="entregaveis" className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader id="entregaveis" eyebrow="Entregáveis e benefícios" title="O que sua empresa recebe" />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {c.deliverables.map((d) => (
                <Card key={d.title} padding="lg">
                  <Check aria-hidden className="size-6 text-primary" />
                  <CardTitle className="mt-4">{d.title}</CardTitle>
                  <CardDescription className="mt-3">{d.text}</CardDescription>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-card py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
            <SectionHeader eyebrow="FAQ" title={`Perguntas frequentes sobre ${s.title.split(" (")[0]}`} />
            <Accordion className="lg:col-span-2" items={c.faq} defaultOpen={0} />
          </div>
        </section>
      </article>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Outras soluções" title="Combine estratégias para crescer mais rápido" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {others.map((o) => (
              <ServiceCard key={o.slug} icon={<ServiceIcon name={o.icon} />} title={o.title} description={o.short} href={`/servicos/${o.slug}`} linkLabel="Conhecer Solução" />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </SiteShell>
  );
}
