import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "inverse" | "dark";
type Size = "md" | "pill";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsLink = BaseProps &
  Omit<ComponentProps<typeof Link>, "className" | "children"> & {
    href: string;
  };

type ButtonAsButton = BaseProps &
  Omit<ComponentProps<"button">, "className" | "children">;

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-red-600 text-white shadow-md hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",
  secondary: "bg-neutral-200 text-neutral-900 hover:bg-neutral-300",
  inverse: "bg-white text-neutral-900 shadow-md hover:bg-neutral-50",
  dark:
    "bg-neutral-900 text-white shadow-md hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900",
};

const sizeClasses: Record<Size, string> = {
  md: "rounded-lg px-5 py-2.5 text-sm font-semibold",
  pill: "rounded-full px-8 py-3.5 text-sm font-semibold",
};

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";
  const classes = cn(
    "inline-flex items-center justify-center gap-2 transition-colors disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    props.className
  );

  if ("href" in props && typeof props.href === "string") {
    const { href, children, variant: _v, size: _s, className: _c, ...forward } = props;
    return (
      <Link href={href} className={classes} {...forward}>
        {children}
      </Link>
    );
  }

  const {
    children,
    variant: _v2,
    size: _s2,
    className: _c2,
    type: nativeType = "button",
    ...forward
  } = props as ButtonAsButton;

  return (
    <button type={nativeType} className={classes} {...forward}>
      {children}
    </button>
  );
}
