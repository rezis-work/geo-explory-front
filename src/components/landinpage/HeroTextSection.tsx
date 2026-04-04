import type { ReactNode } from "react";
import { Button } from "@/components/shared/ui/Button";
import { cn } from "@/lib/cn";

export type HeroTextAction = { label: string; href: string };

export type HeroTextSectionTone = "plain" | "onDark" | "splitResponsive" | "onLightGradient";

export type HeroTextSectionProps = {
  tone: HeroTextSectionTone;
  title: ReactNode;
  description: string;
  eyebrow?: string;
  mobileExtraLine?: string;
  primaryAction?: HeroTextAction;
  secondaryAction?: HeroTextAction;
  className?: string;
};

const titleBase =
  "text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl";

const bodyBase = "mt-4 max-w-xl text-base leading-relaxed sm:text-lg";

const toneStyles: Record<HeroTextSectionTone, { title: string; body: string }> = {
  plain: { title: "text-neutral-900", body: "text-neutral-600" },
  onDark: { title: "text-white", body: "text-white/90" },
  splitResponsive: {
    title: "text-white md:text-neutral-900",
    body: "text-white/90 md:mt-5 md:text-neutral-600",
  },
  onLightGradient: { title: "text-neutral-900", body: "text-neutral-700" },
};

const eyebrowClass =
  "text-xs font-semibold uppercase tracking-[0.18em] text-red-600 sm:text-sm";

function HeroCtas({
  tone,
  primary,
  secondary,
}: {
  tone: HeroTextSectionTone;
  primary: HeroTextAction;
  secondary?: HeroTextAction;
}) {
  const split = tone === "splitResponsive" && secondary;

  return (
    <div
      className={cn(
        "mt-8 flex gap-3",
        split
          ? "mx-auto w-full max-w-sm flex-col items-center justify-center md:mx-0 md:mt-10 md:max-w-none md:flex-row md:flex-wrap md:items-stretch md:justify-start"
          : "flex-col justify-start sm:flex-row sm:flex-wrap"
      )}
    >
      <Button
        href={primary.href}
        variant="primary"
        size="pill"
        className={cn("shadow-md", split && "w-full md:w-auto md:px-6")}
      >
        {primary.label}
      </Button>
      {secondary ? (
        <Button
          href={secondary.href}
          variant={tone === "onDark" ? "inverse" : "secondary"}
          size="pill"
          className={cn(
            tone === "onDark" &&
              "border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
            tone !== "onDark" && "shadow-sm",
            split && "w-full md:w-auto md:px-6"
          )}
        >
          {secondary.label}
        </Button>
      ) : null}
    </div>
  );
}

export function HeroTextSection({
  tone,
  title,
  description,
  eyebrow,
  mobileExtraLine,
  primaryAction,
  secondaryAction,
  className,
}: HeroTextSectionProps) {
  const s = toneStyles[tone];

  return (
    <div
      className={cn(
        "min-w-0 max-w-xl lg:max-w-2xl",
        tone === "splitResponsive" ? "text-center md:text-left" : "text-left",
        className
      )}
    >
      {eyebrow && tone === "onLightGradient" ? <p className={eyebrowClass}>{eyebrow}</p> : null}

      <h1 className={cn(eyebrow && tone === "onLightGradient" && "mt-3", titleBase, s.title)}>
        {title}
      </h1>

      <p className={cn(bodyBase, s.body)}>{description}</p>

      {mobileExtraLine && tone === "splitResponsive" ? (
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/85 md:hidden">{mobileExtraLine}</p>
      ) : null}

      {primaryAction ? (
        <HeroCtas tone={tone} primary={primaryAction} secondary={secondaryAction} />
      ) : null}
    </div>
  );
}

export default HeroTextSection;
