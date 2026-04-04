import { LandingHeroOverlayDark } from "@/components/landing/LandingHeroOverlayDark";
import { LandingHeroOverlayLight } from "@/components/landing/LandingHeroOverlayLight";
import { LandingHeroSplit } from "@/components/landing/LandingHeroSplit";
import type { LandingHeroProps } from "@/components/landing/landing-hero-types";

export type {
  FloatingCardContent,
  HeroAction,
  LandingHeroOverlayDarkProps,
  LandingHeroOverlayLightProps,
  LandingHeroProps,
  LandingHeroSplitProps,
} from "@/components/landing/landing-hero-types";

export { LandingHeroOverlayDark } from "@/components/landing/LandingHeroOverlayDark";
export { LandingHeroOverlayLight } from "@/components/landing/LandingHeroOverlayLight";
export { LandingHeroSplit } from "@/components/landing/LandingHeroSplit";

export function LandingHero(props: LandingHeroProps) {
  if (props.variant === "split") {
    return <LandingHeroSplit {...props} />;
  }
  if (props.variant === "overlay-light") {
    return <LandingHeroOverlayLight {...props} />;
  }
  return <LandingHeroOverlayDark {...props} />;
}
