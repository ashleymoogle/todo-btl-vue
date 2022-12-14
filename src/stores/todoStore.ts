import { defineStore } from 'pinia'
import { ref } from 'vue';

export interface Todo {
	label: string
	id: number
	checked: boolean
}

export const useTodoStore = defineStore('todo', () => {
	const todos = ref<Todo[]>([]);
	const index = ref(todos.value.length);

	const addTodo = (label: string, checked: boolean) => {
		todos.value.push({ label, id: index.value, checked })
		index.value++;
	}

	const removeTodo = (id: number): void => {
		const indexToRemove = todos.value.findIndex((item: Todo) => item.id === id);
		if (indexToRemove !== -1) {
			todos.value.splice(indexToRemove, 1);
		}
	}

	const toggleToDo = (id: number): void => {
		const indexToUpdate = todos.value.findIndex((item: Todo) => item.id === id);
		if (indexToUpdate !== -1) {
			const itemToUpdate = todos.value[indexToUpdate];
			itemToUpdate.checked = !itemToUpdate.checked;
		}
	}

	return { addTodo, todos, removeTodo, toggleToDo }
})
