# Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

# Return your answer as a number.

def sum_mix(arr):
    return sum([int(x) for x in arr])

#converts each x into an integer value and stores it into a list and the sum function then adds up each value
# and returns the sum.

# e.g. [1, 2,"6", "9", 5, 0, "7"] -----> 30
#     ["3", "2","17", "9", 12, 8, 1] -----> 52
