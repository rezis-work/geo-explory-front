import type { TourMetaKind } from "@/components/shared/ui/TourMetaIcon";

export type TourCardMetaKind = TourMetaKind;

export type TourCardMetaItem = {
  kind: TourMetaKind;
  label: string;
};

export type PopularTour = {
  title: string;
  description: string;
  rating: number;
  durationLabel: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
  compactMeta: TourCardMetaItem[];
  imageBadge?: string;
};
