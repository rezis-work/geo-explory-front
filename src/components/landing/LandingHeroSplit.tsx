import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/shared/ui/Button";
import { SurfaceCard } from "@/components/shared/ui/SurfaceCard";
import { DefaultShieldIcon } from "@/components/landing/DefaultShieldIcon";
import { HeroMedia } from "@/components/landing/HeroMedia";
import type { LandingHeroSplitProps } from "@/components/landing/landing-hero-types";

export function LandingHeroSplit({
  title,
  description,
  mobileExtraLine,
  primaryAction,
  secondaryAction,
  image,
  floatingCard,
}: LandingHeroSplitProps) {
  const card = floatingCard;

  return (
    <section className="relative bg-white md:bg-white">
      <div className="relative min-h-[min(100svh,720px)] md:min-h-0">
        <div className="absolute inset-0 md:hidden">
          <HeroMedia
            src={image.src}
            alt={image.alt}
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-linear-to-t from-black/75 via-black/35 to-black/20"
            aria-hidden
          />
        </div>

        <SectionContainer className="relative z-10 flex min-h-[min(100svh,720px)] flex-col items-center justify-end pb-10 pt-24 md:min-h-0 md:justify-center md:pb-16 md:pt-16 lg:flex-row lg:items-center lg:justify-start lg:gap-12 lg:py-20">
          <div className="min-w-0 w-full max-w-xl text-center lg:max-w-none lg:w-1/2 lg:pr-8 xl:pr-12 lg:text-left">
            <h1 className="mx-auto max-w-xl text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl md:text-neutral-900 lg:mx-0 lg:max-w-2xl lg:text-5xl">
              {title}
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/90 md:mt-5 md:text-neutral-600 lg:mx-0">
              {description}
            </p>
            {mobileExtraLine ? (
              <p className="mx-auto mt-2 max-w-lg text-sm text-white/85 md:hidden lg:mx-0">
                {mobileExtraLine}
              </p>
            ) : null}

            <div className="mt-8 flex w-full flex-col items-center gap-3 md:hidden">
              <Button
                href={primaryAction.href}
                variant="primary"
                size="pill"
                className="w-full max-w-sm"
              >
                {primaryAction.label}
              </Button>
              <Button
                href={secondaryAction.href}
                variant="inverse"
                size="pill"
                className="w-full max-w-sm"
              >
                {secondaryAction.label}
              </Button>
            </div>

            <div className="mt-10 hidden flex-wrap justify-center gap-3 md:flex lg:hidden">
              <Button href={primaryAction.href} variant="primary" size="md" className="shrink-0">
                {primaryAction.label}
              </Button>
              <Button href={secondaryAction.href} variant="secondary" size="md" className="shrink-0">
                {secondaryAction.label}
              </Button>
            </div>

            <div className="mt-10 hidden flex-wrap justify-start gap-3 lg:flex">
              <Button href={primaryAction.href} variant="primary" size="md" className="shrink-0">
                {primaryAction.label}
              </Button>
              <Button href={secondaryAction.href} variant="secondary" size="md" className="shrink-0">
                {secondaryAction.label}
              </Button>
            </div>
          </div>

          <div className="relative mt-10 hidden w-full max-w-xl pb-8 md:block md:pb-10 lg:mt-0 lg:w-1/2 lg:max-w-none lg:min-w-0 lg:pb-10">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-xl shadow-black/10 ring-1 ring-black/5">
              <HeroMedia
                src={image.src}
                alt={image.alt}
                className="object-cover object-center"
                sizes="(min-width: 1024px) 45vw, (min-width: 768px) 42rem, 100vw"
                priority
              />
            </div>
            {card ? (
              <SurfaceCard className="absolute -bottom-4 left-4 right-auto z-10 max-w-sm lg:-bottom-5 lg:left-6">
                <div className="flex gap-3">
                  {card.icon ?? <DefaultShieldIcon />}
                  <div className="min-w-0">
                    <p className="font-semibold text-neutral-900">{card.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-600">{card.description}</p>
                  </div>
                </div>
              </SurfaceCard>
            ) : null}
          </div>
        </SectionContainer>
      </div>
    </section>
  );
}
