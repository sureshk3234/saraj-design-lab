import { Reveal } from "@/components/effects/Reveal";
import { skillGroups } from "@/data/content";

export function Skills() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Toolkit</p>
            <h2 className="mt-4 font-display text-5xl leading-[1] sm:text-6xl">
              A working stack, <span className="text-gradient">honed over time.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.04}>
              <div className="glass relative h-full overflow-hidden rounded-3xl p-7">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-[color:var(--blush)]/30 to-transparent blur-2xl" />
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">0{i + 1}</p>
                <h3 className="mt-3 font-display text-2xl">{g.title}</h3>
                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {g.items.map((it) => (
                    <li key={it} className="rounded-full border border-[color:var(--border)] px-2.5 py-1 text-[11px] text-muted-foreground">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
