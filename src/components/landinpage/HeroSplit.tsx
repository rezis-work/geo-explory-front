import Image from "next/image";
import HeroTextSection from "./HeroTextSection";
import { SectionContainer } from "../layout/SectionContainer";
import { SurfaceCard } from "../shared/ui/SurfaceCard";
import { DefaultShieldIcon } from "./DefaultShieldIcon";
import type { HeroSplitProps } from "./hero-types";

export default function HeroSplit({
  title,
  description,
  primaryAction,
  secondaryAction,
  image,
  mobileExtraLine,
  floatingCard,
}: HeroSplitProps) {
  return (
    <section className="relative bg-white">
      <div className="relative min-h-[min(100svh,720px)] md:min-h-0">
        <div className="absolute inset-0 md:hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
            unoptimized={image.src.endsWith(".svg")}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/35 to-black/20" aria-hidden />
        </div>

        <SectionContainer className="relative z-10 flex min-h-[min(100svh,720px)] flex-col items-center justify-center pb-10 pt-24 md:min-h-0 md:justify-center md:pb-16 md:pt-16 lg:flex-row lg:items-center lg:justify-center lg:gap-12 lg:py-20">
          <div className="mx-auto w-full max-w-xl lg:mx-0 lg:w-1/2">
            <HeroTextSection
              tone="splitResponsive"
              title={title}
              description={description}
              mobileExtraLine={mobileExtraLine}
              primaryAction={primaryAction}
              secondaryAction={secondaryAction}
            />
          </div>

          <div className="relative mt-10 hidden w-full max-w-xl md:mx-auto md:block lg:mx-0 lg:mt-0 lg:w-1/2">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
                priority
                unoptimized={image.src.endsWith(".svg")}
              />
            </div>

            {floatingCard ? (
              <SurfaceCard className="absolute -bottom-4 left-4 max-w-sm">
                <div className="flex gap-3">
                  {floatingCard.icon ?? <DefaultShieldIcon />}
                  <div>
                    <p className="font-semibold">{floatingCard.title}</p>
                    <p className="mt-1 text-sm text-neutral-600">{floatingCard.description}</p>
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
