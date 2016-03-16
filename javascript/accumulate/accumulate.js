'use strict';
function accumulate(collection, accumulator) {
  const result = [];
  for (let index = 0; index < collection.length; index++)
  {
    result[index] = accumulator(collection[index]);
  }

  return result;
}

module.exports = accumulate;
