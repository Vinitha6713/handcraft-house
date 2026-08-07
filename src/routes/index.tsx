import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import {
  ArtisanStory,
  BestSellers,
  Categories,
  Collections,
  Gallery,
  InstagramStrip,
  Newsletter,
  Reviews,
  WhyHandmade,
} from "@/components/site/Sections";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Terra & Thread — Handcrafted Ceramics, Wood & Linen" },
      {
        name: "description",
        content:
          "A calm marketplace for handmade ceramics, carved wood, macramé and linen — made slowly by independent artisans and built to last a lifetime.",
      },
      { property: "og:title", content: "Terra & Thread — Handcrafted Ceramics, Wood & Linen" },
      {
        property: "og:description",
        content:
          "Handmade objects from small workshops: stoneware, carved wood, woven fibre and washed linen, made to be kept.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <ArtisanStory />
        <BestSellers />
        <Categories />
        <WhyHandmade />
        <Gallery />
        <Reviews />
        <InstagramStrip />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
