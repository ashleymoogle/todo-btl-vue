import { defineStore } from 'pinia'
import { ref, computed } from 'vue';

export const useTodoStore = defineStore('todo', () => {
	const count = ref(0)

	const doubleCount = computed(() => count.value * 2)

	const increment = (val?: number) => {
		if (val) {
			count.value = count.value + val;
		} else {
			count.value++
		}
	}

	return { count, doubleCount, increment }
})
