function convertTrinaryToDecimal(trinary) {
  let result = 0;
  for (let i = 0; i < trinary.length; i++) {
    if (trinary[i] === '1' || trinary[i] === '2')
    {
      result += Number(trinary[i]) * Math.pow(3, trinary.length - i - 1);
    }

  }

  return result;
}

function Trinary(input) {

  const decimal = convertTrinaryToDecimal(input);
  const toDecimal = () => decimal;

  return { toDecimal };
}

export default Trinary;
