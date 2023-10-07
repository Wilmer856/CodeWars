
// DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


function solution(str){
    return str.split('').reverse().join('')
}

// Splits string by no space into an array, reverse the array, and join each element in the array with no space between each value:
//  (ex: 'Hello' -> ['H', 'e', 'l', 'l', 'o'] -> ['o', 'l', 'l', 'e', 'H'] -> 'olleH')