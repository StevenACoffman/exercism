import re
from itertools import groupby

numberAndLetter = re.compile(r'(\d*)(\D)', re.IGNORECASE | re.UNICODE)


def chunk(runLengthEncoding):
    return [(int(k or '1'), g)
            for k, g in re.findall(numberAndLetter, runLengthEncoding)]


def encode(plaintext):
    return ''.join([str(g) + k for k, g in groupby(plaintext)])


def decode(ciphertext):
    return ''.join(c * int(n) for n, c in chunk(ciphertext))


chunked = chunk('12WB12W3B24WB')
encoded = encode("aaaaahhhhhhmmmmmmmuiiiiiiiaaaaaa")
decoded = decode('12WB12W3B24WB')
print(chunked)
print(encoded)
print(decoded)
