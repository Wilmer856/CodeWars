
# DESCRIPTION:
# Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

# Examples (Input -> Output):
# * "String"      -> "SSttrriinngg"
# * "Hello World" -> "HHeelllloo  WWoorrlldd"
# * "1234!_ "     -> "11223344!!__  "
# Good Luck!

# The code defines a function named double_char that takes a string (s) and r
# eturns a new string in which each character is repeated once.
# It uses the map function along with a lambda expression to double each character
# and then joins the resulting list into a string.

# The map function applies the lambda function to each character in the input string (s),
# creating a list of doubled characters. The join function concatenates the list into a string.

def double_char(s):
    return ''.join(list(map(lambda x: x+x, s)))
