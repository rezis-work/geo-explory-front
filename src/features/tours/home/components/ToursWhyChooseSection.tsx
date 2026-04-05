import type { ReactNode } from "react";
import { CalendarDays, ShieldCheck, UserRound } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { cn } from "@/lib/cn";

const iconProps = {
  size: 24 as const,
  strokeWidth: 2.25 as const,
  className: "text-red-600",
  "aria-hidden": true as const,
};

type Reason = {
  icon: ReactNode;
  title: string;
  descriptionMobile: string;
  descriptionDesktop: string;
};

function WhyChooseItem({ icon, title, descriptionMobile, descriptionDesktop }: Reason) {
  return (
    <li
      className={cn(
        "lg:rounded-2xl lg:bg-white lg:p-8 lg:shadow-sm lg:ring-1 lg:ring-black/5"
      )}
    >
      <div className="flex gap-4 sm:gap-5 lg:flex-col lg:gap-5">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-red-600 sm:h-[3.75rem] sm:w-[3.75rem] lg:h-16 lg:w-16"
          aria-hidden
        >
          {icon}
        </div>
        <div className="min-w-0 flex-1 pt-0.5 lg:pt-0">
          <h3 className="text-base font-bold tracking-tight text-neutral-900 sm:text-lg">{title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-neutral-600 sm:mt-2 lg:hidden">
            {descriptionMobile}
          </p>
          <p className="mt-1.5 hidden text-sm leading-relaxed text-neutral-600 sm:mt-2 lg:block">
            {descriptionDesktop}
          </p>
        </div>
      </div>
    </li>
  );
}

const REASONS: Reason[] = [
  {
    icon: <ShieldCheck {...iconProps} />,
    title: "Verified Tours",
    descriptionMobile:
      "Each experience is manually vetted by our team to ensure the highest standards of safety and quality.",
    descriptionDesktop:
      "Every experience is personally vetted by our quality control team for safety and authenticity.",
  },
  {
    icon: <UserRound {...iconProps} />,
    title: "Local Guides",
    descriptionMobile:
      "Connect with passionate locals who share the soul and secrets of Georgia through their eyes.",
    descriptionDesktop:
      "Passionate storytellers who call Georgia home and know the secret spots tourists never see.",
  },
  {
    icon: <CalendarDays {...iconProps} />,
    title: "Easy Booking",
    descriptionMobile:
      "Seamless instant confirmation and flexible cancellation policies for your peace of mind.",
    descriptionDesktop:
      "Secure your spot in seconds with our streamlined, secure mobile-first booking engine.",
  },
];

export function ToursWhyChooseSection() {
  return (
    <section className="bg-neutral-100 py-12 sm:py-14 lg:py-20">
      <SectionContainer>
        {/* Desktop header */}
        <header className="mb-10 hidden text-center lg:mb-14 lg:block">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 xl:text-4xl">
            Why Choose GeoExplory
          </h2>
          <div
            className="mx-auto mt-4 h-1 w-14 rounded-full bg-red-600"
            aria-hidden
          />
        </header>

        {/* Mobile: titled panel + accent border; desktop: plain grid on section bg */}
        <div
          className={cn(
            "mx-auto w-full max-w-lg rounded-2xl border-r-4 border-violet-600 bg-neutral-50 p-6 shadow-sm ring-1 ring-black/5",
            "sm:max-w-xl sm:p-8",
            "lg:mx-0 lg:max-w-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:ring-0"
          )}
        >
          <h2 className="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl lg:hidden">
            Why Choose Us
          </h2>

          <ul
            className={cn(
              "mt-8 flex list-none flex-col gap-8 sm:mt-10 sm:gap-10",
              "lg:mt-0 lg:grid lg:grid-cols-3 lg:gap-8 lg:gap-y-10"
            )}
            role="list"
          >
            {REASONS.map((item) => (
              <WhyChooseItem key={item.title} {...item} />
            ))}
          </ul>
        </div>
      </SectionContainer>
    </section>
  );
}
