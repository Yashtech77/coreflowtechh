import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../utils/cn";

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpen(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span className="text-sm font-semibold text-foreground sm:text-base">{item.question}</span>
              <ChevronDown
                className={cn("h-4 w-4 shrink-0 text-accent transition", isOpen && "rotate-180")}
              />
            </button>
            {isOpen && <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
