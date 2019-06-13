import nil from "../pirep-icons/icing/nil.png";
import trace from "../pirep-icons/icing/trace.png";
import traceLight from "../pirep-icons/icing/trace-light.png";
import light from "../pirep-icons/icing/light.png";
import lightModerate from "../pirep-icons/icing/light-moderate.png";
import moderate from "../pirep-icons/icing/moderate.png";
import moderateSevere from "../pirep-icons/icing/moderate-severe.png";
import severe from "../pirep-icons/icing/severe.png";

export default function IcingIcon(icon) {
  if (icon === "nil") {
    return nil;
  }
  if (icon === "trace") {
    return trace;
  }
  if (icon === "trace-light") {
    return traceLight;
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
  } else {
      return null
  }
}
