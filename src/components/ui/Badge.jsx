import { cn } from "../../utils/cn";

export default function Badge({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface/70 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
