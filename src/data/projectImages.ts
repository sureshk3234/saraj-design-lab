// Centralized project imagery. Each project has a cover and a gallery.
import reverieCover from "@/assets/projects/reverie-ai/cover.jpg";
import reverieBefore from "@/assets/projects/reverie-ai/before.jpg";
import reverie1 from "@/assets/projects/reverie-ai/g1.jpg";
import reverie2 from "@/assets/projects/reverie-ai/g2.jpg";
import reverie3 from "@/assets/projects/reverie-ai/g3.jpg";
import reverie4 from "@/assets/projects/reverie-ai/g4.jpg";
import reverie5 from "@/assets/projects/reverie-ai/g5.jpg";
import reverie6 from "@/assets/projects/reverie-ai/g6.jpg";

import novaCover from "@/assets/projects/nova-agency/cover.jpg";
import novaBefore from "@/assets/projects/nova-agency/before.jpg";
import nova1 from "@/assets/projects/nova-agency/g1.jpg";
import nova2 from "@/assets/projects/nova-agency/g2.jpg";
import nova3 from "@/assets/projects/nova-agency/g3.jpg";
import nova4 from "@/assets/projects/nova-agency/g4.jpg";
import nova5 from "@/assets/projects/nova-agency/g5.jpg";
import nova6 from "@/assets/projects/nova-agency/g6.jpg";

import luxeCover from "@/assets/projects/luxe-beauty/cover.jpg";
import luxeBefore from "@/assets/projects/luxe-beauty/before.jpg";
import luxe1 from "@/assets/projects/luxe-beauty/g1.jpg";
import luxe2 from "@/assets/projects/luxe-beauty/g2.jpg";
import luxe3 from "@/assets/projects/luxe-beauty/g3.jpg";
import luxe4 from "@/assets/projects/luxe-beauty/g4.jpg";
import luxe5 from "@/assets/projects/luxe-beauty/g5.jpg";
import luxe6 from "@/assets/projects/luxe-beauty/g6.jpg";

import fitCover from "@/assets/projects/fitzone/cover.jpg";
import fitBefore from "@/assets/projects/fitzone/before.jpg";
import fit1 from "@/assets/projects/fitzone/g1.jpg";
import fit2 from "@/assets/projects/fitzone/g2.jpg";
import fit3 from "@/assets/projects/fitzone/g3.jpg";
import fit4 from "@/assets/projects/fitzone/g4.jpg";
import fit5 from "@/assets/projects/fitzone/g5.jpg";
import fit6 from "@/assets/projects/fitzone/g6.jpg";

import bloomCover from "@/assets/projects/bloom-cafe/cover.jpg";
import bloomBefore from "@/assets/projects/bloom-cafe/before.jpg";
import bloom1 from "@/assets/projects/bloom-cafe/g1.jpg";
import bloom2 from "@/assets/projects/bloom-cafe/g2.jpg";
import bloom3 from "@/assets/projects/bloom-cafe/g3.jpg";
import bloom4 from "@/assets/projects/bloom-cafe/g4.jpg";
import bloom5 from "@/assets/projects/bloom-cafe/g5.jpg";
import bloom6 from "@/assets/projects/bloom-cafe/g6.jpg";

import skyCover from "@/assets/projects/skytravel/cover.jpg";
import skyBefore from "@/assets/projects/skytravel/before.jpg";
import sky1 from "@/assets/projects/skytravel/g1.jpg";
import sky2 from "@/assets/projects/skytravel/g2.jpg";
import sky3 from "@/assets/projects/skytravel/g3.jpg";
import sky4 from "@/assets/projects/skytravel/g4.jpg";
import sky5 from "@/assets/projects/skytravel/g5.jpg";
import sky6 from "@/assets/projects/skytravel/g6.jpg";

