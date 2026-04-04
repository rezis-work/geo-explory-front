import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/shared/ui/Button";
import { cn } from "@/lib/cn";
import { HeroMedia } from "@/components/landing/HeroMedia";
import type { LandingHeroOverlayDarkProps } from "@/components/landing/landing-hero-types";

export function LandingHeroOverlayDark({
  title,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage,
  overlayClassName = "bg-black/45",
  minHeightClassName = "min-h-[min(80svh,560px)]",
}: LandingHeroOverlayDarkProps) {
  return (
    <section className={cn("relative overflow-hidden", minHeightClassName)}>
      <div className="absolute inset-0">
        <HeroMedia
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className={cn("absolute inset-0", overlayClassName)} aria-hidden />
      </div>

      <SectionContainer
        className={cn("relative z-10 flex items-center py-16 sm:py-20 lg:py-24", minHeightClassName)}
      >
        <div className="max-w-2xl text-left text-white">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={primaryAction.href} variant="primary" size="pill" className="shadow-md">
              {primaryAction.label}
            </Button>
            {secondaryAction ? (
              <Button
                href={secondaryAction.href}
                variant="inverse"
                size="pill"
                className="border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              >
                {secondaryAction.label}
              </Button>
            ) : null}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
