// import { HomePageView } from "@/features/home/views/HomePageView";
import { HomeFeatureCards } from "@/features/home/components/HomeFeatureCards";
import { HomeHero } from "@/features/home/components/HomeHero";

export default function Home() {
  // return <HomePageView />;
  return (
    <main className="flex-1">
      <HomeHero />
      <HomeFeatureCards />
    </main>
  );
}
