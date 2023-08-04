# You get an array of numbers, return the sum of all of the positives ones.

# Example [1,-4,7,12] => 1 + 7 + 12 = 20

# Note: if there is nothing to sum, the sum is default to 0.


def positive_sum(arr):
    return sum(num for num in arr if num > 0)

# loops through the array and the if statement only grabs the values greater than 0 and stores them into num.
# The sum function then adds all of those values