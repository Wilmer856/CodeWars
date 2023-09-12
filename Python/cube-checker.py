
# DESCRIPTION:
# To find the volume (centimeters cubed) of a cuboid you use the formula:

# volume = Length * Width * Height

# But someone forgot to use proper record keeping, so we only have the volume,
# and the length of a single side!

# It's up to you to find out whether the cuboid has equal sides (= is a cube).

# Return true if the cuboid could have equal sides, return false otherwise.

# Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

def cube_checker(volume, side):
    return False if volume <= 0 or side <= 0 else volume/(side**3) == 1

# The code defines a function named cube_checker that takes two parameters, volume and side.
# It checks if the given values could represent a cube by verifying
# if the volume is equal to the cube of the side.
# It returns False for invalid numbers or if the conditions for a cube are not met.
