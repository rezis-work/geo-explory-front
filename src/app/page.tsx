// import { HomePageView } from "@/features/home/views/HomePageView";
import { HomeFeatureCards } from "@/features/home/components/HomeFeatureCards";
import { HomeGuideMatch } from "@/features/home/components/HomeGuideMatch";
import { HomeHero } from "@/features/home/components/HomeHero";
import { HomePopularTours } from "@/features/home/components/HomePopularTours";

export default function Home() {
  // return <HomePageView />;
  return (
    <main className="flex-1">
      <HomeHero />
      <HomeFeatureCards />
      <HomeGuideMatch />
      <HomePopularTours />
    </main>
  );
}
