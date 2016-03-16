const Bob = () => {
  const isSilence = (input) => (input.trim().length === 0);
  const isShouting = (input) => (input === input.toUpperCase() && input !== input.toLowerCase());
  const isQuestion = (input) => (input.substr(-1) === '?');
  const isAnything = () => true;

  const lookupActions = [
    { condition: isSilence, result: 'Fine. Be that way!' },
    { condition: isShouting, result: 'Whoa, chill out!' },
    { condition: isQuestion, result: 'Sure.' },
    { condition: isAnything, result: 'Whatever.' }
  ];

  const hey = (input) => lookupActions.find((c) => c.condition(input)).result;

  return Object.freeze({ hey });
};

export default Bob;
