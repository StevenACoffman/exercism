'use strict';

const MILLISECONDS_PER_GIGASECOND = 1000000000000;

function gigasecond(birthDate) {
  const date = () => new Date(birthDate.getTime() + MILLISECONDS_PER_GIGASECOND);
  return { date };
}

module.exports = gigasecond;
