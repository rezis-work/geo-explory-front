import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { FooterMobileNav } from "./FooterMobileNav";
import { SectionContainer } from "./layout/SectionContainer";

const PLATFORM = [
  { label: "Find a Guide", href: "/guides" },
  { label: "Tours", href: "/tours" },
  { label: "Housing", href: "/housing" },
  { label: "Community", href: "/connect" },
] as const;

const SUPPORT = [
  { label: "Help Center", href: "/help" },
  { label: "Safety", href: "/safety" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto rounded-t-3xl bg-neutral-100 pt-10 pb-24 sm:pt-12 lg:pb-8">
      <SectionContainer>
        {/* Desktop + tablet: full grid */}
        <div className="hidden gap-10 md:grid md:grid-cols-2 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          <div className="md:col-span-2 lg:col-span-4">
            <Link href="/" className="text-xl font-bold tracking-tight text-red-600">
              GeoExplory
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-neutral-600">
              Connecting travelers with the soul of Georgia through local friendship and curated
              living.
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-400">
              Platform
            </p>
            <ul className="mt-4 space-y-3" role="list">
              {PLATFORM.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-neutral-700 hover:text-red-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-400">
              Support
            </p>
            <ul className="mt-4 space-y-3" role="list">
              {SUPPORT.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-neutral-700 hover:text-red-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-400">
              Newsletter
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Get the latest Georgian travel tips and nomad news.
            </p>
            <div className="mt-4 max-w-sm">
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Mobile: compact strip */}
        <div className="text-center md:hidden">
          <Link href="/" className="text-lg font-semibold tracking-tight text-neutral-900">
            GeoExplory
          </Link>
          <FooterMobileNav />
          <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-400">
            © 2026 GeoExplory. Journey deeper.
          </p>
        </div>

        <div className="mt-10 hidden border-t border-neutral-200/80 pt-8 md:block">
          <p className="text-center text-xs text-neutral-500">
            © 2026 GeoExplory. Journey through the sunset.
          </p>
        </div>
      </SectionContainer>
    </footer>
  );
}
