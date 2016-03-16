'use strict'
const start = 5;
const end = 20;

let myArray = Array.from(new Array(end - start)).map((_, index) => start + index);
console.log(myArray);
