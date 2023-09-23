
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.



function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9; 
}

// The return statement simply uses the modulo operator to check if 'number' is divisble by 2 (checking if even) and then multiplying it by 8
// Otherwise, multiplying it by 9