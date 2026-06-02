import { motion } from "framer-motion";

export function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 aurora-bg opacity-90" />
      <motion.div
        className="absolute -top-40 -left-32 h-[42rem] w-[42rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--blush) 60%, transparent), transparent 65%)" }}
        animate={{ x: [0, 60, -20, 0], y: [0, 40, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--mauve) 60%, transparent), transparent 65%)" }}
        animate={{ x: [0, -50, 30, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-12rem] left-1/4 h-[34rem] w-[34rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--indigo-glow) 55%, transparent), transparent 65%)" }}
        animate={{ x: [0, 40, -40, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(transparent_1px,var(--background)_1px)] [background-size:3px_3px] opacity-[0.35]" />
    </div>
  );
}
