package linkedlist

import "errors"

var ErrEmptyList = errors.New("The linked list is empty")

type List struct {
	head, tail *Element
}

// it bugs me that this isn't named linkedlist.New, but this is required for the tests
func NewList(elements ...interface{}) *List {
	l :=  &List{}
	for _, v := range elements {
		l.PushBack(v)
	}
	return l
}

func (l *List) First() *Element {
	return l.head
}

func (l *List) Last() *Element {
	return l.tail
}

func (l *List) PushFront(v interface{}) {
	el := &Element{next: l.head, Val: v}
	if l.head != nil {
		l.head.prev = el
	} else {
		l.tail = el
	}
	l.head = el
}

func (l *List) PopFront() (interface{}, error) {
	if l.head == nil {
		return 0, ErrEmptyList
	}
	v := l.head.Val
	l.head = l.head.next
	if l.head == nil {
		l.tail = nil
	} else {
		l.head.prev = nil
	}
	return v, nil
}

func (l *List) PushBack(v interface{}) {
	el := &Element{prev: l.tail, Val: v}
	if l.tail != nil {
		l.tail.next = el
	} else {
		l.head = el
	}
	l.tail = el
}

func (l *List) PopBack() (interface{}, error) {
	if l.tail == nil {
		return 0, ErrEmptyList
	}
	v := l.tail.Val
	l.tail = l.tail.prev
	if l.tail == nil {
		l.head = nil
	} else {
		l.tail.next = nil
	}
	return v, nil
}

func (l *List) Reverse() {
	for el := l.head; el != nil; el = el.prev {
		el.next, el.prev = el.prev, el.next
	}
	l.head, l.tail = l.tail, l.head
}
