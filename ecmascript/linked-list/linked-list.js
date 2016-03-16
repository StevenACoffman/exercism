function createNode(data) {
  let next = null;
  return { next, data };
}

function LinkedList() {
  let head = null;
  let tail = null;
  let numberOfValues = 0;

  const push = (data) => {
    let node = createNode(data);
    if (!head) {
      head = node;
      tail = node;
    } else {
      tail.next = node;
      tail = node;
    }

    numberOfValues++;
  };

  const unshift = (data) => {
    let node = createNode(data);
    node.next = head;
    head = node;
    if (!tail) {
      tail = node;
    }

    numberOfValues++;
  };

  const shift = () => {
    let result = head;
    head = head.next;
    numberOfValues--;
    if (result === tail) {
      tail = null;
    }

    return result.data;
  };

  const traverse = (fn) => {
    let current = head;
    while (current) {
      if (fn) {
        return fn(current);
      }

      current = current.next;
    }
  };

  const pop = (data) => {
    let oldTail = tail;

    if (oldTail === head)
    {
      tail = null;
      head = null;
      numberOfValues = 0;

    } else {
      let current = head;

      while (current) {
        if (current.next === tail) {
          tail = current;
          tail.next = null;
          numberOfValues--;
        }

        current = current.next;
      }
    }

    return oldTail.data;
  };

  const remove = (data) => {
    var previous = head;
    var current = head;
    while (current) {
      if (current.data === data) {
        if (current === head) {
          head = head.next;
        }

        if (current === tail) {
          tail = previous;
        }

        previous.next = current.next;
        numberOfValues--;
      } else {
        previous = current;
      }

      current = current.next;
    }
  };

  const count = () => numberOfValues;

  return { push, pop, shift, unshift, count, delete:remove };
}

export default LinkedList;
