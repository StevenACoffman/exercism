const parse = (phrase) => {
  return phrase.split(/-| /)
  .reduce((acc, word, index, words) => {
    const firstLetter = [...word].slice(0, 1)[0];
    const capitals = word.split(/[a-z]|,|:/);
    const isAllCapitals = word === word.toUpperCase();
    const startsWithLowerCase = firstLetter === firstLetter.toLowerCase();
    if (startsWithLowerCase || isAllCapitals) {
      acc.push(firstLetter);
    } else {
      acc.push(...capitals);
    }

    return acc;
  }, [])
    .join('')
    .toUpperCase();
};

export default Object.freeze({ parse });
