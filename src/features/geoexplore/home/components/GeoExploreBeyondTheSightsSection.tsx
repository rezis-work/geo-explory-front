import Image from "next/image";
import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { cn } from "@/lib/cn";
import {
  BEYOND_THE_SIGHTS,
  type GeoExploreBeyondSightExperienceContent,
} from "../api/homeApi";

function BeyondSightTile({
  item,
  className,
}: {
  item: GeoExploreBeyondSightExperienceContent;
  className?: string;
}) {
  const { title, description, mobileSummary, imageSrc, imageAlt, href } = item;
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

  return <article className={shellClass}>{inner}</article>;
}

export function GeoExploreBeyondTheSightsSection() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <SectionContainer>
        <div className="flex items-center justify-between gap-4 lg:justify-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl lg:text-center lg:text-4xl">
            Beyond the Sights
          </h2>
          <Link
            href="/experiences"
            className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-sky-600 hover:text-sky-700 lg:hidden"
          >
            More
          </Link>
        </div>

        <div
          className={cn(
            "mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-2",
            "scroll-pl-4 scroll-pr-2 sm:scroll-pl-5",
            "-mx-4 px-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
            "sm:-mx-5 sm:px-5 md:-mx-6 md:px-6",
            "lg:mx-0 lg:mt-10 lg:grid lg:grid-cols-2 lg:gap-8 lg:overflow-visible lg:px-0 lg:pb-0 lg:snap-none"
          )}
          role="list"
        >
          {BEYOND_THE_SIGHTS.map((item) => (
            <div
              key={item.href ?? item.title}
              className="w-[min(78vw,300px)] shrink-0 snap-start sm:w-[min(76vw,312px)] lg:w-auto lg:min-w-0 lg:max-w-none lg:snap-none"
              role="listitem"
            >
              <BeyondSightTile item={item} className="h-full min-h-[200px]" />
            </div>
          ))}
          <div className="w-2 shrink-0 lg:hidden" aria-hidden />
        </div>
      </SectionContainer>
    </section>
  );
}
