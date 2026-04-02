import { TourCardProps } from "@/components/ui/reusableCards/PopularTourCard";

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