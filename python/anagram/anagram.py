def normalize(word):
    return ''.join(sorted(word))


def detect_anagrams(word, candidates):
    folded = word.casefold()
    normalized_word = normalize(folded)

    def memoize(f):
        memo = {}

        def helper(x):
            if x not in memo:
                memo[x] = f(x)
            return memo[x]

        return helper

    @memoize
    def is_anagram(folded_candidate):
        return folded != folded_candidate and normalize(
            folded_candidate) == normalized_word

    return [candidate
            for candidate in candidates if is_anagram(candidate.casefold())]
