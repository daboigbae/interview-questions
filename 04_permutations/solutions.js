const permutations = []

function permute(string, left, right) {
	if (left == right)
		permutations.push(string)
	else {
		for (let i = left; i <= right; i++) {
			str = swap(str, left, i);
			permute(str, left + 1, right);
			str = swap(str, left, i);
		}
	}
}

function swap(a, i, j) {
	let temp;
	let charArray = a.split("");
	temp = charArray[i];
	charArray[i] = charArray[j];
	charArray[j] = temp;
	return (charArray).join("");
}

let str = "ABCD";
permute(str, 0, str.length - 1);

console.log('permutations', permutations)