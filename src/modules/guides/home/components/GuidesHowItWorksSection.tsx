import { SectionContainer } from "@/components/layout/SectionContainer";
import { cn } from "@/lib/cn";

const STEPS = [
  {
    n: 1,
    title: "Swipe",
    description: "Browse through unique local profiles and personality cards.",
  },
  {
    n: 2,
    title: "Match",
    description: "Find someone who shares your interests and travel style.",
  },
  {
    n: 3,
    title: "Chat",
    description: "Discuss your itinerary, ask questions, and build rapport.",
  },
  {
    n: 4,
    title: "Explore",
    description: "Embark on your journey with a new friend leading the way.",
  },
] as const;

export function GuidesHowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 bg-neutral-100 py-14 sm:py-16 lg:py-20"
      aria-labelledby="how-it-works-heading"
    >
      <SectionContainer>
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
          <h2
            id="how-it-works-heading"
            className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
          >
            How it works
          </h2>
          <p className="mt-3 text-base leading-relaxed text-neutral-600 sm:mt-4 sm:text-lg">
            Four simple steps from &ldquo;Where should I go?&rdquo; to &ldquo;This is the best day
            ever.&rdquo;
          </p>
        </div>

        <div className="relative mt-12 lg:mt-16">
          {/* Horizontal connector (desktop): sits at vertical center of numbered circles */}
          <div
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-neutral-200 lg:block"
            aria-hidden
          />

          <ol className="grid list-none grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((step) => (
              <li key={step.n} className="relative flex flex-col items-center text-center">
                <div
                  className={cn(
                    "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full",
                    "bg-red-600 text-lg font-bold text-white",
                    "ring-4 ring-neutral-100"
                  )}
                  aria-hidden
                >
                  {step.n}
                </div>
                <h3 className="mt-4 text-base font-bold text-neutral-900 sm:text-lg">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-neutral-600 lg:max-w-none">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </SectionContainer>
    </section>
  );
}
