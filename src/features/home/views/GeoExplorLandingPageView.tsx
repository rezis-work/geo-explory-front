import { HomeBeyondTheSights } from "@/features/home/components/HomeBeyondTheSights";
import { HomeCommunityTestimonials } from "@/features/home/components/HomeCommunityTestimonials";
import { HomeFeatureCards } from "@/features/home/components/HomeFeatureCards";
import { HomeGuideMatch } from "@/features/home/components/HomeGuideMatch";
import { HomeHero } from "@/features/home/components/HomeHero";
import { HomeHousing } from "@/features/home/components/HomeHousing";
import { HomeJourneyCta } from "@/features/home/components/HomeJourneyCta";
import { HomePopularTours } from "@/features/home/components/HomePopularTours";

export default function GeoExplorLandingPageView() {
  return (
    <>
      <HomeHero />
      <HomeFeatureCards />
      <HomeGuideMatch />
      <HomePopularTours />
      <HomeHousing />
      <HomeCommunityTestimonials />
      <HomeBeyondTheSights />
      <HomeJourneyCta />
    </>
  );
}

