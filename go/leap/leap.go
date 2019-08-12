package leap

/*
IsLeapYear determines if a year is a leap year according the following rule:
Leap years are evenly divisble by 4 and not by 100
unless also divisible by 400.
*/
func IsLeapYear(year int) bool {
	return year%4 == 0 && (year%100 != 0 || year%400 == 0)
}
