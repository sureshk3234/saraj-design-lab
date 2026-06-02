import { Reveal } from "@/components/effects/Reveal";
import { timeline } from "@/data/content";

const disciplines = [
  "Manuscript Writing",
  "Graphic Design",
  "UI/UX Design",
  "Web Design",
  "Amazon Listing Design",
  "Video Editing",
];

const builds = [
  "Social Media Content",
  "Brand Identity Systems",
  "Landing Pages",
  "SaaS Interfaces",
  "Marketing Creatives",
  "Digital Experiences",
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">01 — About</p>
              <h2 className="mt-4 font-display text-5xl leading-[1] sm:text-6xl">
                A studio of one, <span className="text-gradient">built around craft.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative mt-10 overflow-hidden rounded-3xl glass p-1">
                <div
                  className="relative aspect-[4/5] overflow-hidden rounded-[20px]"
                  style={{
                    background:
                      "radial-gradient(at 30% 20%, color-mix(in oklab, var(--blush) 70%, transparent), transparent 60%), radial-gradient(at 80% 80%, color-mix(in oklab, var(--mauve) 70%, transparent), transparent 60%), linear-gradient(135deg, oklch(0.22 0.04 320), oklch(0.18 0.02 290))",
                  }}
                >
                  <div className="grain absolute inset-0" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">PORTRAIT — 2026</p>
                    <p className="mt-2 font-display text-3xl text-white">Sara Johnson</p>
                    <p className="text-sm text-white/70">Creative Freelancer · Karachi, PK</p>
                  </div>
                  <div className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur">
                    Available
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-display text-3xl leading-snug text-foreground/90">
                I'm a creative freelancer working across writing, design, and motion — helping brands say
                clearer things, ship calmer interfaces, and keep the soul of what they're making.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-10 sm:grid-cols-2">
              <Reveal delay={0.05}>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">What I do</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {disciplines.map((d) => (
                    <li key={d} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-[color:var(--blush)]" />
                      {d}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">What I make</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {builds.map((d) => (
                    <li key={d} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-[color:var(--mauve)]" />
                      {d}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="mt-16">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">The road so far</p>
                <ol className="mt-6 space-y-6 border-l border-[color:var(--border)] pl-6">
                  {timeline.map((t) => (
                    <li key={t.year} className="relative">
                      <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[color:var(--blush)] to-[color:var(--mauve)] ring-4 ring-[color:var(--background)]" />
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.year}</p>
                      <p className="mt-1 font-display text-2xl">{t.title}</p>
                      <p className="mt-1 max-w-md text-sm text-muted-foreground">{t.body}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
