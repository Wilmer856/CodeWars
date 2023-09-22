
// Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x){
    let newX = ""
    for(let i = 0; i < x.length; i++){
      if(x[i] === " "){
        continue
      }
      else{
        newX += x[i]
      }
    }
    return newX
}