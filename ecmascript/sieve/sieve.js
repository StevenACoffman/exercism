function* filter(seq, prime) {
  for (let num of seq) {
    if (num % prime !== 0) {
      yield num;
    }
  }
}

function* numbers(start) {
  while (true) {
    yield start++;
  }
}

function* primes() {
  var seq = numbers(2);
  var prime;

  while (true) {
    prime = seq.next().value;
    yield prime;
    seq = filter(seq, prime);
  }
}

function* take(limit, seq) {
  let current;
  yield current = seq.next().value;
  while (current < limit) {
    yield current = seq.next().value;
  }
}

function Sieve(limit) {
  const collectedPrimes = [...take(limit, primes())].filter((num) => num <= limit);

  return Object.freeze({
    primes: collectedPrimes
  });
}

export default Sieve;
