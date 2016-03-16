'use strict';
let wordHasAlreadyBeenCounted = (wordCountMap, word) =>  wordCountMap.hasOwnProperty(word);
let updateCountForWord = (wordCountMap, word) => {
  wordCountMap[word] = wordHasAlreadyBeenCounted(wordCountMap, word) ? wordCountMap[word] + 1 : 1;
  return wordCountMap;
};

export default () => ({
  /**
   * Counts the word occurence in a whitespace delimited string
   * @param {string} words - The whitespace delimited string of words to count
   * @returns {Object} - object of the format word : count for each word
   */
  count: (words) => words.trim().split(/\s+/).reduce(updateCountForWord, {})
});
