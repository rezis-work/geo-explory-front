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

export type HeroSplitProps = {
  variant: "split";
  title: ReactNode;
  description: string;
  mobileExtraLine?: string;
  primaryAction: HeroAction;
  secondaryAction: HeroAction;
  image: { src: string; alt: string };
  floatingCard?: FloatingCardContent;
};

/**
 * ერთი overlay ტიპი: `tone` არჩევს ღია vs მუქ ვიზუალს.
 * სათაური: თუ გადაეცი `headline` — ორი ხაზი (line2 accent მხოლოდ light-ზე);
 * თუ არა — გამოიყენე `title` (ნებისმიერი ReactNode / ერთი ბლოკი).
 */
export type HeroOverlayProps = {
  variant: "overlay";
  tone: "light" | "dark";
  eyebrow?: string;
  title?: ReactNode;
  headline?: { line1: string; line2: string };
  description: string;
  primaryAction: HeroAction;
  secondaryAction?: HeroAction;
  image: { src: string; alt: string };
  overlayClassName?: string;
  minHeightClassName?: string;
};

export type HeroProps = HeroSplitProps | HeroOverlayProps;
