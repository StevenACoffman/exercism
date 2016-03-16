'use strict';
const ETL = (old) => Object.entries(old).reduce((scrabbleMap, [score, letters]) => {
  letters.forEach(letter => scrabbleMap[letter.toLowerCase()] = Number(score));
  return scrabbleMap;
}, {});

export default ETL;
