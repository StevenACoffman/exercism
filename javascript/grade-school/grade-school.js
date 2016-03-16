'use strict';

function School() {
  const _grades = {};
  const add = (name, level) => {
    const students = grade(level);
    students.push(name);
    _grades[level]= students.sort();
  };

  const roster = () => JSON.parse(JSON.stringify(_grades));
  const grade = (num) => _grades[num] || [];

  return Object.freeze({ add, roster, grade });
}

module.exports =  School;
