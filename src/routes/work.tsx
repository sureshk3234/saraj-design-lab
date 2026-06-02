import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/effects/Reveal";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Sara Johnson" },
      { name: "description", content: "Selected projects across web design, UI/UX, branding, video and Amazon listings by Sara Johnson." },
      { property: "og:title", content: "Work — Sara Johnson" },
      { property: "og:description", content: "Selected projects across web, UI/UX, brand, video and content." },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map((p) => p.category)))], []);
  const [active, setActive] = useState("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="pt-36 pb-24 sm:pt-44">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Portfolio</p>
          <h1 className="mt-4 font-display text-6xl leading-[0.95] sm:text-7xl">
            Eight projects, <span className="text-gradient">one studio.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
            A look at recent client work — landing pages, brand systems, dashboards, e-commerce surfaces, and content campaigns.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="no-scrollbar mt-10 flex gap-2 overflow-x-auto">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em] transition-colors ${
                  active === c
                    ? "bg-gradient-to-r from-[color:var(--blush)] to-[color:var(--rose)] text-[color:var(--primary-foreground)]"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {visible.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.04}>
              <Link to="/projects/$slug" params={{ slug: p.slug }} className="group block">
                <ProjectCover project={p} className="h-[420px] transition-transform duration-500 group-hover:scale-[1.01]" />
                <div className="mt-4 flex items-baseline justify-between">
                  <div>
                    <h3 className="font-display text-2xl">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.category}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{p.year}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
