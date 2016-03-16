'use strict';

function splitText(text, size) {
  return text.match(new RegExp(`.{1,${size}}`, 'g'));
}

function groupsToMatrix(groups) {
  return groups.map((word) => [...word]);
}

function matrixToGroups(matrix) {
  return matrix.map((arr) => arr.join(''));
}

function transpose(matrix) {
  return matrix[0].map((col, i) =>  matrix.map((row) =>  row[i]));
}

function Crypto(msg) {
  const raw = msg;
  const normalizedPlaintext = raw.toLowerCase().replace(/[^a-z\d]/gi, '');
  const squareSize = Math.ceil(Math.sqrt(normalizedPlaintext.length));
  const segmentedPlaintext = splitText(normalizedPlaintext, squareSize);
  const ciphertextResult = matrixToGroups(transpose(groupsToMatrix(segmentedPlaintext))).join('');
  const normalizedCiphertext = splitText(ciphertextResult, squareSize).join(' ');

  const size = () => squareSize;
  const plaintextSegments = () => segmentedPlaintext;
  const ciphertext = () => ciphertextResult;
  const normalizePlaintext = () => normalizedPlaintext;
  const normalizeCiphertext = () => normalizedCiphertext;

  return {
    normalizePlaintext,
    size,
    plaintextSegments,
    ciphertext
  };
}

export default Crypto;
