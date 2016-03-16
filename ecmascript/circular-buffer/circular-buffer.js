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
  const valid = (item) => item !== null && item !== undefined;
  const dequeue = () => queue.shift();
  const enqueue = (item) => valid(item) && queue.push(item);
  const isFull = () => queue.length === capacity;
  const isEmpty = () => queue.length === 0;
  const clear = () => queue.length = 0;

  return Object.freeze({ dequeue, enqueue, isFull, isEmpty, clear });
};

const circularBuffer = (capacity) => {
  const queue = boundedQueue(capacity);

  function checkEmpty() {
    if (queue.isEmpty()) {
      throw bufferEmptyException();
    }
  }

  function checkFull() {
    if (queue.isFull()) {
      throw bufferFullException();
    }
  }

  function read() {
    checkEmpty();
    return queue.dequeue();
  }

  function write(item) {
    checkFull();
    return queue.enqueue(item);
  }

  function forceWrite(item) {
    if (queue.isFull()) {
      queue.dequeue();
    }

    queue.enqueue(item);
  }

  function clear() {
    queue.clear();
  }

  return Object.freeze({ read, write, forceWrite, clear });
};

export {
  circularBuffer as default,
  bufferFullException,
  bufferEmptyException
};
