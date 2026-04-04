import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PopularTourCard } from "@/components/shared/ui/reusableCards/PopularTourCard";
import { TOURS } from "../api/homeApi";

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={18}
      height={18}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}



export function HomePopularTours() {
  return (
    <section className="bg-neutral-100 py-14 sm:py-16 lg:py-20">
      <SectionContainer>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Popular Tours
            </h2>
            <p className="mt-2 max-w-xl text-base text-neutral-600">
              The most loved experiences by our community
            </p>
          </div>
          <Link
            href="/tours"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-red-600 hover:text-red-700 sm:mb-0.5"
          >
            View All
            <ArrowRightIcon />
          </Link>
        </div>

        <div
          className="mt-10 grid list-none grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          role="list"
        >
          {TOURS.map((tour) => (
            <div key={tour.href ?? tour.title} className="min-w-0">
              <PopularTourCard tour={tour} />
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
