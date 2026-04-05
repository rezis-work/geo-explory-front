import Image from "next/image";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/shared/ui/Button";
import { cn } from "@/lib/cn";

const TOURS_HERO_IMAGE = "/images/placeholder-tour-1.svg";
const MIN_H = "min-h-[min(80svh,560px)]";

export function ToursHero() {
  return (
    <section className={cn("relative overflow-x-hidden bg-white md:bg-transparent", MIN_H)}>
      <div className="absolute inset-0 hidden md:block">
        <Image
          src={TOURS_HERO_IMAGE}
          alt="Georgia mountains and Gergeti Trinity Church landscape"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          unoptimized={TOURS_HERO_IMAGE.endsWith(".svg")}
        />
        <div
          className="absolute inset-0 bg-linear-to-r from-black/70 via-black/45 to-black/15"
          aria-hidden
        />
      </div>

      <SectionContainer
        className={cn(
          "relative z-10 flex justify-start",
          "items-start pt-20 pb-14 sm:pt-24 sm:pb-16 md:items-center md:py-16 md:pt-24 lg:py-24",
          MIN_H
        )}
      >
        <div className="w-full min-w-0 max-w-xl text-left md:max-w-2xl">
          <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-neutral-900 md:text-white sm:text-4xl lg:text-5xl">
            <span className="block sm:max-w-md">
              Discover unforgettable{" "}
              <span className="text-red-500 md:text-red-400">tours</span> in Georgia
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg sm:mt-5 md:text-white/90">
            From mountains to wine regions — explore Georgia with curated experiences designed for
            the modern wanderer.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/explore" variant="primary" size="pill" className="shadow-md">
              Browse Tours
            </Button>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
