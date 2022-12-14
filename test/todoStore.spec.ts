import { describe, beforeEach, it, expect } from 'vitest'
import { setActivePinia, createPinia, storeToRefs } from 'pinia';
import { useTodoStore } from '../src/stores/todoStore';

describe('Todo Store', () => {
	beforeEach(() => {
		// creates a fresh pinia and make it active so it's automatically picked
		// up by any useStore() call without having to pass it to it:
		// `useStore(pinia)`
		setActivePinia(createPinia())
	})

	it('adds a todo', () => {
		const store = useTodoStore()
		const { todos } = storeToRefs(store);
		store.addTodo('new todo', false)
		expect(todos.value[0].id).toBe(0)
	})

	it('toggles a todo', () => {
		const store = useTodoStore()
		const { todos } = storeToRefs(store);
		store.addTodo('new todo', false)
		expect(todos.value[0].checked).toBe(false)
		store.toggleToDo(0);
		expect(todos.value[0].checked).toBe(true)
	})

	it('removes a todo', () => {
		const store = useTodoStore()
		const { todos } = storeToRefs(store);
		store.addTodo('new todo', false)
		store.removeTodo(0);
		expect(todos.value).toHaveLength(0);
	})
})
