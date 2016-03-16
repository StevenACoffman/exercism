'use strict';

const BAD_NUMBER = '0'.repeat(10);
const clean = (input) => input.replace(/\D/g, '');
const isDomestic = (input) => input.length === 10;
const isNationalFormat = (input) => (input.length === 11 && input.startsWith('1'));

const validate = (input) => {
  let result;
  if (isDomestic(input)) {
    result = input;
  } else if (isNationalFormat(input)) {
    result = input.substring(1, 11);
  } else {
    result = BAD_NUMBER;
  }

  return result;
};

function PhoneNumber(input) {
  const validInput = validate(clean(input));
  const areaCode = () => validInput.substring(0, 3);
  const middle3 = (input) => input.substring(3, 6);
  const last4 = (input) => input.substring(6, 10);
  const toString = () => `(${areaCode(validInput)}) ${middle3(validInput)}-${last4(validInput)}`;
  const number = () => validInput;

  return { number, areaCode, toString};
}

module.exports =  PhoneNumber;
