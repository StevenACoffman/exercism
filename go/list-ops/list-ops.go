package listops

// IntList is a slice of integers.
type IntList []int

type binFunc func(x, y int) int
type predFunc func(n int) bool
type unaryFunc func(x int) int

// Length returns the length of the IntList.
func (l IntList) Length() int {
	return len(l)
}

// Foldl reduces an integer list, starting with initial value acc, by
// applying binary function f repeatedly from left to right.
func (l IntList) Foldl(f binFunc, acc int) int {
	for _, i := range l {
		acc = f(acc, i)
	}
	return acc
}

// Foldr reduces an integer list, starting with initial value acc, by
// applying binary function f repeatedly from right to left.
func (l IntList) Foldr(f binFunc, acc int) int {
	for i := len(l) - 1; i >= 0; i-- {
		acc = f(l[i], acc)
	}
	return acc
}

// Filter returns an IntList containing the elements of l that
// satisfy predicate p.
func (l IntList) Filter(p predFunc) IntList {
	f := make(IntList, 0, len(l))
	for _, v := range l {
		if p(v) {
			f = append(f, v)
		}
	}
	return f
}

// Map returns a new IntList of the results of applying unaryFunc to the
// elements of l.
func (l IntList) Map(u unaryFunc) IntList {
	f := make(IntList, len(l))
	for i, v := range l {
		f[i] = u(v)
	}
	return f
}

// Reverse returns a copy of l in reverse order.
func (l IntList) Reverse() IntList {
	f := make(IntList, len(l))
	for i, v := range l {
		f[len(l)-1-i] = v
	}
	return f
}

// Append returns a copy of l with the elements of m appended.
func (l IntList) Append(m IntList) IntList {
	f := make(IntList, 0, len(l)+len(m))
	f = append(f, l...)
	f = append(f, m...)
	return f
}

// Concat returns a copy of l with the elements from all the given IntLists appended.
func (l IntList) Concat(a []IntList) IntList {
	f := make(IntList, 0, len(l)*len(a))
	f = append(f, l...)
	for _, m := range a {
		f = append(f, m...)
	}
	return f
}