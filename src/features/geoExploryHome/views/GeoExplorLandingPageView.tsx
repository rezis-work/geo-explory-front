import { HomeBeyondTheSights } from "@/features/geoExploryHome/components/HomeBeyondTheSights";
import { HomeCommunityTestimonials } from "@/features/geoExploryHome/components/HomeCommunityTestimonials";
import { HomeFeatureCards } from "@/features/geoExploryHome/components/HomeFeatureCards";
import { HomeGuideMatch } from "@/features/geoExploryHome/components/HomeGuideMatch";
import { HomeHero } from "@/features/geoExploryHome/components/HomeHero";
import { HomeHousing } from "@/features/geoExploryHome/components/HomeHousing";
import { HomeJourneyCta } from "@/features/geoExploryHome/components/HomeJourneyCta";
import { HomePopularTours } from "@/features/geoExploryHome/components/HomePopularTours";

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

