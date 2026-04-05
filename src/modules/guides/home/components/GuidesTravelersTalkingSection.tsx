import Image from "next/image";
import { Star } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";

type TravelerTestimonial = {
  quote: string;
  name: string;
  location: string;
  avatarSrc: string;
  avatarAlt: string;
};

const TESTIMONIALS: readonly TravelerTestimonial[] = [
  {
    quote:
      "I didn't just see the sights, I made a lifelong friend in Luka! We ended up chatting about music for hours while exploring the old city.",
    name: "David S.",
    location: "Berlin, Germany",
    avatarSrc: "/images/placeholder-tour-1.svg",
    avatarAlt: "David S.",
  },
  {
    quote:
      "Nino showed me wine cellars I would have NEVER found on my own. The experience was so organic and authentic. Worth every penny.",
    name: "Elena R.",
    location: "Barcelona, Spain",
    avatarSrc: "/images/placeholder-tour-2.svg",
    avatarAlt: "Elena R.",
  },
  {
    quote:
      "The swipe interface is actually fun to use! Found a hiking buddy for Svaneti in minutes. Best travel app I've used this year.",
    name: "Mark T.",
    location: "London, UK",
    avatarSrc: "/images/placeholder-tour-3.svg",
    avatarAlt: "Mark T.",
  },
];

function StarRow() {
  return (
    <div className="flex gap-0.5 text-red-600" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          className="shrink-0 fill-red-600 stroke-red-600"
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ quote, name, location, avatarSrc, avatarAlt }: TravelerTestimonial) {
  const unopt = avatarSrc.endsWith(".svg");

  return (
    <article className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-7">
      <StarRow />
      <blockquote className="mt-4 flex-1 text-sm italic leading-relaxed text-neutral-700 sm:text-base">
        {quote}
      </blockquote>
      <div className="mt-6 flex items-center gap-3 border-t border-neutral-100 pt-5">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-neutral-200 ring-2 ring-white">
          <Image
            src={avatarSrc}
            alt={avatarAlt}
            fill
            className="object-cover"
            sizes="44px"
            unoptimized={unopt}
          />
        </div>
        <div className="min-w-0">
          <p className="font-bold text-neutral-900">{name}</p>
          <p className="text-sm text-neutral-500">{location}</p>
        </div>
      </div>
    </article>
  );
}

export function GuidesTravelersTalkingSection() {
  return (
    <section
      className="bg-neutral-100 py-14 sm:py-16 lg:py-20"
      aria-labelledby="travelers-talking-heading"
    >
      <SectionContainer>
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="travelers-talking-heading"
            className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl"
          >
            Travelers are talking
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
            Don&apos;t take our word for it—listen to our global community.
          </p>
        </div>

        <ul
          className="mt-10 grid list-none grid-cols-1 gap-6 sm:mt-12 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8"
          role="list"
        >
          {TESTIMONIALS.map((item) => (
            <li key={item.name}>
              <TestimonialCard {...item} />
            </li>
          ))}
        </ul>
      </SectionContainer>
    </section>
  );
}
