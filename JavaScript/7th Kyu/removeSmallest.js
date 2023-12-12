
// DESCRIPTION:
// The museum of incredibly dull things
// The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. 
// She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibits, 
// she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. 
// Do not mutate the original array/list. If there are multiple elements with the same value, 
// remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
    let arr = [...numbers]
    if(numbers.length > 1){
      arr.splice((arr.indexOf(Math.min(...arr))),1)
      return arr
    }
    return [];
}

// The solution first spreads the array passed as an argument to the function into 'arr' to avoid mutating the original array.
// Then it checks if the array contains any values and returns '[]' otherwise.
// If the array contains any values, the splice method gets called to remove a specific index of the array and we obtain this index
// by finding the index of the minimum value in the array and specifying that we're only removing one value.