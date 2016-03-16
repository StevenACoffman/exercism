'use strict';

const SCORES = {
  'AEIOULNRST': 1,
  'DG': 2,
  'BCMP': 3,
  'FHVWY': 4,
  'K': 5,
  'JX': 8,
  'QZ': 10
};

/**
 * Score a scrabble word
 * @param word
 * @param options optional parameters to support actual scrabble scoring
 * @param options.letterMultiplier  array of letter multipliers, 1 per letter
 * @param options.wordMultiplier    total word multiplier (e.g. 2)
 * @returns the score for the word
 */
const scoring =  (word, options = {}) => {
  const letterMultipler = options.letterMultiplier || [];
  let score = [...(word || '')]
    .reduce((total, letter) => {
      let [_,letterScore] = Object.entries(SCORES)
        .find(([letters, _])=>(
          letters.includes(letter.toUpperCase())));
      return total + (letterScore * (letterMultipler[letter] || 1));
    }, 0);
  score *= (options.wordMultiplier || 1);
  return score;
};

export default scoring;
