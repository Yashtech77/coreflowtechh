export default function Logo({ compact = false }) {
  return (
    <span className="inline-flex min-w-0 max-w-full items-center gap-2 sm:gap-2.5">
      <svg className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect width="36" height="36" rx="10" fill="var(--primary)" />
        <path
          d="M8 22c4-8 7-8 10 0s6 8 10 0"
          stroke="var(--accent)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="18" cy="14" r="2.2" fill="white" />
        <circle cx="10.5" cy="20.5" r="1.6" fill="var(--accent)" />
        <circle cx="25.5" cy="20.5" r="1.6" fill="var(--accent)" />
      </svg>
      {!compact && (
        <span className="truncate text-[15px] font-semibold tracking-tight text-foreground sm:text-lg">
          Core<span className="text-accent">flow</span>tech
        </span>
      )}
    </span>
  );
}
