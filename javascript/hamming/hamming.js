exports.compute =
  function (firstStrand, secondStrand) {
    'use strict';
    return firstStrand.split('')
      .map(function (nucleotide, strandPosition) {
        return secondStrand[strandPosition] === nucleotide ? 0 : 1;
      })
      .reduce(function (differenceSum, differenceInCurrentPosition) {
        return differenceSum + differenceInCurrentPosition;
      });
  };