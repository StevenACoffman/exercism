package grains

import (
	"fmt"
)

// Square returns the number of grains on a square on a chess board,
// first square has 1 and every subsequent square doubles the number.
// (2 ^ (n -1)) - 1
func Square(num int) (uint64, error) {
	if num < 1 || num > 64 {
		return 0, fmt.Errorf("Input[%d] invalid. Input should be between 1 and 64 (inclusive)", num)
	}
	return 1 << (uint16(num) - 1), nil
}

// Total returns the total number of grains on the chess board: (2^64)-1
func Total() uint64 {
	return (1 << 64) - 1
}
