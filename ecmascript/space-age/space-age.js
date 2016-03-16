'use strict';

const SpaceAge = (ageInSeconds) => {
  const EARTH_SECONDS_IN_YEAR = 31557600;

  const converter = (seconds) => {
    let years  = seconds / EARTH_SECONDS_IN_YEAR;
    return (orbit) => () => +(years / orbit).toFixed(2);
  };

  let convertBy = converter(ageInSeconds);

  return Object.freeze({
    get seconds () {
      return ageInSeconds;
    },
    onMercury: convertBy(0.2408467),
    onVenus: convertBy(0.61519726),
    onEarth: convertBy(1),
    onMars: convertBy(1.8808158),
    onJupiter: convertBy(11.862615),
    onSaturn: convertBy(29.447498),
    onUranus: convertBy(84.016846),
    onNeptune: convertBy(164.79132)
  });
};

export default SpaceAge;
