import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { cn } from "@/lib/cn";
import { TOURS } from "@/modules/tours/home/api/toursData";
import { ToursCatalogTourCard } from "@/modules/tours/home/components/ToursCatalogTourCard";

export function ToursPopularGrid() {
  return (
    <section className="bg-white py-14 md:bg-neutral-100 sm:py-16 lg:py-20">
      <SectionContainer>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl">
              Popular Tours
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
              Our most-loved handpicked experiences
            </p>
          </div>
          <Link
            href="/tours"
            className={cn(
              "shrink-0 text-sm font-semibold text-red-600 transition-colors hover:text-red-700",
              "sm:min-h-11 sm:self-end sm:pb-0.5"
            )}
          >
            View all destinations
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {TOURS.map((tour) => (
            <div key={tour.href ?? tour.title} className="min-w-0">
              <ToursCatalogTourCard tour={tour} />
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
