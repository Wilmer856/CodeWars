
# DESCRIPTION:
# The cockroach is one of the fastest insects.
# Write a function which takes its speed in km per hour and returns it in cm per second,
# rounded down to the integer (= floored).

# For example:

# cockroach_speed(1.08) --> 30
# Note! The input is a Real number and is >= 0.
# The result should be an Integer.


# The code converts the speed of a cockroach from
# kilometers per hour to centimeters per second and
# returns the result rounded down to the nearest integer.
import math
def cockroach_speed(s):
    return math.floor(s*27.7778)
