"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const LINKS = [
  { label: "Explore", href: "/explore" },
  { label: "Journal", href: "/journal" },
  { label: "Safety", href: "/safety" },
  { label: "Contact", href: "/contact" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/explore") return pathname === "/explore" || pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function FooterMobileNav() {
  const pathname = usePathname();

  return (
    <nav
      className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 px-2"
      aria-label="Footer links"
    >
      {LINKS.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-600 transition-colors hover:text-neutral-900",
              active && "border-b-2 border-red-600 pb-0.5 text-neutral-900"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
