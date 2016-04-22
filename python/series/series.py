def number_list(characters):
    return [int(x) for x in list(characters)]


def slices(word_pie, length):
    if length < 1 or length > len(word_pie):
        raise ValueError

    return [number_list(word_pie[index:index + length])
            for index, _ in enumerate(word_pie)
            if index + length <= len(word_pie)]
