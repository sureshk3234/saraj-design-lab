import { createFileRoute } from "@tanstack/react-router";
import { Blog } from "@/components/sections/Blog";
import { Reveal } from "@/components/effects/Reveal";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Sara Johnson" },
      { name: "description", content: "Short essays on design, writing, and the rituals that make freelance life sustainable, by Sara Johnson." },
      { property: "og:title", content: "Journal — Sara Johnson" },
      { property: "og:description", content: "Field notes on design, writing, and freelance life." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <div className="pt-36 sm:pt-44">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Journal</p>
            <h1 className="mt-4 font-display text-6xl leading-[0.95] sm:text-7xl">
              Notes from <span className="text-gradient">the studio.</span>
            </h1>
          </Reveal>
        </div>
      </div>
      <Blog />
    </>
  );
}
