'use strict';
function trythis() {
  let [one, two] = [1, 2];
  let {response} = {response: 'hello'};

  console.log(one, two, response);
  const mine = [
      {result: 'Fine. Be that way!'},
      {result: 'Whatever.'}
    ];
  let [ {result} ] = mine;
  console.log(result);
}
trythis();
