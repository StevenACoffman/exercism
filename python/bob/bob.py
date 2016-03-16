from collections import OrderedDict


def isSilence(what):
    return what.strip() == ''


def isShouting(what):
    return what.isupper()


def isQuestion(what):
    return what.strip().endswith('?')


def isAnything(_):
    return True


lookup = OrderedDict([(isSilence, 'Fine. Be that way!'), (
    isShouting, 'Whoa, chill out!'), (isQuestion, 'Sure.')])


def hey(what):
    return next(
        (result for condition, result in lookup.items()
         if condition(what)), 'Whatever.')