import amzCover from "@/assets/projects/amazon-listing-design/cover.jpg";
import amz1 from "@/assets/projects/amazon-listing-design/g1.jpg";
import amz2 from "@/assets/projects/amazon-listing-design/g2.jpg";
import amz3 from "@/assets/projects/amazon-listing-design/g3.jpg";
import amz4 from "@/assets/projects/amazon-listing-design/g4.jpg";
import amz5 from "@/assets/projects/amazon-listing-design/g5.jpg";
import amz6 from "@/assets/projects/amazon-listing-design/g6.jpg";

import ytCover from "@/assets/projects/youtube-growth-package/cover.jpg";
import yt1 from "@/assets/projects/youtube-growth-package/g1.jpg";
import yt2 from "@/assets/projects/youtube-growth-package/g2.jpg";
import yt3 from "@/assets/projects/youtube-growth-package/g3.jpg";
import yt4 from "@/assets/projects/youtube-growth-package/g4.jpg";
import yt5 from "@/assets/projects/youtube-growth-package/g5.jpg";
import yt6 from "@/assets/projects/youtube-growth-package/g6.jpg";

export type ProjectImage = { src: string; alt: string; label: string };
export type ProjectImagery = {
  cover: ProjectImage;
  gallery: ProjectImage[];
  beforeAfter?: { before: ProjectImage; after: ProjectImage };
};

