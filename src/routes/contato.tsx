import { createFileRoute } from "@tanstack/react-router";
import { Badge, DisplayHeading } from "@/design-system/the-reading-room-697922";
import { SiteShell } from "@/components/site/SiteShell";
import { ContactSection } from "@/components/site/ContactSection";
import { WHATSAPP_DISPLAY } from "@/lib/site";

const title = "Contato | Isaques Estúdios";
const description =
  "Fale com a Isaques Estúdios: agende um diagnóstico estratégico gratuito ou chame no WhatsApp. Marketing digital para empresas com foco em resultado.";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <div className="reference-home">
      <SiteShell>
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-6 pb-4 pt-10 text-center md:pt-20">
            <Badge variant="outline">Contato</Badge>
            <DisplayHeading as="h1" size="xl" className="mx-auto mt-5 max-w-3xl">
              Vamos conversar sobre o seu negócio.
            </DisplayHeading>
            <p className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground">
              Preencha o formulário para agendar seu diagnóstico estratégico ou fale agora mesmo pelo WhatsApp {WHATSAPP_DISPLAY}.
            </p>
          </div>
        </section>
        <ContactSection variant="reference" />
      </SiteShell>
    </div>
  );
}
