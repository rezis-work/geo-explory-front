import type { ReactNode } from "react";
import { GuideMatchRow } from "@/components/ui/GuideMatchRow";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { GuideSpotlightCard } from "@/components/ui/GuideSpotlightCard";
import { MatchMessagePreview } from "@/components/ui/MatchMessagePreview";
import { cn } from "@/lib/cn";

const BULLETS = [
  "Personalized interest matching",
  "Direct in-app messaging",
  "Verified local experts only",
];

function CheckBullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3">
      <span
        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-600 text-white"
        aria-hidden
      >
        <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke="currentColor" strokeWidth={2.5}>
          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
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

export function HomeGuideMatch() {
  return (
    <section className="bg-neutral-50 py-14 sm:py-16 lg:py-20">
      <SectionContainer>
        <div className="lg:hidden">
          <Eyebrow />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Pick your guide
          </h2>
          <GuideSpotlightCard
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
              <GuideMatchRow
                name="Luka G."
                subtitle="Hiking & history expert"
                matchPercent={98}
              />
              <GuideMatchRow
                name="Nino K."
                subtitle="Wine & gastronomy"
                matchPercent={92}
                avatarClassName="from-rose-100 to-amber-100 text-amber-900"
              />
              <MatchMessagePreview>
                Hey! I see you love mountain photography. I know a secret spot in Kazbegi that
                few tourists know…
              </MatchMessagePreview>
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
