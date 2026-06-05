import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { Counter } from "@/components/ui/Counter";
import heroBg from "@/assets/hero/bg.webp";
import heroBg320 from "@/assets/hero/bg-320.webp";
import heroBg640 from "@/assets/hero/bg-640.webp";
import heroBg1024 from "@/assets/hero/bg-1024.webp";
import heroBg1600 from "@/assets/hero/bg-1600.webp";

const heroSrcSet = [
  `${heroBg320} 320w`,
  `${heroBg640} 640w`,
  `${heroBg1024} 1024w`,
  `${heroBg1600} 1600w`,
  `${heroBg} 1920w`,
].join(", ");
const heroSizes = "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw";

const roles = [
  "Remote Manuscript Writer",
  "Graphic Designer",
  "UI / UX Designer",
  "Web Designer",
  "Video Editor",
];

const chips = [
  { label: "UI / UX Design", x: "-22%", y: "8%", d: 0 },
  { label: "Web Design", x: "82%", y: "12%", d: 0.4 },
  { label: "Graphic Design", x: "-12%", y: "62%", d: 0.8 },
  { label: "Video Editing", x: "88%", y: "58%", d: 1.2 },
  { label: "Content Writing", x: "50%", y: "88%", d: 1.6 },
];

export function Hero() {
  const [idx, setIdx] = useState(0);
  const [animateBg, setAnimateBg] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktop = window.matchMedia("(min-width: 768px)").matches;
    setAnimateBg(!reduced && desktop);
  }, []);

  return (
    <section className="relative pt-36 pb-24 sm:pt-48 sm:pb-32">
      {/* Premium glassmorphism background motif — sits above page aurora, below content */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-[1] overflow-hidden">
        <motion.img
          src={heroBg}
          alt=""
          width={1920}
          height={1280}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.55] mix-blend-screen will-change-transform dark:opacity-40 dark:mix-blend-plus-lighter"
          initial={false}
          animate={animateBg ? { scale: [1.08, 1.14, 1.08], x: [0, 12, 0], y: [0, -8, 0] } : { scale: 1.08 }}
          transition={animateBg ? { duration: 28, repeat: Infinity, ease: "easeInOut" } : { duration: 0 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--background)]/40 via-transparent to-[color:var(--background)]" />
        <div className="grain absolute inset-0 opacity-30" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative">
          {/* Floating chips — hidden on small screens */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {chips.map((c) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4 + c.d * 0.15, ease: [0.22, 1, 0.36, 1] }}
                style={{ left: c.x, top: c.y }}
                className="absolute"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6 + c.d, repeat: Infinity, ease: "easeInOut", delay: c.d }}
                  className="glass rounded-full px-4 py-2 text-xs font-medium tracking-tight shadow-[0_10px_40px_-10px_color-mix(in_oklab,var(--blush)_30%,transparent)]"
                >
                  <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[color:var(--blush)] to-[color:var(--mauve)]" />
                  {c.label}
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground"
            >
              <Sparkles className="h-3.5 w-3.5 text-[color:var(--blush)]" />
              Karachi, Pakistan · Available for projects
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-display text-6xl leading-[0.95] sm:text-7xl md:text-[7.5rem]"
            >
              Sara <span className="text-gradient">Johnson</span>
            </motion.h1>

            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="hidden h-px w-12 bg-[color:var(--border)] sm:block" />
              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Creative Freelancer —</p>
              <div className="relative h-6 min-w-[12rem] overflow-hidden text-left sm:min-w-[14rem]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[idx]}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 text-sm font-medium tracking-tight text-foreground"
                  >
                    {roles[idx]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mx-auto mt-8 max-w-2xl font-display text-2xl leading-snug text-foreground/90 sm:text-3xl"
            >
              Designing creative digital experiences that connect, convert &amp; inspire.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground"
            >
              Helping brands grow through design, storytelling, content, web design, UI/UX, and digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              <Link to="/work">
                <MagneticButton variant="primary">
                  View Portfolio <ArrowRight className="h-4 w-4" />
                </MagneticButton>
              </Link>
              <Link to="/contact">
                <MagneticButton variant="glass">Hire Me</MagneticButton>
              </Link>
              <MagneticButton variant="ghost" asChildHref="/resume.pdf">
                <Download className="h-4 w-4" /> Download Resume
              </MagneticButton>
            </motion.div>
          </div>

          {/* Counters */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="relative z-10 mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-3xl glass sm:grid-cols-4"
          >
            {[
              { v: 20, s: "+", l: "Projects shipped" },
              { v: 10, s: "+", l: "Happy clients" },
              { v: 3, s: "+", l: "Years freelancing" },
              { v: 5, s: "", l: "Creative services" },
            ].map((s) => (
              <div key={s.l} className="bg-[color:var(--background)]/40 p-6 text-center backdrop-blur">
                <p className="font-display text-4xl text-gradient">
                  <Counter to={s.v} suffix={s.s} />
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
