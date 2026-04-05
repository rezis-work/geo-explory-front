import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/shared/ui/Button";

export function GuidesAdventureCtaSection() {
  return (
    <section className="bg-neutral-100 pb-14 sm:pb-16 lg:pb-20" aria-labelledby="guides-adventure-cta-heading">
      <SectionContainer>
        <div className="relative overflow-hidden rounded-3xl bg-[#3b6fb6] px-6 py-12 text-center shadow-sm sm:px-10 sm:py-14 lg:py-16">
          <div
            className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full bg-[#2d5a9e]/60 sm:h-72 sm:w-72"
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl">
            <h2
              id="guides-adventure-cta-heading"
              className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
            >
              Ready for a real adventure?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90 sm:text-base lg:text-lg">
              Join thousands of wanderers who discovered Georgia through the eyes of a local friend.
            </p>
            <div className="mt-8 flex justify-center sm:mt-10">
              <Button
                href="/guides#browse-guides"
                variant="primary"
                size="pill"
                className="shadow-lg"
              >
                Start Swiping Now
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
