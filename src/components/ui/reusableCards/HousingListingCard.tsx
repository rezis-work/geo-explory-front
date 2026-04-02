import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

export type HousingListingCardProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  /** e.g. "$600" or "$750" */
  price: string;
  /** e.g. "/ month" or "/mo" */
  priceUnit?: string;
  /** Right-side note: "4 slots left", "Private" */
  meta?: string;
  href?: string;
  className?: string;
};

export function HousingListingCard({
  title,
  imageSrc,
  imageAlt,
  price,
  priceUnit = "/ month",
  meta,
  href,
  className,
}: HousingListingCardProps) {
  const body = (
    <article
      className={cn(
        "h-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md",
        href && "block h-full",
        className
      )}
    >
      <div className="relative aspect-4/3 w-full bg-neutral-100 sm:aspect-square">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 240px, (min-width: 768px) 40vw, 50vw"
          unoptimized
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold leading-snug text-neutral-900">{title}</h3>
        <div className="mt-3 flex items-baseline justify-between gap-2">
          <p className="text-base font-bold text-red-600">
            {price}
            {priceUnit ? (
              <span className="ml-1 text-sm font-semibold text-neutral-500">{priceUnit}</span>
            ) : null}
          </p>
          {meta ? (
            <p className="shrink-0 text-right text-xs font-medium text-neutral-500">{meta}</p>
          ) : null}
        </div>
      </div>
    </article>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block h-full rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
      >
        {body}
      </Link>
    );
  }

  return body;
}
