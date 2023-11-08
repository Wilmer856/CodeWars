
// DESCRIPTION:
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

function shortcut (string) {
    return string.split('').filter(char => !("aeiou".includes(char))).join('')
}

// Splits string into an array by no space, loop and filter through the array and check if 'aeiou' (vowels) 
// is the current character and negate it to ensure no vowels are returned. 
// Finally, you join the array with no spaces in between into a string.