import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useTheme } from "@/lib/theme";
import { Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "pt-3" : "pt-6",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <div
          className={cn(
            "flex w-full items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500",
            scrolled ? "glass-strong" : "glass",
          )}
        >
          <Link to="/" className="group flex items-center gap-2 pl-2">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-[color:var(--blush)] to-[color:var(--mauve)] text-[10px] font-semibold text-[color:var(--primary-foreground)]">
              SJ
            </span>
            <span className="font-display text-lg leading-none">Sara Johnson</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-foreground" }}
                inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
                className="rounded-full px-3.5 py-1.5 text-sm transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-[color:var(--accent)] hover:text-foreground"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Link
              to="/contact"
              className="ml-1 hidden rounded-full bg-gradient-to-r from-[color:var(--blush)] to-[color:var(--rose)] px-4 py-1.5 text-sm font-medium text-[color:var(--primary-foreground)] sm:inline-block"
            >
              Hire Me
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="grid h-9 w-9 place-items-center rounded-full md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="mx-4 mt-2 flex flex-col gap-1 rounded-2xl glass-strong p-3 sm:mx-6">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-[color:var(--accent)] hover:text-foreground"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
