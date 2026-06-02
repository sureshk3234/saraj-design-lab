import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/effects/Reveal";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export function FeaturedProjects() {
  const featured = projects.slice(0, 6);
  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">03 — Selected work</p>
              <h2 className="mt-4 font-display text-5xl leading-[1] sm:text-6xl">
                Recent projects, <span className="text-gradient">end to end.</span>
              </h2>
            </div>
            <Link to="/work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              View all 8 projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-16 grid auto-rows-[minmax(360px,_auto)] gap-6 sm:grid-cols-6">
          {featured.map((p, i) => {
            const span =
              i === 0 ? "sm:col-span-4 sm:row-span-2" :
              i === 1 ? "sm:col-span-2" :
              i === 2 ? "sm:col-span-2" :
              i === 3 ? "sm:col-span-3" :
              i === 4 ? "sm:col-span-3" :
              "sm:col-span-6";
            return (
              <Reveal key={p.slug} delay={i * 0.04} className={span}>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="group block h-full"
                >
                  <ProjectCover project={p} className="h-full min-h-[360px] transition-transform duration-500 group-hover:scale-[1.01]" />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
