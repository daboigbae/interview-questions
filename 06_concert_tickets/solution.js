const concertSeats = (budget, ticketPrice) => {
    let rows = 0;  // Initialize rows to 0
    let seatsInCurrentRow = 2;  // Initial number of seats in the first row
    
    while (budget >= seatsInCurrentRow * ticketPrice) {
        budget -= seatsInCurrentRow * ticketPrice;  // Subtract the cost of current row from budget
        rows += 1;  // Increment the count of rows you can afford
        seatsInCurrentRow += 3;  // Increase the seats in the next row by 3, as per the sequence
    }
    
    return rows;  // Return the number of complete rows you can afford
}

// Test the function
console.log(concertSeats(100, 10)); // Output: 2