export const projectImages: Record<string, ProjectImagery> = {
  "reverie-ai": {
    cover: { src: reverieCover, alt: "Reverie AI landing page hero design", label: "Website" },
    gallery: [
      { src: reverie1, alt: "Reverie AI manuscript editor dashboard", label: "Dashboard" },
      { src: reverie2, alt: "Reverie AI mobile writing app", label: "Mobile" },
      { src: reverie3, alt: "Reverie AI brand identity flatlay", label: "Branding" },
      { src: reverie4, alt: "Reverie AI design system swatches", label: "System" },
      { src: reverie5, alt: "Reverie AI social media post", label: "Social" },
      { src: reverie6, alt: "Reverie AI pricing page", label: "Pricing" },
    ],
    beforeAfter: {
      before: { src: reverieBefore, alt: "Reverie AI homepage before redesign — cluttered 2014-era layout", label: "Before" },
      after: { src: reverieCover, alt: "Reverie AI homepage after redesign — modern editorial hero", label: "After" },
    },
  },
  "nova-agency": {
    cover: { src: novaCover, alt: "Nova Agency hero with oversized type", label: "Website" },
    gallery: [
      { src: nova1, alt: "Nova case study grid page", label: "Case Study" },
      { src: nova2, alt: "Nova mobile navigation menu", label: "Mobile" },
      { src: nova3, alt: "Nova brand identity stationery", label: "Branding" },
      { src: nova4, alt: "Nova typography specimen poster", label: "Typography" },
      { src: nova5, alt: "Nova Instagram grid", label: "Social" },
      { src: nova6, alt: "Nova editorial poster", label: "Print" },
    ],
    beforeAfter: {
      before: { src: novaBefore, alt: "Nova Agency homepage before — dated corporate 2012 layout", label: "Before" },
      after: { src: novaCover, alt: "Nova Agency homepage after — confident editorial system", label: "After" },
    },
  },
  "luxe-beauty": {
    cover: { src: luxeCover, alt: "Luxe Beauty boutique e-commerce hero", label: "Website" },
    gallery: [
      { src: luxe1, alt: "Luxe Beauty product detail page", label: "PDP" },
      { src: luxe2, alt: "Luxe Beauty mobile checkout", label: "Mobile" },
      { src: luxe3, alt: "Luxe Beauty packaging flatlay", label: "Branding" },
      { src: luxe4, alt: "Luxe Beauty serum bottle render", label: "Product" },
      { src: luxe5, alt: "Luxe Beauty Instagram ad", label: "Ad" },
      { src: luxe6, alt: "Luxe Beauty color swatches", label: "System" },
    ],
    beforeAfter: {
      before: { src: luxeBefore, alt: "Luxe Beauty storefront before — busy discount-driven 2013 layout", label: "Before" },
      after: { src: luxeCover, alt: "Luxe Beauty storefront after — elevated boutique experience", label: "After" },
    },
  },
  fitzone: {
    cover: { src: fitCover, alt: "FitZone coaching dashboard", label: "Dashboard" },
    gallery: [
      { src: fit1, alt: "FitZone analytics view", label: "Analytics" },
      { src: fit2, alt: "FitZone mobile workout screen", label: "Mobile" },
      { src: fit3, alt: "FitZone brand mockup", label: "Branding" },
      { src: fit4, alt: "FitZone component library", label: "System" },
      { src: fit5, alt: "FitZone ad creative", label: "Ad" },
      { src: fit6, alt: "FitZone marketing site", label: "Marketing" },
    ],
    beforeAfter: {
      before: { src: fitBefore, alt: "FitZone dashboard before — cramped skeuomorphic interface", label: "Before" },
      after: { src: fitCover, alt: "FitZone dashboard after — calm coaching cockpit", label: "After" },
    },
  },
  "bloom-cafe": {
    cover: { src: bloomCover, alt: "Bloom Café website hero", label: "Website" },
    gallery: [
      { src: bloom1, alt: "Bloom menu page editorial cards", label: "Menu" },
      { src: bloom2, alt: "Bloom mobile site", label: "Mobile" },
      { src: bloom3, alt: "Bloom branding flatlay", label: "Branding" },
      { src: bloom4, alt: "Bloom café exterior signage", label: "Signage" },
      { src: bloom5, alt: "Bloom Instagram post", label: "Social" },
      { src: bloom6, alt: "Bloom packaging design", label: "Packaging" },
    ],
    beforeAfter: {
      before: { src: bloomBefore, alt: "Bloom Café site before — homemade textured 2011 layout", label: "Before" },
      after: { src: bloomCover, alt: "Bloom Café site after — warm modern editorial", label: "After" },
    },
  },
  skytravel: {
    cover: { src: skyCover, alt: "SkyTravel booking landing page", label: "Website" },
    gallery: [
      { src: sky1, alt: "SkyTravel flexible date picker", label: "Booking" },
      { src: sky2, alt: "SkyTravel mobile seat selection", label: "Mobile" },
      { src: sky3, alt: "SkyTravel boarding pass branding", label: "Branding" },
      { src: sky4, alt: "SkyTravel itinerary map", label: "Itinerary" },
      { src: sky5, alt: "SkyTravel destination ad", label: "Ad" },
      { src: sky6, alt: "SkyTravel UI components", label: "System" },
    ],
    beforeAfter: {
      before: { src: skyBefore, alt: "SkyTravel booking site before — cluttered 2010 search interface", label: "Before" },
      after: { src: skyCover, alt: "SkyTravel booking site after — focused, calm booking flow", label: "After" },
    },
  },
  "amazon-listing-design": {
    cover: { src: amzCover, alt: "Amazon A+ product listing hero", label: "A+" },
    gallery: [
      { src: amz1, alt: "Amazon main product image", label: "Hero" },
      { src: amz2, alt: "Amazon A+ comparison module", label: "Compare" },
      { src: amz3, alt: "Amazon lifestyle module", label: "Lifestyle" },
      { src: amz4, alt: "Amazon product feature infographic", label: "Infographic" },
      { src: amz5, alt: "Amazon brand story banner", label: "Story" },
      { src: amz6, alt: "Amazon six-image hero template", label: "Template" },
    ],
  },
  "youtube-growth-package": {
    cover: { src: ytCover, alt: "YouTube thumbnail design hero", label: "Thumbnail" },
    gallery: [
      { src: yt1, alt: "YouTube channel banner art", label: "Banner" },
      { src: yt2, alt: "Three thumbnail variations", label: "Templates" },
      { src: yt3, alt: "Premiere Pro timeline preset", label: "Editing" },
      { src: yt4, alt: "Creator monogram logo", label: "Logo" },
      { src: yt5, alt: "Reels cover designs", label: "Reels" },
      { src: yt6, alt: "Channel analytics dashboard", label: "Analytics" },
    ],
  },
};

export const getProjectImages = (slug: string): ProjectImagery | undefined => projectImages[slug];
