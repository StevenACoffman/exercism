package linkedlist

type Element struct {
	prev, next *Element
	Val        interface{}
}

func (el *Element) Next() *Element {
	if el == nil {
		return nil
	}
	return el.next
}

func (el *Element) Prev() *Element {
	if el == nil {
		return nil
	}
	return el.prev
}