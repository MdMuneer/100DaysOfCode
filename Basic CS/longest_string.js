// Longest String Plan

// Initialize and Declare Variable for Longest String
// Loop through the array
// Find the length of each string
// Determine if that length is the largest we have seen so far.
// Replace the longest/largest variable with the arr[index] as long as length is greater than the variable.
// Return longest/largest string.

function longestString1(arr) {
	var longest = ''; 
	for (var i = 0; i < arr.length; i++) { 
		if (arr[i].length > longest.length) {
			longest = arr[i]; 
		}
	}
	return longest; 
}

console.log(longestString1(['word', 'even-longer-word', 'long-wordiiiiiiiing']))
