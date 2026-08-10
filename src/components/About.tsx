export default function About() {
  return (
    <section className="relative border-b border-line bg-bg py-28 md:py-36">
      <span
        aria-hidden="true"
        className="font-display pointer-events-none absolute -left-10 top-10 select-none text-[22vw] leading-none text-ink/[0.025] md:text-[14vw]"
      >
        影
      </span>

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4" data-reveal>
            <p className="font-label text-[13px] text-red">Who We Are</p>
            <h2 className="font-display mt-4 text-4xl leading-[0.95] text-ink md:text-5xl">
              MORE THAN
              <br />
              MACHINES.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <p
              data-reveal
              data-reveal-delay="80"
              className="text-2xl leading-relaxed text-ink md:text-3xl"
            >
              Kage Line was built around one idea — cars are more than machines.
              They're the people, the nights, the builds, and the roads between them.
            </p>

            <p
              data-reveal
              data-reveal-delay="160"
              className="mt-8 max-w-xl text-base leading-relaxed text-ink-dim"
            >
              Based out of Kansas City, we're a shop and a club in equal measure —
              wrenching on SR20s and coyote V8s by day, running the line together
              after dark. No showroom polish, no pretense. Just cars built right,
              driven hard, and a crew that shows up for both.
            </p>

            <div
              data-reveal
              data-reveal-delay="240"
              className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-8 max-w-xl"
            >
              <div>
                <p className="font-mono text-3xl text-ink">120+</p>
                <p className="font-label mt-1 text-[11px] text-ink-dim">Active Members</p>
              </div>
              <div>
                <p className="font-mono text-3xl text-ink">40+</p>
                <p className="font-label mt-1 text-[11px] text-ink-dim">Builds Completed</p>
              </div>
              <div>
                <p className="font-mono text-3xl text-ink">KC</p>
                <p className="font-label mt-1 text-[11px] text-ink-dim">Home Turf</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
