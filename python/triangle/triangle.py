TRIANGLES = {1: 'equilateral', 2: 'isosceles', 3: 'scalene'}


def violatesTriangleInequality(sides):
    (a, b, c) = tuple(sides)
    return a + b <= c


class Triangle:
    def __init__(self, *args):
        sides = sorted(args)
        if (violatesTriangleInequality(sides)):
            raise TriangleError(
                "Triangle (${0}) violates triangle inequality".format(sides))

        if (any([side <= 0 for side in sides])):
            raise TriangleError("Triangle (${0}) has invalid side size".format(
                sides))
        self.sides = sides

    def kind(self):
        return TRIANGLES.get(len(set(self.sides)))


class TriangleError(Exception):
    pass
