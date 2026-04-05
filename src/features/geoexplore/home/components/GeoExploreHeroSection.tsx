import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/shared/ui/Button";
import { cn } from "@/lib/cn";

const HERO_IMAGE = "/images/placeholder-hero.svg";

function VerifiedGuidesIcon() {
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700"
      aria-hidden
    >
      <ShieldCheck size={22} className="text-amber-700" strokeWidth={2} />
    </div>
  );
}

export function GeoExploreHeroSection() {
  return (
    <section className="relative bg-white">
      <div className="relative min-h-[min(100svh,720px)] md:min-h-0">
        <div className="absolute inset-0 md:hidden">
          <Image
            src={HERO_IMAGE}
            alt="Historic Georgia city view"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            unoptimized={HERO_IMAGE.endsWith(".svg")}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/35 to-black/20" aria-hidden />
        </div>

        <SectionContainer className="relative z-10 flex min-h-[min(100svh,720px)] flex-col items-center justify-center pb-10 pt-24 md:min-h-0 md:justify-center md:pb-16 md:pt-16 lg:flex-row lg:items-center lg:justify-center lg:gap-12 lg:py-20">
          <div className="mx-auto w-full max-w-xl lg:mx-0 lg:w-1/2">
            <div className="min-w-0 max-w-xl text-center md:text-left lg:max-w-2xl">
              <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-white md:text-neutral-900 sm:text-4xl lg:text-5xl">
                Explore and live in <span className="text-red-600">Georgia</span> like a local
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 md:mt-5 md:text-neutral-600 sm:text-lg">
                Find local guides, book tours, meet people, and discover your new home in Georgia.
                The bridge between foreign explorers and local heart.
              </p>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/85 md:hidden">
                Experience authentic Caucasian hospitality beyond the tourist trails.
              </p>
              <div
                className={cn(
                  "mt-8 flex gap-3",
                  "mx-auto w-full max-w-sm flex-col items-center justify-center",
                  "md:mx-0 md:mt-10 md:max-w-none md:flex-row md:flex-wrap md:items-stretch md:justify-start"
                )}
              >
                <Button
                  href="/explore"
                  variant="primary"
                  size="pill"
                  className="w-full shadow-md md:w-auto md:px-6"
                >
                  Start Exploring
                </Button>
                <Button
                  href="/guides"
                  variant="secondary"
                  size="pill"
                  className="w-full shadow-sm md:w-auto md:px-6"
                >
                  Find a Local Guide
                </Button>
              </div>
            </div>
          </div>

          <div className="relative mt-10 hidden w-full max-w-xl md:mx-auto md:block lg:mx-0 lg:mt-0 lg:w-1/2">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
              <Image
                src={HERO_IMAGE}
                alt="Historic Georgia city view"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
                priority
                unoptimized={HERO_IMAGE.endsWith(".svg")}
              />
            </div>

            <div className="absolute -bottom-4 left-4 max-w-sm rounded-xl bg-white p-4 shadow-lg shadow-black/10 ring-1 ring-black/5">
              <div className="flex gap-3">
                <VerifiedGuidesIcon />
                <div>
                  <p className="font-semibold">Verified Guides</p>
                  <p className="mt-1 text-sm text-neutral-600">
                    Over 500+ local experts ready to show you the hidden Georgia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>
    </section>
  );
}
