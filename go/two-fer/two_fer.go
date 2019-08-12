// Two-fer is short for two for one. One for you and one for me.
package twofer

import "fmt"

// ShareWith returns "One for X, one for me." When X is a name or "you".
func ShareWith(name string) string {
	if name == "" {
		name = "you"
	}

	return fmt.Sprintf("One for %s, one for me.", name)
}