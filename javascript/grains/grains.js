const BigInt = require('./big-integer');

function Grains() {

  const square =  index => String(BigInt(2).pow(index - 1));
  const total =  () => String(BigInt(2).pow(64).minus(1));

  return Object.freeze({ square, total });
}

module.exports = Grains;
