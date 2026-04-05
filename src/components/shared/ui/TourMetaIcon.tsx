import { Clock, Users, Wine } from "lucide-react";
import { cn } from "@/lib/cn";

export type TourMetaKind = "clock" | "users" | "wine";

export type TourMetaIconProps = {
  kind: TourMetaKind;
  className?: string;
};

const iconClass = "shrink-0 text-neutral-500";

export function TourMetaIcon({ kind, className }: TourMetaIconProps) {
  const cls = cn(iconClass, className);
  switch (kind) {
    case "clock":
      return <Clock className={cls} size={16} strokeWidth={2} aria-hidden />;
    case "users":
      return <Users className={cls} size={16} strokeWidth={2} aria-hidden />;
    case "wine":
      return <Wine className={cls} size={16} strokeWidth={2} aria-hidden />;
    default:
      return null;
  }
}
