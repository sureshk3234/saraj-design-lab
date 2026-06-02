import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

export function ProjectCover({ project, className = "" }: { project: Project; className?: string }) {
  const { from, to, accent } = project.cover;
  return (
    <div
      className={`relative overflow-hidden rounded-3xl ${className}`}
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      {/* layered glass mockup */}
      <div className="absolute inset-0 grain" />
      <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />

      <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-white/70">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
            {accent}
          </div>
          <h3 className="mt-3 font-display text-3xl text-white sm:text-4xl">{project.title}</h3>
          <p className="mt-1 max-w-md text-sm text-white/80">{project.tagline}</p>
        </motion.div>

        {/* faux device mockup */}
        <div className="mt-8 hidden sm:block">
          <div className="relative h-32 rounded-t-2xl bg-white/10 p-3 backdrop-blur">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-white/40" />
              <span className="h-2 w-2 rounded-full bg-white/40" />
              <span className="h-2 w-2 rounded-full bg-white/40" />
            </div>
            <div className="mt-3 grid grid-cols-5 gap-2">
              <div className="col-span-2 h-16 rounded-lg bg-white/20" />
              <div className="col-span-3 space-y-2">
                <div className="h-3 w-3/4 rounded bg-white/30" />
                <div className="h-3 w-1/2 rounded bg-white/20" />
                <div className="h-8 w-full rounded bg-white/15" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
