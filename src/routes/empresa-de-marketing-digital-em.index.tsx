import { Link, createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { DisplayHeading, Highlight, SectionHeader } from "@/design-system/the-reading-room-697922";
import { SiteShell } from "@/components/site/SiteShell";
import { ContactSection } from "@/components/site/ContactSection";
import { SITE_NAME } from "@/lib/site";
import { cityPath, localStates } from "@/lib/local-seo";

const title = `Empresa de Marketing Digital no Brasil | Onde Atendemos | ${SITE_NAME}`;
const description =
  "A Isaques Estúdios atende empresas em todos os estados do Brasil com estratégia, tráfego pago, SEO, sites e branding. Encontre sua cidade ou estado.";

export const Route = createFileRoute("/empresa-de-marketing-digital-em/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/empresa-de-marketing-digital-em" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/empresa-de-marketing-digital-em" }],
  }),
  component: LocalIndexPage,
});

function LocalIndexPage() {
  return (
    <div className="reference-home">
      <SiteShell>
        <section className="bg-background pb-8 pt-10 md:pt-20">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <nav aria-label="Caminho" className="mb-5 text-xs uppercase tracking-wider text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Início</Link>
              <span className="mx-2">›</span>
              <span className="text-foreground">Onde atendemos</span>
            </nav>
            <DisplayHeading as="h1" size="xl" className="mx-auto max-w-3xl">
              Empresa de marketing digital em <Highlight>todo o Brasil.</Highlight>
            </DisplayHeading>
            <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground">
              Atendemos empresas em todos os estados, com reuniões online e um time dedicado. Encontre sua região.
            </p>
          </div>
        </section>

        <section className="bg-background py-16">
          <div className="mx-auto max-w-6xl space-y-12 px-6">
            {localStates.map((state) => (
              <div key={state.slug}>
                <SectionHeader eyebrow={state.uf} title={state.name} action={<Link to="/empresa-de-marketing-digital-em/$slug" params={{ slug: state.slug }} className="text-sm text-primary">Ver estado</Link>} />
                <ul className="mt-6 flex flex-wrap gap-3">
                  {state.cities.map((city) => (
                    <li key={city.slug}>
                      <Link to="/empresa-de-marketing-digital-em/$slug" params={{ slug: cityPath(state, city) }} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground">
                        <MapPin aria-hidden className="size-3 text-primary" /> {city.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <ContactSection variant="reference" />
      </SiteShell>
    </div>
  );
}
