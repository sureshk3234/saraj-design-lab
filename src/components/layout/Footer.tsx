import { Link } from "@tanstack/react-router";

const links = [
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Journal", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "Behance", href: "https://www.behance.net" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-[color:var(--border)] pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 pb-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Studio of one</p>
            <h3 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              Let's design something <span className="text-gradient">worth keeping.</span>
            </h3>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Currently taking on a small number of design, writing, and motion projects each month from Karachi, Pakistan.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--blush)] to-[color:var(--rose)] px-5 py-2.5 text-sm font-medium text-[color:var(--primary-foreground)]"
            >
              Start a project →
            </Link>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Sitemap</p>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Elsewhere</p>
            <ul className="mt-4 space-y-2 text-sm">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Karachi, PK</li>
              <li><a href="mailto:saraahjohnson0345@gmail.com" className="hover:text-foreground">saraahjohnson0345@gmail.com</a></li>
              <li><a href="tel:+923188272667" className="hover:text-foreground">+92 318 8272667</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-[color:var(--border)] py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© 2026 Sara Johnson. Designed and written in Karachi.</p>
          <p className="font-mono uppercase tracking-[0.2em]">Available — Q1 2026</p>
        </div>
      </div>
    </footer>
  );
}
