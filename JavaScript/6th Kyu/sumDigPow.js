
// DESCRIPTION:
// The number 
// 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. 
// What's the use of saying "Eureka"? Because this sum gives the same number: 89 = 8^1 + 9^2 
 
// The next number in having this property is 135

// See this property again: 135 = 1^1 + 3^2 + 5^3 
 
// Task
// We need a function to collect these numbers, that may receive two integers a,b that defines the range
// [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Examples
// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range 
// [a,b] the function should output an empty list.

// 90, 100 --> []

function sumDigPow(a, b) {
    let arr = []
    let sum = 0
    for(let i = a; i <= b; i++){
      for(let j = Math.floor(Math.log10(i) + 1); j >= 1 ; j--){
        sum += Math.pow(Number(('' + i)[j-1]), j)
      }
      if(i === sum){
        arr.push(sum)
      }
      sum = 0
    }
    return arr
}

// 1. Initialize an empty array arr: This will store the numbers that satisfy the property.
// 2. Loop through the range [a, b]: For each number i in this range, the function checks if it meets the specified property.
// 3. Nested Loop to Calculate Sum: For each digit in i, it calculates the sum of digits raised to their positions. It does this by:
//  - Converting i to a string to access its digits individually.
//  - Using a for-loop that iterates backwards from the number of digits in i (calculated by Math.log10(i) + 1) down to 1.
//  - Raising each digit to its respective power (determined by its position) and adding it to sum.
// 4. Check if i meets the Property: After calculating the sum for i, it checks if i is equal to sum. If so, i is added to arr.
// 5. Reset sum for the next number: Before moving to the next number in the range, sum is reset to 0.
// 6. Return arr: After checking all numbers in the range, the function returns the array arr containing all numbers that satisfy the property.