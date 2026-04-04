import type { BeyondSightsCardProps } from "@/components/shared/ui/reusableCards/BeyondSightsCard";
import type { CommunityCommentCardProps } from "@/components/shared/ui/reusableCards/CommunityCommentCard";
import type { HousingListingCardProps } from "@/components/shared/ui/reusableCards/HousingListingCard";
import type { PopularTour } from "@/components/shared/ui/reusableCards/PopularTourCard";

export const TOURS: PopularTour[] = [
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
    price: "$750",
    priceUnit: " / month",
    priceCompact: "$750/mo",
    meta: "4 slots left",
    imageSrc: "/images/placeholder-tour-1.svg",
    imageAlt: "Bright loft interior in Vake",
    href: "/housing/vake-loft",
  },
  {
    title: "Old Town Haven",
    price: "$550",
    priceUnit: " / month",
    imageSrc: "/images/placeholder-tour-2.svg",
    imageAlt: "Apartment in Tbilisi Old Town",
    href: "/housing/old-town-haven",
  },
  {
    title: "Sololaki Studio",
    price: "$800",
    priceUnit: " / month",
    priceCompact: "$800/mo",
    meta: "Private",
    imageSrc: "/images/placeholder-tour-3.svg",
    imageAlt: "Studio in Sololaki",
    href: "/housing/sololaki-studio",
  },
  {
    title: "Nomad Hub Shared",
    price: "$300",
    priceUnit: " / month",
    imageSrc: "/images/placeholder-tour-1.svg",
    imageAlt: "Shared coliving space",
    href: "/housing/nomad-hub",
  },
];

export const COMMUNITY_TESTIMONIALS: CommunityCommentCardProps[] = [
  {
    name: "Mark S.",
    role: "Digital Nomad, UK",
    quote:
      "GeoExplory changed how I travel. I didn't just see Tbilisi; I made friends who showed me the soul of the country.",
    avatarSrc: "/images/placeholder-tour-1.svg",
    avatarAlt: "Mark S. avatar",
  },
  {
    name: "Elena R.",
    role: "Remote designer, Spain",
    quote:
      "Everything felt trustworthy—clear listings, fast replies, and locals who actually showed up.",
    avatarSrc: "/images/placeholder-tour-2.svg",
    avatarAlt: "Elena R. avatar",
  },
  {
    name: "James K.",
    role: "Grad student, USA",
    quote:
      "The roommate match saved me weeks of hunting. Already planning my next semester here.",
    avatarSrc: "/images/placeholder-tour-3.svg",
    avatarAlt: "James K. avatar",
  },
];

export const BEYOND_THE_SIGHTS: BeyondSightsCardProps[] = [
  {
    title: "Supra Experience",
    mobileSummary: "Authentic feasts & toasts",
    description:
      "Join a traditional Georgian feast with polyphonic singing and a toastmaster (Tamada).",
    imageSrc: "/images/placeholder-tour-2.svg",
    imageAlt: "Georgian supra feast table",
    href: "/experiences/supra",
  },
  {
    title: "Tbilisi After Hours",
    mobileSummary: "Nightlife & curated routes",
    description:
      "Discover why Tbilisi is called the 'Berlin of the East' with our curated nightlife guides.",
    imageSrc: "/images/placeholder-tour-3.svg",
    imageAlt: "Tbilisi nightlife",
    href: "/experiences/tbilisi-nightlife",
  },
];