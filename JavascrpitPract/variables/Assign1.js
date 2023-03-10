function isPrime(n) {
	if (n % 2 === 0)
		return false;
	for (let i = 3; i < Math.sqrt(n); i+=2)
		if (n % i === 0)
			return false;
	return true;	
}


function isArmstrong(n) {
	n = String(n)
	let sum = 0
	for (const x of n)
		sum += Math.pow(Number(x), n.length)
	return n == sum
}

console.log(isArmstrong(153))
console.log(isPrime(17))