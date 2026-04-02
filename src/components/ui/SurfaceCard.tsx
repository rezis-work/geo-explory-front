import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SurfaceCardProps = {
  children: ReactNode;
  className?: string;
};

export function SurfaceCard({ children, className }: SurfaceCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-white p-4 shadow-lg shadow-black/10 ring-1 ring-black/5",
        className
      )}
    >
      {children}
    </div>
  );
}
