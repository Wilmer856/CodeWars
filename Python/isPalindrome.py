# Write a function that checks if a given string (case insensitive) is a palindrome.

def is_palindrome(s):
    return s.lower() == s[::-1].lower() #creates the word backwards and checks with the original


# ------------------------------------------OR--------------------------------
# ------------------------------------Recursive method-----------------------------

def isPalindrome(s):
    s = s.lower()
    if len(s) < 2: # base case that concludes the word is a palindrome if the original is of length 1 or if the recurisve calls reach the middle of the word
        return True
    if(s[0] != s[-1]): #fail case where subword in each recursive call checks if the start and end of each subword is not equal to each other (determines not Palindrome).
        return False
    return isPalindrome(s[1:-1]) #creates a new subword by recursively calling isPalindrome with new start and end points to create a subword.
