package robotname

import "fmt"

const maxRobots int32 = 676000 // 26*26*10*10*10

// Robot is a friendly automaton
type Robot struct {
	name string
}

// https://dave.cheney.net/2014/03/25/the-empty-struct
var zero = struct{}{}

// randomly ordered sequence array
var names = makeSequence()

// alternative non-lazy sequence is faster for bonus test
func makeSequence() [maxRobots]int32 {
	m := mapMaker()
	var a [maxRobots]int32
	i := 0
	//range over map gives random index k back
	for k := range m {
		a[i] = k
		i++
	}
	return a
}

// keeps track of where we are in the sequence
var 	count int32

// Name returns a robots name
func (r *Robot) Name() (string, error){
	var err error
	if r.name == "" {
		err = r.Reset()
	}
	return r.name, err
}

// Reset generates a new name for this Robot
func (r *Robot) Reset() error {
	p := names[count % maxRobots]
	r.name = generateName(p)
	count++
	if count > maxRobots {
		return fmt.Errorf("maxRobots exceeded %d (got %d)", maxRobots, count)
	}
	return nil
}

// given a number p generate a name in the pattern AA###
func generateName(i int32) string {
	nameRunes := make([]rune, 5)
	for pos, r := range "AA000" {
		switch r {
		case 'A':
			nameRunes[pos], i = getRuneAndRemainder(i, r, 26)
		default:
			nameRunes[pos], i = getRuneAndRemainder(i, r, 10)
		}
	}
	return string(nameRunes)
}

func getRuneAndRemainder(remainder int32, start int32, max int32) (rune, int32) {
	r := rune(start + remainder%max)
	return r, remainder / max
}

////makes a map of empty structs
func mapMaker() map[int32]struct{} {
	m := make(map[int32]struct{}, maxRobots+1)
	for i := int32(0); i < maxRobots; i++ {
		m[i] = zero
	}
	return m
}

//// randomly ordered sequence channel
//var lazyNames = makeLazySequence()

//
//type lazySequence chan int32
//
//func makeLazySequence() lazySequence {
//	m := mapMaker()
//	c := make(lazySequence)
//	go func () {
//		//range over map gives random index back
//		for i := range m {
//			c <- i
//		}
//		close(c)
//	}()
//	return c
//}

//// Reset generates a new name for this Robot
//func (r *Robot) Reset() error {
//	p, ok := <-lazyNames
//	r.name = generateName(p)
//	if !ok {
//		return fmt.Errorf("maxRobots exceeded %d (got %d)", maxRobots, count)
//	}
//	return nil
//}
