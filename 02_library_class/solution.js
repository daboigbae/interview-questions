const reversePrimes = (n) => {
    let primes = [];
    for(let i = 2; primes.length < n; i++) {
        if(isPrime(i)) {
            primes.push(i);
        }
    }
    return primes.reverse();
}

const isPrime = (num) => {
    for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

console.log(reversePrimes(5));  // outputs: [11, 7, 5, 3, 2]
