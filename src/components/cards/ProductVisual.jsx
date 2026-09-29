import { useState } from "react";

const palettes = [
  ["#0f766e", "#22d3ee"],
  ["#1d4ed8", "#60a5fa"],
  ["#6d28d9", "#c4b5fd"],
  ["#059669", "#34d399"],
];

function hashSeed(seed) {
  return [...seed].reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

export default function ProductVisual({ seed = "gpu", image }) {
  const [failed, setFailed] = useState(false);
  const palette = palettes[hashSeed(seed) % palettes.length];

  if (image && !failed) {
    return (
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
      </div>
    );
  }

  return (
    <div className="relative h-40 overflow-hidden" style={{ background: `linear-gradient(135deg, ${palette[0]}33, ${palette[1]}22)` }}>
      <svg viewBox="0 0 400 160" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id={`g-${seed}`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor={palette[0]} />
            <stop offset="100%" stopColor={palette[1]} />
          </linearGradient>
        </defs>
        <rect x="40" y="28" width="320" height="104" rx="10" fill="none" stroke={`url(#g-${seed})`} strokeWidth="1.5" opacity="0.7" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect
            key={i}
            x={58 + i * 50}
            y="46"
            width="38"
            height="68"
            rx="4"
            fill={palette[1]}
            opacity={0.25 + (i % 3) * 0.15}
          />
        ))}
        <circle cx="340" cy="40" r="18" fill={palette[1]} opacity="0.35" />
        <path d="M40 120 H360" stroke={palette[1]} strokeWidth="1" opacity="0.4" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
    </div>
  );
}
