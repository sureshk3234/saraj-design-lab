import { Reveal } from "@/components/effects/Reveal";
import { blogPosts } from "@/data/content";
import { ArrowUpRight } from "lucide-react";
import { HoverFrame } from "@/components/effects/HoverFrame";

export function Blog() {
  return (
    <section id="journal" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">05 — Journal</p>
              <h2 className="mt-4 font-display text-5xl leading-[1] sm:text-6xl">
                Field notes from <span className="text-gradient">a freelance desk.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Short essays on design, writing, and the rituals that make freelance life sustainable.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <article className="group relative h-full overflow-hidden rounded-3xl glass p-1">
                <HoverFrame rounded="rounded-3xl" />
                <div className={`aspect-[16/10] rounded-[20px] bg-gradient-to-br ${p.accent} relative overflow-hidden`}>
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <div className="grain absolute inset-0 opacity-40" />
                  <div className="absolute inset-0 flex items-end p-5">
                    <span className="rounded-full bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/90 backdrop-blur">
                      {p.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl leading-snug">{p.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{p.readTime} read</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
