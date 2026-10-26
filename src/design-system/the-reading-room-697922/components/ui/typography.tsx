import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/design-system/the-reading-room-697922/lib/utils";
import { Badge } from "./badge";

export const headingVariants = cva("text-display text-foreground", {
  variants: {
    size: {
      hero: "text-5xl md:text-7xl",
      xl: "text-4xl md:text-6xl",
      lg: "text-3xl md:text-4xl",
      md: "text-2xl",
    },
  },
  defaultVariants: { size: "lg" },
});

export interface DisplayHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3";
}

export const DisplayHeading = React.forwardRef<HTMLHeadingElement, DisplayHeadingProps>(
  ({ className, size, as: Tag = "h2", ...props }, ref) => (
    <Tag ref={ref} className={cn(headingVariants({ size }), className)} {...props} />
  ),
);
DisplayHeading.displayName = "DisplayHeading";

export interface HighlightProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "fill" | "text";
}

/** Emphasise a word inside a heading — orange box ("fill") or orange text. */
export const Highlight = React.forwardRef<HTMLSpanElement, HighlightProps>(
  ({ className, variant = "fill", ...props }, ref) => (
    <span
      ref={ref}
      className={cn(variant === "fill" ? "rounded-sm bg-primary px-2 text-primary-foreground" : "text-primary", className)}
      {...props}
    />
  ),
);
Highlight.displayName = "Highlight";

export interface SectionHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  /** Trailing slot on left-aligned headers, e.g. a "View all" Button. */
  action?: React.ReactNode;
}

export const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, eyebrow, title, description, align = "left", action, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex gap-6", align === "center" ? "flex-col items-center text-center" : "flex-wrap items-end justify-between", className)}
      {...props}
    >
      <div className={cn("max-w-2xl space-y-3", align === "center" && "flex flex-col items-center")}>
        {eyebrow && <Badge>{eyebrow}</Badge>}
        <DisplayHeading size="lg">{title}</DisplayHeading>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      {action}
    </div>
  ),
);
SectionHeader.displayName = "SectionHeader";
