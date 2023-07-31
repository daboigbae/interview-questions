const reverseChunks = (str, n) => {
	let reversedString = '';
	for (let i = 0; i < str.length; i += n) {
	  let chunk = str.slice(i, i + n);
	  let reversedChunk = chunk.split('').reverse().join('');
	  reversedString += reversedChunk;
	}
	return reversedString;
  };
  
  // Test
  const inputString = 'Digital Art Dealers';
  const n = 3;
  const result = reverseChunks(inputString, n);
  console.log(result); // Output: "giDatiA l traeDrels"
  