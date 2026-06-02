import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/sections/Services";
import { Reveal } from "@/components/effects/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Sara Johnson" },
      { name: "description", content: "Web design, UI/UX, branding, video editing, manuscript writing and Amazon listing design — six ways to work with Sara Johnson." },
      { property: "og:title", content: "Services — Sara Johnson" },
      { property: "og:description", content: "Six ways to work together — design, writing, brand, video." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <div className="pt-36 sm:pt-44">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Services</p>
            <h1 className="mt-4 font-display text-6xl leading-[0.95] sm:text-7xl">
              Six ways to work, <span className="text-gradient">one standard.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
              Pick the engagement that fits, or write in for a custom scope. Every project starts with a written brief and ends with assets you actually own.
            </p>
          </Reveal>
        </div>
      </div>
      <Services />
    </>
  );
}
