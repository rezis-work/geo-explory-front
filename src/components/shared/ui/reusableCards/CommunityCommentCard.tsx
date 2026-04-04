import Image from "next/image";
import { cn } from "@/lib/cn";

export type CommunityCommentCardProps = {
  name: string;
  role: string;
  quote: string;
  avatarSrc: string;
  avatarAlt: string;
  className?: string;
};

function MiniStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} className={className} fill="currentColor" aria-hidden>
      <path d="M12 3.1l2.38 4.82 5.33.77-3.86 3.76.91 5.31L12 15.9l-4.76 2.5.91-5.31-3.86-3.76 5.33-.77L12 3.1z" />
    </svg>
  );
}

function CardStarRow({ className }: { className?: string }) {
  return (
    <div className={cn("flex justify-center gap-0.5 text-red-600", className)} aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <MiniStar key={i} />
      ))}
    </div>
  );
}

export function CommunityCommentCard({
  name,
  role,
  quote,
  avatarSrc,
  avatarAlt,
  className,
}: CommunityCommentCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-3xl p-5 sm:p-6",
        "max-lg:bg-neutral-200",
        "lg:rounded-2xl lg:bg-white lg:shadow-sm lg:ring-1 lg:ring-black/5",
        className
      )}
    >
      {/* Mobile: stars → quote → author */}
      <CardStarRow className="mb-4 lg:hidden" />

      <div className="hidden gap-3 lg:flex">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-neutral-200">
          <Image
            src={avatarSrc}
            alt={avatarAlt}
            fill
            className="object-cover"
            sizes="44px"
            unoptimized
          />
        </div>
        <div className="min-w-0 pt-0.5">
          <p className="font-semibold text-neutral-900">{name}</p>
          <p className="text-sm text-neutral-500">{role}</p>
        </div>
      </div>

      <blockquote
        className={cn(
          "text-sm leading-relaxed text-pretty text-neutral-800",
          "max-lg:mb-0 max-lg:flex-1 max-lg:text-center max-lg:italic",
          "lg:mt-4 lg:text-left lg:not-italic lg:text-neutral-700"
        )}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div className="mt-5 flex items-center justify-center gap-3 lg:hidden">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-neutral-300">
          <Image
            src={avatarSrc}
            alt={avatarAlt}
            fill
            className="object-cover"
            sizes="44px"
            unoptimized
          />
        </div>
        <div className="min-w-0 text-left">
          <p className="font-semibold text-neutral-900">{name}</p>
          <p className="text-sm text-neutral-600">{role}</p>
        </div>
      </div>
    </article>
  );
}
