import { Reveal } from "@/components/effects/Reveal";
import { services } from "@/data/content";
import { ArrowUpRight } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">02 — Services</p>
              <h2 className="mt-4 font-display text-5xl leading-[1] sm:text-6xl">
                Six ways to <span className="text-gradient">work together.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Each engagement starts with a 30-minute call. You leave with a written scope, even if we don't end up working together.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <article className="group relative h-full overflow-hidden bg-[color:var(--background)] p-8 transition-colors hover:bg-[color:var(--accent)]/40">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[color:var(--blush)]/0 via-transparent to-[color:var(--mauve)]/0 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">0{i + 1}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
                <h3 className="mt-12 font-display text-3xl leading-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.description}</p>
                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {s.deliverables.map((d) => (
                    <li key={d} className="rounded-full border border-[color:var(--border)] px-2.5 py-1 text-[11px] text-muted-foreground">
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
