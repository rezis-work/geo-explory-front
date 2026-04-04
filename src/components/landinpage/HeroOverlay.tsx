import Image from "next/image";
import HeroTextSection from "./HeroTextSection";
import { SectionContainer } from "../layout/SectionContainer";
import type { HeroOverlayProps } from "./hero-types";
import { cn } from "@/lib/cn";

export default function HeroOverlay({
  tone,
  title,
  headline,
  description,
  primaryAction,
  secondaryAction,
  image,
  eyebrow,
  overlayClassName,
  minHeightClassName,
}: HeroOverlayProps) {
  const isLight = tone === "light";

  const minH =
    minHeightClassName ??
    (isLight ? "min-h-[min(85svh,640px)]" : "min-h-[min(80svh,560px)]");

  const overlayClass =
    overlayClassName ??
    (isLight
      ? "bg-linear-to-r from-white via-white/85 to-white/10 sm:via-white/75"
      : "bg-black/45");

  const resolvedTitle =
    headline != null ? (
      <>
        <span className="block">{headline.line1}</span>
        <span className={cn("block", isLight && "text-red-600")}>{headline.line2}</span>
      </>
    ) : (
      title ?? null
    );

  return (
    <section className={cn("relative overflow-hidden", isLight && "bg-neutral-100", minH)}>
      <div className="absolute inset-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
          unoptimized={image.src.endsWith(".svg")}
        />
        <div className={cn("absolute inset-0", overlayClass)} aria-hidden />
      </div>

      <SectionContainer
        className={cn(
          "relative z-10 flex items-center",
          isLight ? "py-14 sm:py-16 lg:py-20" : "py-16 sm:py-20 lg:py-24",
          minH
        )}
      >
        <div className={cn("text-left", isLight ? "max-w-xl" : "max-w-2xl text-white")}>
          <HeroTextSection
            tone={isLight ? "onLightGradient" : "onDark"}
            eyebrow={eyebrow}
            title={resolvedTitle}
            description={description}
            primaryAction={primaryAction}
            secondaryAction={secondaryAction}
          />
        </div>
      </SectionContainer>
    </section>
  );
}
