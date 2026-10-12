import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

const variants = {
  primary:
    "bg-primary text-white hover:bg-secondary",
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
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold tracking-wide transition duration-200 disabled:pointer-events-none disabled:opacity-60",
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
