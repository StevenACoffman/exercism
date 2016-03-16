def distance(first, second):

    return sum([1 for x, y in zip(first, second) if x != y])
