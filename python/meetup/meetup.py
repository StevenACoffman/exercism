import calendar
import datetime

# calendar.day_name has Sunday at the end, not first
weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
            'Saturday']

currentCalendar = calendar.Calendar(6)


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


def meetup_day(year, month, weekday, which):
    return datetime.date(year, month,
                         [x
                          for x in currentCalendar.itermonthdays2(year, month)
                          if inMonth(x[0]) and x[1] in whichRange(which)][0])
