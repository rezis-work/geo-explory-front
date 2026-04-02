import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

export type HousingListingCardProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  /** e.g. "$600" */
  price: string;
  /** e.g. " / month" */
  priceUnit?: string;
  meta?: string;
  href?: string;
  className?: string;
  /** Text alignment for title, price, and meta. */
  textAlign?: "left" | "center";
};

export function HousingListingCard({
  title,
  imageSrc,
  imageAlt,
  price,
  priceUnit = " / month",
  meta,
  href,
  className,
  textAlign = "center",
}: HousingListingCardProps) {
  const body = (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md",
        href && "block h-full",
        className
      )}
    >
      <div
        className={cn(
          "relative w-full shrink-0 bg-neutral-100 aspect-4/3 sm:aspect-5/4 lg:aspect-video",
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
          sizes="(min-width: 1280px) 329px, (min-width: 1024px) 33vw, (min-width: 768px) 40vw, 50vw"
          unoptimized
        />
      </div>
      <div className="flex flex-1 flex-col bg-white px-3 pb-3 pt-2 sm:px-5 sm:pb-5 sm:pt-4 [@media(max-height:780px)]:px-3 [@media(max-height:780px)]:py-2 [@media(max-height:780px)]:pb-3 [@media(max-height:480px)]:px-2.5 [@media(max-height:480px)]:pt-1.5 [@media(max-height:480px)]:pb-2">
        <h3 className="text-sm font-bold leading-snug text-neutral-900 sm:text-base [@media(max-height:480px)]:text-xs">
          {title}
        </h3>
        <p className="mt-1 text-xs font-normal leading-relaxed text-neutral-500 sm:mt-1.5 sm:text-sm [@media(max-height:480px)]:mt-0.5">
          {price}
          {priceUnit}
        </p>
        {meta ? (
          <p className="mt-1 text-xs font-medium text-neutral-400">{meta}</p>
        ) : null}
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
