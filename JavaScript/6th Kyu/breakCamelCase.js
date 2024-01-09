
// DESCRIPTION:
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    let seperator = ''
    for(let i = 0; i < string.length; i++){
      if(string[i] === string[i].toUpperCase()){
        seperator += (' ' + string[i])
      } else{
        seperator += string[i]
      }
    }
    return seperator
}