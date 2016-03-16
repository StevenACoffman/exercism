# Linked List

Implement a doubly linked list

Like an array, a linked list is a simple linear data structure. Several 
common data types can be implemented using linked lists, like queues, 
stacks, and associative arrays.

A linked list is a collection of data elements called *nodes*. In a 
*singly linked list* each node holds a value and a link to the next node. 
In a *doubly linked list* each node also holds a link to the previous 
node.

You will write an implementation of a doubly linked list. Implement a 
Node to hold a value and pointers to the next and previous nodes. Then 
implement a List which holds references to the first and last node and 
offers an array-like interface for adding and removing items:

* `push` (*insert value at back*);
* `pop` (*remove value at back*);
* `shift` (*remove value at front*).
* `unshift` (*insert value at front*);

To keep your implementation simple, the tests will not cover error 
conditions. Specifically: `pop` or `shift` will never be called on an 
empty list.

If you want to know more about linked lists, check [Wikipedia](https://en.wikipedia.org/wiki/Linked_list).

---

In languages that do not have good support for mutability (such as
Elixir or Erlang), you may choose to implement a functional list where
shift and pop have amortized O(1) time. The simplest data structure for
this will have a pair of linked lists for the front and back, where
iteration order is front ++ reverse back.



## Setup

Go through the setup instructions for JavaScript to
install the necessary dependencies:

http://exercism.io/languages/javascript

## Making the Test Suite Pass

Execute the tests with:

```bash
$ jasmine-node .
```

In many test suites all but the first test have been skipped.

Once you get a test passing, you can unskip the next one by
changing `xit` to `it`.


## Source

Classic computer science topic [view source]()