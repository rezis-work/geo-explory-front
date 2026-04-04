import { Button } from "@/components/shared/ui/Button";
import { cn } from "@/lib/cn";

export type GuideSpotlightCardProps = {
  name: string;
  subtitle: string;
  quote: string;
  tags: string[];
  ctaHref?: string;
  ctaLabel?: string;
  bestMatch?: boolean;
  className?: string;
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function VerifiedIcon() {
  return (
    <span
      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600 text-white"
      title="Verified guide"
    >
      <svg viewBox="0 0 24 24" width={12} height={12} fill="none" stroke="currentColor" strokeWidth={3}>
        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function GuideSpotlightCard({
  name,
  subtitle,
  quote,
  tags,
  ctaHref = "/match",
  ctaLabel = "Request a Match",
  bestMatch = true,
  className,
}: GuideSpotlightCardProps) {
  return (
    <article
      className={cn(
        "rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 sm:p-6",
        className
      )}
    >
      <div className="flex gap-3">
        <div className="relative shrink-0">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-neutral-200 to-neutral-400 text-base font-semibold text-neutral-800"
            aria-hidden
          >
            {initials(name)}
          </div>
          {bestMatch ? (
            <span className="absolute -bottom-1 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded bg-red-600 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white shadow-sm">
              Best match
            </span>
          ) : null}
        </div>
        <div className="min-w-0 flex-1 pt-0.5">
          <div className="flex items-start gap-2">
            <h3 className="text-lg font-semibold text-neutral-900">{name}</h3>
            <VerifiedIcon />
          </div>
          <p className="mt-0.5 text-sm text-neutral-600">{subtitle}</p>
        </div>
      </div>

      <blockquote className="mt-4 border-l-2 border-neutral-200 pl-4 text-sm italic leading-relaxed text-neutral-600">
        {quote}
      </blockquote>

      <ul className="mt-4 flex list-none flex-wrap justify-center gap-2 sm:justify-start" role="list">
        {tags.map((tag) => (
          <li key={tag}>
            <span className="inline-block rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-neutral-800 ring-1 ring-amber-100">
              {tag}
            </span>
          </li>
        ))}
      </ul>

      <Button
        href={ctaHref}
        variant="dark"
        size="md"
        className="mt-6 w-full rounded-xl py-3"
      >
        {ctaLabel}
      </Button>
    </article>
  );
}
