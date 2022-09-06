const sampleInput = [1, 2, 3, -3, -2, -1, 0, 4, 5]

const filterNegativesFromArray = (array) =>
	array.filter(item => item >= 0)

console.log(filterNegativesFromArray(sampleInput))
