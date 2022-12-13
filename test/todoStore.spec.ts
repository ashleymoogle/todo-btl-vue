import { describe, beforeEach, it, expect } from 'vitest'
import { setActivePinia, createPinia, storeToRefs } from 'pinia';
import { useTodoStore } from '../src/stores/todoStore';

describe('Counter Store', () => {
	beforeEach(() => {
		// creates a fresh pinia and make it active so it's automatically picked
		// up by any useStore() call without having to pass it to it:
		// `useStore(pinia)`
		setActivePinia(createPinia())
	})

	it('increments', () => {
		const store = useTodoStore()
		const { count } = storeToRefs(store);
		expect(count.value).toBe(0)
		store.increment()
		expect(count.value).toBe(1)
	})

	it('increments by amount', () => {
		const store = useTodoStore()
		const { count } = storeToRefs(store);
		store.increment(10)
		expect(count.value).toBe(10)
	})
})
