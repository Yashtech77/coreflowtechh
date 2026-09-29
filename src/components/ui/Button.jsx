import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

const variants = {
  primary:
    "bg-primary text-white shadow-[0_0_0_1px_color-mix(in_srgb,var(--accent)_30%,transparent)] hover:brightness-110",
  outline:
    "border border-border bg-transparent text-foreground hover:border-accent hover:text-accent",
  ghost: "text-foreground hover:bg-surface hover:text-accent",
};

export default function Button({
  as = "button",
  to,
  href,
  variant = "primary",
  className,
  children,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition duration-300 disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    className
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href || as === "a") {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
