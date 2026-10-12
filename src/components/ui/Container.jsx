import { cn } from "../../utils/cn";

export default function Container({ children, className }) {
  return <div className={cn("mx-auto w-full max-w-[1520px] px-6 max-[767px]:px-4 max-[480px]:px-3", className)}>{children}</div>;
}
