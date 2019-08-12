package twelve

import (
	"fmt"
	"strings"
)

var songLines = []struct {
	day  string
	gift string
}{
	{day: "first", gift: "a Partridge in a Pear Tree"},
	{day: "second", gift: "two Turtle Doves"},
	{day: "third", gift: "three French Hens"},
	{day: "fourth", gift: "four Calling Birds"},
	{day: "fifth", gift: "five Gold Rings"},
	{day: "sixth", gift: "six Geese-a-Laying"},
	{day: "seventh", gift: "seven Swans-a-Swimming"},
	{day: "eighth", gift: "eight Maids-a-Milking"},
	{day: "ninth", gift: "nine Ladies Dancing"},
	{day: "tenth", gift: "ten Lords-a-Leaping"},
	{day: "eleventh", gift: "eleven Pipers Piping"},
	{day: "twelfth", gift: "twelve Drummers Drumming"},
}

var frontLine = "On the %v day of Christmas my true love gave to me: "

func Verse(day int) string {
	index := day - 1
	var sb strings.Builder
	sb.WriteString(fmt.Sprintf(frontLine, songLines[index].day))

	for i := index; i >= 0; i-- {

		if i == 0 && day != 1 {
			sb.WriteString("and ")
		}

		sb.WriteString(songLines[i].gift)
		if i != 0 {
			sb.WriteString(", ")
		}
	}
	sb.WriteString(".")
	return sb.String()
}

func Song() string {
	verse := []string{}
	for i := 1; i < 13; i++ {
		verse = append(verse, Verse(i))
	}
	return strings.Join(verse, "\n")
}
