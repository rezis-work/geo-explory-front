import Image from "next/image";
import { Star } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { cn } from "@/lib/cn";

const AVATAR_STACK_SRC = [
  "/images/placeholder-tour-1.svg",
  "/images/placeholder-tour-2.svg",
  "/images/placeholder-tour-3.svg",
] as const;

const WANDERER_REVIEWS = [
  {
    quote:
      "The wine tour in Kakheti was life-changing. We visited family cellars I would never have found alone. The hospitality of Georgia is unmatched!",
    name: "Elena Rodriguez",
    traveledLabel: "Traveled Oct 2023",
    avatarSrc: "/images/placeholder-tour-2.svg",
    avatarAlt: "Elena Rodriguez",
  },
  {
    quote:
      "Stepantsminda was breathtaking. Our guide Levan was so knowledgeable about the history. Everything was perfectly organized from start to finish.",
    name: "Marc Thorne",
    traveledLabel: "Traveled Sept 2023",
    avatarSrc: "/images/placeholder-tour-3.svg",
    avatarAlt: "Marc Thorne",
  },
] as const;

function StarRow() {
  return (
    <div className="flex gap-0.5 text-red-600" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          className="shrink-0 fill-red-600 stroke-red-600"
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

function WandererReviewCard({
  quote,
  name,
  traveledLabel,
  avatarSrc,
  avatarAlt,
}: {
  quote: string;
  name: string;
  traveledLabel: string;
  avatarSrc: string;
  avatarAlt: string;
}) {
  return (
    <article className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-md shadow-black/5 ring-1 ring-black/5 sm:p-7">
      <p
        className="pointer-events-none absolute right-3 top-2 font-serif text-[4.5rem] leading-none text-rose-100 sm:right-4 sm:text-[5.25rem]"
        aria-hidden
      >
        &ldquo;
      </p>

      <div className="relative flex items-start justify-between gap-4 pr-10">
        <StarRow />
      </div>

      <blockquote className="relative mt-4 text-sm italic leading-relaxed text-neutral-700 sm:text-base">
        {quote}
      </blockquote>

      <div className="relative mt-6 flex items-center gap-3">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-neutral-200 ring-2 ring-white">
          <Image src={avatarSrc} alt={avatarAlt} fill className="object-cover" sizes="48px" unoptimized />
        </div>
        <div className="min-w-0">
          <p className="font-bold text-neutral-900">{name}</p>
          <p className="text-sm text-neutral-500">{traveledLabel}</p>
        </div>
      </div>
    </article>
  );
}

function SocialAvatarStack() {
  return (
    <div className="flex items-center pt-2">
      <div className="flex items-center pl-1" aria-hidden>
        {AVATAR_STACK_SRC.map((src, i) => (
          <div
            key={src}
            className={cn(
              "relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-white bg-neutral-200 shadow-sm",
              i > 0 && "-ml-3"
            )}
          >
            <Image src={src} alt="" fill className="object-cover" sizes="44px" unoptimized />
          </div>
        ))}
      </div>
      <div
        className="-ml-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-white bg-rose-100 text-xs font-bold text-red-600 shadow-sm"
        role="img"
        aria-label="Join over four thousand travelers on GeoExplory"
      >
        +4k
      </div>
    </div>
  );
}

export function ToursWanderersSaySection() {
  return (
    <section className="bg-neutral-50 py-14 sm:py-16 lg:py-20">
      <SectionContainer>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
          <div className="max-w-md shrink-0 lg:pt-1">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl">
              What our wanderers say
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
              Real stories from travelers who explored the heart of the Caucasus with us.
            </p>
            <SocialAvatarStack />
          </div>

          <div className="min-w-0 flex-1">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {WANDERER_REVIEWS.map((item) => (
                <WandererReviewCard key={item.name} {...item} />
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
