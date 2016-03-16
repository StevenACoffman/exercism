'use strict';

const Hamming = () => {

  const compute = (firstStrand, secondStrand) => {
    if (firstStrand.length !== secondStrand.length) {
      throw new Error('DNA strands must be of equal length.');
    }
    return [...firstStrand]
      .filter((nucleotide, strandPosition) => (
        nucleotide !== secondStrand.charAt(strandPosition))).length;
  }

  return Object.freeze({compute});
};

export default Hamming;
