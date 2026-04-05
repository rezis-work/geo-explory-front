import GeoExploreJourneyCta from "@/components/shared/ui/GeoExploreJourneyCta";
import { ToursHero } from "@/features/tours/home/components/ToursHero";
import { ToursPopularGrid } from "@/features/tours/home/components/ToursPopularGrid";
import { ToursWanderersSaySection } from "@/features/tours/home/components/ToursWanderersSaySection";
import { ToursWhyChooseSection } from "@/features/tours/home/components/ToursWhyChooseSection";

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
