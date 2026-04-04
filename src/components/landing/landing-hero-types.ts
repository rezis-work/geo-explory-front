import type { ReactNode } from "react";

export type HeroAction = {
  label: string;
  href: string;
};

export type FloatingCardContent = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export type LandingHeroSplitProps = {
  variant: "split";
  /** Main heading; use <span className="text-red-600">…</span> for highlights. */
  title: ReactNode;
  description: string;
  /** Extra line shown only on small screens (e.g. mobile overlay), optional */
  mobileExtraLine?: string;
  primaryAction: HeroAction;
  secondaryAction: HeroAction;
  image: { src: string; alt: string };
  floatingCard?: FloatingCardContent;
};

export type LandingHeroOverlayLightProps = {
  variant: "overlay-light";
  eyebrow?: string;
  headline: { line1: string; line2: string };
  description: string;
  primaryAction: HeroAction;
  secondaryAction: HeroAction;
  backgroundImage: { src: string; alt: string };
  /** Optional vertical min height */
  minHeightClassName?: string;
};

export type LandingHeroOverlayDarkProps = {
  variant: "overlay-dark";
  title: string;
  description: string;
  primaryAction: HeroAction;
  secondaryAction?: HeroAction;
  backgroundImage: { src: string; alt: string };
  /** Darken background for readability, e.g. black/45 */
  overlayClassName?: string;
  minHeightClassName?: string;
};

export type LandingHeroProps =
  | LandingHeroSplitProps
  | LandingHeroOverlayLightProps
  | LandingHeroOverlayDarkProps;
