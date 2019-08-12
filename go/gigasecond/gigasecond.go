package gigasecond

import "time"

// GIGASECOND is a 1,000,000,000 seconds
const GIGASECOND = time.Duration(1e9) * time.Second

// Adds one gigasecond (1E9 seconds) to the current date.
func AddGigasecond(now time.Time) time.Time {
	return now.Add(GIGASECOND)
}
