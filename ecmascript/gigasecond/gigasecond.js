'use strict';

const MILLISECONDS_PER_GIGASECOND = 1000000000000;

export default (birthDate) => {
  return {
    date: () => new Date(birthDate.getTime() + MILLISECONDS_PER_GIGASECOND)
  };
};
