import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

export default function CatalogSelect({ id, label, value, options, onChange, onBlur, controlRef, invalid = false, describedBy, fullWidth = false }) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const optionRefs = useRef([]);
  const selectedIndex = Math.max(0, options.findIndex((option) => option.value === value));

  useEffect(() => {
    if (!open) return;
    const focusFrame = requestAnimationFrame(() => optionRefs.current[selectedIndex]?.focus());
    const closeOutside = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => {
      cancelAnimationFrame(focusFrame);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, [open, selectedIndex]);

  const choose = (option) => {
    onChange(option.value);
    setOpen(false);
    triggerRef.current?.focus();
  };

  const onKeyDown = (event) => {
    if (event.key === "Escape") {
      setOpen(false);
      triggerRef.current?.focus();
      return;
    }
    if (event.key === "Tab") {
      setOpen(false);
      return;
    }
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    if (!open) {
      setOpen(true);
      return;
    }
    const current = optionRefs.current.indexOf(document.activeElement);
    const next = event.key === "Home" ? 0 : event.key === "End" ? options.length - 1 : (current + (event.key === "ArrowDown" ? 1 : -1) + options.length) % options.length;
    optionRefs.current[next]?.focus();
  };

  return (
    <div className={`relative ${fullWidth ? "w-full" : "min-w-[185px] flex-[0_1_220px] max-[480px]:min-w-0 max-[480px]:flex-1"}`} ref={rootRef} onKeyDown={onKeyDown} onBlur={onBlur}>
      <button id={id} ref={(node) => { triggerRef.current = node; controlRef?.(node); }} type="button" className={`flex min-h-[50px] w-full cursor-pointer items-center justify-between gap-3 border bg-white px-3.5 py-3 text-left text-xs text-primary transition-colors motion-reduce:transition-none focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-secondary ${open || invalid ? "border-secondary" : "border-border hover:border-secondary"} ${fullWidth ? "min-h-[52px] text-sm" : ""}`} aria-label={label} aria-invalid={invalid} aria-describedby={describedBy} aria-haspopup="menu" aria-expanded={open} aria-controls={menuId} onClick={() => setOpen((current) => !current)}>
        <span>{options[selectedIndex]?.label}</span><ChevronDown className={`shrink-0 text-secondary transition-transform duration-200 motion-reduce:transition-none ${open ? "rotate-180" : ""}`} size={17} aria-hidden="true" />
      </button>
      <div id={menuId} className={`absolute inset-x-0 top-[calc(100%+7px)] z-40 max-h-[270px] origin-top overflow-y-auto border border-border bg-white p-1 transition-[opacity,transform,visibility] duration-200 motion-reduce:transition-none ${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`} role="menu" aria-label={label} aria-hidden={!open} inert={!open}>
        {options.map((option, index) => <button className={`flex min-h-[38px] w-full cursor-pointer items-center justify-between gap-3 px-2.5 py-2 text-left text-xs text-primary hover:bg-[color-mix(in_srgb,var(--primary)_4%,white)] focus-visible:bg-[color-mix(in_srgb,var(--primary)_4%,white)] ${option.value === value ? "font-bold text-secondary" : ""}`} key={option.value} ref={(node) => { optionRefs.current[index] = node; }} type="button" role="menuitemradio" aria-checked={option.value === value} onClick={() => choose(option)}>
          <span>{option.label}</span>{option.value === value && <Check size={16} aria-hidden="true" />}
        </button>)}
      </div>
    </div>
  );
}
