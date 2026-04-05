
import { GeoExploreBeyondTheSightsSection } from "@/modules/geoexplore/home/components/GeoExploreBeyondTheSightsSection";
import { GeoExploreCommunityTestimonialsSection } from "@/modules/geoexplore/home/components/GeoExploreCommunityTestimonialsSection";
import { GeoExploreGuideMatchSection } from "@/modules/geoexplore/home/components/GeoExploreGuideMatchSection";
import { GeoExploreHeroSection } from "@/modules/geoexplore/home/components/GeoExploreHeroSection";
import { GeoExploreHousingSection } from "@/modules/geoexplore/home/components/GeoExploreHousingSection";
import { GeoExplorePlatformFeaturesSection } from "@/modules/geoexplore/home/components/GeoExplorePlatformFeaturesSection";
import { GeoExplorePopularToursSection } from "@/modules/geoexplore/home/components/GeoExplorePopularToursSection";
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
