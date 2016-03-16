'use strict';

var Pangram = function(text) {
  this.text = text;

  var letters = this.text.toLowerCase().split('').reduce(function (ary, letter) {
    ary[letter.charCodeAt(0)] = true;
    return ary;
  }, []);

  letters[123] = null;
  this.letters = Array.from(letters.slice(97, 123));
};

Pangram.prototype.isPangram = function() {
  return this.letters.indexOf(undefined) === -1;
};

Pangram.prototype.missingLetters = function() {
  return this.letters.map(function(val, idx) {
    return val ? null : String.fromCharCode(idx + 97);
  }).filter(function(x) {return x;});
};

module.exports = Pangram;
