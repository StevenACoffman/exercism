import calendar

year = 2014
month = 1
currentCalendar = calendar.Calendar(6)
weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
            'Saturday']


def teenth():
    return range(13, 19)


def inMonth(day):
    return day != 0


def hasNumbers(inputString):
    return any(char.isdigit() for char in inputString)


def getNumber(s):
    return int(s.rstrip('stndrd'))


def dayOfWeek(name):
    return weekdays.index(name)


def whichRange(which):
    if which == 'last':
        return [-1]
    elif which == 'first':
        return [0]
    elif which == 'teenth':
        return teenth()
    elif hasNumbers(which):
        return [getNumber(which)]


print([whichRange(x) for x in ['teenth', '1st', 'last', 'first']])
