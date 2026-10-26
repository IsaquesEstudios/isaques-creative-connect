import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
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
  const others = services.filter((o) => o.slug !== s.slug).slice(0, 3);

  return (
    <SiteShell>
      <article>
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <nav aria-label="Trilha" className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Início</Link> / <span>Soluções</span>
            </nav>
            <Badge variant="outline" size="md" className="mt-6">Solução para empresas</Badge>
            <DisplayHeading as="h1" size="xl" className="mt-6 max-w-5xl">{s.title}</DisplayHeading>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{s.intro}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg"><a href="#contato">Solicitar Diagnóstico</a></Button>
              <Button asChild size="lg" variant="outline">
                <a href={whatsappLink(`Olá! Tenho interesse em: ${s.title}`)} target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-card py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
            <div className="space-y-4">
              <DisplayHeading>O que está incluído</DisplayHeading>
              <p className="text-muted-foreground">{s.short}</p>
            </div>
            <ul className="space-y-4">
              {s.benefits.map((b) => (
                <li key={b} className="flex gap-3 rounded-xl bg-elevated p-5">
                  <Check aria-hidden className="size-5 shrink-0 text-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-surface-light py-24 text-surface-light-foreground">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">Como trabalhamos</h2>
            <ol className="mt-12 grid gap-6 md:grid-cols-3">
              {s.steps.map((st, i) => (
                <li key={st.title} className="rounded-xl border-t-4 border-primary bg-surface-white p-6 shadow-card">
                  <span className="font-display text-5xl font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 font-display text-xl font-bold">{st.title}</h3>
                  <p className="mt-3 text-sm">{st.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-card py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
            <SectionHeader eyebrow="FAQ" title="Dúvidas frequentes" />
            <Accordion className="lg:col-span-2" items={s.faq} defaultOpen={0} />
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
