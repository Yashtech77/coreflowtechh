import { useEffect, useRef, useState } from "react";

export default function CountUp({ value, suffix = "", duration = 1400 }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const start = performance.now();
        const from = 0;
        const to = Number(value);

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const next = to % 1 === 0 ? Math.round(from + (to - from) * eased) : Number((from + (to - from) * eased).toFixed(1));
          setDisplay(next);
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [duration, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
