import { img } from "../data/images";

const SHOTS = [
  { src: img.heroNight(1100), alt: "Modified car taillights glowing at night", span: "row-span-2" },
  { src: img.nightMeet(900), alt: "Members gathered at a night meet" },
  { src: img.engineBay(900), alt: "Detailed SR20DET engine bay" },
  { src: img.garage(1100), alt: "Underground garage lit at night", span: "row-span-2" },
  { src: img.wheelCaliper(900), alt: "Wheel fitment with red brake caliper" },
  { src: img.highway(900), alt: "Long-exposure highway light trails at night" },
  { src: img.rx7(1100), alt: "Mazda RX-7 with aftermarket exhaust", span: "col-span-2" },
  { src: img.gtr(900), alt: "Nissan GT-R on a city street" },
];

export default function Gallery() {
  return (
    <section className="relative border-b border-line bg-bg-2 py-28 md:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div data-reveal className="mb-14 max-w-2xl">
          <p className="font-label text-[13px] text-red">In the Wild</p>
          <h2 className="font-display mt-4 text-4xl text-ink md:text-6xl">
            THE LINE, IN FRAME.
          </h2>
        </div>

        <div className="grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {SHOTS.map((s, i) => (
            <div
              key={s.alt}
              data-reveal
              data-reveal-delay={String((i % 4) * 80)}
              className={`group relative overflow-hidden bg-bg-3 ${s.span ?? ""}`}
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="h-full w-full object-cover grayscale-[20%] transition-all duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
