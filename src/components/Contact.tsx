import { useState, type FormEvent } from "react";

const TOPICS = [
  "General Question",
  "Parts",
  "Build Inquiry",
  "Events",
  "Club Membership",
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="relative bg-bg py-28 md:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <p className="font-label text-[13px] text-red">Get In Touch</p>
            <h2 className="font-display mt-4 text-4xl leading-[0.95] text-ink md:text-5xl">
              TALK TO
              <br />
              THE SHOP.
            </h2>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-ink-dim">
              Parts questions, build inquiries, or just want to know when the
              next run is — drop us a line and we'll get back to you.
            </p>

            <div className="mt-12 border-t border-line pt-8">
              <p className="font-display text-xl text-ink">KAGE LINE</p>
              <p className="mt-2 text-sm text-ink-dim">Kansas City, Missouri</p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6" data-reveal data-reveal-delay="120">
            {sent ? (
              <div className="border border-line bg-bg-2 p-10 text-center">
                <p className="font-display text-2xl text-ink">Message Sent.</p>
                <p className="mt-3 text-sm text-ink-dim">
                  Thanks for reaching out — we'll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field label="Name" name="name" type="text" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />

                <div className="flex flex-col gap-2">
                  <label htmlFor="topic" className="font-label text-[11px] text-ink-dim">
                    Reason for Contact
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    required
                    defaultValue=""
                    className="border-b border-line bg-transparent py-3 text-ink transition-colors duration-300 focus:border-red focus:outline-none"
                  >
                    <option value="" disabled className="bg-bg-2">
                      Select one
                    </option>
                    {TOPICS.map((t) => (
                      <option key={t} value={t} className="bg-bg-2">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="message" className="font-label text-[11px] text-ink-dim">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="resize-none border-b border-line bg-transparent py-3 text-ink transition-colors duration-300 focus:border-red focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="font-label mt-2 inline-flex w-fit items-center justify-center border border-red bg-red px-9 py-4 text-[13px] text-ink transition-all duration-300 hover:bg-transparent hover:text-red sm:col-span-2"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-label text-[11px] text-ink-dim">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="border-b border-line bg-transparent py-3 text-ink transition-colors duration-300 focus:border-red focus:outline-none"
      />
    </div>
  );
}
