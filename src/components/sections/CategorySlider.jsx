import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { getHomeCatalogue } from "../../data/products";
import Section from "../ui/Section";
import Badge from "../ui/Badge";
import "swiper/css";
import "swiper/css/pagination";

export default function CategorySlider() {
  const catalogue = getHomeCatalogue();

  return (
    <Section
      eyebrow="Catalogue"
      title="Coreflowtech solutions"
      subtitle="Data centre, generic IT infrastructure, and authorized KAYTUS, CxTEK, and AFS supply."
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3800, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{ 768: { slidesPerView: 2 }, 1280: { slidesPerView: 3 } }}
        className="pb-12"
      >
        {catalogue.map((category) => (
          <SwiperSlide key={category.slug}>
            <Link
              to={category.href}
              className="glass glow-border flex h-full min-h-64 flex-col rounded-2xl p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {category.items.length} solutions
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground">{category.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{category.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.highlights.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}
