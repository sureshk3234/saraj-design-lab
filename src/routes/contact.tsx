import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sara Johnson" },
      { name: "description", content: "Start a project with Sara Johnson. Reach out for web design, UI/UX, branding, video, or manuscript writing." },
      { property: "og:title", content: "Contact — Sara Johnson" },
      { property: "og:description", content: "Start a project — design, writing, brand, or video." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
}
