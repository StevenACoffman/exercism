'use strict';

function Transcriptor() {
  const complement = { C:'G', G:'C', A:'U', T:'A' };
  const toRna = (dna) => [...dna]
    .map((nucleotide) => complement[nucleotide])
    .join('');
  return Object.freeze({ toRna });
}

module.exports = Transcriptor;
