import { GuidesAdventureCtaSection } from "@/modules/guides/home/components/GuidesAdventureCtaSection";
import { GuidesDiscoverPersonalitiesSection } from "@/modules/guides/home/components/GuidesDiscoverPersonalitiesSection";
import { GuidesHero } from "@/modules/guides/home/components/GuidesHero";
import { GuidesHowItWorksSection } from "@/modules/guides/home/components/GuidesHowItWorksSection";
import { GuidesSwipeMatchSection } from "@/modules/guides/home/components/GuidesSwipeMatchSection";
import { GuidesTravelersTalkingSection } from "@/modules/guides/home/components/GuidesTravelersTalkingSection";
import { GuidesWhyBuddySection } from "@/modules/guides/home/components/GuidesWhyBuddySection";

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
