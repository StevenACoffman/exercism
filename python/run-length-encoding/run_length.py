import re
from functools import reduce


def encode(input):
    return ''.join(reduce(compress, tokenize(input), []))


def decode(input):
    return reduce(expand, chunk(input), '')


tokenize = lambda input: re.finditer(r'(.)\1*', input)

chunk = lambda input: re.findall(r'(\d*)(\D)', input)

compress = lambda output, match: \
    output + [('{}{}'.format(len(match.group()), match.group()[0]))] \
        if len(match.group()) > 1 else output + [match.group()]

expand = lambda a, b: \
    a + b[1] if not b[0] else a + (b[1] * int(b[0]))
