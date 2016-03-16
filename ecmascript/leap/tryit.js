var R = require('ramda');

var factorOf = R.curryN(2, R.compose(R.equals(0), R.flip(R.modulo)));
var factorOf4 = factorOf(4);
console.log(factorOf4(12));
