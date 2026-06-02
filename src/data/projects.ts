export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  tagline: string;
  cover: { from: string; to: string; accent: string };
  deliverables: string[];
  overview: string;
  challenge: string;
  research: string;
  process: string[];
  results: { label: string; value: string }[];
  testimonial?: { quote: string; author: string; role: string };
  hasCaseStudy: boolean;
};

export const projects: Project[] = [
  {
    slug: "reverie-ai",
    title: "Reverie AI",
    category: "SaaS Landing Page",
    year: "2025",
    tagline: "Repositioning an AI writing assistant for creators.",
    cover: { from: "oklch(0.35 0.18 290)", to: "oklch(0.55 0.16 340)", accent: "Reverie" },
    deliverables: ["Website Design", "UI/UX", "Responsive Layout"],
    overview:
      "Reverie AI is a writing assistant for novelists and screenwriters. The launch page needed to translate a complex product into a single scrollable story that felt as cinematic as the work it helps create.",
    challenge:
      "The previous site read like a feature list. Bounce rates were high, and trial signups stalled in the first 8 seconds. We needed a hero that promised craft, not chatbots.",
    research:
      "Interviewed 9 fiction writers across genres, audited 14 competitor landings, and built a content map around three intents: explore, evaluate, commit.",
    process: [
      "Brand voice workshop — defined the dialect of a 'patient editor'.",
      "Wireframes across 6 layout systems; chose a scroll-cinema structure.",
      "Design system in Figma with a serif/sans pair and a single blush accent.",
      "Motion prototype validated with 5-second tests before development.",
    ],
    results: [
      { label: "Trial signups", value: "+218%" },
      { label: "Bounce rate", value: "−47%" },
      { label: "Avg. session", value: "3m 42s" },
    ],
    testimonial: {
      quote:
        "Sara translated a foggy product idea into a page that finally sounds like us. Conversions tripled the week we shipped.",
      author: "Maya Okafor",
      role: "Head of Growth, Reverie AI",
    },
    hasCaseStudy: true,
  },
  {
    slug: "nova-agency",
    title: "Nova Agency",
    category: "Creative Agency Website",
    year: "2024",
    tagline: "A studio rebrand built for an audience of art directors.",
    cover: { from: "oklch(0.3 0.05 20)", to: "oklch(0.55 0.16 30)", accent: "Nova" },
    deliverables: ["Branding", "Website Design", "Landing Page"],
    overview:
      "Nova is a boutique agency in Lahore that needed a portfolio site sharp enough to win pitches against London studios.",
    challenge:
      "Their old site felt like a Behance dump. The new one had to behave like a curated exhibition — confident, slow, intentional.",
    research:
      "Studied 30+ award-winning studio sites and distilled three structural truths: oversized type, generous whitespace, restrained color.",
    process: [
      "Logo refresh and a custom letter 'N' that doubles as the favicon.",
      "Editorial type system pairing a display serif with industrial mono.",
      "Case study template designed to be filled by non-designers.",
      "Micro-interactions limited to one moment per section.",
    ],
    results: [
      { label: "Inbound leads", value: "+412%" },
      { label: "Avg. project size", value: "+3.1×" },
      { label: "Pitch win rate", value: "62%" },
    ],
    testimonial: {
      quote: "We stopped competing on price. The site does the qualifying for us.",
      author: "Hassan Raza",
      role: "Founder, Nova Agency",
    },
    hasCaseStudy: true,
  },
  {
    slug: "luxe-beauty",
    title: "Luxe Beauty",
    category: "E-Commerce Website",
    year: "2025",
    tagline: "A skincare line that wanted to feel like a boutique, not a marketplace.",
    cover: { from: "oklch(0.5 0.08 20)", to: "oklch(0.78 0.1 12)", accent: "Luxe" },
    deliverables: ["Product Pages", "Mobile Experience", "UI Design"],
    overview:
      "Luxe Beauty's catalog was beautiful, but the storefront flattened every product into a tile. The redesign treats each SKU like an editorial.",
    challenge:
      "Mobile add-to-cart conversion was 1.3%. Customers said the site 'felt cheap' versus the packaging.",
    research:
      "Heatmap audits across 4 weeks, 12 customer interviews, and a teardown of luxury fragrance e-commerce flows.",
    process: [
      "Re-architected PDP with a tactile vertical scroll — texture, ritual, ingredients, reviews.",
      "Designed a compact mobile sticky bar that never blocks product imagery.",
      "Custom icon set for ingredient stories — illustrated, not stocked.",
      "Color tokens tuned for cream-on-cream contrast without losing AA.",
    ],
    results: [
      { label: "Mobile CVR", value: "1.3% → 4.6%" },
      { label: "AOV", value: "+38%" },
      { label: "Return rate", value: "−21%" },
    ],
    testimonial: {
      quote: "Customers email us about the unboxing of the website. That sentence shouldn't make sense, but it does.",
      author: "Imaan Siddiqui",
      role: "Brand Lead, Luxe Beauty",
    },
    hasCaseStudy: true,
  },
  {
    slug: "fitzone",
    title: "FitZone",
    category: "Fitness Coaching Platform",
    year: "2024",
    tagline: "Coaching dashboard for online trainers and their clients.",
    cover: { from: "oklch(0.32 0.1 200)", to: "oklch(0.6 0.15 250)", accent: "FitZone" },
    deliverables: ["Dashboard Design", "Responsive Website", "UX Flow"],
    overview:
      "Two interfaces in one product: a calm dashboard for coaches juggling 40+ clients, and a motivating app surface for the people they train.",
    challenge:
      "Coaches were context-switching across spreadsheets, WhatsApp, and YouTube. We needed one place that didn't feel like another tool to manage.",
    research:
      "Shadowed 4 coaches for a week, mapped 36 daily tasks, and prioritized the 7 that consumed 80% of their day.",
    process: [
      "Information architecture rebuilt around a single 'today' surface.",
      "Composable program builder using drag-and-drop blocks.",
      "Client mobile view designed for one-thumb logging during sets.",
      "Quiet motion — celebrations reserved for streaks, never for taps.",
    ],
    results: [
      { label: "Coach retention (90d)", value: "+54%" },
      { label: "Client check-in rate", value: "+71%" },
      { label: "Support tickets", value: "−43%" },
    ],
    testimonial: {
      quote: "I got two hours of my evening back. That's the only KPI I care about.",
      author: "Daniyal Khan",
      role: "Lead Coach, FitZone",
    },
    hasCaseStudy: true,
  },
  {
    slug: "bloom-cafe",
    title: "Bloom Café",
    category: "Restaurant Website",
    year: "2024",
    tagline: "An identity and site for a neighborhood café that felt like its room.",
    cover: { from: "oklch(0.45 0.08 60)", to: "oklch(0.7 0.12 40)", accent: "Bloom" },
    deliverables: ["Brand Identity", "Menu Design", "Website"],
    overview:
      "Bloom is a slow-coffee bar in Karachi. The brief was honest: 'make a website that smells like our shop'.",
    challenge:
      "Most café sites bury the menu under sliders. Bloom's regulars wanted hours, today's bake, and directions in two taps.",
    research:
      "Observed 3 service shifts, interviewed 18 regulars, and noted which questions baristas answered most at the bar.",
    process: [
      "Hand-drawn wordmark inspired by the café's chalkboard.",
      "Single-page site with a sticky 'today' card pinned through scroll.",
      "Menu rendered as editorial cards with rotating bakes.",
      "Photography direction — natural light, no top-down flatlays.",
    ],
    results: [
      { label: "Weekend foot traffic", value: "+34%" },
      { label: "Catering inquiries", value: "+5×" },
      { label: "Avg. mobile load", value: "1.1s" },
    ],
    testimonial: {
      quote: "Three customers in one week said they came in because the site felt warm. I'm still thinking about that.",
      author: "Areeba Tanveer",
      role: "Owner, Bloom Café",
    },
    hasCaseStudy: true,
  },
  {
    slug: "skytravel",
    title: "SkyTravel",
    category: "Travel Booking Platform",
    year: "2025",
    tagline: "A booking flow that respects how people actually plan trips.",
    cover: { from: "oklch(0.3 0.12 240)", to: "oklch(0.65 0.14 220)", accent: "SkyTravel" },
    deliverables: ["Landing Page", "Mobile UI", "Booking Experience"],
    overview:
      "SkyTravel's funnel asked travelers to commit before they were ready. We redesigned around 'inspire, then book'.",
    challenge:
      "Drop-off at the date picker was 61%. Users wanted to dream first and price-check second.",
    research:
      "Surveyed 240 travelers, mapped the journey across 11 emotional states, and built around the two that mattered: anticipation and trust.",
    process: [
      "Hero rebuilt as a moodboard, not a search bar.",
      "Flexible date grid that surfaces price gradients across a month.",
      "Trust details — change fees, refund windows — surfaced inline, not on a separate page.",
      "Confirmation page designed as the first 'souvenir' of the trip.",
    ],
    results: [
      { label: "Date-picker drop-off", value: "61% → 22%" },
      { label: "Bookings / session", value: "+89%" },
      { label: "App store rating", value: "4.8 ★" },
    ],
    testimonial: {
      quote: "Sara redesigned the moment we always lost people. Now it's the moment they fall in love with the trip.",
      author: "Zara Mahmood",
      role: "Product Director, SkyTravel",
    },
    hasCaseStudy: true,
  },
  {
    slug: "amazon-listing-design",
    title: "Amazon Product Listing Design",
    category: "Conversion Design",
    year: "2025",
    tagline: "A+ content and product graphics designed to convert at scan-speed.",
    cover: { from: "oklch(0.5 0.16 60)", to: "oklch(0.7 0.16 40)", accent: "A+" },
    deliverables: ["A+ Content", "Product Graphics", "Conversion Optimization"],
    overview:
      "Amazon shoppers decide in seconds. This system gave a home goods brand a consistent visual grammar across 24 SKUs.",
    challenge: "Listings looked DIY next to category leaders. CTR was healthy, conversion was not.",
    research:
      "Studied top 50 listings in the category, mapped which visual blocks repeated, and identified two missing trust signals.",
    process: [
      "Designed a 6-image hero sequence template.",
      "Built A+ comparison modules around scannable hierarchies.",
      "Specified photography that the brand could reshoot in-house.",
    ],
    results: [
      { label: "Listing CVR", value: "+57%" },
      { label: "Return rate", value: "−18%" },
      { label: "SKUs shipped", value: "24" },
    ],
    hasCaseStudy: false,
  },
  {
    slug: "youtube-growth-package",
    title: "YouTube Growth Package",
    category: "Channel Branding",
    year: "2025",
    tagline: "Thumbnails, channel art, and an editing system for a 6-figure creator.",
    cover: { from: "oklch(0.35 0.18 350)", to: "oklch(0.55 0.16 20)", accent: "YT" },
    deliverables: ["Thumbnail Design", "Channel Branding", "Video Editing"],
    overview:
      "A creator wanted a thumbnail system their editor could ship weekly without losing the brand.",
    challenge:
      "Past thumbnails were inconsistent. CTR plateaued at 4%. They needed a kit, not a one-off.",
    research:
      "Reviewed 12 months of analytics, A/B tested 6 thumbnail formulas, and shipped the two that won.",
    process: [
      "Designed three thumbnail templates with locked typography.",
      "Built a Premiere preset library for intros, lower-thirds, and outros.",
      "Wrote a 1-page playbook the editor follows weekly.",
    ],
    results: [
      { label: "Thumbnail CTR", value: "4.1% → 9.4%" },
      { label: "Avg. view duration", value: "+38%" },
      { label: "Subscribers (90d)", value: "+22k" },
    ],
    hasCaseStudy: false,
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
