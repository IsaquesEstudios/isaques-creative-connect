import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/design-system/the-reading-room-697922/lib/utils";

const fieldBase =
  "flex w-full bg-elevated text-sm text-foreground placeholder:text-muted-foreground transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-2 aria-invalid:ring-destructive";

export const inputVariants = cva(fieldBase, {
  variants: {
    shape: { rounded: "rounded-md", pill: "rounded-full" },
    size: { sm: "h-9 px-3", md: "h-11 px-4" },
  },
  defaultVariants: { shape: "rounded", size: "md" },
});

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, shape, size, ...props }, ref) => (
    <input ref={ref} className={cn(inputVariants({ shape, size }), className)} {...props} />
  ),
);
Input.displayName = "Input";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => (
  <textarea ref={ref} className={cn(fieldBase, "min-h-28 rounded-md px-4 py-3", className)} {...props} />
));
Textarea.displayName = "Textarea";

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({ className, ...props }, ref) => (
  <label ref={ref} className={cn("text-xs font-medium text-muted-foreground", className)} {...props} />
));
Label.displayName = "Label";
