
# Complete the function which converts a binary number (given as a string) to a decimal number.


# Using int converter function

def bin_to_decimal(inp):
    return int(inp, 2)

# Using positions


def bin_to_decimal(inp):
    sum = 0
    p = 0  # initial exponent

    # iterate backwards OR use string slicing and assign it to a variable so you can iterate through it in the for loop (Ex: inp = inp[::-1] then for i in range(len(inp))).
    for i in range(len(inp), 0, -1):
        sum = sum + (2**p * int(inp[i - 1]))
        p += 1
    return sum

# Doubling method


def bin_to_decimal(inp):
    dec = 0
    for num in inp:
        dec = dec*2 + int(num)
    return dec
