
// DESCRIPTION:
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


function countPositivesSumNegatives(input) {
    if(input === null){
      return []
    }
    let newArr = [0,0]
    input.forEach( item => {
      if(item > 0){
        newArr[0] += 1
      }
      else if(item < 0){
        newArr[1] += item
      }
    })
    
    if(newArr[0] === 0 && newArr[1] === 0){
      return []
    }
    return newArr;
}

// The function decides to return an empty array if the input is null or the processed counts and sums of positives and negatives are both 0. 
// It counts positive numbers and sums negative numbers through iteration.