function wordHasAlreadyBeenCounted(wordCountMap, word) {
  'use strict';
  return wordCountMap.hasOwnProperty(word);
}

function updateCountForWord(wordCountMap, word) {
  'use strict';
  wordCountMap[word] = wordHasAlreadyBeenCounted(wordCountMap, word) ? ++wordCountMap[word] : 1;

  return wordCountMap;
}

/**
 * Counts the word occurence in a whitespace delimited string
 * @param {string} words - The whitespace delimited string of words to count
 * @returns {Object} - object of the format word : count for each word
 */
function countWords(words) {
  'use strict';
  //split /s+/ is for any whitespace
  return words.split(/\s+/).reduce(updateCountForWord, {});
}

module.exports = countWords;