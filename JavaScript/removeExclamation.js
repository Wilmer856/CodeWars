
// DESCRIPTION:
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return s.split('').filter((char) => char !== '!').join('')
}

// Splits string into an array by empty space, loop and filter through the array to remove any exclamation marks, 
// and join the array into a string with no space in between.