'use strict';
function not(fn) {
  return (x) => !fn(x);
}

const filter = (predicate, collection) => {
  const matches = [];
  for (let index = 0; index < collection.length; index++) {
    if (predicate(collection[index])) {
      matches.push(collection[index]);
    }
  }

  return matches;
};

const keep = (collection, predicate) => filter(predicate, collection);
const discard = (collection, predicate) => filter(not(predicate), collection);
const strain = Object.freeze({ keep, discard });

module.exports = strain;
