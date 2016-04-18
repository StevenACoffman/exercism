import calendar
import datetime

# expects calendar.day_name has Sunday at the end, not first
weekdays = [x for x in calendar.day_name]

currentCalendar = calendar.Calendar(6)


def teenth():
    return range(13, 19)


def in_month(day):
    return day != 0


def has_numbers(inputString):
    return any(char.isdigit() for char in inputString)


def get_number(s):
    return int(s.rstrip('stndrh')) - 1


def day_of_week(name):
    return weekdays.index(name)


def weekdays_in_month(year, month, weekday):
    return [x[0]
            for x in currentCalendar.itermonthdays2(year, month)
            if in_month(x[0]) and x[1] == day_of_week(weekday)]


def day_in_month(year, month, weekday, which):
    possible_days = weekdays_in_month(year, month, weekday)
    if which == 'last':
        return possible_days[-1]
    elif which == 'first':
        return possible_days[0]
    elif which == 'teenth':
        for x in possible_days:
            if x in teenth():
                return x
    elif has_numbers(which):
        try:
            return possible_days[get_number(which)]
        except IndexError:
            raise MeetupDayException(
                "There is no {0} {1} in {2} of {3}".format(which, weekday,
                                                           month, year))


def meetup_day(year, month, weekday, which):
    return datetime.date(year, month,
                         day_in_month(year, month, weekday, which))


class MeetupDayException(Exception):
    def __init__(self, *args, **kwargs):
        Exception.__init__(self, *args, **kwargs)
