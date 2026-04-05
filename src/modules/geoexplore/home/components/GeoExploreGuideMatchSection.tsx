import type { ReactNode } from "react";
import { Check, MessageSquare } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/shared/ui/Button";
import { cn } from "@/lib/cn";

const BULLETS = [
  "Personalized interest matching",
  "Direct in-app messaging",
  "Verified local experts only",
];

function guideInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function CheckBullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3">
      <span
        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-600 text-white"
        aria-hidden
      >
        <Check size={14} strokeWidth={2.5} className="text-white" aria-hidden />
      </span>
      <span className="text-neutral-800">{children}</span>
    </li>
  );
}

function Eyebrow({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "text-xs lg:hidden  font-semibold uppercase tracking-[0.14em] text-red-600",
        className
      )}
    >
      Smart match
    </p>
  );
}

function VerifiedGuideBadge() {
  return (
    <span
      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600 text-white"
      title="Verified guide"
    >
      <Check size={12} strokeWidth={3} className="text-white" aria-hidden />
    </span>
  );
}

function MobileGuideSpotlight({
  name,
  subtitle,
  quote,
  tags,
  className,
}: {
  name: string;
  subtitle: string;
  quote: string;
  tags: string[];
  className?: string;
}) {
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
            {guideInitials(name)}
          </div>
          <span className="absolute -bottom-1 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded bg-red-600 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white shadow-sm">
            Best match
          </span>
        </div>
        <div className="min-w-0 flex-1 pt-0.5">
          <div className="flex items-start gap-2">
            <h3 className="text-lg font-semibold text-neutral-900">{name}</h3>
            <VerifiedGuideBadge />
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

      <Button href="/match" variant="dark" size="md" className="mt-6 w-full rounded-xl py-3">
        Request a Match
      </Button>
    </article>
  );
}

function DesktopMatchRow({
  name,
  subtitle,
  matchPercent,
  avatarClassName,
}: {
  name: string;
  subtitle: string;
  matchPercent: number;
  avatarClassName?: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
      <div
        className={cn(
          "flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-neutral-200 to-neutral-300 text-sm font-semibold text-neutral-700",
          avatarClassName
        )}
        aria-hidden
      >
        {guideInitials(name)}
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

function MatchChatPreview({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-3 rounded-2xl bg-rose-50/90 p-4 ring-1 ring-rose-100/80">
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white shadow-sm"
        aria-hidden
      >
        <MessageSquare size={20} className="text-white" strokeWidth={2} aria-hidden />
      </div>
      <p className="min-w-0 pt-0.5 text-sm leading-relaxed text-neutral-800">{children}</p>
    </div>
  );
}

export function GeoExploreGuideMatchSection() {
  return (
    <section className="bg-neutral-50 py-14 sm:py-16 lg:py-20">
      <SectionContainer>
        <div className="lg:hidden">
          <Eyebrow />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Pick your guide
          </h2>
          <MobileGuideSpotlight
            className="mt-6"
            name="Luka G."
            subtitle="Kazbegi specialist · Hiking & supra host"
            quote="I'll show you the hidden mountain passes only shepherds know. We'll end with a supra at my uncle's."
            tags={["English", "History buff", "Photography"]}
          />
        </div>

        <div className="hidden gap-12 lg:grid lg:grid-cols-2 lg:items-start">
          <div className="rounded-3xl bg-neutral-200/80 p-6 shadow-inner sm:p-8">
            <div className="flex flex-col gap-4">
              <DesktopMatchRow name="Luka G." subtitle="Hiking & history expert" matchPercent={98} />
              <DesktopMatchRow
                name="Nino K."
                subtitle="Wine & gastronomy"
                matchPercent={92}
                avatarClassName="from-rose-100 to-amber-100 text-amber-900"
              />
              <MatchChatPreview>
                Hey! I see you love mountain photography. I know a secret spot in Kazbegi that
                few tourists know…
              </MatchChatPreview>
            </div>
          </div>

          <div className="min-w-0">
            <Eyebrow />
            <h2 className="lg:mt-0 mt-3 text-3xl font-bold tracking-tight text-neutral-900 xl:text-4xl xl:leading-tight">
              Pick your guide. Match. Chat. Explore.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-600">
              {
                "Our intelligent matching system connects you with locals who share your interests, language, and vibe. It's not just a tour; it's making a local friend who opens doors you didn't know existed."
              }
            </p>
            <ul className="mt-8 space-y-4 text-base font-medium" role="list">
              {BULLETS.map((label) => (
                <CheckBullet key={label}>{label}</CheckBullet>
              ))}
            </ul>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
