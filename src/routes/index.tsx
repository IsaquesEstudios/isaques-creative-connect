import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
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

import teamPhoto from "@/assets/agency-team.jpg";
import workPhoto from "@/assets/creative-work.jpg";

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

function Index() {
  return (
    <div className="reference-home">
      <SiteShell>
        <section id="inicio" className="relative overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-6 pb-8 pt-10 text-center md:pb-10 md:pt-20">
            <Badge variant="outline">Isaques Estúdios · Estratégia & Performance</Badge>
            <DisplayHeading as="h1" size="xl" className="mx-auto mt-5 max-w-3xl">
              Empresa de marketing <Highlight>digital.</Highlight>
            </DisplayHeading>
            <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground">
              Estratégia sob medida. Criatividade com propósito.<br />Marketing que acompanha a ambição do seu negócio.
            </p>
            <div className="mt-6 flex justify-center">
              <Button asChild size="sm"><a href="#contato">Agendar diagnóstico <ArrowUpRight aria-hidden /></a></Button>
            </div>
          </div>
          <div className="agency-photo relative mx-auto max-w-7xl overflow-hidden">
            <img src={teamPhoto} alt="Imagem ilustrativa de profissionais colaborando em uma estratégia de marketing" width={1536} height={1024} className="size-full object-cover" />
            <div className="photo-caption absolute bottom-0 left-0 flex w-full flex-wrap items-end justify-between gap-4 p-6 md:p-10">
              <div><p className="font-display text-2xl font-bold md:text-5xl">Ideias grandes.<br />Estratégias reais.</p><p className="mt-3 text-xs uppercase">Isaques Estúdios / Marketing para empresas</p></div>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm">Vamos conversar <ArrowUpRight aria-hidden /></a>
            </div>
          </div>
        </section>

        <section id="solucoes" className="scroll-mt-20 overflow-hidden bg-background py-20">
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

        <section id="experiencia" className="scroll-mt-20 bg-background py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center"><Badge>Experiência que faz diferença</Badge><DisplayHeading className="mt-4">Mais de 8 anos.<br />Sempre olhando à frente.</DisplayHeading><p className="mt-5 text-sm text-muted-foreground">Trabalhamos lado a lado com empresas que buscam autoridade, expansão sustentável e novas oportunidades de negócio.</p></div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <StatCard value="+8" label="Anos de mercado" variant="overlay" imageSrc={teamPhoto} />
              <StatCard value="360º" label="Visão do seu negócio" description="Da estratégia de marca à captação de clientes." />
              <StatCard value="100%" label="Estratégia personalizada" variant="highlight" description="Seu negócio não cabe em um pacote pronto." />
            </div>
          </div>
        </section>

        <section id="metodologia" className="scroll-mt-20 bg-background py-20">
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

        <section id="faq" className="scroll-mt-20 bg-background py-20">
          <div className="mx-auto max-w-3xl px-6">
            <SectionHeader align="center" eyebrow="Perguntas frequentes" title={<>Dúvidas? Vamos esclarecer.</>} />
            <Accordion className="mt-10" items={homeFaq} defaultOpen={-1} />
          </div>
        </section>
        <ContactSection variant="reference" />
      </SiteShell>
    </div>
  );
}
