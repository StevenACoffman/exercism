package letter

func ConcurrentFrequency(texts []string) FreqMap {
	ch := make(chan FreqMap)

	for _, text := range texts {
		go frequencyToChannel(text, ch)
	}

	totalFm := FreqMap{}
	for range texts { // expect the same number of messages as texts
		oneFm := <-ch             //block until we get next message
		for r, n := range oneFm { //merge one with existing total
			totalFm[r] += n
		}
	}
	return totalFm
}

func frequencyToChannel(text string, c chan FreqMap) {
	c <- Frequency(text)
}
