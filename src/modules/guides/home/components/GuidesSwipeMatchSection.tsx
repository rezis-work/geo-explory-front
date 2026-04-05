import type { ReactNode } from "react";
import Image from "next/image";
import { HandHeart, Heart, MessageSquare, Star, X } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { cn } from "@/lib/cn";

const PROFILE_IMAGE = "/images/placeholder-tour-3.svg";

function StarRating({ value }: { value: string }) {
  return (
    <div className="flex items-center gap-1.5" aria-label={`Rating ${value} out of 5`}>
      <Star
        size={18}
        className="shrink-0 fill-red-600 text-red-600"
        strokeWidth={0}
        aria-hidden
      />
      <span className="text-base font-semibold tabular-nums text-neutral-900">{value}</span>
    </div>
  );
}

function SwipeProfileCard() {
  return (
    <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
      {/* stacked back card */}
      <div
        className="absolute left-3 right-3 top-3 aspect-[3/4] rounded-2xl bg-neutral-200/90 shadow-sm ring-1 ring-black/5"
        aria-hidden
      />
      <article className="relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5">
        <div className="relative aspect-[3/4] w-full bg-neutral-100">
          <Image
            src={PROFILE_IMAGE}
            alt="Luka, local guide in Tbilisi"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 380px, 90vw"
            unoptimized={PROFILE_IMAGE.endsWith(".svg")}
          />
        </div>
        <div className="border-t border-neutral-100 p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-bold text-neutral-900">Luka, 26</h3>
            <StarRating value="4.9" />
          </div>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600">
            &ldquo;I&apos;ll show you the best techno clubs and hidden bakery spots in Old
            Tbilisi.&rdquo;
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-200 text-neutral-600 shadow-sm transition-colors hover:bg-neutral-300"
              aria-label="Pass"
            >
              <X size={22} strokeWidth={2.25} aria-hidden />
            </button>
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-md transition-colors hover:bg-red-700"
              aria-label="Like"
            >
              <Heart size={22} className="fill-white" strokeWidth={2} aria-hidden />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

function FeatureMiniCard({
  icon,
  title,
  description,
  iconWrapClassName,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  iconWrapClassName: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 sm:p-6">
      <div
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-xl shadow-sm ring-1 ring-black/5",
          iconWrapClassName
        )}
        aria-hidden
      >
        {icon}
      </div>
      <h3 className="mt-4 text-base font-bold text-neutral-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600">{description}</p>
    </div>
  );
}

export function GuidesSwipeMatchSection() {
  return (
    <section className="bg-neutral-100 py-14 sm:py-16 lg:py-20">
      <SectionContainer>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="lg:col-span-5">
            <SwipeProfileCard />
          </div>

          <div className="min-w-0 lg:col-span-7">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Swipe, Match, Chat.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              We&apos;ve reinvented how you find guides. Forget boring listings. Swipe through
              personalities that match your vibe, start a conversation, and plan your adventure
              naturally.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6">
              <FeatureMiniCard
                icon={<MessageSquare className="text-red-600" size={22} strokeWidth={2.25} />}
                iconWrapClassName="bg-rose-50"
                title="Instant Connection"
                description="Message your guide directly before booking to ensure the perfect fit."
              />
              <FeatureMiniCard
                icon={<HandHeart className="text-sky-600" size={22} strokeWidth={2.25} />}
                iconWrapClassName="bg-sky-50"
                title="Shared Interests"
                description="Whether it&apos;s brutalist architecture or wine tasting, find your niche."
              />
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
