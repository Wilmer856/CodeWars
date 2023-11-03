
// DESCRIPTION:
// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle


function otherAngle(a, b) {
    return 180 - (a+b)
}

// The sum of the interior angles is 180 degrees, so you obtain the third by adding the two known angles and subtracting it by 180.