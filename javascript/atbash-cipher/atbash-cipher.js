const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
const NUMBERS = '0123456789'.split('');

const ATBASH_MAP = ALPHABET
  .concat()
  .reverse()
  .concat(NUMBERS)
  .reduce((accumulator, letter, index) => {
    accumulator[letter] = ALPHABET[index] || letter;
    return accumulator;
  }, {});

const encode = (plain) => plain.toLowerCase()
    .split('')
    .filter((letter) => ALPHABET.indexOf(letter) !== -1 || NUMBERS.indexOf(letter) !== -1)
    .map((letter) => ATBASH_MAP[letter])
    .reduce((accumulator, current, index) => {
      if (index !== 0 && index % 5 === 0)
      {
        accumulator.push(' ');
      }

      accumulator.push(current);
      return accumulator;
    }, [])
    .join('');

module.exports =  { encode };
