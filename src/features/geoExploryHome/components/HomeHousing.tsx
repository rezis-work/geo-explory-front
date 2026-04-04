import type { ReactNode } from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { HousingListingCard } from "@/components/shared/ui/reusableCards/HousingListingCard";
import { cn } from "@/lib/cn";
import { HOUSING_LISTINGS } from "../api/homeApi";

function HousingFeatureRow({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3 rounded-2xl bg-neutral-100 p-3 sm:gap-4 sm:p-4 md:p-5 [@media(max-height:780px)]:gap-2.5 [@media(max-height:780px)]:p-3 [@media(max-height:480px)]:rounded-xl [@media(max-height:480px)]:p-2.5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-600 sm:h-12 sm:w-12 sm:rounded-xl [@media(max-height:780px)]:h-9 [@media(max-height:780px)]:w-9 [@media(max-height:480px)]:h-8 [@media(max-height:480px)]:w-8">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-neutral-900 sm:text-base [@media(max-height:480px)]:text-xs">
          {title}
        </p>
        <p className="mt-0.5 text-xs leading-relaxed text-neutral-600 sm:mt-1 sm:text-sm [@media(max-height:480px)]:line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}

function WifiIcon() {
  return (
    <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 9a14 14 0 0114 0M8.5 12.5a9 9 0 017 0M12 16l3 3" strokeLinecap="round" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

/** Left: Vake, Sololaki. Right: Old Town, Nomad — two inner columns, staggered. From xl (1280px), inner tracks are 329px + 329px, centered in the wide rail. */
function HousingListingMasonry() {
  return (
    <div className="grid grid-cols-2 items-start gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:grid-cols-[329px_329px] xl:justify-center [@media(max-height:780px)]:gap-3 [@media(max-height:480px)]:gap-2">
      <div className="flex min-w-0 flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8 [@media(max-height:780px)]:gap-3 [@media(max-height:480px)]:gap-2">
        <HousingListingCard {...HOUSING_LISTINGS[0]} />
        <HousingListingCard {...HOUSING_LISTINGS[2]} />
      </div>
      <div className="flex min-w-0 flex-col gap-4 pt-10 sm:gap-5 sm:pt-12 md:gap-6 md:pt-14 lg:gap-8 lg:pt-16 [@media(max-height:780px)]:gap-3 [@media(max-height:780px)]:pt-6 [@media(max-height:480px)]:gap-2 [@media(max-height:480px)]:pt-4">
        <HousingListingCard {...HOUSING_LISTINGS[1]} />
        <HousingListingCard {...HOUSING_LISTINGS[3]} />
      </div>
    </div>
  );
}

export function HomeHousing() {
  return (
    <section className="bg-neutral-50 py-14 sm:py-16 lg:bg-white lg:py-20 [@media(max-height:780px)]:py-10 [@media(max-height:560px)]:py-6 [@media(max-height:420px)]:py-4">
      <SectionContainer>
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-start lg:gap-8 xl:gap-10 2xl:gap-12 [@media(max-height:780px)]:gap-6 [@media(max-height:480px)]:gap-4">
          <div className="min-w-0 lg:self-start">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl md:text-4xl [@media(max-height:780px)]:text-2xl [@media(max-height:480px)]:text-xl [@media(max-height:420px)]:text-lg">
              Find your place or your people
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600 lg:hidden">
              Curated long-term stays and community hubs.
            </p>
            <p className="mt-3 hidden text-sm leading-relaxed text-neutral-600 sm:mt-4 sm:text-base lg:block [@media(max-height:780px)]:mt-2 [@media(max-height:780px)]:text-sm [@media(max-height:480px)]:line-clamp-3 [@media(max-height:480px)]:text-xs">
              Georgia is becoming the top hub for digital nomads and students. We help you find
              cozy apartments, shared rooms, and long-term stays with locals or fellow travelers.
            </p>
            <div className="mt-6 hidden flex-col gap-3 sm:mt-8 sm:gap-4 lg:flex [@media(max-height:780px)]:mt-4 [@media(max-height:780px)]:gap-2.5 [@media(max-height:480px)]:mt-3 [@media(max-height:480px)]:gap-2">
              <HousingFeatureRow
                icon={<WifiIcon />}
                title="Verified Nomad-Friendly"
                description="Tested high-speed internet in every listing."
              />
              <HousingFeatureRow
                icon={<PeopleIcon />}
                title="Find a Roommate"
                description="Connect with people planning their move."
              />
            </div>
          </div>

          <div className="min-w-0">
            <div
              className={cn(
                "flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-2",
                "-mx-4 px-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
                "sm:-mx-5 sm:px-5 md:-mx-6 md:px-6",
                "lg:hidden"
              )}
              role="list"
            >
              {HOUSING_LISTINGS.map((listing) => (
                <div
                  key={listing.href ?? listing.title}
                  className="w-[min(78vw,300px)] shrink-0 snap-start sm:w-[min(72vw,320px)]"
                  role="listitem"
                >
                  <HousingListingCard {...listing} className="h-full" />
                </div>
              ))}
            </div>

            <div className="hidden lg:block">
              <HousingListingMasonry />
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
