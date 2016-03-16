
function isDivisibleBy(divisor) {
  return (dividend) => dividend % divisor === 0;
}

function not(fn) {
  return (x) => !fn(x);
}

function and(f, g, h) {
  return (x) => f(x) && g(x) && h(x);
}

const lookupActions = [
  { condition: isDivisibleBy(3), action: ()=>'Pling' },
  { condition: isDivisibleBy(5), action: ()=>'Plang' },
  { condition: isDivisibleBy(7), action: ()=>'Plong' },
  { condition: and(
    not(isDivisibleBy(3)),
    not(isDivisibleBy(5)),
    not(isDivisibleBy(7))), action: (x)=>x + '' }
];

function drops () {
  const convert = (number) => {
    return lookupActions
      .filter((c) => c.condition(number))
      .map((current) => current.action(number))
      .join('');
  };

  return Object.freeze({ convert });
}

module.exports = drops;
