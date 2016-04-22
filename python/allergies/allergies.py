POSSIBLE_ALLERGIES = [
    'eggs',  # score 1
    'peanuts',  # score 2
    'shellfish',  # score 4
    'strawberries',  # score 8
    'tomatoes',  # score 16
    'chocolate',  # score 32
    'pollen',  # score 64
    'cats'  # score 128
]


def power_of2(number):
    return 1 << number


class Allergies:
    def __init__(self, score):
        def score_implies(number):
            return score & power_of2(number) != 0

        self.allergies = [allergen
                          for index, allergen in enumerate(POSSIBLE_ALLERGIES)
                          if score_implies(index)]

    def is_allergic_to(self, allergen):
        return allergen in self.allergies

    @property
    def lst(self):
        return list(self.allergies)
