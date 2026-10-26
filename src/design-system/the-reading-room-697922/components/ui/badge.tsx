import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/design-system/the-reading-room-697922/lib/utils";

export const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full font-semibold uppercase tracking-wider",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground",
        soft: "bg-accent text-accent-foreground",
        outline: "border border-border text-muted-foreground",
        neutral: "bg-secondary text-secondary-foreground",
      },
      size: { sm: "px-2.5 py-0.5 text-[10px]", md: "px-3 py-1 text-xs" },
    },
    defaultVariants: { variant: "soft", size: "sm" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

/** Small uppercase pill: section eyebrows, tags and metadata. */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => (
    <span ref={ref} className={cn(badgeVariants({ variant, size }), className)} {...props} />
  ),
);
Badge.displayName = "Badge";
