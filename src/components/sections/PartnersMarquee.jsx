import { partners } from "../../data/partners";
import Container from "../ui/Container";

export default function PartnersMarquee() {
  return (
    <section className="border-b border-border bg-primary py-[70px] text-white" aria-labelledby="home-partners-title">
      <Container>
        <div className="flex items-end justify-between gap-7.5 border-b border-white/35 pb-9 max-[767px]:block"><p className="text-[11px] font-bold tracking-[.18em] uppercase">Connected capabilities / 02</p><h2 className="max-w-[560px] text-[clamp(29px,3.1vw,50px)] leading-[1.1] font-medium tracking-[-.055em] max-[767px]:mt-5" id="home-partners-title">One source for the infrastructure stack.</h2></div>
        <div className="grid grid-cols-4 max-[767px]:grid-cols-2">
          {partners.map((partner, index) => (
            <div className="flex min-h-[142px] flex-col border-b border-white/35 py-6.5 pr-5.5 max-[480px]:min-h-[115px]" key={partner.id}>
              <span className="mb-auto text-[10px] font-bold text-white/75">0{index + 1}</span>
              <strong className="mt-5 text-[clamp(16px,1.4vw,22px)] font-semibold tracking-[-.035em]">{partner.name}</strong>
              <small className="mt-1 text-[11px] leading-normal text-white/75">{partner.role}</small>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
