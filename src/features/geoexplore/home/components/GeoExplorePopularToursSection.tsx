import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { RatingBadge } from "@/components/shared/ui/RatingBadge";
import { TourMetaIcon } from "@/components/shared/ui/TourMetaIcon";
import { cn } from "@/lib/cn";
import { TOURS } from "@/features/tours/home/api/toursData";
import type { PopularTour } from "@/features/tours/home/types/popularTour";

function wrapTourLink(href: string | undefined, children: ReactNode) {
  if (href) {
    return (
      <Link
        href={href}
        className="block h-full rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
      >
        {children}
      </Link>
    );
  }
  return children;
}

function PopularTourTile({ tour, className }: { tour: PopularTour; className?: string }) {
  const { title, description, rating, durationLabel, price, imageSrc, imageAlt, compactMeta, href } =
    tour;
  const ratingLabel = rating.toFixed(1);

  const body = (
    <article
      className={cn(
        "h-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md",
        href && "block h-full",
        className
      )}
    >
      <div className="relative aspect-[16/10] w-full bg-neutral-100 max-md:aspect-video">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
          unoptimized
        />
        <div className="absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-1 shadow-sm ring-1 ring-black/5">
          <RatingBadge
            value={ratingLabel}
            className="text-sm font-semibold text-neutral-900"
            starClassName="fill-red-600 stroke-red-600 text-red-600"
          />
        </div>
      </div>

      <div className="p-4 sm:p-5">
        {/* Mobile: title | price + chevron (matches catalog card pairing); desktop: title only */}
        <div className="flex items-start justify-between gap-2 md:block">
          <h3 className="min-w-0 flex-1 text-lg font-bold leading-snug text-neutral-900">{title}</h3>
          <div className="flex shrink-0 items-center gap-2 md:hidden">
            <p className="text-lg font-bold leading-snug text-red-600">{price}</p>
            <span
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-200 text-neutral-700"
              aria-hidden
            >
              <ChevronRight size={18} strokeWidth={2} aria-hidden />
            </span>
          </div>
        </div>

        <p className="mt-2 hidden text-sm leading-relaxed text-neutral-600 md:line-clamp-3 md:block">
          {description}
        </p>

        {/* Mobile: one horizontal row (clock + duration, people + capacity) like the mock */}
        <ul
          className="mt-3 flex list-none flex-row flex-wrap items-center gap-x-5 gap-y-2 md:hidden"
          aria-label="Tour details"
        >
          {compactMeta.map((item) => (
            <li key={`${item.kind}-${item.label}`} className="flex items-center gap-2 text-sm text-neutral-800">
              <TourMetaIcon kind={item.kind} className="text-neutral-700" />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 hidden items-center justify-between gap-4 border-t border-neutral-100 pt-4 md:flex">
          <span className="inline-flex items-center gap-1.5 text-sm text-neutral-600">
            <TourMetaIcon kind="clock" />
            {durationLabel}
          </span>
          <div className="flex items-end gap-3">
            <span className="text-right text-sm">
              <span className="text-lg font-bold text-red-600">{price}</span>
              <span className="text-neutral-500"> / person</span>
            </span>
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-200 text-neutral-700" aria-hidden>
              <ChevronRight size={18} strokeWidth={2} />
            </span>
          </div>
        </div>
      </div>
    </article>
  );

  return wrapTourLink(href, body);
}

export function GeoExplorePopularToursSection() {
  return (
    <section className="bg-neutral-100 py-14 sm:py-16 lg:py-20">
      <SectionContainer>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex w-full min-w-0 items-center justify-between gap-3 sm:block sm:w-auto">
            <h2 className="text-xl font-bold tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl">
              Popular Tours
            </h2>
            <Link
              href="/tours"
              className={cn(
                "shrink-0 text-sm font-semibold text-red-600 transition-colors hover:text-red-700",
                "sm:hidden"
              )}
            >
              View all
            </Link>
            <p className="mt-2 hidden max-w-2xl text-sm leading-relaxed text-neutral-600 sm:block sm:text-base">
              The most loved experiences by our community
            </p>
          </div>
          <Link
            href="/tours"
            className={cn(
              "hidden shrink-0 text-sm font-semibold text-red-600 transition-colors hover:text-red-700",
              "sm:min-h-11 sm:block sm:self-end sm:pb-0.5"
            )}
          >
            View all
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {TOURS.map((tour) => (
            <div key={tour.href ?? tour.title} className="min-w-0">
              <PopularTourTile tour={tour} />
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
