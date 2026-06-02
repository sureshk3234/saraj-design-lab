import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed left-0 right-0 top-0 z-[90] h-[2px] bg-gradient-to-r from-[color:var(--blush)] via-[color:var(--mauve)] to-[color:var(--indigo-glow)]"
    />
  );
}
