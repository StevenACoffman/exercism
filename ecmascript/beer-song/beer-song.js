
'use strict';

let Beer = () => {
  const getMore = 'Go to the store and buy some more, 99 bottles of beer on the wall.\n';

  const verse = (verseNum) => {
    let bottles = `${verseNum === 1 ? 'bottle' : 'bottles'}`;
    let oneOrIt = `${verseNum === 1 ? 'it' : 'one'}`;
    let numberLeft = `${verseNum === 1 ? 'no more' : verseNum - 1}`;
    let howMany = `${verseNum || 'No more'} ${bottles} of beer on the wall, ${verseNum || 'no more'} ${bottles} of beer.\n`;
    let passOne = `Take ${oneOrIt} down and pass it around, ${numberLeft} ${bottles} of beer on the wall.\n`;
    let action = `${verseNum === 0 ? getMore : passOne }`;
    return `${howMany}${action}`;
  };

  const sing = (startingVerse = 99, endingVerse = 0) => {
    let result = '';
    while (startingVerse >= endingVerse) {
      result += verse(startingVerse--) + '\n';
    }
    return result.trim() + '\n';
  };

  return {verse, sing};
};
export default new Beer();
