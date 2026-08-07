import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";

const links = [
  { label: "Collections", href: "#collections" },
  { label: "Artisans", href: "#artisans" },
  { label: "Journal", href: "#journal" },
  { label: "About", href: "#why" },
  { label: "Contact", href: "#newsletter" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "border-b border-border/70 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-5 py-5 sm:px-8"
      >
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <span className="font-display text-2xl tracking-tight">Terra&nbsp;&amp;&nbsp;Thread</span>
        </a>

        <ul className="hidden items-center justify-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="font-ui relative text-[0.78rem] uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-500 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-500 hover:text-foreground hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-1.5">
          <button
            aria-label="Search"
            className="hidden h-10 items-center gap-2 rounded-full border border-border px-4 text-sm text-muted-foreground transition-colors duration-500 hover:bg-secondary sm:flex"
          >
            <Search className="h-4 w-4" strokeWidth={1.3} />
            <span className="font-ui text-xs tracking-wide">Search</span>
          </button>
          <button
            aria-label="Account"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full transition-colors duration-500 hover:bg-secondary"
          >
            <User className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.3} />
          </button>
          <button
            aria-label="Cart"
            className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full transition-colors duration-500 hover:bg-secondary"
          >
            <ShoppingBag className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.3} />
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-gold" />
          </button>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full transition-colors duration-500 hover:bg-secondary lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.3} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.3} />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-6 sm:px-8">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display block py-2 text-2xl"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
