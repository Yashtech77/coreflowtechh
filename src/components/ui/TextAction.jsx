import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

export default function TextAction({ to, href, className, icon, children }) {
  const classes = cn("group inline-flex min-h-11 items-center gap-3 border-b border-current text-[13px] font-bold text-primary transition-colors duration-[220ms] hover:text-secondary [&>svg]:transition-transform [&>svg]:duration-[280ms] hover:[&>svg]:translate-x-[2px] hover:[&>svg]:-translate-y-[2px] hover:[&>svg]:-rotate-45 focus-visible:[&>svg]:-rotate-45 motion-reduce:transition-none motion-reduce:[&>svg]:transition-none", className);
  return to ? <Link to={to} className={classes}>{children}{icon}</Link> : <a href={href} className={classes}>{children}{icon}</a>;
}
