const organizePlaylist = (songs) => 
	songs.sort((a, b) => {
        // First, compare by length
        if (a.length < b.length) return -1;
        if (a.length > b.length) return 1;

        // If length is the same, compare alphabetically
        return a.localeCompare(b);
    });

// Testing the function
console.log(organizePlaylist(["Song", "Another Song", "Play", "A"]));  // ["A", "Play", "Song", "Another Song"]
console.log(organizePlaylist(["A", "B", "CC", "BB", "AAA"]));  // ["A", "B", "BB", "CC", "AAA"]
console.log(organizePlaylist(["Go", "Away", "At", "The", "Park"]));  // ["Go", "At", "The", "Away", "Park"]
