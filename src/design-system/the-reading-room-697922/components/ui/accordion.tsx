import * as React from "react";
import { Plus } from "lucide-react";
import { cn } from "@/design-system/the-reading-room-697922/lib/utils";

export interface AccordionItemData {
  question: string;
  answer: React.ReactNode;
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItemData[];
  /** Index open on first render; -1 for all closed. */
  defaultOpen?: number;
}

/** FAQ list: dark rows with an orange toggle chip. */
export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, items, defaultOpen = -1, ...props }, ref) => {
    const [open, setOpen] = React.useState(defaultOpen);
    const id = React.useId();
    return (
      <div ref={ref} className={cn("space-y-3", className)} {...props}>
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.question} className="rounded-md bg-card">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${id}-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 rounded-md px-5 py-4 text-left text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item.question}
                <span aria-hidden className="inline-flex size-6 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                  <Plus className={cn("size-3.5 transition-transform", isOpen && "rotate-45")} />
                </span>
              </button>
              {isOpen && <div id={`${id}-${i}`} className="px-5 pb-5 text-sm text-muted-foreground">{item.answer}</div>}
            </div>
          );
        })}
      </div>
    );
  },
);
Accordion.displayName = "Accordion";
