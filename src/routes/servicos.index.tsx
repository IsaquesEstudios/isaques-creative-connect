import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Badge, Button, DisplayHeading, SectionHeader, ServiceCard } from "@/design-system/the-reading-room-697922";
import { SiteShell } from "@/components/site/SiteShell";
import { ContactSection } from "@/components/site/ContactSection";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { services, whatsappLink } from "@/lib/site";

const title = "Soluções de Marketing Digital | Isaques Estúdios";
const description =
  "Conheça as soluções da Isaques Estúdios: tráfego pago, SEO, criação de sites, posicionamento digital, redes sociais, branding e cobertura de eventos corporativos.";

export const Route = createFileRoute("/servicos/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: ServicosPage,
});

function ServicosPage() {
  return (
    <div className="reference-home">
      <SiteShell>
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-6 pb-8 pt-10 text-center md:pt-20">
            <Badge variant="outline">O que fazemos</Badge>
            <DisplayHeading as="h1" size="xl" className="mx-auto mt-5 max-w-3xl">
              Soluções de marketing digital.
            </DisplayHeading>
            <p className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground">
              Estratégia, execução e medição em todas as frentes do digital — combinadas sob medida para o momento da sua empresa.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button asChild size="sm"><a href="#contato">Agendar diagnóstico <ArrowUpRight aria-hidden /></a></Button>
              <Button asChild size="sm" variant="outline">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-background py-16">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader eyebrow="7 soluções" title="Escolha sua frente de crescimento." />
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {services.map((s) => (
                <ServiceCard key={s.slug} icon={<ServiceIcon name={s.icon} />} title={s.title} description={s.short} href={`/servicos/${s.slug}`} linkLabel="Conhecer solução" />
              ))}
            </div>
          </div>
        </section>

        <ContactSection variant="reference" />
      </SiteShell>
    </div>
  );
}
