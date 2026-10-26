import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Badge, Card, CardDescription, CardTitle, DisplayHeading } from "@/design-system/the-reading-room-697922";
import { SiteShell } from "@/components/site/SiteShell";
import { ContactSection } from "@/components/site/ContactSection";
import { posts } from "@/lib/blog";

const title = "Blog | Isaques Estúdios";
const description =
  "Artigos sobre marketing digital para empresas: tráfego pago, SEO, sites que vendem, branding e estratégia. Conteúdo da Isaques Estúdios.";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

function BlogPage() {
  return (
    <div className="reference-home">
      <SiteShell>
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-6 pb-8 pt-10 text-center md:pt-20">
            <Badge variant="outline">Blog</Badge>
            <DisplayHeading as="h1" size="xl" className="mx-auto mt-5 max-w-3xl">
              Ideias que fazem empresas crescer.
            </DisplayHeading>
            <p className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground">
              Estratégia, tráfego, SEO e branding — sem jargões, com foco no que gera resultado para o seu negócio.
            </p>
          </div>
        </section>

        <section className="bg-background py-16">
          <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-3">
            {posts.map((p) => (
              <Card key={p.slug} padding="lg" className="flex flex-col">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {formatDate(p.date)} · {p.readTime} de leitura
                </p>
                <CardTitle className="mt-4">{p.title}</CardTitle>
                <CardDescription className="mt-3">{p.excerpt}</CardDescription>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover"
                >
                  Ler artigo <ArrowUpRight aria-hidden className="size-4" />
                </Link>
              </Card>
            ))}
          </div>
        </section>

        <ContactSection variant="reference" />
      </SiteShell>
    </div>
  );
}
