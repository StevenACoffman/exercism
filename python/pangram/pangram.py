import string

LETTERS = set(string.ascii_lowercase)


def is_pangram(phrase: str) -> bool:
    return set(phrase.lower()) >= LETTERS
