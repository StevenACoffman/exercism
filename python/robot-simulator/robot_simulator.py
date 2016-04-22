NORTH, EAST, SOUTH, WEST = 1, 2, 3, 4

_directional_advances = {NORTH: (0, 1),
                         EAST: (1, 0),
                         SOUTH: (0, -1),
                         WEST: (-1, 0)}

_possible_moves = {'L': 'turn_left', 'R': 'turn_right', 'A': 'advance'}


def tuple_add(a, b):
    return tuple([item1 + item2 for item1, item2 in zip(a, b)])


class Robot:
    def __init__(self, bearing=NORTH, x=0, y=0):
        self.bearing = bearing
        self.coordinates = (x, y)

    def advance(self):
        self.coordinates = tuple_add(self.coordinates,
                                     _directional_advances.get(self.bearing))

    def turn_right(self):
        self.bearing = self.bearing % 4 + 1

    def turn_left(self):
        self.bearing = (self.bearing + 2) % 4 + 1

    def simulate(self, moves):
        for move in moves:
            getattr(self, _possible_moves[move])()
