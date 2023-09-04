
# DESCRIPTION:
# In this Kata we are passing a number (n) into a function.

# Your code will determine if the number passed is even (or not).

# The function needs to return either a true or false.

# Numbers may be positive or negative, integers or floats.

# Floats with decimal part non equal to zero are considered UNeven for this kata.

def is_even(n):
    return n % 2 == 0


# The code defines a function named is_even that takes a number n and
# returns True if the number is even and False otherwise.
# It uses the modulo operator (%) to check if the remainder when dividing n by 2 is equal to 0.
