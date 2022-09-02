const sampleInput = "Welcome to this javascript Guide!"

const reverseString = string =>
	string.split("").reverse().join("")

const reverseSentence = (sentence) => {
	let reversedSentence = ""

	sentence.split(" ").forEach(string =>
		reversedSentence += `${reverseString(string)} `)

	return reversedSentence
}

console.log(reverseSentence(sampleInput))
