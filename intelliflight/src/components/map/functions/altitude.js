export { Altitude, FlightLevel };

function FlightLevel(PirepAlt) {
  let string = PirepAlt.toString();

  if (string.length === 3) {
    return string;
  }
  if (string.length === 2) {
    return string;
  }
  if (string.length === 1) {
    return string;
  }
  if (string.length === 4) {
    return string.substring(0, 2);
  } 
  else {
    return string.substring(0, 3);
  }
}

function Altitude(PirepAlt) {
  let string = PirepAlt.toString();

  if (string.length === 4) {
    return (PirepAlt * 1).toLocaleString();
  }
  if (string.length === 5) {
    return (PirepAlt * 1).toLocaleString();
  }
  if (string.length === 3) {
    return (PirepAlt * 100).toLocaleString();
  }
  if (string.length === 2) {
    return (PirepAlt * 100).toLocaleString();
  }
  if (string.length === 1) {
    return (PirepAlt * 100).toLocaleString();
  }
  if (string.length > 5) {
    return (string.substring(0, 5)* 1).toLocaleString();
  } 
  else {
    return PirepAlt.toLocaleString();
  }
}
