import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { cn } from "@/lib/cn";

export function HomeJourneyCta() {
  return (
    <section className="bg-neutral-50 py-14 text-center sm:py-16 lg:bg-red-600 lg:py-20 lg:text-white">
      <SectionContainer>
        <div className="mx-auto max-w-xl lg:max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl lg:text-3xl lg:text-white xl:text-4xl">
            Start your journey in Georgia today
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base lg:mt-4 lg:text-white/90">
            Join thousands of travelers living the local way.
          </p>

          <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:mt-10 lg:max-w-none lg:flex-row lg:justify-center lg:gap-4">
            <Link
              href="/join"
              className={cn(
                "inline-flex w-full items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold transition-colors",
                "bg-red-600 text-white shadow-sm hover:bg-red-700",
                "lg:w-auto lg:min-w-[10rem] lg:bg-white lg:text-red-600 lg:shadow-md lg:hover:bg-neutral-100"
              )}
            >
              Join Now
            </Link>
            <Link
              href="/explore"
              className={cn(
                "inline-flex w-full items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold transition-colors",
                "bg-neutral-200 text-neutral-900 hover:bg-neutral-300",
                "lg:w-auto lg:min-w-[10rem] lg:border-2 lg:border-white lg:bg-transparent lg:text-white lg:hover:bg-white/10"
              )}
            >
              Explore Now
            </Link>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
