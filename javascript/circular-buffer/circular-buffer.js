const bufferEmptyException = () => ({
  name: 'buffer empty exception!',
  message: 'can\'t read from an empty buffer!'
});

const bufferFullException = () => ({
  name: 'buffer full exception!',
  message: 'can\'t write to a full buffer!'
});

const boundedQueue = (capacity) => {
  const queue = [];
  const valid = (item) => (item !== null && item !== undefined);
  const shift = () => queue.shift();
  const push = (item) => valid(item) && queue.push(item);
  const isFull = () => queue.length === capacity;
  const isEmpty = () => queue.length === 0;

  return Object.freeze({
    shift, push, isFull, isEmpty
  });
};

const circularBuffer = (capacity) => {
  const queue = boundedQueue(capacity);
  const throwBufferEmptyException = () => {throw bufferEmptyException();};

  const checkEmpty = () => {queue.isEmpty() && throwBufferEmptyException();};

  const checkFull = () => {
    if (queue.isFull()) {
      throw bufferFullException();
    }
  };

  const read = () => (checkEmpty() || queue.shift());

  const write = (item) => checkFull() || queue.push(item);

  const forceWrite = (item) => {
    if (queue.isFull()) {
      queue.shift();
    }

    queue.push(item);
  };

  const clear = () => {
    while (!queue.isEmpty()) {
      queue.shift();
    }
  };

  return Object.freeze({
    read, write, forceWrite, clear
  });
};

module.exports = {
  circularBuffer,
  bufferFullException,
  bufferEmptyException
};
