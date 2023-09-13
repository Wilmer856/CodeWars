
# DESCRIPTION:
# Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

# The order of the sequence has to stay the same.

# Examples:

# Input -> Output
# [1, 1, 2] -> [1, 2]
# [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

def distinct(seq):
    newArr = []
    for num in seq:
        if not num in newArr:
            newArr.append(num)
    return newArr

# function takes an array of non-negative numbers (seq) and removes duplicates while maintaining
# the order of the sequence. It uses a loop to iterate through
# the input array and appends each unique number to a new array.
