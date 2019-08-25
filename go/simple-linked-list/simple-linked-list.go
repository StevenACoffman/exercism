package linkedlist

import (
	"fmt"
)

type Element struct {
 data int
 next *Element
}

type List struct {
 head *Element
 size int
}

func New(input []int) *List {
	ll := &List{nil, 0}
	for _, value := range input {
		ll.Push(value)
	}
	return ll
}

func (ll *List) Push(t int){
	el := &Element{t, ll.head}
	ll.head = el
	ll.size++
}

func (ll *List) Size() int {
	return ll.size
}

func (ll *List) Pop() (int, error) {
	if ll.head == nil {
		return 0, fmt.Errorf("The linked list is empty")
	}

	data := ll.head.data
	ll.head = ll.head.next
	ll.size--
	return data, nil
}

func (ll *List) Array() []int {
	arr := make([]int, ll.size)
	i := ll.size-1
	for el:= ll.head; el != nil; el = el.next {
		arr[i] = el.data
		i--
	}
	return arr
}

func (ll *List) Reverse() *List {
	rll := New([]int{})
	for el := ll.head; el != nil; el = el.next {
		rll.Push(el.data)
	}
	return rll
}

