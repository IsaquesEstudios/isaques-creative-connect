import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button, IconButton } from "@/design-system/the-reading-room-697922";
import { SITE_NAME, services } from "@/lib/site";

export function Logo() {
  const [first, ...rest] = SITE_NAME.split(" ");
  return (
    <Link to="/" className="font-display text-xl font-bold tracking-tight text-foreground">
      {first} <span className="text-primary">{rest.join(" ")}</span>
    </Link>
  );
}

const links = [
  { label: "Início", to: "/" as const },
  { label: "Blog", to: "/blog" as const },
  { label: "Sobre Nós", to: "/sobre-nos" as const },
  { label: "Contato", to: "/contato" as const },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [solOpen, setSolOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Logo />
        <nav aria-label="Principal" className="hidden items-center gap-6 lg:flex">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            Início
          </Link>
          <div className="group relative">
            <button type="button" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
              Serviços <ChevronDown aria-hidden className="size-4" />
            </button>
            <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <ul className="w-80 rounded-xl border border-border bg-popover p-2 shadow-card">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to="/servicos/$slug"
                      params={{ slug: s.slug }}
                      className="block rounded-md px-3 py-2 text-sm text-popover-foreground hover:bg-elevated hover:text-primary"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
                <li className="border-t border-border">
                  <Link to="/servicos" className="block rounded-md px-3 py-2 text-sm font-semibold text-primary hover:bg-elevated">
                    Ver todas as soluções
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {links.slice(1).map((l) => (
            <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="/#contato">Agendar Diagnóstico</a>
          </Button>
          <IconButton aria-label={open ? "Fechar menu" : "Abrir menu"} className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </IconButton>
        </div>
      </div>
      {open && (
        <nav aria-label="Menu móvel" className="border-t border-border px-6 py-4 lg:hidden">
          <ul className="space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-2 text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <button type="button" onClick={() => setSolOpen(!solOpen)} className="flex w-full items-center justify-between py-2 text-foreground">
                Soluções <ChevronDown aria-hidden className="size-4" />
              </button>
              {solOpen && (
                <ul className="space-y-1 pl-4">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link to="/servicos/$slug" params={{ slug: s.slug }} onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground">
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <a href="/#faq" onClick={() => setOpen(false)} className="block py-2 text-foreground">
                Perguntas Frequentes
              </a>
            </li>
          </ul>
          <Button asChild className="mt-4 w-full">
            <a href="/#contato" onClick={() => setOpen(false)}>Agendar Diagnóstico</a>
          </Button>
        </nav>
      )}
    </header>
  );
}
