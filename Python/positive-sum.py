
# DESCRIPTION:
# You get an array of numbers, return the sum of all of the positives ones.

# Example [1,-4,7,12] => 1 + 7 + 12 = 20

# Note: if there is nothing to sum, the sum is default to 0.

def positive_sum(arr):
    return sum(num for num in arr if num > 0)

# The function iterates through each element in the array,
# selecting only the positive numbers, and then calculates their sum using the sum function.
# If there are no positive numbers, the sum defaults to 0.
