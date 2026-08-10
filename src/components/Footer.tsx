const SOCIAL = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "Discord", href: "https://discord.com" },
];

const LEGAL = [
  { label: "Contact", href: "#contact" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-bg-2">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10">
        <div className="flex flex-col gap-10 border-b border-line pb-10 md:flex-row md:items-center md:justify-between">
          <a href="#home" className="font-display text-3xl text-ink">
            KAGE<span className="text-red">.</span>LINE
          </a>

          <ul className="flex flex-wrap gap-x-8 gap-y-3 font-label text-[12px] text-ink-dim">
            {SOCIAL.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-300 hover:text-red"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap gap-x-8 gap-y-3 font-label text-[12px] text-ink-dim">
            {LEGAL.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="transition-colors duration-300 hover:text-red">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-[12px] text-ink-faint md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Kage Line. Kansas City, Missouri.</p>
          <p>A fictional brand concept — built as a design &amp; development portfolio piece.</p>
        </div>
      </div>
    </footer>
  );
}
