
// DESCRIPTION:
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if 
// the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
    //create empty string to store values in str during loop
    let camel = "";
    for(let j = 0; j < str.length; j++){
      // if '-' or '_' are found replace the index in front with its following capital letter and store
      // it into camel to avoid storing '-' or '_' into it
      if(str[j] === "-" || str[j] === "_"){
        camel = camel + str[j+1].toUpperCase();
        }
      else{
        //to avoid storing the same two letters into camel, you grab the letter that's after
        //'-' or '_' in str which would be the last char in camel string and remove it
        if(str[j-1] === "-" || str[j-1] === "_"){
          camel.slice(0,-1);
        }
        else{
          camel = camel + str[j]; // adds each letter from str if conditions above aren't met 
        }
      }
    }
    return camel;
  }