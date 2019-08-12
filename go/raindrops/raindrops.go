package raindrops

import (
	"strconv"
	"strings"
)

/*
Convert converts a number to raindrop sounds
Adds Pling if the number is divisible by 3
     Plang if the number is divisible by 5
     Plong if the number is divisible by 7
     Otherwise returns the number as a string
*/
func Convert(i int) string{
	var sb strings.Builder
	var noises = []struct{
		prime int
		noise string
	}{
		{3, "Pling"},
		{5, "Plang"},
		{7, "Plong"},
	}
	for _, k := range noises {
		if i%k.prime==0 {
			sb.WriteString(k.noise)
		}
	}
	result := sb.String()

	if result == "" {
		return strconv.Itoa(i)
	}
	return result
}