/** Static landing content — types live here so section files stay self-contained. */

export type GeoExploreHousingListingContent = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  priceUnit?: string;
  priceCompact?: string;
  meta?: string;
  href?: string;
};

export type GeoExploreCommunityTestimonialContent = {
  name: string;
  role: string;
  quote: string;
  avatarSrc: string;
  avatarAlt: string;
};

export type GeoExploreBeyondSightExperienceContent = {
  title: string;
  description: string;
  mobileSummary?: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
};

export const HOUSING_LISTINGS: GeoExploreHousingListingContent[] = [
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

export const COMMUNITY_TESTIMONIALS: GeoExploreCommunityTestimonialContent[] = [
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

export const BEYOND_THE_SIGHTS: GeoExploreBeyondSightExperienceContent[] = [
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
