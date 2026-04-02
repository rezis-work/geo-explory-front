import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const accentStyles = {
  rose: "bg-rose-100 text-red-600",
  sky: "bg-sky-100 text-sky-600",
  amber: "bg-amber-100 text-amber-800",
  slate: "bg-neutral-200 text-neutral-800",
} as const;

export type FeatureCardAccent = keyof typeof accentStyles;

export type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  /** Preset background + icon color, or pass `iconWrapperClassName` to override */
  accent?: FeatureCardAccent;
  iconWrapperClassName?: string;
  className?: string;
};

export function FeatureCard({
  icon,
  title,
  description,
  accent = "slate",
  iconWrapperClassName,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col  rounded-2xl bg-white px-5 py-6  shadow-sm ring-1 ring-black/5 sm:px-6 sm:py-7",
        className
      )}
    >
      <div
        className={cn(
          "mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl [&_svg]:h-6 [&_svg]:w-6",
          iconWrapperClassName ?? accentStyles[accent]
        )}
        aria-hidden
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold tracking-tight text-neutral-900">{title}</h3>
      <p className="mt-2 max-w-prose text-sm leading-relaxed text-pretty text-neutral-600">
        {description}
      </p>
    </div>
  );
}
