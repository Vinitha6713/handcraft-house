import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { Leaf } from "./Leaf";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setOffset(window.scrollY * 0.15));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <Leaf className="-left-10 top-40 h-40 w-28 opacity-70" />
      <Leaf className="right-6 top-24 h-28 w-20 opacity-50" delay={4} />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:pb-24">
        <div className="animate-fade-in">
          <p className="eyebrow">Handcrafted since 1998</p>
          <h1 className="mt-6 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Objects made slowly,
            <span className="block italic text-primary">to be kept for life.</span>
          </h1>
          <p className="mt-7 max-w-md text-[0.98rem] leading-relaxed text-muted-foreground">
            A curated marketplace of ceramics, wood, linen and fibre — shaped by hand in small
            workshops, and made to settle quietly into your home.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#collections" className="btn-pill btn-solid">
              Explore collection
              <ArrowRight className="h-4 w-4" strokeWidth={1.4} />
            </a>
            <a href="#artisans" className="btn-pill btn-ghost">
              Meet our artisans
            </a>
          </div>
          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["120+", "Artisans"],
              ["18", "Regions"],
              ["100%", "Natural materials"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-3xl text-primary">{value}</dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div
            className="paper overflow-hidden rounded-[2.5rem] shadow-soft"
            style={{ transform: `translateY(${-offset}px)` }}
          >
            <img
              src={heroImage}
              alt="Handmade ceramic vases and a woven basket on an oak table in soft daylight"
              width={1600}
              height={1104}
              className="h-[26rem] w-full object-cover sm:h-[34rem] lg:h-[38rem]"
            />
          </div>
          <div className="absolute -bottom-8 left-4 hidden max-w-[15rem] rounded-3xl border border-border bg-card/90 p-6 shadow-soft backdrop-blur-sm sm:block">
            <p className="font-display text-xl leading-snug">“Every piece carries a fingerprint.”</p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Elin Sørensen, potter
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
