export type PriceDisplayProps = {
  /** Short line (e.g. mobile / narrow layouts) */
  compact: string;
  /** Full line (e.g. desktop) */
  full: string;
  className?: string;
};

/** Responsive price line: `compact` below `lg`, `full` from `lg` up. */
export function PriceDisplay({ compact, full, className }: PriceDisplayProps) {
  return (
    <p className={className}>
      <span className="lg:hidden">{compact}</span>
      <span className="hidden lg:inline">{full}</span>
    </p>
  );
}
