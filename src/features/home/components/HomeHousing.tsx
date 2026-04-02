import type { ReactNode } from "react";
import { HousingListingCard } from "@/components/ui/reusableCards/HousingListingCard";
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
    <div className="flex gap-4 rounded-2xl bg-neutral-100 p-4 sm:p-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-neutral-900">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-neutral-600">{description}</p>
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

export function HomeHousing() {
  const [a, b, c, d] = HOUSING_LISTINGS;

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
          <div className="min-w-0">
            <p className="text-sm font-medium text-neutral-500">
              Curated long-term stays and community hubs.
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Find your place or your people
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600">
              Whether you are a digital nomad, student, or relocating for work—browse verified
              listings, shared rooms, and hosts who speak your language across Tbilisi and beyond.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <HousingFeatureRow
                icon={<WifiIcon />}
                title="Verified nomad-friendly"
                description="Tested high-speed internet in every listing."
              />
              <HousingFeatureRow
                icon={<PeopleIcon />}
                title="Find a roommate"
                description="Connect with people planning their move."
              />
            </div>
          </div>

          <div className="min-w-0">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden">
              {HOUSING_LISTINGS.map((listing) => (
                <HousingListingCard key={listing.href ?? listing.title} {...listing} />
              ))}
            </div>

            <div className="hidden gap-4 lg:grid lg:grid-cols-2 lg:gap-5">
              <div className="flex flex-col gap-4 lg:gap-5">
                <HousingListingCard {...a} />
                <HousingListingCard {...c} />
              </div>
              <div className="flex flex-col gap-4 pt-10 lg:gap-5 lg:pt-14">
                <HousingListingCard {...b} />
                <HousingListingCard {...d} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
