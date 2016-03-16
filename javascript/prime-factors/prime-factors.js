'use strict';
const MINIMUM = 1;

function getPrimeFactors(number) {
  const factors = [];
  let currentFactor = MINIMUM + 1;

  while (number > MINIMUM) {
    while (number % currentFactor !== 0) {
      ++currentFactor;
    }

    factors.push(currentFactor);
    number /= currentFactor;
  }

  return factors;
}

Object.freeze({
  for: getPrimeFactors
});

module.exports = Object.freeze({ for: getPrimeFactors });
