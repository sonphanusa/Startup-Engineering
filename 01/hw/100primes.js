#!/usr/bin/env node

// GET THE FIRST 100 PRIME NUMBERS
var numPrimes = 100;		//number of primes to be printed
var arrPrimes = [2];		//array of primes, starts with 2
var num = arrPrimes[0]+1;	//integers to be tested

while (arrPrimes.length < numPrimes) {
	if (isPrime(num))
		arrPrimes.push(num);
	num++;
}

function isPrime(n) {
	for (var i=2; i<=Math.sqrt(n); i++) {
		if (n%i==0)
			return false;
	}
	return true;
}

// OUTPUT TO FILE
var fs = require('fs');
var outfile = "100primes.txt";
fs.writeFileSync(outfile, arrPrimes);
console.log("Script: " + __filename + "\nWrote: " + arrPrimes + "\nTo: " + outfile);

