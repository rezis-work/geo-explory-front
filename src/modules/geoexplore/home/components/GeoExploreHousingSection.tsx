import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Wifi } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PriceDisplay } from "@/components/shared/ui/PriceDisplay";
import { cn } from "@/lib/cn";
import {
  HOUSING_LISTINGS,
  type GeoExploreHousingListingContent,
} from "../api/homeApi";

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

function HousingListingTile({
  listing,
  className,
}: {
  listing: GeoExploreHousingListingContent;
  className?: string;
}) {
  const {
    title,
    imageSrc,
    imageAlt,
    price,
    priceUnit = " / month",
    priceCompact,
    meta,
    href,
  } = listing;
  const mobilePriceLine = priceCompact ?? `${price}/mo`;

  const body = (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md",
        "max-lg:p-2.5 lg:p-0",
        href && "block h-full",
        className
      )}
    >
      <div
        className={cn(
          "relative w-full shrink-0 overflow-hidden rounded-xl bg-neutral-100 max-lg:aspect-square",
          "lg:aspect-video lg:rounded-none",
          "[@media(max-height:780px)]:aspect-auto [@media(max-height:780px)]:h-32",
          "[@media(max-height:560px)]:h-28",
          "[@media(max-height:420px)]:h-24"
        )}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 1280px) 329px, (min-width: 1024px) 33vw, (min-width: 768px) 40vw, (max-width: 1023px) 78vw, 50vw"
          unoptimized
        />
      </div>
      <div
        className={cn(
          "flex max-lg:pt-2 max-lg:pb-2 flex-1 flex-col pt-2 pb-1.5 lg:px-5 lg:pb-5 lg:pt-4",
          "[@media(max-height:780px)]:px-3 [@media(max-height:780px)]:py-2 [@media(max-height:780px)]:pb-3 [@media(max-height:480px)]:px-2.5 [@media(max-height:480px)]:pt-1.5 [@media(max-height:480px)]:pb-2",
          "text-left"
        )}
      >
        <h3
          className={cn(
            "text-sm font-bold leading-snug text-neutral-900 sm:text-base [@media(max-height:480px)]:text-xs"
          )}
        >
          {title}
        </h3>
        <div
          className={cn(
            "mt-1.5 flex w-full flex-col items-start gap-0.5 text-left sm:mt-2",
            "lg:mt-2 lg:gap-0"
          )}
        >
          <PriceDisplay
            compact={mobilePriceLine}
            full={`${price}${priceUnit}`}
            className={cn(
              "text-sm font-semibold leading-snug text-rose-600 lg:text-sm lg:font-normal lg:text-neutral-500"
            )}
          />
          {meta ? (
            <p className="text-[11px] font-medium leading-snug text-neutral-400 lg:mt-1.5 lg:text-xs">
              {meta}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block h-full rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
      >
        {body}
      </Link>
    );
  }

  return body;
}

function HousingListingMasonry() {
  return (
    <div className="grid grid-cols-2 items-start gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:grid-cols-[329px_329px] xl:justify-center [@media(max-height:780px)]:gap-3 [@media(max-height:480px)]:gap-2">
      <div className="flex min-w-0 flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8 [@media(max-height:780px)]:gap-3 [@media(max-height:480px)]:gap-2">
        <HousingListingTile listing={HOUSING_LISTINGS[0]} />
        <HousingListingTile listing={HOUSING_LISTINGS[2]} />
      </div>
      <div className="flex min-w-0 flex-col gap-4 pt-10 sm:gap-5 sm:pt-12 md:gap-6 md:pt-14 lg:gap-8 lg:pt-16 [@media(max-height:780px)]:gap-3 [@media(max-height:780px)]:pt-6 [@media(max-height:480px)]:gap-2 [@media(max-height:480px)]:pt-4">
        <HousingListingTile listing={HOUSING_LISTINGS[1]} />
        <HousingListingTile listing={HOUSING_LISTINGS[3]} />
      </div>
    </div>
  );
}

export function GeoExploreHousingSection() {
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
                icon={<Wifi size={22} strokeWidth={2} aria-hidden />}
                title="Verified Nomad-Friendly"
                description="Tested high-speed internet in every listing."
              />
              <HousingFeatureRow
                icon={<Users size={22} strokeWidth={2} aria-hidden />}
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
                  <HousingListingTile listing={listing} className="h-full" />
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
