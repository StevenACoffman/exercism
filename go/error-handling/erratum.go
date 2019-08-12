package erratum

func Use(opener ResourceOpener, input string) (err error) {
	var resource Resource

	for {
		resource, err = opener()
		if err == nil {
			break
		}
		if _, ok := err.(TransientError); !ok {
			return err
		}
	}

	defer resource.Close()
	defer func() {
		if r := recover(); r != nil {
			if frob, ok := r.(FrobError); ok {
				resource.Defrob(frob.defrobTag)
			}
			err = r.(error)
		}
	}()

	resource.Frob(input)
	return err
}