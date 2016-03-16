'use strict';

const SCORES = {
  AEIOULNRST: 1,
  DG: 2,
  BCMP: 3,
  FHVWY: 4,
  K: 5,
  JX: 8,
  QZ: 10
};

/**
 * Score a scrabble word
 * @param word
 * @param options optional parameters to support actual scrabble scoring
 * @param options.letterMultiplier  array of letter multipliers, 1 per letter
 * @param options.wordMultiplier    total word multiplier (e.g. 2)
 * @returns the score for the word
 */
function score(word, options) {
  options = options || {};
  const letterMultipler = options.letterMultiplier || [];
  let scoring = (word || '')
    .split('')
    .reduce((total, letter) => {
      const letterScoreKey = Object.keys(SCORES)
        .find((letters) => (
          letters.includes(letter.toUpperCase())));
      const letterScore = SCORES[letterScoreKey];
      return total + (letterScore * (letterMultipler[letter] || 1));
    }, 0);
  scoring *= options.wordMultiplier || 1;
  return scoring;
}

module.exports = score;
