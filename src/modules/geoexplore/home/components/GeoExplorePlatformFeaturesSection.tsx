import type { ReactNode } from "react";
import { Home, Map, MessageCircle, Wine } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { cn } from "@/lib/cn";

const accentStyles = {
  rose: "bg-rose-100 text-red-600",
  sky: "bg-sky-100 text-sky-600",
  amber: "bg-amber-100 text-amber-800",
  slate: "bg-neutral-200 text-neutral-800",
} as const;

type PlatformFeatureAccent = keyof typeof accentStyles;

function PlatformFeatureTile({
  icon,
  title,
  description,
  accent = "slate",
}: {
  icon: ReactNode;
  title: string;
  description: string;
  accent?: PlatformFeatureAccent;
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-white px-5 py-6 shadow-sm ring-1 ring-black/5 sm:px-6 sm:py-7">
      <div
        className={cn(
          "mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl [&_svg]:h-6 [&_svg]:w-6",
          accentStyles[accent]
        )}
        aria-hidden
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold tracking-tight text-neutral-900">{title}</h3>
      <p className="mt-2 max-w-prose text-sm leading-relaxed text-pretty text-neutral-600">
        {description}
      </p>
    </div>
  );
}

const featureIconClass = "h-6 w-6";

const PLATFORM_FEATURES: {
  accent: PlatformFeatureAccent;
  title: string;
  description: string;
  icon: ReactNode;
}[] = [
  {
    accent: "rose",
    title: "Find Local Guides",
    description:
      "Connect with passionate Georgians who know the secret spots tourists never see.",
    icon: <Map className={featureIconClass} strokeWidth={2} aria-hidden />,
  },
  {
    accent: "sky",
    title: "Book Unique Tours",
    description:
      "From Kakheti wine tastings to Svaneti mountain treks, experience it all.",
    icon: <Wine className={featureIconClass} strokeWidth={2} aria-hidden />,
  },
  {
    accent: "amber",
    title: "Live with Locals",
    description:
      "Find shared housing and roommates among locals and digital nomads.",
    icon: <Home className={featureIconClass} strokeWidth={2} aria-hidden />,
  },
  {
    accent: "slate",
    title: "Chat & Connect",
    description:
      "Join a vibrant community of travelers. Share tips and find friends instantly.",
    icon: <MessageCircle className={featureIconClass} strokeWidth={2} aria-hidden />,
  },
];

export function GeoExplorePlatformFeaturesSection() {
  return (
    <section className="bg-neutral-100 py-14 sm:py-16 lg:py-20">
      <SectionContainer>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 xl:gap-6">
          {PLATFORM_FEATURES.map((item) => (
            <div key={item.title} className="min-w-0">
              <PlatformFeatureTile
                accent={item.accent}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
