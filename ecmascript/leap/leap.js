function divisibleBy(divisor) {
  return (dividend) => dividend % divisor === 0;
}

function not(fn) {
  return (x) => !fn(x);
}

function and(f, g) {
  return (x) => f(x) && g(x);
}

function or(f, g) {
  return (x) => f(x) || g(x);
}

const checkIfLeapYear = or(divisibleBy(400),
  and(divisibleBy(4), not(divisibleBy(100))));

export default checkIfLeapYear;
