'use strict';
let robotName = '';
const usedNames = new Set();
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

let generateName = () => {
  let newName = randomName();
  usedNames.has(newName) ? newName = generateName() : usedNames.add(newName);
  return newName;
};

let Robot = () => {
  robotName = generateName();
  return {
    name : robotName,
    reset : function() { this.name = generateName(); }
  };
};
export default Robot;
//let myRobot = Robot();
//console.log(myRobot.name);
//console.log(myRobot.reset());
//console.log(myRobot.name);
