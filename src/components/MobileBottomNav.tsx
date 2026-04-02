"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

function ExploreIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path
        d="M12 7l1.2 3.6L17 12l-3.8 1.4L12 17l-1.2-3.6L7 12l3.8-1.4L12 7z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path
        d="M12 21s-6-4.35-9-8.5C.58 8.88 2.65 4.12 7.62 4c2.37 0 4.35 1.18 5.38 3 1.03-1.82 3.01-3 5.38-3 4.97.12 7.04 4.88 4.62 8.5C18 16.65 12 21 12 21z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12a8 8 0 01-8 8H9l-4 3v-3a8 8 0 118-8z" strokeLinejoin="round" />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c1.5-4 4-6 8-6s6.5 2 8 6" strokeLinecap="round" />
    </svg>
  );
}

const TABS = [
  { label: "Explore", href: "/explore", icon: "explore" as const },
  { label: "Saved", href: "/saved", icon: "heart" as const },
  { label: "Chat", href: "/chat", icon: "chat" as const },
  { label: "Profile", href: "/profile", icon: "user" as const },
] as const;

function tabActive(pathname: string, href: string) {
  if (href === "/explore") return pathname === "/explore" || pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-200 bg-white shadow-[0_-4px_24px_rgba(0,0,0,0.06)] pb-[env(safe-area-inset-bottom,0px)] lg:hidden"
      aria-label="Mobile primary navigation"
    >
      <div className="mx-auto flex max-w-lg items-stretch justify-around px-1 pt-1">
        {TABS.map((item) => {
          const active = tabActive(pathname, item.href);
          const isExplore = item.icon === "explore";

          const iconClass = cn(
            isExplore && active && "text-white",
            isExplore && !active && "text-neutral-600",
            !isExplore && active && "text-red-600",
            !isExplore && !active && "text-neutral-600"
          );

          const Icon =
            item.icon === "explore"
              ? ExploreIcon
              : item.icon === "heart"
                ? HeartIcon
                : item.icon === "chat"
                  ? ChatIcon
                  : UserIcon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex min-w-0 flex-1 flex-col items-center gap-0.5 py-1.5"
            >
              <span
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full transition-colors",
                  isExplore && active && "bg-red-600",
                  !isExplore && active && "bg-red-50"
                )}
              >
                <Icon className={iconClass} />
              </span>
              <span
                className={cn(
                  "text-[10px] font-medium",
                  active ? "text-red-600" : "text-neutral-600"
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
