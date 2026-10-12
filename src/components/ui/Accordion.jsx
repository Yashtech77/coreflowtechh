import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  const id = useId();

  return (
    <div className="border-t border-border">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div className="border-b border-border" key={item.question}>
            <button
              className="grid w-full cursor-pointer grid-cols-[34px_minmax(0,1fr)_20px] items-start gap-4 py-6 text-left text-primary"
              type="button"
              onClick={() => setOpen(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              aria-controls={`${id}-answer-${index}`}
            >
              <span className="pt-1 text-[11px] font-bold text-secondary">0{index + 1}</span>
              <span className="max-w-[670px] text-[clamp(17px,1.5vw,22px)] leading-[1.35] font-semibold tracking-[-.03em]">{item.question}</span>
              <ChevronDown className={`text-secondary transition-transform duration-200 motion-reduce:transition-none ${isOpen ? "rotate-180" : ""}`} size={20} aria-hidden="true" />
            </button>
            <div id={`${id}-answer-${index}`} className={`grid transition-[grid-template-rows,opacity] duration-300 motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`} aria-hidden={!isOpen} inert={!isOpen}><div className="min-h-0 overflow-hidden"><p className="mr-9 mb-6 ml-12 max-w-[690px] text-sm leading-[1.75] text-muted max-[480px]:ml-0">{item.answer}</p></div></div>
          </div>
        );
      })}
    </div>
  );
}
