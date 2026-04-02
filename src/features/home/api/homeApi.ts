import type { HousingListingCardProps } from "@/components/ui/reusableCards/HousingListingCard";
import type { TourCardProps } from "@/components/ui/reusableCards/PopularTourCard";

export const TOURS: TourCardProps[] = [
    {
      title: "Majestic Kazbegi Hike",
      description:
        "Full day mountain adventure with traditional lunch at a local home.",
      rating: 4.9,
      durationLabel: "10 Hours",
      price: "$65",
      imageSrc: "/images/placeholder-tour-1.svg",
      imageAlt: "Illustration of Kazbegi mountain region",
      href: "/tours/kazbegi-hike",
      compactMeta: [
        { kind: "clock", label: "10 Hours" },
        { kind: "users", label: "Max 8 people" },
      ],
    },
    {
      title: "Kakheti Wine Journey",
      description:
        "Taste the oldest wine culture in the world in the heart of Georgia's vineyards.",
      rating: 5.0,
      durationLabel: "8 Hours",
      price: "$80",
      imageSrc: "/images/placeholder-tour-2.svg",
      imageAlt: "Kakheti wine country",
      href: "/tours/kakheti-wine",
      compactMeta: [
        { kind: "clock", label: "Full Day" },
        { kind: "wine", label: "Tasting incl." },
      ],
    },
    {
      title: "Tbilisi Night Culture",
      description:
        "Experience the sulfur baths, hidden bars, and the best local cuisine spots.",
      rating: 4.8,
      durationLabel: "4 Hours",
      price: "$45",
      imageSrc: "/images/placeholder-tour-3.svg",
      imageAlt: "Tbilisi at night",
      href: "/tours/tbilisi-night",
      compactMeta: [
        { kind: "clock", label: "4 Hours" },
        { kind: "users", label: "Small groups" },
      ],
    },
  ];

export const HOUSING_LISTINGS: HousingListingCardProps[] = [
  {
    title: "Vake Loft",
    price: "$600",
    priceUnit: "/ month",
    imageSrc: "/images/placeholder-tour-1.svg",
    imageAlt: "Bright loft interior in Vake",
    href: "/housing/vake-loft",
    meta: "4 slots left",
  },
  {
    title: "Old Town Haven",
    price: "$550",
    priceUnit: "/ month",
    imageSrc: "/images/placeholder-tour-2.svg",
    imageAlt: "Apartment in Tbilisi Old Town",
    href: "/housing/old-town-haven",
    meta: "Private",
  },
  {
    title: "Sololaki Studio",
    price: "$450",
    priceUnit: "/ month",
    imageSrc: "/images/placeholder-tour-3.svg",
    imageAlt: "Studio in Sololaki",
    href: "/housing/sololaki-studio",
  },
  {
    title: "Nomad Hub Shared",
    price: "$300",
    priceUnit: "/ month",
    imageSrc: "/images/placeholder-tour-1.svg",
    imageAlt: "Shared coliving space",
    href: "/housing/nomad-hub",
    meta: "4 slots left",
  },
];