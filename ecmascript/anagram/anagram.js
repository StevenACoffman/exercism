'use strict';

const Anagram = (word) => {
  const sortWord = (word) => [...word].sort().join('');
  const lowerCaseWord = word.toLowerCase();
  const sortedWord = sortWord(lowerCaseWord);

  const matches = (...words) => {
    words = Array.isArray(words[0]) ? words[0] : words;
    return words.filter((candidate) => {
      let lowCandidate = candidate.toLowerCase();
      return lowerCaseWord !== lowCandidate && sortedWord === sortWord(lowCandidate);
    });
  };

  return Object.freeze({matches});
};

export default Anagram;
