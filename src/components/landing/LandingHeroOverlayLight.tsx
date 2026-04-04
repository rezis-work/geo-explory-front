import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/shared/ui/Button";
import { cn } from "@/lib/cn";
import { HeroMedia } from "@/components/landing/HeroMedia";
import type { LandingHeroOverlayLightProps } from "@/components/landing/landing-hero-types";

export function LandingHeroOverlayLight({
  eyebrow,
  headline,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage,
  minHeightClassName = "min-h-[min(85svh,640px)]",
}: LandingHeroOverlayLightProps) {
  return (
    <section className={cn("relative overflow-hidden bg-neutral-100", minHeightClassName)}>
      <div className="absolute inset-0">
        <HeroMedia
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0 bg-linear-to-r from-white via-white/85 to-white/10 sm:via-white/75"
          aria-hidden
        />
      </div>

      <SectionContainer
        className={cn(
          "relative z-10 flex items-center py-14 sm:py-16 lg:py-20",
          minHeightClassName
        )}
      >
        <div className="max-w-xl text-left">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600 sm:text-sm">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            <span className="block">{headline.line1}</span>
            <span className="block text-red-600">{headline.line2}</span>
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-neutral-700 sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={primaryAction.href} variant="primary" size="pill" className="shadow-md">
              {primaryAction.label}
            </Button>
            <Button href={secondaryAction.href} variant="secondary" size="pill">
              {secondaryAction.label}
            </Button>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
