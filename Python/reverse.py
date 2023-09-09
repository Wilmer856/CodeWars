

# You need to write a function that reverses the words in a given string.
# A word can also fit an empty string. If this is not clear enough, here are some examples:

# As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

# Example (Input --> Output)

# "Hello World" --> "World Hello"
# "Hi There." --> "There. Hi"

def reverse(st):
    return " ".join(st.split()[::-1])

# The code defines a function named reverse that takes a string st and
# reverses the order of words. It uses the split method to separate words, [::-1]
# to reverse the list of words, and then join to concatenate them back into a string.
