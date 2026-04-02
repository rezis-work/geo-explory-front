import type { ReactNode } from "react";
import { FeatureCard, type FeatureCardAccent } from "@/components/ui/FeatureCard";

type FeatureItem = {
  accent: FeatureCardAccent;
  title: string;
  description: string;
  icon: ReactNode;
};

function MapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  );
}

function WineIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 22h8M12 11v11M8 9h8v2a4 4 0 01-8 0V9zM9 2h6l1 5H8l1-5z" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V9.5z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a4 4 0 01-4 4H8l-4 3v-3H5a4 4 0 01-4-4V6a4 4 0 014-4h12a4 4 0 014 4v9z" />
    </svg>
  );
}

const FEATURES: FeatureItem[] = [
  {
    accent: "rose",
    title: "Find Local Guides",
    description:
      "Connect with passionate Georgians who know the secret spots tourists never see.",
    icon: <MapIcon />,
  },
  {
    accent: "sky",
    title: "Book Unique Tours",
    description:
      "From Kakheti wine tastings to Svaneti mountain treks, experience it all.",
    icon: <WineIcon />,
  },
  {
    accent: "amber",
    title: "Live with Locals",
    description:
      "Find shared housing and roommates among locals and digital nomads.",
    icon: <HomeIcon />,
  },
  {
    accent: "slate",
    title: "Chat & Connect",
    description:
      "Join a vibrant community of travelers. Share tips and find friends instantly.",
    icon: <ChatIcon />,
  },
];

export function HomeFeatureCards() {
  return (
    <section className="bg-neutral-100 py-14 sm:py-16 lg:py-20">
      <div className=" w-full max-w-6xl px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 xl:gap-6">
          {FEATURES.map((item) => (
            <div key={item.title} className="min-w-0">
              <FeatureCard
                accent={item.accent}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
