import Image from "next/image";

type HeroMediaProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function HeroMedia({ src, alt, className, priority, sizes }: HeroMediaProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      sizes={sizes}
      priority={priority}
      unoptimized={src.endsWith(".svg")}
    />
  );
}
