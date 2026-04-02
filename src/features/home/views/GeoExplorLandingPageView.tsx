import { HomeFeatureCards } from "@/features/home/components/HomeFeatureCards";
import { HomeGuideMatch } from "@/features/home/components/HomeGuideMatch";
import { HomeHero } from "@/features/home/components/HomeHero";
import { HomeHousing } from "@/features/home/components/HomeHousing";
import { HomePopularTours } from "@/features/home/components/HomePopularTours";

export default function GeoExplorLandingPageView() {
    return (
<>     
      <HomeHero />
      <HomeFeatureCards />
      <HomeGuideMatch />
      <HomePopularTours />
      <HomeHousing />
    </>)
}

