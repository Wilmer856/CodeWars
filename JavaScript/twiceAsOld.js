
// DESCRIPTION:
// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). 
// The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

// Tests:

// twiceAsOld(36,7) -> 22
// twiceAsOld(55,30) -> 5

// twiceAsOld(42,21) -> 0
// twiceAsOld(22,1) -> 20
// twiceAsOld(29,0) -> 29

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - (sonYearsOld*2))
}


// This function works because it calculates the difference between the current father's age and twice the son's age, 
// which directly answers how many years ago or in the future the father was or will be exactly twice as old as his son. 
// The Math.abs() ensures the answer is non-negative, fitting the scenario where the doubling could have happened in the past or might happen in the future, 
// thus covering all possibilities.