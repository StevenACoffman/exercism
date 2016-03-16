/*
const R = require('ramda');
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
const NUMBERS = '0123456789'.split('');
const mapping = (f) => (reducing) => (result, input, index) => reducing(result, f(input, index));
const filtering = (predicate) => (reducing) => (result, input, index) => predicate(input) ? reducing(result, input, index) : result;

const ATBASH_MAP = ALPHABET
  .concat()
  .reverse()
  .concat(NUMBERS)
  .reduce((accumulator, letter, index) => {
    accumulator[letter] = ALPHABET[index] || letter;
    return accumulator;
  }, {});

const isAlphaNumeric = RegExp.prototype.test.bind(/[a-z0-9]/);

//const isAlphaNumeric = (letter) => ALPHABET.indexOf(letter) !== -1 || NUMBERS.indexOf(letter) !== -1;
const lookup = (letter) => ATBASH_MAP[letter];

const intersperse = (input) => input.replace(/(.{5})/g, '$1 ');

const periodicallyPad = (current, index) => index !== 0 && index % 5 === 0 ? ' ' + current : current;

function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}

const concatenate = (xs, x, index) => xs.concat(x);
*/
/*
const result = 'I AM SO EXCITED ABOUT TRANSDUCERS'.toLowerCase().split('')
  .reduce(filtering(isAlphaNumeric)((xs, x) => xs.concat(x)), [])
  .reduce(mapping(periodicallyPad)((xs, x) => xs.concat(x)), [])
  .join('');*/
/*
//console.log(result);
const transform = compose(filtering(isAlphaNumeric), mapping(lookup));
const incorrectResult = 'I AM SO EXCITED ABOUT TRANSDUCERS'.toLowerCase().split('')
    .reduce(transform((xs, x) => xs.concat(x)), [])
    .reduce(mapping(periodicallyPad)((xs, x) => xs.concat(x)), [])
    .join('');

console.log(incorrectResult);
*/
