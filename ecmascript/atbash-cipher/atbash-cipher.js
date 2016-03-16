const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
const NUMBERS = '0123456789'.split('');
const SPACE = ' '; //the final frontier
const GROUP_SIZE = 5;
const mapping = (f) => (reducing) => (result, input) => reducing(result, f(input));
const filtering = (predicate) => (reducing) => (result, input) => predicate(input) ? reducing(result, input) : result;
const compose = (f, g, h) => (x) => f(g(h(x)));

const ATBASH_MAP = ALPHABET
  .concat()
  .reverse()
  .concat(NUMBERS)
  .reduce((accumulator, letter, index) => {
    accumulator[letter] = ALPHABET[index] || letter;
    return accumulator;
  }, {});

const periodically = (period) => {
  let counter = 0;
  const shouldPad = (itemNumber) => itemNumber !== 0 && itemNumber % period === 0;
  const pad = (current) => shouldPad(counter++) ? SPACE + current : current;
  return { pad };
};

const isAlphaNumeric = RegExp.prototype.test.bind(/[a-z0-9]/);
const lookup = (letter) => ATBASH_MAP[letter];

const concatenate = (xs, x) => xs.concat(x);

const encode = (plain) => {
  const everySoOften = periodically(GROUP_SIZE);
  const transform = compose(filtering(isAlphaNumeric), mapping(lookup), mapping(everySoOften.pad));

  return plain.toLowerCase()
    .split('')
    .reduce(transform(concatenate), '');
};

export default { encode };
