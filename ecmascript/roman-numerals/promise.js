'use strict';
const start = Date.now();
const ordinals = {
  1: 'First',
  2: 'Second',
  3: 'Third',
  4: 'Fourth',
  5: 'Fifth'
};
const whatIsHappening = (result) => console.log(`${ordinals[result]} @ ${Date.now() - start} ms`);

new Promise(resolve => resolve(4))
  .then(result => {
    whatIsHappening(result);
    return new Promise(resolve => resolve(result));
  })
  .then(() => whatIsHappening(5));

whatIsHappening(1);
whatIsHappening(2);
whatIsHappening(3);

new Promise((resolve, reject) =>
    reject(new Error('failed to deliver on my promise to you')))
  .catch(reason => console.log(reason));
// <- Error: failed to deliver on my promise to you
