'use strict';

const Triangle = (...sides) => {
  //avoiding mutating sides
  const sortedSides = Array.from(sides).sort();
  const types = {1:'equilateral', 2:'isosceles', 3:'scalene'};

  const isAnInvalidSideSize = (a) => (a <= 0);
  const violatesTriangleInequality = ([a,b,c]) => (a + b < c);

  const kind = () => {
    if (sides.some(isAnInvalidSideSize)) {
      throw new RangeError (`Triangle (${String(sides)}) has invalid side size`);
    }
    if (violatesTriangleInequality(sortedSides)) {
      throw Error (`Triangle (${String(sides)}) violates triangle inequality`);
    }

    return types[new Set(sides).size];
  };

  return Object.freeze({kind});
};

export default Triangle;
