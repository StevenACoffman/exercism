const MINIMUM = 1;
export default() => ({
  for: number => {
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
});
