import type { HeroProps } from "./hero-types";
import HeroOverlay from "./HeroOverlay";
import HeroSplit from "./HeroSplit";

function Hero(props: HeroProps) {
  if (props.variant === "split") {
    return <HeroSplit {...props} />;
  }
  return <HeroOverlay {...props} />;
}

export default Hero;
