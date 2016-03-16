from collections import Counter
import re

unicode_letters = re.compile('[^a-zA-Z0-9]+', re.IGNORECASE | re.UNICODE)


def word_count(phrase):
    return dict(Counter(re.findall(unicode_letters, phrase.lower())))
