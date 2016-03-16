'use strict';

const usedNames = new Set();

function Robot() {
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomNumber = (maximum) => Math.floor(Math.random() * maximum);
  const randomDigit = () => randomNumber(10);
  const randomLetter = () => ALPHABET.charAt(randomNumber(26));
  const randomName = () => [
    randomLetter(),
    randomLetter(),
    randomDigit(),
    randomDigit(),
    randomDigit()
  ].join('');
  const generateName = () => {
    let newName = randomName();

    usedNames.has(newName) ? newName = generateName() : usedNames.add(newName);
    return newName;
  };

  let robotName = generateName();
  const reset = () => robotName = generateName();
  return {
    get name() {
      return robotName;
    },

    reset
  };
}

module.exports = Robot;
