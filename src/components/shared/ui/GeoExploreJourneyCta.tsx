import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { cn } from "@/lib/cn";

export type GeoExploreJourneyCtaProps = {
  /** Inner card: background, spacing utilities (e.g. `mb-12`), etc. */
  className?: string;
};

export default function GeoExploreJourneyCta({
  className = "bg-red-700",
}: GeoExploreJourneyCtaProps) {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <SectionContainer>
        <div
          className={cn(
            className,
            "w-full rounded-3xl px-4 py-12 text-center text-white sm:px-6 sm:py-14 md:px-8 lg:py-16"
          )}
        >
          <div className="mx-auto max-w-xl lg:max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl xl:text-4xl">
              Start your journey in Georgia today
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-base lg:mt-4">
              Join thousands of travelers living the local way.
            </p>

            <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:mt-10 lg:max-w-none lg:flex-row lg:justify-center lg:gap-4">
              <Link
                href="/join"
                className={cn(
                  "inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-colors",
                  "bg-white text-red-600 shadow-md hover:bg-neutral-100",
                  "lg:w-auto lg:min-w-40"
                )}
              >
                Join Now
                <ChevronRight className="shrink-0" size={18} strokeWidth={2} aria-hidden />
              </Link>
              <Link
                href="/explore"
                className={cn(
                  "inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-colors",
                  "border-2 border-white bg-transparent text-white hover:bg-white/10",
                  "lg:w-auto lg:min-w-40"
                )}
              >
                Explore Now
                <ChevronRight className="shrink-0" size={18} strokeWidth={2} aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
