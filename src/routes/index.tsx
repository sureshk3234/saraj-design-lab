import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Testimonials } from "@/components/sections/Testimonials";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sara Johnson — Creative Freelancer & Designer" },
      { name: "description", content: "Portfolio of Sara Johnson, a creative freelancer in Karachi designing web, UI/UX, brand, and video for ambitious teams." },
      { property: "og:title", content: "Sara Johnson — Creative Freelancer" },
      { property: "og:description", content: "Designing creative digital experiences that connect, convert & inspire." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FeaturedProjects />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
