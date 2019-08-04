import zero from "../pirep-icons/weather-icons/0.png";
import one from "../pirep-icons/weather-icons/1.png";
import two from "../pirep-icons/weather-icons/2.png";
import three from "../pirep-icons/weather-icons/3.png";
import four from "../pirep-icons/weather-icons/4.png";
import five from "../pirep-icons/weather-icons/5.png";
import six from "../pirep-icons/weather-icons/6.png";
import seven from "../pirep-icons/weather-icons/7.png";
import eight from "../pirep-icons/weather-icons/8.png";
import nine from "../pirep-icons/weather-icons/9.png";
import ten from "../pirep-icons/weather-icons/10.png";
import eleven from "../pirep-icons/weather-icons/11.png";

export default function WeatherIcon(icon) {
  if (icon === 0) {
    return zero;
  }
  if (icon === 1) {
    return one;
  }
  if (icon === 2) {
    return two;
  }
  if (icon === 3) {
    return three;
  }
  if (icon === 4) {
    return four;
  }
  if (icon === 5) {
    return five;
  }
  if (icon === 6) {
    return six;
  }
  if (icon === 7) {
    return seven;
  }
  if (icon === 8) {
    return eight;
  }
  if (icon === 9) {
    return nine;
  }
  if (icon === 10) {
    return ten;
  }
  if (icon === 11) {
    return eleven;
  }
  if (icon === "") {
    return null;
  } else {
    return null;
  }
}
