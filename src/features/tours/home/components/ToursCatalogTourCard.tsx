import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { RatingBadge } from "@/components/shared/ui/RatingBadge";
import { TourMetaIcon } from "@/components/shared/ui/TourMetaIcon";
import { cn } from "@/lib/cn";
import type { PopularTour } from "@/features/tours/home/types/popularTour";

export type ToursCatalogTourCardProps = {
  tour: PopularTour;
  className?: string;
};

function wrapWithLink(href: string | undefined, children: ReactNode) {
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

export function ToursCatalogTourCard({ tour, className }: ToursCatalogTourCardProps) {
  const { title, rating, price, imageSrc, imageAlt, compactMeta, imageBadge, href } = tour;
  const ratingLabel = rating.toFixed(1);

  const body = (
    <article
      className={cn(
        "h-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md",
        href && "block h-full",
        className
      )}
    >
      <div className="relative aspect-4/3 w-full bg-neutral-100">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
          unoptimized
        />
        {imageBadge ? (
          <div className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-red-600 shadow-sm ring-1 ring-black/5">
            {imageBadge}
          </div>
        ) : null}
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 flex-1 text-lg font-bold leading-snug text-neutral-900">{title}</h3>
          <RatingBadge
            value={ratingLabel}
            className="shrink-0 text-sm font-semibold text-red-600"
            starClassName="text-red-600"
          />
        </div>

        <ul className="mt-3 flex list-none flex-row flex-wrap gap-x-5 gap-y-2" aria-label="Tour details">
          {compactMeta.map((item) => (
            <li key={`${item.kind}-${item.label}`} className="flex items-center gap-2 text-sm text-neutral-600">
              <TourMetaIcon kind={item.kind} />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex items-end justify-between gap-3 border-t border-neutral-100 pt-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">Price</p>
            <p className="text-2xl font-bold leading-tight text-red-600">{price}</p>
          </div>
          <span
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-200 text-neutral-700"
            aria-hidden
          >
            <ChevronRight size={18} strokeWidth={2} aria-hidden />
          </span>
        </div>
      </div>
    </article>
  );

  return wrapWithLink(href, body);
}
