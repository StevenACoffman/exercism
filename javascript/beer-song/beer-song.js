
'use strict';

function BeerSong() {
  const getMore = 'Go to the store and buy some more, 99 bottles of beer on the wall.\n';
  const isOne = (number) => number === 1;
  const areNone = (number)=> number === 0;
  const bottleOrBottles = (number) => isOne(number) ? 'bottle' : 'bottles';
  const oneLess = (number) => number - 1;

  const verse = (verseNum) => {
    const oneOrIt = isOne(verseNum) ? 'it' : 'one';
    const bottlesLeft = `${oneLess(verseNum)} ${bottleOrBottles(oneLess(verseNum))}`;
    const numberLeftBottles = isOne(verseNum) ? 'no more bottles' : bottlesLeft;
    const passOne = `Take ${oneOrIt} down and pass it around, ${numberLeftBottles} of beer on the wall.\n`;
    const action = areNone(verseNum) ? getMore : passOne;
    const bottles = bottleOrBottles(verseNum);
    const howMany = `${verseNum || 'No more'} ${bottles} of beer on the wall, ${verseNum || 'no more'} ${bottles} of beer.\n`;
    return `${howMany}${action}`;
  };

  const sing = (startingVerse, endingVerse) => {
    if (endingVerse === undefined)
    {
      endingVerse = 0;
    }

    let result = '';
    while (startingVerse >= endingVerse) {
      result += verse(startingVerse--) + '\n';
    }

    return result.trim() + '\n';
  };

  return { verse, sing };
}

module.exports =  BeerSong;
