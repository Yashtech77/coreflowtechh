import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

const variants = {
  primary: "border-primary bg-primary text-white hover:border-secondary hover:bg-secondary",
  outline: "border-primary bg-transparent text-primary hover:bg-primary hover:text-white",
  inverse: "border-white bg-white text-primary hover:bg-transparent hover:text-white",
};

export default function ActionButton({ to, variant = "primary", className, icon, children, ...props }) {
  const Component = to ? Link : "button";
  return (
    <Component
      {...(to ? { to } : { type: "button" })}
      className={cn("group inline-flex min-h-[54px] cursor-pointer items-stretch justify-between whitespace-nowrap rounded-[2px] border pl-5 text-[13px] font-bold leading-[1.25] transition-[background,border-color,color] duration-[220ms] motion-reduce:transition-none", variants[variant], className)}
      {...props}
    >
      <span className="self-center py-2.5">{children}</span>
      <span className="ml-7 grid w-[54px] shrink-0 place-items-center border-l border-current/40 [&>svg]:rotate-45 [&>svg]:transition-transform [&>svg]:duration-[280ms] group-hover:[&>svg]:translate-x-[2px] group-hover:[&>svg]:-translate-y-[2px] group-hover:[&>svg]:rotate-0 group-focus-visible:[&>svg]:rotate-0 motion-reduce:[&>svg]:transition-none">{icon}</span>
    </Component>
  );
}
