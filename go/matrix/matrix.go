package matrix

import (
	"fmt"
	"strconv"
	"strings"
)

type matrix struct {
	rows, cols int
	values     []int
}

func New(s string) (*matrix, error) {

	rowLines := strings.Split(s, "\n")
	rows := len(rowLines)
	var columns int
	var data []int
	for i, l := range rowLines {
		cells := strings.Fields(l)
		if i == 0 {
			columns = len(cells)
			data = make([]int, 0, rows*columns)
		} else if columns != len(cells) {
			return nil, fmt.Errorf("not enough cells in row %+v: got %d, want %d", cells, len(cells), columns)
		}

		for _, c := range cells {
			i, err := strconv.Atoi(c)
			if err != nil {
				return nil, err
			}
			data = append(data, int(i))
		}
	}
	r := init2dSlice(rows, columns)
	for i, v := range data {
		r[i/columns][i%columns] = v
	}
	m := matrix{values: data, rows: rows, cols: columns}
	return &m, nil
}

func init2dSlice(rows, cols int) [][]int {
	r := make([][]int, rows, rows)
	data := make([]int, rows*cols)
	for i := range r {
		r[i], data = data[:cols], data[cols:]
	}
	return r
}

func (m *matrix) Rows() [][]int {
	r := init2dSlice(m.rows, m.cols)
	for i, v := range m.values {
		r[i/m.cols][i%m.cols] = v
	}
	return r
}

func (m *matrix) Cols() [][]int {
	r := init2dSlice(m.cols, m.rows)
	for i, v := range m.values {
		r[i%m.cols][i/m.cols] = v
	}
	return r
}

func (m *matrix) Set(r int, c int, val int) bool {
	if r >= m.rows || r < 0 {
		return false
	}
	if c >= m.rows || c < 0 {
		return false
	}

	m.values[r*m.cols+c] = val
	return true
}
