import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { serviceContent } from "@/lib/service-content";
import { Accordion, Badge, Button, Card, CardDescription, CardTitle, DisplayHeading, SectionHeader, ServiceCard } from "@/design-system/the-reading-room-697922";
import { SiteShell } from "@/components/site/SiteShell";
import { ContactSection } from "@/components/site/ContactSection";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { SITE_NAME, getService, services, whatsappLink } from "@/lib/site";
import teamPhoto from "@/assets/agency-team.jpg";
import workPhoto from "@/assets/creative-work.jpg";

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
    <div className="reference-home"><SiteShell>
      <section className="mx-auto max-w-3xl px-6 py-32 text-center">
        <DisplayHeading as="h1">Serviço não encontrado</DisplayHeading>
        <Button asChild className="mt-8"><Link to="/">Voltar ao início</Link></Button>
      </section>
    </SiteShell></div>
  ),
  component: ServicePage,
});

function ServicePage() {
  const { service: s } = Route.useLoaderData();
  const c = serviceContent[s.slug];
  const others = services.filter((o) => o.slug !== s.slug).slice(0, 3);

  return (
    <div className="reference-home">
    <SiteShell>
      <article>
        <section className="relative overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-6 pb-8 pt-10 text-center md:pb-10 md:pt-20">
            <nav aria-label="Trilha de navegação">
              <ol className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
                <li><Link to="/" className="hover:text-foreground">Início</Link></li>
                <li aria-hidden><ChevronRight className="size-4" /></li>
                <li><a href="/#solucoes" className="hover:text-foreground">Serviços</a></li>
                <li aria-hidden><ChevronRight className="size-4" /></li>
                <li aria-current="page" className="text-primary">{s.title}</li>
              </ol>
            </nav>
            <div className="mt-8 flex justify-center">
              <Badge variant="outline" size="md">Solução para empresas</Badge>
            </div>
            <DisplayHeading as="h1" size="xl" className="mx-auto mt-5 max-w-3xl">{c.h1}</DisplayHeading>
            <p className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground">{c.subtitle}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button asChild size="sm"><a href="#contato">Agendar diagnóstico <ArrowUpRight aria-hidden /></a></Button>
              <Button asChild size="sm" variant="outline">
                <a href={whatsappLink(`Olá! Tenho interesse em: ${s.title}`)} target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a>
              </Button>
            </div>
          </div>
          <div className="agency-photo relative mx-auto max-w-7xl overflow-hidden">
            <img src={teamPhoto} alt="Imagem ilustrativa de profissionais colaborando em uma estratégia de marketing" width={1536} height={1024} className="size-full object-cover" />
            <div className="photo-caption absolute bottom-0 left-0 flex w-full flex-wrap items-end justify-between gap-4 p-6 md:p-10">
              <div><p className="font-display text-2xl font-bold md:text-5xl">Ideias grandes.<br />Estratégias reais.</p><p className="mt-3 text-xs uppercase">Isaques Estúdios / {s.title}</p></div>
              <a href="#contato" className="flex items-center gap-3 text-sm">Vamos conversar <ArrowUpRight aria-hidden /></a>
            </div>
          </div>
        </section>

        <section aria-labelledby="desafio" className="bg-background py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-5">
            <div className="space-y-4 lg:col-span-2">
              <Badge>O desafio empresarial</Badge>
              <DisplayHeading id="desafio">{c.challengeTitle}</DisplayHeading>
              <img src={workPhoto} alt="Composição ilustrativa de criação digital com notebook e objetos laranja" width={1536} height={1024} loading="lazy" className="w-full rounded-xl" />
            </div>
            <div className="space-y-6 text-muted-foreground lg:col-span-3 lg:pt-16">
              {c.challenge.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
        </section>

        {c.fronts && (
          <section aria-labelledby="frentes" className="bg-background py-20">
            <div className="mx-auto max-w-6xl px-6">
              <SectionHeader eyebrow="Duas frentes estratégicas" title="Intenção e desejo." id="frentes" />
              <div className="mt-10 grid gap-4 lg:grid-cols-2">
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

        <section aria-labelledby="metodo" className="bg-background py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader id="metodo" eyebrow="Nosso método" title="Da estratégia à execução." />
            <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {c.method.map((st, i) => (
                <li key={st.title} className="border-t border-border pt-6">
                  <span className="font-display text-4xl font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-6 font-display text-xl font-semibold">{st.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{st.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="entregaveis" className="bg-background py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader id="entregaveis" eyebrow="Entregáveis e benefícios" title="Valor para seu negócio." />
            <div className="mt-10 grid gap-4 md:grid-cols-2">
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

        <section className="bg-background py-20">
          <div className="mx-auto max-w-3xl px-6">
            <SectionHeader align="center" eyebrow="Perguntas frequentes" title="Dúvidas? Vamos esclarecer." />
            <Accordion className="mt-10" items={c.faq} defaultOpen={-1} />
          </div>
        </section>
      </article>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader eyebrow="Outras soluções" title="Cresça em novas frentes." />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {others.map((o) => (
              <ServiceCard key={o.slug} icon={<ServiceIcon name={o.icon} />} title={o.title} description={o.short} href={`/servicos/${o.slug}`} linkLabel="Conhecer Solução" />
            ))}
          </div>
        </div>
      </section>

      <ContactSection variant="reference" />
    </SiteShell>
    </div>
  );
}
