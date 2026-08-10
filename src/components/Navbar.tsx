import { useEffect, useState } from "react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "Builds", href: "#builds" },
  { label: "Events", href: "#events" },
  { label: "Club", href: "#club" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-bg/90 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1440px] px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 shrink-0" aria-label="Kage Line home">
          <span className="font-display text-2xl tracking-wider text-ink">
            KAGE<span className="text-red">.</span>LINE
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-9 font-label text-[13px] text-ink-dim">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative py-2 transition-colors hover:text-ink group"
              >
                {l.label}
                <span className="absolute left-0 -bottom-0.5 h-[1.5px] w-0 bg-red transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#club"
          className="hidden lg:inline-flex items-center border border-red bg-red px-5 py-2.5 font-label text-[12px] text-ink transition-all duration-300 hover:bg-transparent hover:text-red"
        >
          Join the Line
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`block h-[2px] w-7 bg-ink transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-7 bg-ink transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-7 bg-ink transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`lg:hidden fixed inset-x-0 top-20 bottom-0 bg-bg transition-transform duration-500 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col px-8 pt-10 gap-1 font-label text-2xl">
          {LINKS.map((l, i) => (
            <li
              key={l.href}
              className="border-b border-line py-5"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <a href={l.href} onClick={() => setOpen(false)} className="text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#club"
          onClick={() => setOpen(false)}
          className="mx-8 mt-8 inline-flex justify-center border border-red bg-red px-5 py-4 font-label text-sm text-ink"
        >
          Join the Line
        </a>
      </div>
    </header>
  );
}
