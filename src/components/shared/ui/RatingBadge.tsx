import { Star } from "lucide-react";
import { cn } from "@/lib/cn";

export type RatingBadgeProps = {
  /** Pre-formatted score, e.g. from `rating.toFixed(1)` */
  value: string;
  className?: string;
  starClassName?: string;
};

export function RatingBadge({ value, className, starClassName }: RatingBadgeProps) {
  return (
    <span className={cn("inline-flex items-center gap-1 tabular-nums", className)}>
      <Star
        size={14}
        className={cn("shrink-0 fill-amber-500 stroke-amber-500", starClassName)}
        strokeWidth={1.5}
        aria-hidden
      />
      {value}
    </span>
  );
}
