
// DESCRIPTION:
// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"


function nameShuffler(str){
    return str.split(' ').reverse().join(' ')
}

// Split the string where a space occurs into an array, reverse the array, and join the array values with a space between each one.