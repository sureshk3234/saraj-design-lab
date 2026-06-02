import { motion } from "framer-motion";
import { Reveal } from "@/components/effects/Reveal";
import { testimonials } from "@/data/content";

export function Testimonials() {
  // Duplicate for seamless marquee
  const row = [...testimonials, ...testimonials];
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">04 — Testimonials</p>
            <h2 className="mt-4 font-display text-5xl leading-[1] sm:text-6xl">
              Notes from <span className="text-gradient">people I've shipped with.</span>
            </h2>
          </div>
        </Reveal>
      </div>

      <div className="relative mt-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[color:var(--background)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[color:var(--background)] to-transparent" />
        <motion.div
          className="flex gap-6 px-4 sm:px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          {row.map((t, i) => (
            <article
              key={i}
              className="glass relative w-[22rem] shrink-0 rounded-3xl p-7 sm:w-[26rem]"
            >
              <p className="font-display text-3xl leading-tight text-foreground/90">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-[color:var(--border)] pt-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[color:var(--blush)] to-[color:var(--mauve)] text-xs font-semibold text-[color:var(--primary-foreground)]">
                  {t.author.split(" ").map((n) => n[0]).join("")}
                </span>
                <div>
                  <p className="text-sm font-medium">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
