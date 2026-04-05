import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Heart, MapPin } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { cn } from "@/lib/cn";
import { GUIDE_PERSONALITIES } from "@/modules/guides/home/api/guidePersonalities";

function PersonalityCard({
  name,
  rating,
  location,
  tags,
  imageSrc,
  imageAlt,
  className,
}: {
  name: string;
  rating: string;
  location: string;
  tags: readonly [string, string];
  imageSrc: string;
  imageAlt: string;
  className?: string;
}) {
  const unoptimized = imageSrc.endsWith(".svg");

  return (
    <article
      className={cn(
        "overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md",
        className
      )}
    >
      <div className="relative aspect-square w-full bg-neutral-100">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
          unoptimized={unoptimized}
        />
        <button
          type="button"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-neutral-700 shadow-sm ring-1 ring-black/5 transition-colors hover:bg-white hover:text-red-600"
          aria-label={`Save ${name} to favorites`}
        >
          <Heart size={18} strokeWidth={2} className="shrink-0" aria-hidden />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold text-neutral-900">{name}</h3>
          <span className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold tabular-nums text-red-600">
            <span className="text-red-600" aria-hidden>
              ★
            </span>
            {rating}
          </span>
        </div>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-neutral-600">
          <MapPin size={16} className="shrink-0 text-neutral-500" strokeWidth={2} aria-hidden />
          {location}
        </p>
        <ul className="mt-3 flex list-none flex-wrap gap-2" role="list">
          {tags.map((tag) => (
            <li key={tag}>
              <span className="inline-block rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-950/90 ring-1 ring-amber-100/80">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function GuidesDiscoverPersonalitiesSection() {
  return (
    <section
      id="browse-guides"
      className="scroll-mt-20 bg-white py-14 sm:py-16 lg:py-20"
      aria-labelledby="discover-personalities-heading"
    >
      <SectionContainer>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <div className="min-w-0 max-w-3xl">
            <h2
              id="discover-personalities-heading"
              className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl"
            >
              Discover Local Personalities
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
              From high-mountain hikers to culinary maestros, meet the people who make Georgia
              extraordinary.
            </p>
          </div>
          <Link
            href="/guides"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-red-600 transition-colors hover:text-red-700 sm:text-base"
          >
            View all 250+ guides
            <ChevronRight size={18} strokeWidth={2} className="shrink-0" aria-hidden />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {GUIDE_PERSONALITIES.map((guide) => (
            <PersonalityCard key={guide.id} {...guide} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
