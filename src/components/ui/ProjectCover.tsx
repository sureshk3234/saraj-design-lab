import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { getProjectImages } from "@/data/projectImages";
import { HoverFrame } from "@/components/effects/HoverFrame";

export function ProjectCover({
  project,
  className = "",
  priority = false,
}: {
  project: Project;
  className?: string;
  priority?: boolean;
}) {
  const images = getProjectImages(project.slug);
  const cover = images?.cover;
  const { from, to, accent } = project.cover;

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl ${className}`}
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      {cover && (
        <img
          src={cover.src}
          alt={cover.alt}
          loading={priority ? "eager" : "lazy"}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
      <div className="absolute inset-0 grain opacity-50" />
      <HoverFrame rounded="rounded-3xl" />

      <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-white/80">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            {accent}
          </div>
          <h3 className="mt-3 font-display text-3xl text-white drop-shadow-lg sm:text-4xl">{project.title}</h3>
          <p className="mt-1 max-w-md text-sm text-white/85">{project.tagline}</p>
        </motion.div>
      </div>
    </div>
  );
}
