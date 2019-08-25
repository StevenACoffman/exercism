package binarysearch

func SearchInts(s []int, find int) int {
	for low, high := 0, len(s)-1; low <= high; {
		if mid := (low + high) / 2; s[mid] > find {
			high = mid - 1
		} else if s[mid] < find {
			low = mid + 1
		} else {
			return mid
		}
	}
	return -1
}
