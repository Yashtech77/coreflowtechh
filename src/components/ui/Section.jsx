import { cn } from "../../utils/cn";
import Container from "./Container";

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  headerClassName,
  dark = false,
}) {
  return (
    <section id={id} className={cn("relative border-b border-border py-[clamp(82px,8vw,138px)]", className)}>
      <Container>
        {(eyebrow || title) && (
          <div className={cn("mb-12.5 grid grid-cols-[minmax(0,1.35fr)_minmax(250px,.65fr)] items-end gap-x-[8%] gap-y-4.5 max-[767px]:mb-9 max-[767px]:block", headerClassName)}>
            {eyebrow && (
              <p className={cn("col-span-full text-[11px] font-bold uppercase tracking-[.18em] max-[767px]:mb-5", dark ? "text-white" : "text-secondary")}>
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className={cn("max-w-[820px] text-[clamp(40px,4.5vw,76px)] leading-[1.04] font-semibold tracking-[-.065em] max-[767px]:text-[clamp(38px,8vw,62px)]", dark ? "text-white" : "text-primary")}>
                {title}
              </h2>
            )}
            {subtitle && <p className={cn("mb-1 max-w-[420px] text-base leading-[1.7] max-[767px]:mt-5", dark ? "text-white/85" : "text-muted")}>{subtitle}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
