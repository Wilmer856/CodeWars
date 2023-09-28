
// DESCRIPTION:
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// make_negative(1);  # return -1
// make_negative(-5); # return -5
// make_negative(0);  # return 0



function makeNegative(num) {
    return Math.abs(num) * -1
}

// Getting the absolute value of 'num' ensures that if num is a negative number already, 
// it gets converted to a positive number and multiplied back to negative by multiplying it by -1