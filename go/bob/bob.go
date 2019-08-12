package bob

import (
	"strings"
	"unicode"
)

// Hey responds to a greeting like a lackadaisical teenager
func Hey(input string) string {
	r := newRemark(input)
	return r.Respond()
}

type Remark struct {
	remark        string
	lookupActions []LookupAction
}

func (r Remark) IsSilence() bool { return r.remark == "" }
func (r Remark) IsShouting() bool {
	return r.remark == strings.ToUpper(r.remark) && strings.IndexFunc(r.remark, unicode.IsLetter) >= 0
}
func (r Remark) IsQuestion() bool    { return strings.HasSuffix(r.remark, "?") }
func (r Remark) IsExasperated() bool { return r.IsShouting() && r.IsQuestion() }
func (r Remark) IsAnything() bool    { return true }

type LookupAction struct {
	Condition func() bool
	Result    string
}

func newRemark(remark string) Remark {
	r := Remark{remark: strings.TrimSpace(remark)}

	r.lookupActions = []LookupAction{
		{Condition: r.IsSilence, Result: "Fine. Be that way!"},
		{Condition: r.IsExasperated, Result: "Calm down, I know what I'm doing!"},
		{Condition: r.IsShouting, Result: "Whoa, chill out!"},
		{Condition: r.IsQuestion, Result: "Sure."},
		{Condition: r.IsAnything, Result: "Whatever."},
	}
	return r
}

// Respond expects to go over an ordered array of conditions and results, returning the first that passes
func (r Remark) Respond() string {
	for _, n := range r.lookupActions {
		if n.Condition() {
			return n.Result
		}
	}
	return "Whoops"
}


