import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Badge, Button, Card, CardDescription, CardTitle, DisplayHeading, SectionHeader, StatCard } from "@/design-system/the-reading-room-697922";
import { SiteShell } from "@/components/site/SiteShell";
import { ContactSection } from "@/components/site/ContactSection";
import { whatsappLink } from "@/lib/site";
import teamPhoto from "@/assets/agency-team.jpg";

const title = "Sobre Nós | Isaques Estúdios";
const description =
  "Conheça a Isaques Estúdios: agência de marketing para empresas com mais de 8 anos de mercado, estratégia sob medida e foco em resultado.";

export const Route = createFileRoute("/sobre-nos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/sobre-nos" }],
  }),
  component: SobreNosPage,
});

const pillars = [
  { t: "Estratégia antes de tática", d: "Nenhuma ação começa sem um diagnóstico profundo do negócio, do mercado e das metas comerciais." },
  { t: "Dados orientam decisões", d: "Cada real investido é medido. Relatórios transparentes conectam marketing e vendas." },
  { t: "Parceria de longo prazo", d: "Trabalhamos lado a lado com o time do cliente, evoluindo a estratégia conforme a empresa cresce." },
];

const steps = [
  { t: "Imersão", d: "Entendemos seu plano de negócios, público e operação." },
  { t: "Mapeamento", d: "Identificamos oportunidades e o que limita suas vendas." },
  { t: "Diagnóstico", d: "Desenhamos um plano estratégico para o seu momento." },
  { t: "Performance", d: "Executamos, medimos e evoluímos com o seu negócio." },
];

function SobreNosPage() {
  return (
    <div className="reference-home">
      <SiteShell>
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-6 pb-8 pt-10 text-center md:pt-20">
            <Badge variant="outline">Sobre nós</Badge>
            <DisplayHeading as="h1" size="xl" className="mx-auto mt-5 max-w-3xl">
              Marketing com propósito. Resultado com método.
            </DisplayHeading>
            <p className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground">
              Há mais de 8 anos ajudamos empresas a transformar presença digital em crescimento real — com estratégia sob medida, nunca com pacotes prontos.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button asChild size="sm"><a href="#contato">Agendar diagnóstico <ArrowUpRight aria-hidden /></a></Button>
              <Button asChild size="sm" variant="outline">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a>
              </Button>
            </div>
          </div>
          <div className="agency-photo relative mx-auto max-w-7xl overflow-hidden">
            <img src={teamPhoto} alt="Equipe da Isaques Estúdios colaborando em uma estratégia de marketing" width={1536} height={1024} className="size-full object-cover" />
            <div className="photo-caption absolute bottom-0 left-0 flex w-full flex-wrap items-end justify-between gap-4 p-6 md:p-10">
              <div>
                <p className="font-display text-2xl font-bold md:text-5xl">Ideias grandes.<br />Estratégias reais.</p>
                <p className="mt-3 text-xs uppercase">Isaques Estúdios / Desde 2018</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <Badge>Quem somos</Badge>
              <DisplayHeading className="mt-4">Mais de 8 anos.<br />Sempre olhando à frente.</DisplayHeading>
              <p className="mt-5 text-sm text-muted-foreground">
                Nascemos com uma convicção: marketing para empresas não é sobre posts e anúncios isolados — é sobre construir um sistema de crescimento. Desde então, trabalhamos lado a lado com negócios de todos os portes, unindo criatividade, dados e execução disciplinada.
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <StatCard value="+8" label="Anos de mercado" variant="overlay" imageSrc={teamPhoto} />
              <StatCard value="360º" label="Visão do seu negócio" description="Da estratégia de marca à captação de clientes." />
              <StatCard value="100%" label="Estratégia personalizada" variant="highlight" description="Seu negócio não cabe em um pacote pronto." />
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader eyebrow="Nossos pilares" title="O que nos move." />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {pillars.map((p) => (
                <Card key={p.t} variant="outline" padding="lg">
                  <Check aria-hidden className="size-6 text-primary" />
                  <CardTitle className="mt-4">{p.t}</CardTitle>
                  <CardDescription className="mt-3">{p.d}</CardDescription>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader eyebrow="Como trabalhamos" title="Entender. Planejar. Crescer." description="Antes de executar, mergulhamos na realidade do seu negócio." />
            <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.t} className="border-t border-border pt-6">
                  <span className="font-display text-4xl font-bold text-primary">0{i + 1}</span>
                  <h3 className="mt-6 font-display text-xl font-semibold">{s.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <ContactSection variant="reference" />
      </SiteShell>
    </div>
  );
}
