const EVENTS = [
  {
    name: "Kage Night Run",
    city: "Kansas City, KS",
    date: "August 22, 2026",
    note: "A guided night convoy through the metro — meet at the shop, run 'til sunrise.",
  },
  {
    name: "Midwest Kage Meet",
    city: "Kansas City, MO",
    date: "September 12, 2026",
    note: "Our biggest open meet of the season — builds, vendors, and the full crew out.",
  },
  {
    name: "Autumn Underground",
    city: "Kansas City, MO",
    date: "October 10, 2026",
    note: "A closing-season gathering under the lights before the cold sets in.",
  },
];

export default function Events() {
  return (
    <section id="events" className="relative border-b border-line bg-bg-2 py-28 md:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div
          data-reveal
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="font-label text-[13px] text-red">On the Calendar</p>
            <h2 className="font-display mt-4 text-4xl text-ink md:text-6xl">
              WHERE WE RUN.
            </h2>
          </div>
          <a
            href="#contact"
            className="font-label inline-flex w-fit items-center gap-2 border border-ink-dim px-6 py-3 text-[12px] text-ink transition-colors duration-300 hover:border-red hover:text-red"
          >
            View All Events →
          </a>
        </div>

        <div className="mt-16 flex flex-col">
          {EVENTS.map((e, i) => (
            <div
              key={e.name}
              data-reveal
              data-reveal-delay={String(i * 90)}
              className="group grid grid-cols-1 gap-4 border-t border-line py-8 last:border-b md:grid-cols-12 md:items-center md:gap-6"
            >
              <p className="font-mono text-sm text-red md:col-span-2">{e.date}</p>
              <h3 className="font-display text-2xl text-ink transition-colors duration-300 group-hover:text-red md:col-span-5 md:text-3xl">
                {e.name}
              </h3>
              <p className="font-label text-[12px] text-ink-dim md:col-span-3">
                {e.city}
              </p>
              <p className="text-sm text-ink-dim md:col-span-2 md:text-right">
                {e.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
