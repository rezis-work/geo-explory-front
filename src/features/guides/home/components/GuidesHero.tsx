import Image from "next/image";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/shared/ui/Button";
import { cn } from "@/lib/cn";

const GUIDES_HERO_IMAGE = "/images/placeholder-tour-2.svg";
const MIN_H = "min-h-[min(80svh,560px)]";

export type GuidesHeroProps = {
  className?: string;
};

export function GuidesHero({ className }: GuidesHeroProps) {
  return (
    <section className={cn("relative overflow-x-hidden bg-neutral-100", MIN_H, className)}>
      <div className="absolute inset-0">
        <Image
          src={GUIDES_HERO_IMAGE}
          alt="Travelers meeting a local guide at an outdoor café in Georgia"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          unoptimized={GUIDES_HERO_IMAGE.endsWith(".svg")}
        />
        {/* Left wash so copy stays readable (desktop ~half column; mobile full-bleed wash) */}
        <div
          className={cn(
            "absolute inset-0",
            "bg-linear-to-b from-white via-white/92 to-white/55",
            "sm:bg-linear-to-r sm:from-white sm:via-white/90 sm:to-white/5"
          )}
          aria-hidden
        />
      </div>

      <SectionContainer
        className={cn(
          "relative z-10 flex justify-start",
          "items-start pt-20 pb-14 sm:pt-24 sm:pb-16 lg:items-center lg:pt-28 lg:pb-20",
          MIN_H
        )}
      >
        <div className="w-full min-w-0 max-w-lg text-left sm:max-w-xl lg:max-w-2xl">
          <p className="text-[11px] font-semibold uppercase leading-normal tracking-[0.2em] text-red-600 sm:text-xs sm:tracking-[0.22em]">
            GeoExplory Local Guides
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-[1.15] tracking-tight text-neutral-900 sm:mt-4 sm:text-4xl lg:text-5xl">
            <span className="block">Meet locals.</span>
            <span className="block text-red-600">Not just guides.</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600 sm:mt-5 sm:text-lg">
            Pick your person, chat, and explore Georgia together. No stiff scripts, just real
            connections and hidden gems.
          </p>
          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
            <Button
              href="/guides#browse-guides"
              variant="primary"
              size="pill"
              className="w-full shadow-md sm:w-auto"
            >
              Find a Local Guide
            </Button>
            <Button
              href="/guides#how-it-works"
              variant="inverse"
              size="pill"
              className="w-full shadow-sm ring-1 ring-black/5 sm:w-auto"
            >
              How it works
            </Button>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
