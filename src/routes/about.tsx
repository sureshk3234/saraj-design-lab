import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Reveal } from "@/components/effects/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sara Johnson" },
      { name: "description", content: "Sara Johnson is a creative freelancer in Karachi working across writing, design, and motion. Learn about the studio, the timeline, and the toolkit." },
      { property: "og:title", content: "About — Sara Johnson" },
      { property: "og:description", content: "A creative freelancer in Karachi, working across writing, design, and motion." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const experience = [
  {
    role: "Freelance Manuscript Writer & Graphic Designer",
    period: "2023 — Present",
    body: ["Social media design", "Brand identity creation", "Content writing", "Marketing creatives", "Client communication", "Project management", "Remote collaboration"],
  },
  {
    role: "Junior POS Consultant — Intern",
    period: "2025 — 2026",
    body: ["Technical support", "POS troubleshooting", "User guidance", "Documentation", "System setup"],
  },
];

function AboutPage() {
  return (
    <>
      <div className="pt-36 sm:pt-44">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">About</p>
            <h1 className="mt-4 font-display text-6xl leading-[0.95] sm:text-7xl">
              The story behind <span className="text-gradient">the work.</span>
            </h1>
          </Reveal>
        </div>
      </div>
      <About />
      <Skills />
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Experience</p>
            <h2 className="mt-4 font-display text-5xl leading-[1] sm:text-6xl">
              Where I've shown up <span className="text-gradient">to the work.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {experience.map((e, i) => (
              <Reveal key={e.role} delay={i * 0.05}>
                <article className="glass h-full rounded-3xl p-7">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{e.period}</p>
                  <h3 className="mt-3 font-display text-3xl leading-tight">{e.role}</h3>
                  <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {e.body.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[color:var(--blush)]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
