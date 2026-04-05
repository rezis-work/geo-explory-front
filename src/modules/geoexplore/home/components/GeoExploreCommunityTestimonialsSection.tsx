import Image from "next/image";
import { Star } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { cn } from "@/lib/cn";
import {
  COMMUNITY_TESTIMONIALS,
  type GeoExploreCommunityTestimonialContent,
} from "../api/homeApi";

function CardStarRow({ className }: { className?: string }) {
  return (
    <div className={cn("flex justify-center gap-0.5 text-red-600", className)} aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={16}
          className="shrink-0 fill-red-600 stroke-red-600"
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

function TestimonialTile({
  item,
  className,
}: {
  item: GeoExploreCommunityTestimonialContent;
  className?: string;
}) {
  const { name, role, quote, avatarSrc, avatarAlt } = item;
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-3xl p-5 sm:p-6",
        "max-lg:bg-neutral-200",
        "lg:rounded-2xl lg:bg-white lg:shadow-sm lg:ring-1 lg:ring-black/5",
        className
      )}
    >
      <CardStarRow className="mb-4 lg:hidden" />

      <div className="hidden gap-3 lg:flex">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-neutral-200">
          <Image
            src={avatarSrc}
            alt={avatarAlt}
            fill
            className="object-cover"
            sizes="44px"
            unoptimized
          />
        </div>
        <div className="min-w-0 pt-0.5">
          <p className="font-semibold text-neutral-900">{name}</p>
          <p className="text-sm text-neutral-500">{role}</p>
        </div>
      </div>

      <blockquote
        className={cn(
          "text-sm leading-relaxed text-pretty text-neutral-800",
          "max-lg:mb-0 max-lg:flex-1 max-lg:text-center max-lg:italic",
          "lg:mt-4 lg:text-left lg:not-italic lg:text-neutral-700"
        )}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div className="mt-5 flex items-center justify-center gap-3 lg:hidden">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-neutral-300">
          <Image
            src={avatarSrc}
            alt={avatarAlt}
            fill
            className="object-cover"
            sizes="44px"
            unoptimized
          />
        </div>
        <div className="min-w-0 text-left">
          <p className="font-semibold text-neutral-900">{name}</p>
          <p className="text-sm text-neutral-600">{role}</p>
        </div>
      </div>
    </article>
  );
}

export function GeoExploreCommunityTestimonialsSection() {
  return (
    <section className="bg-neutral-50 py-14 sm:py-16 lg:py-20">
      <SectionContainer>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            What our community says
          </h2>
          <div className="mt-4 hidden flex-wrap items-center justify-center gap-x-2 gap-y-2 lg:flex">
            <span className="flex gap-0.5 text-amber-400" aria-hidden>
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="shrink-0 fill-amber-400 stroke-amber-400"
                  strokeWidth={1.5}
                />
              ))}
            </span>
            <span className="text-sm text-neutral-600">4.9/5 based on 2,000+ reviews</span>
          </div>
        </div>

        <div
          className={cn(
            "mt-10 flex snap-x snap-proximity gap-6 overflow-x-auto overscroll-x-contain pb-3",
            "scroll-pl-4 scroll-pr-8 sm:scroll-pl-5 sm:scroll-pr-10",
            "-mx-4 px-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
            "sm:-mx-5 sm:px-5 md:-mx-6 md:px-6",
            "lg:hidden"
          )}
          role="list"
        >
          {COMMUNITY_TESTIMONIALS.map((item) => (
            <div
              key={`${item.name}-${item.role}`}
              className="w-[min(92vw,400px)] shrink-0 snap-center sm:w-[min(90vw,420px)]"
              role="listitem"
            >
              <TestimonialTile item={item} className="h-full min-h-[280px]" />
            </div>
          ))}
          <div className="w-4 shrink-0" aria-hidden />
        </div>

        <div className="mt-10 hidden list-none gap-6 lg:grid lg:grid-cols-3 lg:gap-8" role="list">
          {COMMUNITY_TESTIMONIALS.map((item) => (
            <div key={`${item.name}-${item.role}`} className="min-w-0" role="listitem">
              <TestimonialTile item={item} />
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
