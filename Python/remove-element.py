
# DESCRIPTION:
# Take an array and remove every second element from the array.
# Always keep the first element and start removing with the next element.

# Example:
# ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]


def remove_every_other(my_list):
    return [item for index,item in enumerate(my_list) if index % 2 == 0]

# The function uses a list comprehension with the enumerate
# function to iterate through the elements of the input list along with their indices.
# It keeps only those elements where the index is even
# (indicating the first element and every other element thereafter).
