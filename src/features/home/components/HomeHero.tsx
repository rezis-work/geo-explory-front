import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const HERO_IMAGE = "/images/placeholder-hero.svg";

function HeroImage({
  alt,
  className,
  priority,
  sizes,
}: {
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={HERO_IMAGE}
      alt={alt}
      fill
      className={className}
      sizes={sizes}
      priority={priority}
      unoptimized
    />
  );
}

function ShieldBadge() {
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700"
      aria-hidden
    >
      <svg viewBox="0 0 24 24" width={22} height={22} fill="currentColor">
        <path d="M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zM10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    </div>
  );
}

export function HomeHero() {
  return (
    <section className="relative bg-white md:bg-white">
      <div className="relative min-h-[min(100svh,720px)] md:min-h-0">
        <div className="absolute inset-0 md:hidden">
          <HeroImage
            alt="Georgia skyline"
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-linear-to-t from-black/75 via-black/35 to-black/20"
            aria-hidden
          />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[min(100svh,720px)] w-full max-w-7xl flex-col items-center justify-end px-4 pb-10 pt-24 sm:px-5 md:min-h-0 md:justify-center md:px-6 md:pb-16 md:pt-16 lg:flex-row lg:items-center lg:justify-start lg:gap-12 lg:py-20">
          <div className="min-w-0 w-full max-w-xl text-center lg:max-w-none lg:w-1/2 lg:pr-8 xl:pr-12 lg:text-left">
            <h1 className="mx-auto max-w-xl text-3xl font-bold leading-tight tracking-tight text-white lg:mx-0 lg:max-w-2xl md:text-4xl md:text-neutral-900 lg:text-5xl">
              Explore and live in{" "}
              <span className="text-red-600 md:text-red-600">Georgia</span> like a local
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/90 lg:mx-0 md:mt-5 md:text-neutral-600">
              Local guides, book tours, meet people, and discover your new home in Georgia.
              The bridge between foreign explorers and local heart.
            </p>
            <p className="mx-auto mt-2 max-w-lg text-sm text-white/85 md:hidden">
              Experience authentic Caucasian hospitality beyond the tourist trails.
            </p>

            <div className="mt-8 flex w-full flex-col items-center gap-3 md:hidden">
              <Button
                href="/explore"
                variant="primary"
                size="pill"
                className="w-full max-w-sm"
              >
                Start Exploring
              </Button>
              <Button
                href="/guides"
                variant="inverse"
                size="pill"
                className="w-full max-w-sm"
              >
                Find a Local Guide
              </Button>
            </div>

            <div className="mt-10 hidden flex-wrap justify-center gap-3 md:flex lg:hidden">
              <Button href="/explore" variant="primary" size="md" className="shrink-0">
                Start Exploring
              </Button>
              <Button href="/guides" variant="secondary" size="md" className="shrink-0">
                Find a Local Guide
              </Button>
            </div>

            <div className="mt-10 hidden flex-wrap justify-start gap-3 lg:flex">
              <Button href="/explore" variant="primary" size="md" className="shrink-0">
                Start Exploring
              </Button>
              <Button href="/guides" variant="secondary" size="md" className="shrink-0">
                Find a Local Guide
              </Button>
            </div>
          </div>

          <div className="relative mt-10 hidden w-full max-w-xl pb-8 md:block md:pb-10 lg:mt-0 lg:w-1/2 lg:max-w-none lg:min-w-0 lg:pb-10">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-xl shadow-black/10 ring-1 ring-black/5">
              <HeroImage
                alt="Historic Georgia city view"
                className="object-cover object-center"
                sizes="(min-width: 1024px) 45vw, (min-width: 768px) 42rem, 100vw"
                priority
              />
            </div>
            <SurfaceCard className="absolute -bottom-4 left-4 right-auto z-10 max-w-sm lg:-bottom-5 lg:left-6">
              <div className="flex gap-3">
                <ShieldBadge />
                <div className="min-w-0">
                  <p className="font-semibold text-neutral-900">Verified Guides</p>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                    Over 500+ local experts ready to show you the hidden Georgia.
                  </p>
                </div>
              </div>
            </SurfaceCard>
          </div>
        </div>
      </div>
    </section>
  );
}
