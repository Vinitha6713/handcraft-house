import { ArrowRight, Leaf as LeafIcon, HandHeart, Recycle, Sparkles } from "lucide-react";
import artisan from "@/assets/artisan.jpg";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import { Reveal } from "./Reveal";
import { Leaf } from "./Leaf";

function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">{title}</h2>
      {intro && (
        <p className="mt-5 text-[0.98rem] leading-relaxed text-muted-foreground">{intro}</p>
      )}
    </Reveal>
  );
}

/* ---------------- Featured collections ---------------- */

const collections = [
  {
    name: "The Clay Table",
    copy: "Stoneware for slow mornings — thrown, glazed and fired in small batches.",
    image: p1,
    span: "lg:col-span-3",
    height: "h-[24rem] lg:h-[30rem]",
  },
  {
    name: "Woodland Forms",
    copy: "Bowls and boards carved from windfall walnut and ash.",
    image: p2,
    span: "lg:col-span-2",
    height: "h-[24rem] lg:h-[30rem]",
  },
];

export function Collections() {
  return (
    <section id="collections" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Featured"
          title="Collections shaped by the season"
          intro="Two small editions, released quietly and made in numbers our makers can honour."
        />
        <Reveal delay={120}>
          <a href="#best" className="btn-pill btn-ghost">
            View all
            <ArrowRight className="h-4 w-4" strokeWidth={1.4} />
          </a>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-5">
        {collections.map((c, i) => (
          <Reveal key={c.name} delay={i * 140} className={c.span}>
            <article className="zoom-frame group relative h-full rounded-[2rem] shadow-soft transition-transform duration-700 hover:-translate-y-1">
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                width={900}
                height={1100}
                className={`w-full object-cover ${c.height}`}
              />
              <div className="absolute inset-x-4 bottom-4 rounded-[1.5rem] border border-border/60 bg-background/80 p-6 backdrop-blur-md">
                <h3 className="text-2xl">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.copy}</p>
                <span className="font-ui mt-4 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-primary">
                  Discover <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Artisan story ---------------- */

export function ArtisanStory() {
  return (
    <section id="artisans" className="paper relative overflow-hidden bg-secondary/60">
      <Leaf className="-right-8 top-16 h-44 w-32 opacity-60" delay={2} />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-32">
        <Reveal>
          <div className="zoom-frame rounded-[2.5rem] shadow-soft">
            <img
              src={artisan}
              alt="A potter shaping a bowl on the wheel in a sunlit workshop"
              loading="lazy"
              width={1200}
              height={1408}
              className="h-[28rem] w-full object-cover lg:h-[36rem]"
            />
          </div>
        </Reveal>
        <Reveal delay={140}>
          <p className="eyebrow">The maker</p>
          <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
            Fourteen years at the wheel, still learning the clay.
          </h2>
          <p className="mt-6 text-[0.98rem] leading-relaxed text-muted-foreground">
            Elin works from a converted barn on the west coast, where the light changes every hour.
            Each bowl is thrown, trimmed and glazed by hand — no two rims are ever quite alike, and
            that is precisely the point.
          </p>
          <p className="mt-4 text-[0.98rem] leading-relaxed text-muted-foreground">
            We visit every workshop we sell from, agree prices with the maker, and never rush a
            firing.
          </p>
          <a href="#journal" className="btn-pill btn-solid mt-9">
            Read her story
            <ArrowRight className="h-4 w-4" strokeWidth={1.4} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Best sellers ---------------- */

const products = [
  { name: "Sand Glaze Mug", price: "€38", maker: "Elin Sørensen", image: p1 },
  { name: "Carved Walnut Bowl", price: "€96", maker: "Jonas Vik", image: p2 },
  { name: "Cotton Wall Weave", price: "€120", maker: "Marta Lind", image: p3 },
  { name: "Washed Linen Set", price: "€145", maker: "Hus Textile", image: p4 },
];

export function BestSellers() {
  return (
    <section id="best" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <SectionHeading
        eyebrow="Best loved"
        title="Pieces finding homes this month"
        align="center"
      />
      <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p, i) => (
          <Reveal key={p.name} delay={i * 110}>
            <article className="group">
              <div className="zoom-frame rounded-[1.75rem] bg-secondary/70 shadow-soft transition-all duration-700 group-hover:-translate-y-1.5 group-hover:shadow-lift">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={900}
                  height={1100}
                  className="h-80 w-full object-cover"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="truncate text-xl">{p.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {p.maker}
                  </p>
                </div>
                <p className="font-display shrink-0 text-xl text-primary">{p.price}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Craft categories ---------------- */

const categories = ["Wood", "Ceramic", "Macramé", "Painting", "Textile", "Home Décor"];

export function Categories() {
  return (
    <section className="border-y border-border bg-card/60">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading eyebrow="Browse" title="Crafts" align="center" />
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((c, i) => (
            <Reveal as="li" key={c} delay={i * 80}>
              <a
                href="#collections"
                className="flex h-28 items-center justify-center rounded-[1.5rem] border border-border bg-background/70 px-3 text-center transition-all duration-700 hover:-translate-y-1 hover:border-accent hover:shadow-soft"
              >
                <span className="font-display text-xl">{c}</span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Why handmade ---------------- */

const values = [
  { icon: HandHeart, title: "Made by a person", copy: "Every piece is signed by the hands that shaped it." },
  { icon: LeafIcon, title: "Natural materials", copy: "Clay, timber, cotton and linen — nothing synthetic." },
  { icon: Recycle, title: "Made to last", copy: "Repairable, ageing gently, never designed to be replaced." },
  { icon: Sparkles, title: "Fairly paid", copy: "Makers set their own prices. We simply carry the story." },
];

export function WhyHandmade() {
  return (
    <section id="why" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <SectionHeading
        eyebrow="Our promise"
        title="Why handmade matters"
        intro="Slower production, fewer objects, longer lives. A quieter way to furnish a home."
        align="center"
      />
      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => (
          <Reveal key={v.title} delay={i * 110}>
            <div className="text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-border bg-secondary/70">
                <v.icon className="h-5 w-5 text-primary" strokeWidth={1.2} />
              </div>
              <h3 className="mt-5 text-xl">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Gallery (masonry) ---------------- */

const gallery = [
  { src: g1, alt: "Woven baskets in warm sunlight", w: 900, h: 1000 },
  { src: g2, alt: "Hand-carved wooden spoons on linen", w: 900, h: 700 },
  { src: g3, alt: "Sunlit minimal room with ceramic vase", w: 900, h: 1200 },
  { src: p3, alt: "Macramé wall hanging on a warm plaster wall", w: 900, h: 1100 },
  { src: p1, alt: "Stoneware mug with dried flowers", w: 900, h: 1100 },
  { src: p4, alt: "Folded handwoven linen textiles", w: 900, h: 1100 },
];

export function Gallery() {
  return (
    <section id="journal" className="paper bg-secondary/60">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading
          eyebrow="Journal"
          title="From the workshops"
          intro="Fragments of light, material and process — collected on our visits."
          align="center"
        />
        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {gallery.map((g, i) => (
            <Reveal key={i} delay={(i % 3) * 120}>
              <figure className="zoom-frame rounded-[1.5rem] shadow-soft">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  width={g.w}
                  height={g.h}
                  className="w-full object-cover"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Reviews ---------------- */

const reviews = [
  {
    quote:
      "The mug arrived wrapped in linen and a handwritten note. It has been in my hand every morning since.",
    name: "Amelie R.",
    place: "Copenhagen",
  },
  {
    quote:
      "You can feel the difference immediately. The weight, the glaze, the tiny irregularities — it's alive.",
    name: "Tomás G.",
    place: "Lisbon",
  },
  {
    quote:
      "I bought one bowl and ended up furnishing the whole kitchen. Nothing here shouts, and that's rare.",
    name: "Hana K.",
    place: "Kyoto",
  },
];

export function Reviews() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <SectionHeading eyebrow="Customer stories" title="Kept, used, loved" align="center" />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {reviews.map((r, i) => (
          <Reveal key={r.name} delay={i * 130}>
            <blockquote className="h-full rounded-[2rem] border border-border bg-card p-9 shadow-soft transition-transform duration-700 hover:-translate-y-1">
              <span className="font-display block text-5xl leading-none text-gold">“</span>
              <p className="font-display mt-4 text-2xl leading-snug">{r.quote}</p>
              <footer className="mt-7 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {r.name} — {r.place}
              </footer>
            </blockquote>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Instagram ---------------- */

export function InstagramStrip() {
  const tiles = [g2, p1, g1, p4, g3, p2];
  return (
    <section className="border-y border-border bg-card/60 py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="@terraandthread" title="Follow the making" align="center" />
        <div className="mt-12 grid grid-cols-3 gap-3 lg:grid-cols-6">
          {tiles.map((src, i) => (
            <Reveal key={i} delay={i * 70}>
              <a href="#" className="zoom-frame block aspect-square rounded-[1.25rem] shadow-soft">
                <img
                  src={src}
                  alt="Instagram post from the workshop"
                  loading="lazy"
                  width={900}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Newsletter ---------------- */

export function Newsletter() {
  return (
    <section id="newsletter" className="relative overflow-hidden">
      <Leaf className="-left-6 bottom-6 h-36 w-24 opacity-50" delay={3} />
      <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 lg:py-32">
        <Reveal>
          <p className="eyebrow">Letters, rarely</p>
          <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
            New editions, workshop notes, nothing else.
          </h2>
          <form
            className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative flex-1">
              <input
                id="email"
                type="email"
                required
                placeholder=" "
                aria-label="Email address"
                className="peer h-14 w-full rounded-full border border-border bg-card px-6 text-sm outline-none transition-colors duration-500 focus:border-accent"
              />
              <label
                htmlFor="email"
                className="font-ui pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 text-xs uppercase tracking-[0.18em] text-muted-foreground transition-all duration-300 peer-focus:top-0 peer-focus:bg-background peer-focus:px-2 peer-focus:text-[0.6rem] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:bg-background peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-[0.6rem]"
              >
                Email address
              </label>
            </div>
            <button type="submit" className="btn-pill btn-solid h-14">
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-xs text-muted-foreground">
            Two or three letters a year. Unsubscribe any time.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
