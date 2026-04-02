"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { cn } from "../lib/cn";

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: "Guides", href: "/guides" },
  { label: "Tours", href: "/tours" },
  { label: "Housing", href: "/housing" },
  { label: "Connect", href: "/connect" },
];

function Icon({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      className={cn("shrink-0", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function MenuIcon(props: { className?: string }) {
  return (
    <Icon className={props.className}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </Icon>
  );
}

function SearchIcon(props: { className?: string }) {
  return (
    <Icon className={props.className}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
    </Icon>
  );
}

function UserIcon(props: { className?: string }) {
  return (
    <Icon className={props.className}>
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="7" r="4" />
    </Icon>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const nav = useMemo(
    () =>
      NAV.map((item) => {
        const active =
          pathname === item.href ||
          (item.href !== "/" && pathname?.startsWith(item.href + "/"));

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium text-neutral-700 hover:text-neutral-900",
              active && "text-neutral-900 underline underline-offset-8 decoration-red-500"
            )}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        );
      }),
    [pathname]
  );

  return (
    <header className="border-b border-neutral-200 bg-white">
      <SectionContainer>
        <div className="flex h-14 items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-neutral-700 hover:bg-neutral-100 md:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <MenuIcon />
            </button>

            <Link
              href="/"
              className="text-base font-semibold tracking-tight text-red-600"
            >
              GeoExplory
            </Link>
          </div>

          <nav className="hidden items-center gap-8 md:flex">{nav}</nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-neutral-700 hover:bg-neutral-100 md:hidden"
              aria-label="Search"
            >
              <SearchIcon />
            </button>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-neutral-700 hover:bg-neutral-100 md:hidden"
              aria-label="Account"
            >
              <UserIcon />
            </button>

            <Link
              href="/join"
              className="hidden rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 md:inline-flex"
            >
              Join Now
            </Link>
          </div>
        </div>

        {open ? (
          <div className="md:hidden">
            <div className="pb-4 pt-1">
              <div className="flex flex-col gap-3 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
                {nav}
                <Link
                  href="/join"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700"
                  onClick={() => setOpen(false)}
                >
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </SectionContainer>
    </header>
  );
}

