
// DESCRIPTION:
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
    let sorted = numbers.sort((a,b) => a-b)
    return sorted[0] === sorted[1] ? sorted[sorted.length - 1] : sorted[0]
}

// This solution sorts the array and due to the array having one single unique number, 
// you can use the array to either return the first or last value in the array because it will always be in one of those spots.