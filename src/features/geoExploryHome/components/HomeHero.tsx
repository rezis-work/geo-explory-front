import { LandingHero } from "@/components/landing/LandingHero";

const HERO_IMAGE = "/images/placeholder-hero.svg";

export function HomeHero() {
  return (
    <LandingHero
      variant="split"
      title={
        <>
          Explore and live in <span className="text-red-600">Georgia</span> like a local
        </>
      }
      description="Local guides, book tours, meet people, and discover your new home in Georgia. The bridge between foreign explorers and local heart."
      mobileExtraLine="Experience authentic Caucasian hospitality beyond the tourist trails."
      primaryAction={{ label: "Start Exploring", href: "/explore" }}
      secondaryAction={{ label: "Find a Local Guide", href: "/guides" }}
      image={{ src: HERO_IMAGE, alt: "Historic Georgia city view" }}
      floatingCard={{
        title: "Verified Guides",
        description: "Over 500+ local experts ready to show you the hidden Georgia.",
      }}
    />
  );
}
