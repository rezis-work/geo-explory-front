import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type TourCardMetaKind = "clock" | "users" | "wine";

export type TourCardMetaItem = {
  kind: TourCardMetaKind;
  label: string;
};

export type TourCardProps = {
  title: string;
  description: string;
  rating: number;
  /** Desktop footer (clock + label) */
  durationLabel: string;
  /** e.g. "$65" */
  price: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
  /** Extra line under title on small screens (icons + labels) */
  compactMeta: TourCardMetaItem[];
  className?: string;
};

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={14}
      height={14}
      className={cn("shrink-0 text-amber-500", className)}
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={16}
      height={16}
      className={cn("shrink-0 text-neutral-500", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={16}
      height={16}
      className={cn("shrink-0 text-neutral-500", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function WineIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={16}
      height={16}
      className={cn("shrink-0 text-neutral-500", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M8 22h8M12 11v11M8 9h8v2a4 4 0 01-8 0V9zM9 2h6l1 5H8l1-5z" />
    </svg>
  );
}

function metaIcon(kind: TourCardMetaKind): ReactNode {
  switch (kind) {
    case "clock":
      return <ClockIcon />;
    case "users":
      return <UsersIcon />;
    case "wine":
      return <WineIcon />;
    default:
      return null;
  }
}

export function PopularTourCard({
  title,
  description,
  rating,
  durationLabel,
  price,
  imageSrc,
  imageAlt,
  href,
  compactMeta,
  className,
}: TourCardProps) {
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
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-sm font-semibold tabular-nums text-neutral-900 shadow-sm ring-1 ring-black/5">
          <StarIcon />
          {ratingLabel}
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3 md:block">
          <h3 className="text-lg font-bold leading-snug text-neutral-900">{title}</h3>
          <p className="shrink-0 text-lg font-bold text-red-600 md:hidden">{price}</p>
        </div>

        <p className="mt-2 hidden text-sm leading-relaxed text-neutral-600 md:line-clamp-3 md:block">
          {description}
        </p>

        <ul
          className="mt-3 flex list-none flex-col gap-2 md:hidden"
          aria-label="Tour details"
        >
          {compactMeta.map((item) => (
            <li key={`${item.kind}-${item.label}`} className="flex items-center gap-2 text-sm text-neutral-600">
              {metaIcon(item.kind)}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 hidden items-center justify-between gap-4 border-t border-neutral-100 pt-4 md:flex">
          <span className="inline-flex items-center gap-1.5 text-sm text-neutral-600">
            <ClockIcon />
            {durationLabel}
          </span>
          <span className="text-right text-sm">
            <span className="text-lg font-bold text-red-600">{price}</span>
            <span className="text-neutral-500"> / person</span>
          </span>
        </div>
      </div>
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 rounded-2xl">
        {body}
      </Link>
    );
  }

  return body;
}
