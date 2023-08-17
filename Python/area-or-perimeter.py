
# DESCRIPTION:
# You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
# If it is a square, return its area. If it is a rectangle, return its perimeter.

# Example(Input1, Input2 --> Output):

# 6, 10 --> 32
# 3, 3 --> 9
# Note: for the purposes of this kata you will assume that
# it is a square if its length and width are equal, otherwise it is a rectangle.

# The code defines a function named area_or_perimeter that takes the length (l)
# and width (w) of a 4-sided polygon.
# It checks if the polygon is a square (when length equals width) and returns the area in that case.
# If it's a rectangle, the function returns the perimeter.

def area_or_perimeter(l , w):
    return l*w if l == w else (l*2) + (w*2)
