const prompt = require("prompt-sync")();
let a = parseInt(prompt("Enter a Number"))

console.log(isPrime(a));

function isPrime(n) {
    if(n < 2) {
        return false;
    }

    for(let i = 2; i < n; i++) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}
