import { Instagram, Facebook, Twitter } from "lucide-react";

const columns = [
  { title: "Shop", items: ["Ceramics", "Wood", "Textile", "Macramé", "Gift cards"] },
  { title: "Studio", items: ["Our story", "Artisans", "Sustainability", "Journal", "Careers"] },
  { title: "Support", items: ["Shipping", "Returns", "Care guide", "FAQ", "Contact"] },
];

export function Footer() {
  return (
    <footer className="paper border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <p className="font-display text-3xl">Terra &amp; Thread</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            A quiet marketplace for handmade objects — made by people, from materials that age
            beautifully.
          </p>
          <div className="mt-6 flex gap-2">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social profile"
                className="grid h-10 w-10 place-items-center rounded-full border border-border transition-transform duration-500 hover:-translate-y-0.5 hover:bg-background"
              >
                <Icon className="h-4 w-4" strokeWidth={1.3} />
              </a>
            ))}
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="eyebrow">{col.title}</p>
            <ul className="mt-5 space-y-3">
              {col.items.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition-colors duration-500 hover:text-foreground"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-border px-5 py-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Terra &amp; Thread. Made by hand.</p>
        <p className="tracking-[0.18em] uppercase">Privacy · Terms · Cookies</p>
      </div>
    </footer>
  );
}
