'use strict';

export default () => {
  const _grades = {},
    add = (name, grade) => {
      if (_grades[grade]) {
        _grades[grade].push(name);
      } else {
        _grades[grade] = [name];
      }
      _grades[grade].sort();
    };
  const roster = () => JSON.parse(JSON.stringify(_grades));
  const grade = (num) => _grades[num] || [];
  return Object.freeze({
    add, roster, grade
  });
};
