// Premium hover sheen + gradient border overlay. Drop into any rounded
// container with `relative` and `group` to add a luxury interactive frame.
export function HoverFrame({ rounded = "rounded-[20px]" }: { rounded?: string }) {
  return (
    <>
      {/* Gradient border ring that brightens on hover */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 ${rounded} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        style={{
          padding: "1px",
          background:
            "linear-gradient(135deg, color-mix(in oklab, var(--blush) 80%, transparent), color-mix(in oklab, var(--mauve) 70%, transparent) 50%, color-mix(in oklab, var(--indigo-glow) 70%, transparent))",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      {/* Diagonal sheen sweep */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 overflow-hidden ${rounded}`}
      >
        <div className="absolute -inset-y-10 -left-1/2 h-[200%] w-1/3 translate-x-[-120%] rotate-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-[1200ms] ease-out group-hover:translate-x-[420%] group-hover:opacity-100" />
      </div>
      {/* Inner glow */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 ${rounded} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        style={{
          boxShadow:
            "inset 0 0 60px color-mix(in oklab, var(--blush) 25%, transparent), 0 30px 80px -20px color-mix(in oklab, var(--mauve) 35%, transparent)",
        }}
      />
    </>
  );
}
