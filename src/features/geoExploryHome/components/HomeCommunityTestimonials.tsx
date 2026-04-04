import { SectionContainer } from "@/components/layout/SectionContainer";
import { CommunityCommentCard } from "@/components/shared/ui/reusableCards/CommunityCommentCard";
import { cn } from "@/lib/cn";
import { COMMUNITY_TESTIMONIALS } from "../api/homeApi";

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} className={className} fill="currentColor" aria-hidden>
      <path d="M12 3.1l2.38 4.82 5.33.77-3.86 3.76.91 5.31L12 15.9l-4.76 2.5.91-5.31-3.86-3.76 5.33-.77L12 3.1z" />
    </svg>
  );
}

export function HomeCommunityTestimonials() {
  return (
    <section className="bg-neutral-50 py-14 sm:py-16 lg:py-20">
      <SectionContainer>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            What our community says
          </h2>
          <div className="mt-4 hidden flex-wrap items-center justify-center gap-x-2 gap-y-2 lg:flex">
            <span className="flex gap-0.5 text-amber-400" aria-hidden>
              {Array.from({ length: 5 }, (_, i) => (
                <StarIcon key={i} />
              ))}
            </span>
            <span className="text-sm text-neutral-600">4.9/5 based on 2,000+ reviews</span>
          </div>
        </div>

        {/* Mobile: reading-first strip — softer snap, wider cards, more air (not the same feel as Beyond). */}
        <div
          className={cn(
            "mt-10 flex snap-x snap-proximity gap-6 overflow-x-auto overscroll-x-contain pb-3",
            "scroll-pl-4 scroll-pr-8 sm:scroll-pl-5 sm:scroll-pr-10",
            "-mx-4 px-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
            "sm:-mx-5 sm:px-5 md:-mx-6 md:px-6",
            "lg:hidden"
          )}
          role="list"
        >
          {COMMUNITY_TESTIMONIALS.map((item) => (
            <div
              key={`${item.name}-${item.role}`}
              className="w-[min(92vw,400px)] shrink-0 snap-center sm:w-[min(90vw,420px)]"
              role="listitem"
            >
              <CommunityCommentCard {...item} className="h-full min-h-[280px]" />
            </div>
          ))}
          <div className="w-4 shrink-0" aria-hidden />
        </div>

        <div className="mt-10 hidden list-none gap-6 lg:grid lg:grid-cols-3 lg:gap-8" role="list">
          {COMMUNITY_TESTIMONIALS.map((item) => (
            <div key={`${item.name}-${item.role}`} className="min-w-0" role="listitem">
              <CommunityCommentCard {...item} />
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
