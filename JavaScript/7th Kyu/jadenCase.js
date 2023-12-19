
// DESCRIPTION:
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). 
// Jaden is also known for some of his philosophy that he delivers via Twitter. 
// When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, 
// you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. 
// The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// Link to Jaden's former Twitter account @officialjaden via archive.org

String.prototype.toJadenCase = function () {
    return this.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
};

// The solution splits each word into an array, loops through the array and obtains the first letter, change the letter to uppercase, 
// combines it with the every letter after, repeat on every word, and comnbine each word into one string in the end.