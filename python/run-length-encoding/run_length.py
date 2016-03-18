import re
from itertools import groupby

numberAndLetter = re.compile(r'(\d*)(\D)', re.IGNORECASE | re.UNICODE)


def chunk(runLengthEncoding):
    return [(int(k or '1'), g)
            for k, g in re.findall(numberAndLetter, runLengthEncoding)]


def decode(ciphertext):
    return ''.join([c * int(n) for n, c in chunk(ciphertext)])


def runLength(size):
    if (size == 1):
        return ''

    return str(size)


def encode(plaintext):
    return ''.join([runLength(len(list(g))) + k for k, g in groupby(plaintext)
                    ])
