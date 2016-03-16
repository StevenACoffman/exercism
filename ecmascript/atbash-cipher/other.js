const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
const NUMBERS = '0123456789'.split('');

const mapping = (f) => (reducing) => (result, input, index) => reducing(result, f(input, index));
const filtering = (predicate) => (reducing) => (result, input) => predicate(input) ? reducing(result, input) : result;

const ATBASH_MAP = ALPHABET
  .concat()
  .reverse()
  .concat(NUMBERS)
  .reduce((accumulator, letter, index) => {
    accumulator[letter] = ALPHABET[index] || letter;
    return accumulator;
  }, {});
const isAlphaNumeric = (letter) => ALPHABET.includes(letter) || NUMBERS.includes(letter);
const lookup = (letter) => ATBASH_MAP[letter];
const periodicallyPad = (current, index) => index !== 0 && index % 5 === 0 ? ' ' + current : current;

const encode = (plain) => {
  return plain.toLowerCase()
    .split('')
    .reduce(filtering(isAlphaNumeric)((xs, x) => xs.concat(x)), [])
    .reduce(mapping(lookup)((xs, x) => xs.concat(x)), [])
    .reduce(mapping(periodicallyPad)((xs, x) => xs.concat(x)), [])
    .join('');
};

export default { encode };
