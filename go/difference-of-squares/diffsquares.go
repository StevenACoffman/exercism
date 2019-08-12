package diffsquares

func Identity(a int) int { return a }
func Square(a int) int   { return a * a }

func SumOf(n int, fn func(int) int) (result int) {
	for n >= 0 {
		result += fn(n)
		n--
	}
	return
}

func SquareOfSum(n int) int {
	// too dense?
	return Square(SumOf(n, Identity))
}

func SumOfSquares(n int) int { return SumOf(n, Square) }

func Difference(n int) int {
	return SquareOfSum(n) - SumOfSquares(n)
}
