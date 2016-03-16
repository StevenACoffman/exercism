const POSSIBLE_ALLERGIES = ['eggs',
  'peanuts',
  'shellfish',
  'strawberries',
  'tomatoes',
  'chocolate',
  'pollen',
  'cats'
];

const powerOf2 = (number) => 1 << number;

const allergyTest = (score) => {

  const allergies = POSSIBLE_ALLERGIES.filter((_, index)=> score & powerOf2(index));
  const list = () => allergies.concat();
  const allergicTo = (allergen) => allergies.includes(allergen);

  return { list, allergicTo };
};

export default allergyTest;
