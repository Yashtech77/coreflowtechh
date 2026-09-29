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
}) {
  return (
    <section id={id} className={cn("relative py-16 sm:py-20 lg:py-24", className)}>
      <Container>
        {(eyebrow || title) && (
          <div className={cn("mb-10 max-w-3xl", headerClassName)}>
            {eyebrow && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{subtitle}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
