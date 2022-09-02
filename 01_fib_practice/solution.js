
const solution = (limit = 10) => {
	let firstNumber = 0;
	let secondNumber = 1;
	let oddSum = 0;

	while ((firstNumber) < limit) {
		let tempSum = firstNumber + secondNumber;
		firstNumber = secondNumber;
		secondNumber = tempSum;

		if (firstNumber % 2 != 0) {
			oddSum += firstNumber;
		}
	}

	return oddSum
}

console.log(solution(10000)) // 14328