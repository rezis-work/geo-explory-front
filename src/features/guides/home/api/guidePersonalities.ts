export type GuidePersonality = {
  id: string;
  name: string;
  rating: string;
  location: string;
  tags: readonly [string, string];
  imageSrc: string;
  imageAlt: string;
};

export const GUIDE_PERSONALITIES: GuidePersonality[] = [
  {
    id: "nino",
    name: "Nino",
    rating: "5.0",
    location: "Kutaisi",
    tags: ["History Buff", "Foodie"],
    imageSrc: "/images/placeholder-tour-1.svg",
    imageAlt: "Nino, local guide in Kutaisi",
  },
  {
    id: "giorgi",
    name: "Giorgi",
    rating: "5.0",
    location: "Mestia",
    tags: ["Hiker", "Photog"],
    imageSrc: "/images/placeholder-tour-2.svg",
    imageAlt: "Giorgi, local guide in Mestia",
  },
  {
    id: "luka",
    name: "Luka",
    rating: "5.0",
    location: "Tbilisi",
    tags: ["Nightlife Pro", "Artist"],
    imageSrc: "/images/placeholder-tour-3.svg",
    imageAlt: "Luka, local guide in Tbilisi",
  },
  {
    id: "ana",
    name: "Ana",
    rating: "5.0",
    location: "Telavi",
    tags: ["Winemaker", "Local Expert"],
    imageSrc: "/images/placeholder-hero.svg",
    imageAlt: "Ana, local guide in Telavi",
  },
];
