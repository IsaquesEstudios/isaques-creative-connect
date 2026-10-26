import * as React from "react";
import { cn } from "@/design-system/the-reading-room-697922/lib/utils";

export interface NavLinkItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  logo: React.ReactNode;
  links: NavLinkItem[];
  /** Trailing slot, usually a primary Button. */
  action?: React.ReactNode;
}

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, logo, links, action, ...props }, ref) => (
    <header ref={ref} className={cn("flex flex-wrap items-center justify-between gap-4 py-4", className)} {...props}>
      <div className="flex items-center gap-2 font-display text-lg font-bold">{logo}</div>
      <nav aria-label="Main" className="flex flex-wrap items-center gap-1 rounded-full bg-card p-1">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            aria-current={l.active ? "page" : undefined}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              l.active ? "bg-elevated text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {l.label}
          </a>
        ))}
      </nav>
      {action}
    </header>
  ),
);
Navbar.displayName = "Navbar";

export interface AvatarStackProps extends React.HTMLAttributes<HTMLDivElement> {
  people: { name: string; src?: string }[];
  /** Text beside the stack, e.g. "4.9 · 2,000+ reviews". */
  caption?: React.ReactNode;
}

const initials = (n: string) => n.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();

export const AvatarStack = React.forwardRef<HTMLDivElement, AvatarStackProps>(
  ({ className, people, caption, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center gap-3", className)} {...props}>
      <div className="flex -space-x-2">
        {people.map((p) => (
          <span key={p.name} title={p.name} className="inline-flex size-8 items-center justify-center overflow-hidden rounded-full bg-accent text-[10px] font-bold text-accent-foreground ring-2 ring-background">
            {p.src ? <img src={p.src} alt={p.name} className="size-full object-cover" /> : <span aria-label={p.name}>{initials(p.name)}</span>}
          </span>
        ))}
      </div>
      {caption && <div className="text-xs text-muted-foreground">{caption}</div>}
    </div>
  ),
);
AvatarStack.displayName = "AvatarStack";

export interface LogoCloudProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Brand logos or wordmarks; each is rendered inside a pill. */
  logos: { name: string; node: React.ReactNode }[];
}

export const LogoCloud = React.forwardRef<HTMLDivElement, LogoCloudProps>(
  ({ className, logos, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-wrap items-center justify-center gap-3", className)} {...props}>
      {logos.map((l) => (
        <div key={l.name} aria-label={l.name} className="flex h-11 min-w-32 items-center justify-center gap-2 rounded-full border border-border px-5 text-sm font-semibold text-muted-foreground">
          {l.node}
        </div>
      ))}
    </div>
  ),
);
LogoCloud.displayName = "LogoCloud";

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Leading slot, e.g. contact details. */
  lead?: React.ReactNode;
  columns: FooterColumn[];
  legal?: React.ReactNode;
}

export const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, lead, columns, legal, ...props }, ref) => (
    <footer ref={ref} className={cn("border-t border-border pt-10", className)} {...props}>
      <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div>{lead}</div>
        {columns.map((c) => (
          <div key={c.title}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">{c.title}</p>
            <ul className="space-y-2">
              {c.links.map((l) => (
                <li key={l.label}><a href={l.href} className="text-sm text-muted-foreground hover:text-foreground">{l.label}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {legal && <div className="mt-10 border-t border-border py-6 text-xs text-muted-foreground">{legal}</div>}
    </footer>
  ),
);
Footer.displayName = "Footer";
