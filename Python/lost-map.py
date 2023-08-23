
# DESCRIPTION:
# Given an array of integers, return a new array with each value doubled.

# For example:

# [1, 2, 3] --> [2, 4, 6]


# The code defines a function named maps that takes an array of integers (a)
# and returns a new array where each value is doubled. It uses the map function along with a
# lambda expression to achieve this transformation.
# The map function applies the lambda function (which doubles each element) to every element
# in the input array (a), and list() converts the result to a list.
def maps(a):
    return list(map(lambda x: x*2, a))
