const MINIMUM = 1;

const PrimeFactors = () => {

  function getPrimeFactors(number) {
    const factors = [];
    let currentFactor  = MINIMUM + 1;

    while (number > MINIMUM) {
      while (number % currentFactor !== 0) {
        ++currentFactor;
      }

      factors.push(currentFactor);
      number /= currentFactor;
    }

    return factors;
  }

  return Object.freeze({ for: getPrimeFactors });
};

export default PrimeFactors;
