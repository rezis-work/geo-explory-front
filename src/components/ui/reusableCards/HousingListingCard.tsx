import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

export type HousingListingCardProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  /** e.g. "$750" */
  price: string;
  /** e.g. " / month" (desktop / full line) */
  priceUnit?: string;
  /** e.g. "$750/mo" — mobile footer; falls back to `{price}/mo` if omitted. */
  priceCompact?: string;
  meta?: string;
  href?: string;
  className?: string;
};

export function HousingListingCard({
  title,
  imageSrc,
  imageAlt,
  price,
  priceUnit = " / month",
  priceCompact,
  meta,
  href,
  className,

}: HousingListingCardProps) {
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
          "text-left",
        )}
      >
        <h3
          className={cn(
            "text-sm font-bold leading-snug text-neutral-900 sm:text-base [@media(max-height:480px)]:text-xs",
          )}
        >
          {title}
        </h3>
        <div
          className={cn(
            "mt-1.5 flex w-full flex-col items-start gap-0.5 text-left sm:mt-2",
            "lg:mt-2 lg:gap-0",
          )}
        >
          <p
            className={cn(
              "text-sm font-semibold leading-snug text-rose-600 lg:text-sm lg:font-normal lg:text-neutral-500",
            )}
          >
            <span className="lg:hidden">{mobilePriceLine}</span>
            <span className="hidden lg:inline">
              {price}
              {priceUnit}
            </span>
          </p>
          {meta ? (
            <p
              className={cn(
                "text-[11px] font-medium leading-snug text-neutral-400 lg:mt-1.5 lg:text-xs",

              )}
            >
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
