package pov

import "fmt"

// A Graph is represented entirely by its arcs.
// The map of "from" to the list of "to" collects the arcs
type Graph map[string][]string

/*New creates an empty graph.*/
func New() *Graph {
	return &Graph{}
}

func (g *Graph) AddNode(nodeLabel string) {
	return // we never need this, so why write it?
}

func (g *Graph) AddArc(from, to string) {
	(*g)[from] = append((*g)[from], to)
}

func (g *Graph) ArcList() []string {
	var edges []string
	for from, v := range *g {
		for _, to := range v {
			edges = append(edges, fmt.Sprintf("%s -> %s",from, to))
		}
	}
	return edges
}

// ChangeRoot changes the arcs directions to use a new root
func (g *Graph) ChangeRoot(oldRoot, newRoot string) *Graph {
	path := g.getPath(oldRoot, newRoot)
	for i := 0; i < len(path)-1; i++ {
		oldTo, oldFrom := path[i], path[i+1]
		g.removeArc(oldFrom, oldTo)
		g.AddArc(oldTo, oldFrom)
	}
	return g
}

func (g *Graph) removeArc(from, to string) {
	for i, child := range (*g)[from] {
		if child == to {
			(*g)[from] = append((*g)[from][0:i], (*g)[from][i+1:]...)
			return
		}
	}
}

//Recursive depth first search
func (g *Graph) getPath(from, to string) []string {
	if from == to {
		return []string{to}
	}
	for _, child := range (*g)[from] {
		if path := g.getPath(child, to); path != nil {
			return append(path, from)
		}
	}
	return nil
}