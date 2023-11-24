
# DESCRIPTION:
# Simple, given a string of words, return the length of the shortest word(s).

# String will never be empty and you do not need to account for different data types.


def find_short(s):
    return min(len(word) for word in s.split())


# This solution splits the string by a space to create a list of words to iterate
# through and utilizes generator expressions to obtain the len of each word and obtain the minimum word.
