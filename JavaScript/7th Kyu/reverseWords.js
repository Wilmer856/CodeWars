
// DESCRIPTION:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    return str.split(' ').map(w => w.split('').reverse().join('')).join(' ');
}

// Each method call in the method chain produces:

// Ex: "This is an example!"

// 1. str.split(' ') -> ["This", "is", "an", "example!"]
// 2. str.split(' ').map(...) -> Loops through each array and performs steps 3-5 on each value produced in step 1
// 3. (w => w.split('')) -> Produces ["T", "h", "i", "s"] (Using element 0 ('This') as example)
// 4. (w => w.split('').reverse()) -> Produces ["s", "i", "h", "T"] (Using element 0 ('This') as example)
// 5. (w => w.split('').reverse().join('')) -> Produces "siht" (Using element 0 ('This') as example)
// 6. str.split(' ').map(w => w.split('').reverse().join('')).join(' ') -> "sihT si na !elpmaxe"