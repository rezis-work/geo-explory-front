import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

export type BeyondSightsCardProps = {
  title: string;
  description: string;
  /** Short line for mobile carousel; falls back to description if omitted. */
  mobileSummary?: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
  className?: string;
};

export function BeyondSightsCard({
  title,
  description,
  mobileSummary,
  imageSrc,
  imageAlt,
  href,
  className,
}: BeyondSightsCardProps) {
  const mobileLine = mobileSummary ?? description;
  const inner = (
    <>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(min-width: 1024px) 45vw, (max-width: 1023px) 85vw, 100vw"
        unoptimized
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-black/10"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 md:p-8">
        <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl">
          {title}
        </h3>
        <p className="mt-1.5 max-w-prose text-sm leading-relaxed text-white/90 lg:hidden">
          {mobileLine}
        </p>
        <p className="mt-2 hidden max-w-prose text-sm leading-relaxed text-white/90 sm:text-base lg:block">
          {description}
        </p>
      </div>
    </>
  );

  const shellClass = cn(
    "group relative block aspect-4/3 w-full overflow-hidden rounded-3xl bg-neutral-900 shadow-lg ring-1 ring-white/10 sm:aspect-[16/10]",
    href && "outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900",
    className
  );

  if (href) {
    return (
      <Link href={href} className={shellClass}>
        {inner}
      </Link>
    );
  }

  return (
    <article className={shellClass}>
      {inner}
    </article>
  );
}
