'use strict';

function sortWord(word) {
  return word.toLowerCase().split('').sort().join('');
}

function isSameWord(word, candidate) {
  return word.toLowerCase() === candidate.toLowerCase();
}

function isAnagram(word, candidate) {
  return isSameWord(sortWord(word), sortWord(candidate));
}
/**
 * Given a word and a list of possible anagrams, selects the correct sublist of matching anagrams of the word.
 *
 */

function anagram(word) {
  return {
    matches: function (words) {
      words = Array.isArray(words) ? words : [].slice.call(arguments, 1);
      return words.filter(function (candidate) {
        return !isSameWord(word, candidate) && isAnagram(word, candidate);
      });
    }
  };
}

module.exports = anagram;