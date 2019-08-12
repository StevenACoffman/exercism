package account

import "sync"

type Account struct {
	value  int64
	mutex  sync.Mutex
	closed bool
}

func Open(initialDeposit int64) *Account {
	if initialDeposit < 0 {
		return nil
	}
	return &Account{value: initialDeposit}
}

func (a *Account) Close() (payout int64, ok bool) {
	a.mutex.Lock()
	defer a.mutex.Unlock()
	//cannot close a closed account
	if a.closed {
		return 0, false
	}
	a.closed = true
	return a.value, true
}

func (a *Account) Balance() (balance int64, ok bool) {
	a.mutex.Lock()
	defer a.mutex.Unlock()
	// the balance of a closed account cannot be checked
	if a.closed {
		return 0, false
	}
	return a.value, true
}

func (a *Account) Deposit(amount int64) (newBalance int64, ok bool) {
	a.mutex.Lock()
	defer a.mutex.Unlock()
	//Cannot deposit into closed account
	if a.closed {
		return 0, false
	}
	if amount+a.value < 0 {
		return 0, false
	}
	a.value += amount
	return a.value, true
}
