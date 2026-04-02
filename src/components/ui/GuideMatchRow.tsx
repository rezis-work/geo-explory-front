import { cn } from "@/lib/cn";

export type GuideMatchRowProps = {
  name: string;
  subtitle: string;
  /** 0–100; displayed as “Match 92%” */
  matchPercent: number;
  /** Optional: gradient + initials used when no image */
  avatarClassName?: string;
  className?: string;
};

function initialsFromName(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function GuideMatchRow({
  name,
  subtitle,
  matchPercent,
  avatarClassName,
  className,
}: GuideMatchRowProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5",
        className
      )}
    >
      <div
        className={cn(
          "flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-neutral-200 to-neutral-300 text-sm font-semibold text-neutral-700",
          avatarClassName
        )}
        aria-hidden
      >
        {initialsFromName(name)}
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-neutral-900">{name}</p>
        <p className="truncate text-sm text-neutral-600">{subtitle}</p>
      </div>
      <span className="shrink-0 rounded-full bg-amber-100 px-3 py-1.5 text-xs font-semibold tabular-nums text-amber-950">
        Match {matchPercent}%
      </span>
    </div>
  );
}
