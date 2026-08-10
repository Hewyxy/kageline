import { img } from "../data/images";

const BUILDS = [
  {
    code: "KAGE // S15",
    model: "Nissan Silvia S15",
    engine: "SR20DET",
    stat: "350 HP",
    image: img.gtr(1400),
    note: "Built for the mountain roads and the midnight run alike — a stock chassis turned into a razor.",
  },
  {
    code: "KAGE // S550",
    model: "Ford Mustang GT",
    engine: "5.0 V8 Coyote",
    stat: "Street Build",
    image: img.mustang(1400),
    note: "Proof that a street build doesn't need a swap to earn respect — just the right hands on it.",
  },
  {
    code: "KAGE // RX-7",
    model: "Mazda RX-7 FD",
    engine: "13B-REW",
    stat: "420 HP",
    image: img.rx7(1400),
    note: "Sequential twins, a chassis that never lies, and a rotary scream that carries down the block.",
  },
];

export default function Builds() {
  return (
    <section id="builds" className="relative bg-bg py-28 md:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div data-reveal className="mb-16 max-w-2xl">
          <p className="font-label text-[13px] text-red">Featured Builds</p>
          <h2 className="font-display mt-4 text-4xl text-ink md:text-6xl">
            THE GARAGE FLOOR.
          </h2>
        </div>
      </div>

      <div className="flex flex-col">
        {BUILDS.map((b, i) => (
          <a
            href="#contact"
            key={b.code}
            data-reveal
            className="group relative grid grid-cols-1 border-t border-line last:border-b md:grid-cols-2"
          >
            <div
              className={`relative aspect-[4/3] overflow-hidden md:aspect-auto ${
                i % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <img
                src={b.image}
                alt={`${b.model} — Kage Line build`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-bg/10" />
            </div>

            <div className="relative flex flex-col justify-center px-6 py-14 md:px-16 md:py-10">
              <span className="font-mono text-xs text-red">
                {String(i + 1).padStart(2, "0")} / {BUILDS.length}
              </span>
              <h3 className="font-display mt-4 text-4xl text-ink md:text-5xl">
                {b.code}
              </h3>
              <p className="mt-4 text-lg text-ink-dim">{b.model}</p>

              <div className="font-mono mt-8 flex flex-wrap gap-x-10 gap-y-3 border-y border-line py-6 text-sm">
                <div>
                  <p className="text-ink-faint text-[11px] uppercase tracking-widest">
                    Engine
                  </p>
                  <p className="mt-1 text-ink">{b.engine}</p>
                </div>
                <div>
                  <p className="text-ink-faint text-[11px] uppercase tracking-widest">
                    Output
                  </p>
                  <p className="mt-1 text-ink">{b.stat}</p>
                </div>
              </div>

              <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-dim">
                {b.note}
              </p>

              <span className="font-label mt-8 inline-flex w-fit items-center gap-2 text-[12px] text-ink transition-colors duration-300 group-hover:text-red">
                View Build
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
