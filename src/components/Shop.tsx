import { img } from "../data/images";

const CATEGORIES = [
  {
    name: "Performance Parts",
    desc: "Intakes, intercoolers, and drivetrain upgrades built to hold real power.",
    image: img.gtr(900),
  },
  {
    name: "Wheels & Tires",
    desc: "Forged and flow-formed fitments, set up for stance and grip alike.",
    image: img.wheelCaliper(900),
  },
  {
    name: "Suspension",
    desc: "Coilovers, sway bars, and chassis bracing for real corner speed.",
    image: img.mustang(900),
  },
  {
    name: "Exhaust",
    desc: "Cat-back and turbo-back systems tuned for tone as much as flow.",
    image: img.garage(900),
  },
  {
    name: "Engine Performance",
    desc: "Turbo kits, fuel systems, and tuning packages for serious builds.",
    image: img.engineBay(900),
  },
  {
    name: "Exterior & Aero",
    desc: "Widebody kits, splitters, and carbon aero that actually does work.",
    image: img.rx7(900),
  },
];

export default function Shop() {
  return (
    <section id="shop" className="relative border-b border-line bg-bg-2 py-28 md:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div
          data-reveal
          className="flex flex-col justify-between gap-6 border-b border-line pb-10 md:flex-row md:items-end"
        >
          <div>
            <p className="font-label text-[13px] text-red">The Shop</p>
            <h2 className="font-display mt-4 text-4xl text-ink md:text-6xl">
              BUILT TO ORDER.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-dim">
            Every part we stock has been run, tuned, and abused on our own cars
            first. If it's on the shelf, it's proven on the street.
          </p>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <div
              key={c.name}
              data-reveal
              data-reveal-delay={String((i % 3) * 90)}
              className="group relative border-b border-line py-10 pr-6 transition-colors duration-300 sm:border-r sm:px-8 lg:[&:nth-child(3n)]:border-r-0"
            >
              <div className="relative mb-6 aspect-[4/5] overflow-hidden bg-bg-3">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[35%] transition-all duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
                <div className="absolute inset-0 origin-left scale-x-0 bg-red/10 transition-transform duration-500 group-hover:scale-x-100" />
              </div>

              <h3 className="font-display text-2xl text-ink">{c.name}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-dim">
                {c.desc}
              </p>

              <button className="font-label mt-6 inline-flex items-center gap-2 text-[12px] text-ink transition-colors duration-300 group-hover:text-red">
                Explore
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
