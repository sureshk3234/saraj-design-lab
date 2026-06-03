import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projectBySlug, projects, type Project } from "@/data/projects";
import { getProjectImages } from "@/data/projectImages";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { Reveal } from "@/components/effects/Reveal";


export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project — Sara Johnson" }] };
    return {
      meta: [
        { title: `${p.title} — ${p.category} · Sara Johnson` },
        { name: "description", content: p.tagline },
        { property: "og:title", content: `${p.title} — Sara Johnson` },
        { property: "og:description", content: p.tagline },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${p.slug}` },
      ],
      links: [{ rel: "canonical", href: `/projects/${p.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: p.title,
            about: p.category,
            author: { "@type": "Person", name: "Sara Johnson" },
            description: p.tagline,
          }),
        },
      ],
    };
  },
  component: CaseStudy,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center px-4 text-center">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Project</p>
        <h1 className="mt-4 font-display text-5xl text-gradient">Not found</h1>
        <Link to="/work" className="mt-6 inline-block text-sm text-muted-foreground hover:text-foreground">← Back to work</Link>
      </div>
    </div>
  ),
});

function CaseStudy() {
  const { project: p } = Route.useLoaderData() as { project: Project };
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="pt-36 sm:pt-44">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Link to="/work" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to all work
        </Link>

        <Reveal>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">{p.category} · {p.year}</p>
              <h1 className="mt-3 font-display text-6xl leading-[0.95] sm:text-7xl">{p.title}</h1>
              <p className="mt-4 max-w-xl text-lg text-muted-foreground">{p.tagline}</p>
            </div>
            <ul className="flex flex-wrap gap-1.5">
              {p.deliverables.map((d) => (
                <li key={d} className="rounded-full border border-[color:var(--border)] px-3 py-1 text-[11px] text-muted-foreground">{d}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10">
            <ProjectCover project={p} className="h-[60vh] min-h-[420px]" />
          </div>
        </Reveal>
      </div>

      {p.hasCaseStudy ? (
        <>
          <Section eyebrow="Overview" title="The brief, in one paragraph.">{p.overview}</Section>
          <Section eyebrow="Challenge" title="What we had to fix.">{p.challenge}</Section>
          <Section eyebrow="Research" title="What we learned first.">{p.research}</Section>

          <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <Reveal>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Process</p>
                <h2 className="mt-4 font-display text-5xl leading-[1] sm:text-6xl">How it came together.</h2>
              </Reveal>
              <ol className="mt-12 grid gap-6 sm:grid-cols-2">
                {p.process.map((step, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <div className="glass h-full rounded-3xl p-6">
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Step 0{i + 1}</p>
                      <p className="mt-4 font-display text-xl leading-snug">{step}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </section>

          {/* UI Showcase / Gallery */}
          <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <Reveal>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">UI Showcase</p>
                <h2 className="mt-4 font-display text-5xl leading-[1] sm:text-6xl">Selected screens.</h2>
              </Reveal>
              <div className="mt-12 grid auto-rows-[260px] gap-5 sm:grid-cols-6">
                {[0, 1, 2, 3, 4].map((i) => {
                  const span = [
                    "sm:col-span-4 sm:row-span-2",
                    "sm:col-span-2",
                    "sm:col-span-2",
                    "sm:col-span-3",
                    "sm:col-span-3",
                  ][i];
                  return (
                    <Reveal key={i} delay={i * 0.05} className={span}>
                      <div
                        className="relative h-full overflow-hidden rounded-3xl"
                        style={{
                          background: `linear-gradient(${135 + i * 25}deg, ${p.cover.from}, ${p.cover.to})`,
                        }}
                      >
                        <div className="grain absolute inset-0" />
                        <div className="absolute inset-x-0 bottom-0 p-5 text-white/90">
                          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/60">Frame 0{i + 1}</p>
                          <p className="mt-1 font-display text-2xl">{p.title}</p>
                        </div>
                        <div className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur">
                          {["Desktop", "Mobile", "System", "Animation", "Brand"][i]}
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Before / After */}
          <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <Reveal>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Before · After</p>
                <h2 className="mt-4 font-display text-5xl leading-[1] sm:text-6xl">The shift.</h2>
              </Reveal>
              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {["Before", "After"].map((label, i) => (
                  <Reveal key={label} delay={i * 0.1}>
                    <div className="glass overflow-hidden rounded-3xl">
                      <div
                        className="aspect-[4/3] w-full"
                        style={
                          i === 0
                            ? { background: "linear-gradient(135deg, oklch(0.28 0.01 280), oklch(0.22 0.01 280))" }
                            : { background: `linear-gradient(135deg, ${p.cover.from}, ${p.cover.to})` }
                        }
                      >
                        <div className="grain absolute inset-0" />
                      </div>
                      <div className="p-5">
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {i === 0
                            ? "Cluttered hierarchy, generic typography, no narrative through-line."
                            : "Clear voice, deliberate motion, every section earns its place."}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <Reveal>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Final results</p>
                <h2 className="mt-4 font-display text-5xl leading-[1] sm:text-6xl">What changed after launch.</h2>
              </Reveal>
              <div className="mt-12 grid gap-px overflow-hidden rounded-3xl glass sm:grid-cols-3">
                {p.results.map((r) => (
                  <div key={r.label} className="p-8 text-center">
                    <p className="font-display text-5xl text-gradient">{r.value}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">{r.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {p.testimonial && (
            <section className="py-24">
              <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
                <Reveal>
                  <p className="font-display text-3xl leading-snug sm:text-4xl">"{p.testimonial.quote}"</p>
                  <p className="mt-6 text-sm text-muted-foreground">
                    — {p.testimonial.author}, {p.testimonial.role}
                  </p>
                </Reveal>
              </div>
            </section>
          )}
        </>
      ) : (
        <Section eyebrow="Overview" title="The brief, in one paragraph.">{p.overview}</Section>
      )}

      {/* Next project */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="group block rounded-3xl glass-strong p-8 transition-colors hover:border-[color:var(--blush)]/40 sm:p-12"
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Next project</p>
            <div className="mt-3 flex items-center justify-between gap-6">
              <h3 className="font-display text-4xl leading-tight sm:text-5xl">{next.title}</h3>
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{next.tagline}</p>
          </Link>
        </div>
      </section>
    </article>
  );
}

function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl leading-[1.05] sm:text-5xl">{title}</h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <p className="font-display text-2xl leading-snug text-foreground/90 sm:text-3xl">{children}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
