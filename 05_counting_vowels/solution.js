const countVowels = (str) => {
	const vowels = "aeiouAEIOU";
	const vowelCount = {};
  
	for (let char of str) {
	  if (vowels.includes(char)) {
		const vowel = char.toLowerCase();
		vowelCount[vowel] = (vowelCount[vowel] || 0) + 1;
	  }
	}
  
	return vowelCount;
  };
  
  console.log(countVowels("Hello, World!")); // Output: { e: 1, o: 2 }
  console.log(countVowels("aeiouAEIOU")); // Output: { a: 2, e: 2, i: 2, o: 2, u: 2 }