package isogram

import (
	"strings"
	"unicode"
)

// Determine if a word or phrase is an isogram.
// An isogram (also known as a "nonpattern word") is a word or phrase without a repeating letter,
// however spaces and hyphens are allowed to appear multiple times.
func IsIsogram(s string) bool {
	s = strings.ToLower(s)

	for i, r := range s {
		if !unicode.IsLetter(r) {
			continue
		}

		if strings.ContainsRune(s[i+1:], r) {
			return false
		}
	}

	return true
}
