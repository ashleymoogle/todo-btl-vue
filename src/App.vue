<template>
    <todo-wrapper>
        <template #items>
            <div v-if="todos.length" class="mt-4">
                <select v-model="filter">
                    <option value="all">All</option>
                    <option value="not">Not done</option>
                    <option value="done">Done</option>
                </select>
            </div>
            <div v-if="todos.length" class="content-body">
                <div class="todos">
                    <todo v-for="todo in todosFiltered" :key="todo.id" :todo="todo" />
                </div>
                <div v-if="filter !== 'all'" class="flex justify-center items-center">
                   <i-foundation-plus class="mr-1" style="font-size: 12px" /> {{ todos.length - todosFiltered.length }} items hidden...
                </div>
            </div>
        </template>
        <template #title>
            <h1 class="title">TODO with Vue 3 / Typescript / Pinia</h1>
        </template>
    </todo-wrapper>
</template>

<script lang="ts">
    import { defineComponent, ref, computed } from 'vue'
    import { Todo, useTodoStore } from './stores/todoStore'
    import { storeToRefs } from 'pinia'
    import TodoWrapper from './components/todoWrapper.vue'
    export default defineComponent({
        components: {TodoWrapper},
        setup () {
            const todoStore = useTodoStore();
            const { todos } = storeToRefs(todoStore);

            const filter = ref('all');

            const todosFiltered = computed(() => {
                if (filter.value === 'not') {
                    return todos.value.filter((item: Todo) => !item.checked)
                } else if (filter.value === 'done') {
                    return todos.value.filter((item: Todo) => item.checked)
                }
                return todos.value;
            })

            return {
                filter,
                todos,
                todosFiltered,
            }
        },
    })
</script>

<style lang="scss" scoped>
    .content-body {
        @apply mt-4 bg-green-900 border-2 border-green-500 rounded-xl;
    }
    .title {
        @apply font-bold text-green-500;
    }
</style>
