def divisible_by(divisor):
    return lambda dividend: dividend % divisor == 0


def negation(fn):
    return lambda x: not fn(x)


def both(f, g):
    return lambda x: f(x) and g(x)


def either(f, g):
    return lambda x: f(x) or g(x)


def is_leap_year(year):
    return either(
        both(
            divisible_by(4), negation(divisible_by(100))),
        divisible_by(400))(year)
