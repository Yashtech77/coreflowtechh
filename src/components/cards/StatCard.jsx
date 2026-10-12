import CountUp from "../animations/CountUp";

export default function StatCard({ stat }) {
  return (
    <article className="border-l border-border px-7 py-2 first:border-l-0 first:pl-0 max-[767px]:border-b max-[767px]:py-5 max-[767px]:nth-[2n+1]:border-l-0 max-[767px]:nth-[2n+1]:pl-0">
      <p className="text-[clamp(44px,4.6vw,74px)] leading-none font-medium tracking-[-.075em] text-primary">
        <CountUp value={stat.value} suffix={stat.suffix} />
      </p>
      <p className="mt-3 max-w-[180px] text-xs leading-[1.45] font-semibold text-secondary">{stat.label}</p>
    </article>
  );
}
