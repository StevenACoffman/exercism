package binarysearchtree

type SearchTreeData struct {
	left  *SearchTreeData
	data  int
	right *SearchTreeData
}

func Bst(v int) *SearchTreeData {
	return &SearchTreeData{data:v}
}

func (bst *SearchTreeData) Insert(v int) *SearchTreeData {
	if bst == nil {
		return Bst(v)
	}
	if v > bst.data {
		bst.right = bst.right.Insert(v)
	} else {
		bst.left = bst.left.Insert(v)
	}
	return bst
}

func (bst *SearchTreeData) MapString(f func(int) string) []string {
	if bst == nil {
		return []string{}
	}
	return append(append(bst.left.MapString(f), f(bst.data)), bst.right.MapString(f)...)
}

func (bst *SearchTreeData) MapInt(f func(int) int) []int {
	if bst == nil {
		return []int{}
	}
	return append(append(bst.left.MapInt(f), f(bst.data)), bst.right.MapInt(f)...)
}