import { useRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "ghost" | "glass";
  asChildHref?: string;
};

export function MagneticButton({ children, className, variant = "primary", asChildHref, ...rest }: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
  };
  const reset = () => { x.set(0); y.set(0); };

  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-[color:var(--blush)] to-[color:var(--rose)] text-[color:var(--primary-foreground)] shadow-[0_18px_50px_-15px_color-mix(in_oklab,var(--blush)_60%,transparent)]"
      : variant === "ghost"
        ? "border border-[color:var(--border)] text-foreground hover:bg-[color:var(--accent)]"
        : "glass text-foreground hover:border-[color:var(--blush)]/40";

  const inner = (
    <motion.span style={{ x: sx, y: sy }} className="inline-flex items-center gap-2">
      {children}
    </motion.span>
  );

  if (asChildHref) {
    return (
      <a
        href={asChildHref}
        data-magnetic
        onMouseMove={handleMove as never}
        onMouseLeave={reset}
        className={cn(
          "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-colors",
          styles,
          className,
        )}
      >
        {inner}
      </a>
    );
  }

  return (
    <motion.button
      ref={ref}
      data-magnetic
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-colors",
        styles,
        className,
      )}
      onClick={rest.onClick}
      type={rest.type as "button" | "submit" | "reset" | undefined}
      disabled={rest.disabled}
    >
      {inner}
    </motion.button>
  );
}
