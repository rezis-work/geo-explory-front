import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { BeyondSightsCard } from "@/components/shared/ui/reusableCards/BeyondSightsCard";
import { cn } from "@/lib/cn";
import { BEYOND_THE_SIGHTS } from "../api/homeApi";

export function HomeBeyondTheSights() {
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

        {/* Mobile: tight editorial carousel — mandatory snap, smaller gaps, pronounced “peek”. */}
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
              <BeyondSightsCard {...item} className="h-full min-h-[200px]" />
            </div>
          ))}
          <div className="w-2 shrink-0 lg:hidden" aria-hidden />
        </div>
      </SectionContainer>
    </section>
  );
}
