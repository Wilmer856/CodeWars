
// DESCRIPTION:
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

function invert(array) {
    return array && array.length ? array.map(item => item >= 0 ? item*-1 : Math.abs(item)) : []
 }

// You first make a check to see if the array is empty and then perform the inverse operations.
// Otherwise, an empty array is returned.