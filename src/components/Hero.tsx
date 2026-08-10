import { useEffect, useState } from "react";
import { img } from "../data/images";

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.35);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-bg">
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${offset}px) scale(1.12)` }}
      >
        <img
          src={img.heroNight(2400)}
          alt="Modified JDM car taillights glowing under a night sky"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/70 via-transparent to-bg/40" />

      {/* ghost kanji signature mark */}
      <span
        aria-hidden="true"
        className="font-display pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 select-none text-[38vw] leading-none text-ink/[0.04] md:text-[26vw]"
      >
        影
      </span>

      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-6 pb-20 md:px-10 md:pb-28">
        <p
          data-reveal
          className="reveal font-label text-[13px] text-red mb-5"
        >
          Kansas City Underground · Est. Now
        </p>

        <h1 className="font-display text-[15vw] leading-[0.88] tracking-tight text-ink sm:text-[10vw] md:text-[7.2vw] lg:text-[6.4vw]">
          <span data-reveal data-reveal-delay="80" className="reveal block overflow-hidden">
            RUN WITH
          </span>
          <span data-reveal data-reveal-delay="180" className="reveal block overflow-hidden text-red">
            THE LINE.
          </span>
        </h1>

        <p
          data-reveal
          data-reveal-delay="320"
          className="reveal font-label mt-7 text-sm text-ink-dim md:text-base"
        >
          Performance <span className="text-red">/</span> Culture <span className="text-red">/</span> Community
        </p>

        <div
          data-reveal
          data-reveal-delay="420"
          className="reveal mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#builds"
            className="inline-flex items-center justify-center border border-ink bg-ink px-8 py-4 font-label text-[13px] text-bg transition-all duration-300 hover:bg-transparent hover:text-ink"
          >
            Explore Builds
          </a>
          <a
            href="#club"
            className="inline-flex items-center justify-center border border-ink-dim px-8 py-4 font-label text-[13px] text-ink transition-all duration-300 hover:border-red hover:text-red"
          >
            Join Kage Line
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="font-label text-[10px] text-ink-dim">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-ink-dim to-transparent" />
      </div>
    </section>
  );
}
