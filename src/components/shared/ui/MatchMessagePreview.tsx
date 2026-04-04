import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type MatchMessagePreviewProps = {
  children: ReactNode;
  className?: string;
};

function ChatGlyph() {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden>
      <path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2z" />
    </svg>
  );
}

export function MatchMessagePreview({ children, className }: MatchMessagePreviewProps) {
  return (
    <div
      className={cn(
        "flex gap-3 rounded-2xl bg-rose-50/90 p-4 ring-1 ring-rose-100/80",
        className
      )}
    >
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white shadow-sm"
        aria-hidden
      >
        <ChatGlyph />
      </div>
      <p className="min-w-0 pt-0.5 text-sm leading-relaxed text-neutral-800">{children}</p>
    </div>
  );
}
