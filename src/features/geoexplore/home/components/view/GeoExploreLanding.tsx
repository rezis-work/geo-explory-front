
import { GeoExploreBeyondTheSightsSection } from "@/features/geoexplore/home/components/GeoExploreBeyondTheSightsSection";
import { GeoExploreCommunityTestimonialsSection } from "@/features/geoexplore/home/components/GeoExploreCommunityTestimonialsSection";
import { GeoExploreGuideMatchSection } from "@/features/geoexplore/home/components/GeoExploreGuideMatchSection";
import { GeoExploreHeroSection } from "@/features/geoexplore/home/components/GeoExploreHeroSection";
import { GeoExploreHousingSection } from "@/features/geoexplore/home/components/GeoExploreHousingSection";
import { GeoExplorePlatformFeaturesSection } from "@/features/geoexplore/home/components/GeoExplorePlatformFeaturesSection";
import { GeoExplorePopularToursSection } from "@/features/geoexplore/home/components/GeoExplorePopularToursSection";
import GeoExploreJourneyCta from "@/components/shared/ui/GeoExploreJourneyCta";



export default function GeoExploreLanding() {
  return (
    <>
      <GeoExploreHeroSection />
      <GeoExplorePlatformFeaturesSection />
      <GeoExploreGuideMatchSection />
      <GeoExplorePopularToursSection />
      <GeoExploreHousingSection />
      <GeoExploreCommunityTestimonialsSection />
      <GeoExploreBeyondTheSightsSection />
      <GeoExploreJourneyCta />
    </>
  );
}
