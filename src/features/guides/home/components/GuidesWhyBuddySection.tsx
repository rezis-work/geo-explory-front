import type { ReactNode } from "react";
import Image from "next/image";
import { Clock, IdCard, PartyPopper } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { cn } from "@/lib/cn";

type GalleryItem = {
  src: string;
  alt: string;
  className?: string;
};

const GALLERY: readonly GalleryItem[] = [
  {
    src: "/images/placeholder-tour-1.svg",
    alt: "Friends sharing food at a wooden table",
    className: "mt-12",
  },
  {
    src: "/images/placeholder-tour-2.svg",
    alt: "Evening street scene with people walking",
  },
  {
    src: "/images/placeholder-tour-3.svg",
    alt: "Church on a mountain ridge under blue sky",
  },
  {
    src: "/images/placeholder-tour-3.svg",
    alt: "Hands working on a craft project",
  },
];

// განვაახლეთ ფერები სურათის მიხედვით
const iconWrap =
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eceae4] text-[#4a4a4a]"; // მიახლოებული კრემისფერი/ნაცრისფერი

function BuddyFeature({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 sm:gap-6">
      <div className={iconWrap} aria-hidden>
        {icon}
      </div>
      <div className="min-w-0 flex-1 pt-1">
        <h3 className="text-lg font-bold text-neutral-900">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-neutral-600 sm:text-[15px]">
          {description}
        </p>
      </div>
    </div>
  );
}

function BuddyGallery() {
  const unopt = (src: string) => src.endsWith(".svg");

  // მონაცემები წინასწარ დავყავით 2-2 სურათად
  const leftColumnImages = GALLERY.slice(0, 2);
  const rightColumnImages = GALLERY.slice(2, 4);

  return (
    <div className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
      {/* გამოვიყენოთ Flex box, რომ სვეტები დამოუკიდებლად ვმართოთ.
        'items-stretch' უზრუნველყოფს, რომ ორივე სვეტი ერთნაირი სიმაღლის იყოს.
      */}
      <div className="flex gap-x-6 items-stretch">
        
        {/* --- მარცხენა სვეტი (Stacked) --- */}
        {/* 'flex-1 flex-col -space-y-12' - Stacked ეფექტი.
            'flex-1' იღებს grid-ის მთლიან სიმაღლეს. */}
        <div className="flex-1 flex flex-col -space-y-12">
          {leftColumnImages.map((image, index) => (
            <div
              key={`left-${index}`}
              className={cn(
                // მოვაშორეთ 'aspect-square'.
                // 'relative flex-1' უზრუნველყოფს, რომ სურათმა შეავსოს დარჩენილი სიმაღლე.
                "relative w-full overflow-hidden rounded-[20px] bg-neutral-100 ring-4 ring-white flex-1 min-h-[100px]",
                // Z-index, რომ მეორე სურათი ზემოდან მოექცეს
                index === 0 ? "z-10" : "z-20",
                image.className
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 22vw, 45vw"
                unoptimized={unopt(image.src)}
              />
            </div>
          ))}
        </div>

        {/* --- მარჯვენა სვეტი (Standard, გეპით) --- */}
        {/* 'flex-1 flex-col gap-y-4' - Standard, გეპით.
            დავამატეთ 'lg:h-[500px]' (ან სასურველი ფიქსირებული სიმაღლე), 
            რომ grid-ს ჰქონდეს სიმაღლე. */}
        <div className="flex-1 flex flex-col gap-y-4 lg:h-[520px]">
          {rightColumnImages.map((image, index) => (
            <div
              key={`right-${index}`}
              className={cn(
                // მოვაშორეთ 'aspect-square'.
                // 'relative flex-1' უზრუნველყოფს, რომ სურათებმა თანაბრად გაიყონ ფიქსირებული სიმაღლე.
                "relative w-full flex-1 overflow-hidden rounded-[20px] bg-neutral-100",
                image.className
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 22vw, 45vw"
                unoptimized={unopt(image.src)}
              />
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
export function GuidesWhyBuddySection() {
  return (
    <section className="bg-[#f9f9f9] py-16 lg:py-24" aria-labelledby="why-buddy-heading">
      <SectionContainer>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="min-w-0">
            <h2
              id="why-buddy-heading"
              className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
            >
              Why choose a{" "}
              <span className="italic text-[#d9232e]"> {/* სურათის წითელ ფერთან მიახლოებული */}
                local buddy?
              </span>
            </h2>

            <ul className="mt-12 flex list-none flex-col gap-8 sm:gap-10" role="list">
              <li>
                <BuddyFeature
                  icon={<IdCard size={22} strokeWidth={2} />}
                  title="Personalized Experience"
                  description="No one-size-fits-all tours. Your guide adapts to your pace, your taste, and your weird interests."
                />
              </li>
              <li>
                <BuddyFeature
                  icon={<PartyPopper size={22} strokeWidth={2} />}
                  title={"Fun & Social"}
                  description="Travel is about the people you meet. Make a real friend who will show you the soul of the city."
                />
              </li>
              <li>
                <BuddyFeature
                  icon={<Clock size={22} strokeWidth={2} />}
                  title="Total Flexibility"
                  description="Book for a quick 2-hour coffee walk or a full 3-day mountain expedition. You're in control."
                />
              </li>
            </ul>
          </div>

          <BuddyGallery />
        </div>
      </SectionContainer>
    </section>
  );
}