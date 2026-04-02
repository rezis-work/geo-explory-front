import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type SectionContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Shared content width + horizontal padding for page sections and the header.
 * Vertical spacing (`py-*`) and backgrounds stay on the parent `<section>` / `<header>`.
 */
export function SectionContainer({ children, className }: SectionContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-5 md:px-6", className)}>
      {children}
    </div>
  );
}
