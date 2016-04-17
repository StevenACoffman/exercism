def BAR(n):
    if n <= 2:
        return n
    return n + BAR(n - 2)


print(BAR(8))
