'use strict';
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

const leap = or(
  and(divisibleBy(4), not(divisibleBy(100))),
  divisibleBy(400)
);

module.exports = leap;
