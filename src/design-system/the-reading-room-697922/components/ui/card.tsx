import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import { cn } from "@/design-system/the-reading-room-697922/lib/utils";

export const cardVariants = cva("relative overflow-hidden rounded-xl", {
  variants: {
    variant: {
      solid: "bg-card text-card-foreground shadow-card",
      outline: "border border-border bg-transparent text-foreground",
      highlight: "bg-primary text-primary-foreground",
    },
    padding: { none: "", sm: "p-4", md: "p-6", lg: "p-8" },
  },
  defaultVariants: { variant: "solid", padding: "md" },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...props }, ref) => (
    <div ref={ref} className={cn(cardVariants({ variant, padding }), className)} {...props} />
  ),
);
Card.displayName = "Card";

export type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("font-display text-lg font-semibold tracking-tight", className)} {...props} />
  ),
);
CardTitle.displayName = "CardTitle";

export type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm leading-relaxed text-muted-foreground", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

export interface ServiceCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
}

/** Service tile: icon, title, description and "Learn more" link. */
export const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ className, icon, title, description, href, linkLabel = "Learn more", ...props }, ref) => (
    <Card ref={ref} className={cn("flex min-h-64 flex-col", className)} {...props}>
      <span aria-hidden className="mb-4 inline-flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground [&_svg]:size-4">
        {icon}
      </span>
      <CardTitle>{title}</CardTitle>
      <CardDescription className="mt-auto pt-10">{description}</CardDescription>
      {href && (
        <a href={href} className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          {linkLabel} <ArrowRight aria-hidden className="size-3.5" />
        </a>
      )}
    </Card>
  ),
);
ServiceCard.displayName = "ServiceCard";

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  description?: string;
  variant?: "solid" | "highlight" | "overlay";
  /** Optional background image for the "overlay" variant. */
  imageSrc?: string;
}

/** Big-number result card ("150% average traffic increase"). */
export const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ className, value, label, description, variant = "solid", imageSrc, ...props }, ref) => (
    <Card ref={ref} variant={variant === "highlight" ? "highlight" : "solid"} className={cn("flex min-h-48 flex-col justify-end", className)} {...props}>
      {variant === "overlay" && imageSrc && (
        <>
          <img src={imageSrc} alt="" className="absolute inset-0 size-full object-cover" />
          <div aria-hidden className="absolute inset-0 bg-background/60" />
        </>
      )}
      <div className="relative">
        <p className="text-display text-5xl">{value}</p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wider">{label}</p>
        {description && <p className={cn("mt-3 text-sm", variant === "highlight" ? "opacity-80" : "text-muted-foreground")}>{description}</p>}
      </div>
    </Card>
  ),
);
StatCard.displayName = "StatCard";

export interface MediaCardProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  imageSrc: string;
  imageAlt: string;
  title: string;
  tags?: string[];
  description?: string;
  /** Optional result metrics shown under the text (case studies). */
  metrics?: { value: string; label: string }[];
  href?: string;
}

/** Image-led card for case studies and blog posts. */
export const MediaCard = React.forwardRef<HTMLElement, MediaCardProps>(
  ({ className, imageSrc, imageAlt, title, tags, description, metrics, href, ...props }, ref) => {
    const heading = <h3 className="font-display text-base font-semibold leading-snug">{title}</h3>;
    return (
      <article ref={ref} className={cn("group overflow-hidden rounded-xl bg-card shadow-card", className)} {...props}>
        <div className="aspect-[4/3] overflow-hidden">
          <img src={imageSrc} alt={imageAlt} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div className="space-y-3 p-5">
          {tags && <div className="flex flex-wrap gap-2">{tags.map((t) => <span key={t} className={badgeLike}>{t}</span>)}</div>}
          {href ? <a href={href} className="block hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{heading}</a> : heading}
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
          {metrics && (
            <div className="flex gap-8 pt-2">
              {metrics.map((m) => (
                <div key={m.label}><p className="text-display text-3xl text-primary">{m.value}</p><p className="text-xs text-muted-foreground">{m.label}</p></div>
              ))}
            </div>
          )}
        </div>
      </article>
    );
  },
);
MediaCard.displayName = "MediaCard";

const badgeLike = "rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-secondary-foreground";

export interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  plan: string;
  price: string;
  period?: string;
  features: string[];
  featured?: boolean;
  cta: React.ReactNode;
}

export const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  ({ className, plan, price, period = "/month", features, featured = false, cta, ...props }, ref) => (
    <Card ref={ref} className={cn("flex flex-col gap-6", featured && "ring-2 ring-primary", className)} {...props}>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{plan}</p>
        <p className="text-display mt-2 text-5xl">{price}<span className="text-sm font-normal text-muted-foreground">{period}</span></p>
      </div>
      <ul className="space-y-2 text-sm">
        {features.map((f) => <li key={f} className="flex gap-2"><span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />{f}</li>)}
      </ul>
      <div className="mt-auto">{cta}</div>
    </Card>
  ),
);
PricingCard.displayName = "PricingCard";
