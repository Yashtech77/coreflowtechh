import Section from "../ui/Section";

const presence = [
  { label: "Authorization", value: "Authorized KAYTUS, CxTEK & AFS distributor, India" },
  { label: "Coverage", value: "Pan-India delivery & support" },
  { label: "Focus", value: "Data centre & IT infrastructure" },
];

export default function GlobalPresence() {
  return (
    <Section
      id="presence"
      className="bg-white"
      eyebrow="India presence"
      title="Based in India. Delivered across the country."
      subtitle="Data centre projects, IT infrastructure, and authorized KAYTUS, CxTEK, and AFS support nationwide."
    >
      <div className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,.8fr)] items-end gap-[7%] border-t border-border max-[767px]:grid-cols-1">
        <div className="flex items-start justify-between overflow-hidden text-[clamp(100px,14vw,240px)] leading-[1.1] font-semibold tracking-[-.105em] max-[767px]:text-[clamp(95px,18vw,165px)]" aria-hidden="true">INDIA<span className="mt-[.24em] text-[.27em] tracking-normal text-secondary">→</span></div>
        <div>
          {presence.map((item, index) => (
            <div className="grid grid-cols-[135px_1fr] gap-5 border-b border-border py-5 max-[480px]:grid-cols-1 max-[480px]:gap-2" key={item.label}>
              <span className="text-[11px] font-bold tracking-[.14em] text-secondary">0{index + 1} / {item.label}</span>
              <p className="text-[clamp(16px,1.5vw,22px)] leading-[1.4] font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
