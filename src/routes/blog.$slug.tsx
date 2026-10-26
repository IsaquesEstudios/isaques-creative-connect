import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Badge, Button, DisplayHeading } from "@/design-system/the-reading-room-697922";
import { SiteShell } from "@/components/site/SiteShell";
import { ContactSection } from "@/components/site/ContactSection";
import { getPost } from "@/lib/blog";
import { SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) return { meta: [{ title: `Artigo não encontrado | ${SITE_NAME}` }, { name: "robots", content: "noindex" }] };
    const p = loaderData.post;
    return {
      meta: [
        { title: `${p.title} | ${SITE_NAME}` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            description: p.excerpt,
            datePublished: p.date,
            author: { "@type": "Organization", name: SITE_NAME },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="reference-home">
      <SiteShell>
        <section className="mx-auto max-w-3xl px-6 py-32 text-center">
          <DisplayHeading as="h1">Artigo não encontrado</DisplayHeading>
          <Button asChild className="mt-8"><Link to="/blog">Voltar ao blog</Link></Button>
        </section>
      </SiteShell>
    </div>
  ),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post: p } = Route.useLoaderData();

  return (
    <div className="reference-home">
      <SiteShell>
        <article>
          <section className="bg-background">
            <div className="mx-auto max-w-3xl px-6 pb-8 pt-10 text-center md:pt-20">
              <nav aria-label="Trilha de navegação">
                <ol className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
                  <li><Link to="/" className="hover:text-foreground">Início</Link></li>
                  <li aria-hidden><ChevronRight className="size-4" /></li>
                  <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
                  <li aria-hidden><ChevronRight className="size-4" /></li>
                  <li aria-current="page" className="text-primary">{p.title}</li>
                </ol>
              </nav>
              <div className="mt-8 flex justify-center">
                <Badge variant="outline" size="md">
                  {new Date(`${p.date}T12:00:00`).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })} · {p.readTime} de leitura
                </Badge>
              </div>
              <DisplayHeading as="h1" size="xl" className="mx-auto mt-5">{p.title}</DisplayHeading>
              <p className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground">{p.excerpt}</p>
            </div>
          </section>

          <section className="bg-background py-16">
            <div className="mx-auto max-w-3xl space-y-10 px-6">
              {p.content.map((block, i) => (
                <div key={i} className="space-y-4">
                  {block.heading && <h2 className="font-display text-2xl font-bold">{block.heading}</h2>}
                  {block.paragraphs.map((text) => (
                    <p key={text} className="text-muted-foreground">{text}</p>
                  ))}
                </div>
              ))}
            </div>
          </section>
        </article>

        <ContactSection variant="reference" />
      </SiteShell>
    </div>
  );
}
