const ALPHABET = [...'abcdefghijklmnopqrstuvwxyz'];

function Pangram(sentence) {
  const uniqueletters = new Set(sentence.toLowerCase());
  const pangramStatus = ALPHABET.every(letter => uniqueletters.has(letter));
  const isPangram = () => pangramStatus;

  return Object.freeze({ isPangram });
}

export default Pangram;
