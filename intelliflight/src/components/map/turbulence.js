import nil from "./pirep-icons/turbulence/nil.png";
import smoothLight from "./pirep-icons/turbulence/smooth-light.png";
import light from "./pirep-icons/turbulence/light.png";
import lightModerate from "./pirep-icons/turbulence/light-moderate.png";
import moderate from "./pirep-icons/turbulence/moderate.png";
import moderateSevere from "./pirep-icons/turbulence/moderate-severe.png";
import severe from "./pirep-icons/turbulence/severe.png";
import extreme from "./pirep-icons/turbulence/extreme.png";

export default function turbIcon(icon) {
  if (icon === "nil") {
    return nil;
  }
  if (icon === "smooth-light") {
    return smoothLight;
  }
  if (icon === "light") {
    return light;
  }
  if (icon === "light-moderate") {
    return lightModerate;
  }
  if (icon === "moderate") {
    return moderate;
  }
  if (icon === "moderate-severe") {
    return moderateSevere;
  }
  if (icon === "severe") {
    return severe;
  }
  if (icon === "extreme") {
    return extreme;
  } else {
      return null
  }
}
