import calendar
import datetime

# calendar.day_name has Sunday at the end, not first
weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
            'Saturday']

currentCalendar = calendar.Calendar(6)


def teenth():
    return range(13, 19)


def in_month(day):
    return day != 0


def has_numbers(inputString):
    return any(char.isdigit() for char in inputString)


def get_number(s):
    return int(s.rstrip('stndrd'))


def day_of_week(name):
    return weekdays.index(name)


def which_range(which):
    if which == 'last':
        return [-1]
    elif which == 'first':
        return [0]
    elif which == 'teenth':
        return teenth()
    elif has_numbers(which):
        return [get_number(which)]


def meetup_day(year, month, weekday, which):
    return datetime.date(
        year, month, [x
                      for x in currentCalendar.itermonthdays2(year, month)
                      if in_month(x[0]) and x[1] in which_range(which)][0][0])
