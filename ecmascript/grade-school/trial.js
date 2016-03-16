'use strict';
const School = () => {
  let _grades = {};
  const add =  (name, grade) => {
    if (_grades[grade]) {
      _grades[grade].push(name);
    } else {
      _grades[grade] = [name];
    }
    _grades[grade].sort(); //ammortized
  };
  const roster = () => Object.assign({}, _grades);
  const grade = (num) => _grades[num] || [];
  return Object.freeze({
    add, roster, grade
  });
};

let mySchool = School();
mySchool.add('Bill', 2);
console.log(mySchool.roster());
