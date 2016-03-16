const twoToThePowerOf = (n) => Math.pow(2, n);
const binary = ([...sequence]) => {

  const isValid = sequence.every((item) => (item === '0' || item === '1'));
  const cleanSequence = isValid ? sequence : ['0'];
  const toDecimal = () => cleanSequence
    .reverse()
    .map((digit, exponent) => Number(digit) * twoToThePowerOf(exponent))
    .reduce((sum, current) => sum + current, 0);

  return Object.freeze({ toDecimal });
};

export default binary;
