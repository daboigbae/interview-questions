const reverseFibonacci = (n) => {
	if (n < 1) return [];
	
	// Initialize the first two numbers of the sequence
	let sequence = [0, 1];
	
	// Calculate the rest of the sequence up to n
	while (sequence[sequence.length - 1] < n) {
	  sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
	}
	
	// Check if the last number is greater than n, if so remove it
	if (sequence[sequence.length - 1] > n) {
	  sequence.pop();
	}
  
	// Reverse and print the sequence
	console.log(sequence.reverse().join(', '));
}
  
// Call the function
reverseFibonacci(5);