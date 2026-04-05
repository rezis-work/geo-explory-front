import GeoExploreJourneyCta from "@/components/shared/ui/GeoExploreJourneyCta";
import { ToursHero } from "@/modules/tours/home/components/ToursHero";
import { ToursPopularGrid } from "@/modules/tours/home/components/ToursPopularGrid";
import { ToursWanderersSaySection } from "@/modules/tours/home/components/ToursWanderersSaySection";
import { ToursWhyChooseSection } from "@/modules/tours/home/components/ToursWhyChooseSection";

export default function ToursPageView() {
  return (
    <>
      <ToursHero />
      <ToursWhyChooseSection />
      <ToursPopularGrid />
      <ToursWanderersSaySection />
      <GeoExploreJourneyCta className=" bg-red-700" />
    </>
  );
}
