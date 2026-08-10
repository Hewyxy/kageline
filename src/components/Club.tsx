import { img } from "../data/images";

const PILLARS = [
  { title: "Member Profiles", desc: "Every member gets a build page — car, mods, and story." },
  { title: "Car Builds", desc: "Track your build log and pull from the crew's collective know-how." },
  { title: "Meet Announcements", desc: "First word on every run, meet, and closed-door gathering." },
  { title: "Community Events", desc: "Track days, charity runs, and shop open-houses through the year." },
  { title: "Member-Only Activities", desc: "Private garage nights, early parts access, and route recons." },
];

export default function Club() {
  return (
    <section id="club" className="relative overflow-hidden bg-bg py-28 md:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5" data-reveal>
            <p className="font-label text-[13px] text-red">The Club</p>
            <h2 className="font-display mt-4 text-4xl leading-[0.95] text-ink md:text-6xl">
              NOT JUST
              <br />
              A SHOP.
              <br />
              <span className="text-red">A LINE.</span>
            </h2>

            <p className="mt-8 max-w-md text-base leading-relaxed text-ink-dim">
              Kage Line is a membership as much as it is a garage. Once you're
              in, you're part of the run — the builds, the meets, and everything
              that happens after the shop closes.
            </p>

            <a
              href="#contact"
              className="font-label mt-10 inline-flex items-center justify-center border border-red bg-red px-8 py-4 text-[13px] text-ink transition-all duration-300 hover:bg-transparent hover:text-red"
            >
              Become a Member
            </a>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="relative mb-10 aspect-[16/10] overflow-hidden" data-reveal>
              <img
                src={img.nightMeet(1400)}
                alt="Kage Line members gathered at a night meet"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2">
              {PILLARS.map((p, i) => (
                <li
                  key={p.title}
                  data-reveal
                  data-reveal-delay={String((i % 2) * 100)}
                  className="border-t border-line py-6 pr-6 last:border-b sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:pr-8 sm:[&:nth-child(4)]:border-b sm:last:border-b"
                >
                  <p className="font-display text-lg text-ink">{p.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-dim">
                    {p.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
