'use strict';

const PrimeFactors = () => {

  //Ported from Pollard's Rho algorithm in Java
  //http://www.sanfoundry.com/java-program-pollard-rho-algorithm/
  const C = 1;

  // function X * X + C, change value of C as required
  function f(X) {
    return X * X + C;
  }

  // get divisor
  function rho(N) {
    let x1 = 2;
    let x2 = 2;
    let divisor = 1;
    if (N % 2 == 0)
      return 2;
    while (divisor == 1) {
      x1 = f(x1) % N;
      x2 = f(f(x2)) % N;
      divisor = gcd(Math.abs(x1 - x2), N);
    }

    // return divisor
    return divisor;
  }

  // GCD of two numbers
  function gcd(p, q) {
    if (p % q == 0) {
      return q;
    }

    return gcd(q, p % q);
  }

  // Check if num is prime
  function isPrime(N) {
    for (let i = 2; i <= Math.sqrt(N); i++) {
      if (N % i == 0) {
        return false;
      }
    }

    return true;
  }

  // get all factors
  function getPrimeFactors(input) {
    const primeFactors = [];

    function factor(N) {
      if (N == 1) {
        return;
      }

      if (isPrime(N)) {
        primeFactors.push(N);
        return;
      }

      let divisor = rho(N);
      factor(divisor);
      factor(N / divisor);
    }

    factor(input);
    return primeFactors;
  }

  return Object.freeze({ for: getPrimeFactors });
};

export default PrimeFactors;

console.log(getPrimeFactors(27));
