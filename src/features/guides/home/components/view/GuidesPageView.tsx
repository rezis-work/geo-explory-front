import { GuidesAdventureCtaSection } from "@/features/guides/home/components/GuidesAdventureCtaSection";
import { GuidesDiscoverPersonalitiesSection } from "@/features/guides/home/components/GuidesDiscoverPersonalitiesSection";
import { GuidesHero } from "@/features/guides/home/components/GuidesHero";
import { GuidesHowItWorksSection } from "@/features/guides/home/components/GuidesHowItWorksSection";
import { GuidesSwipeMatchSection } from "@/features/guides/home/components/GuidesSwipeMatchSection";
import { GuidesTravelersTalkingSection } from "@/features/guides/home/components/GuidesTravelersTalkingSection";
import { GuidesWhyBuddySection } from "@/features/guides/home/components/GuidesWhyBuddySection";

export default function GuidesPageView() {
  return (
    <>
      <GuidesHero />
      <GuidesSwipeMatchSection />
      <GuidesDiscoverPersonalitiesSection />
      <GuidesHowItWorksSection />
      <GuidesWhyBuddySection />
      <GuidesTravelersTalkingSection />
      <GuidesAdventureCtaSection />
    </>
  );
}
