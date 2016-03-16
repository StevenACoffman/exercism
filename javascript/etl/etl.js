'use strict';

function ETL() {
  function transform(old) {
    return Object.keys(old).reduce((scrabbleMap, score) => {
      const letters = old[score];
      letters.forEach(letter => scrabbleMap[letter.toLowerCase()] = Number(score));
      return scrabbleMap;
    }, {});
  }

  return Object.freeze({ transform });
}

module.exports = ETL;
