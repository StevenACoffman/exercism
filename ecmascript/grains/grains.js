'use strict';

import BigInt from './big-integer';

const Grains = () => {

  const square =  index => String(BigInt(2).pow(index - 1));
  const total =  () => String(BigInt(2).pow(64).minus(1));

  return Object.freeze({square, total});
};

export default Grains;
