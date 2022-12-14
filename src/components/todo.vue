<template>
    <div class="todo">
        <div class="mr-2">
            <input class="todo-cb" type="checkbox" :checked="todo.checked" @change="toggleToDo(todo.id)" />
        </div>
        <div :class="`todo-label ${todo.checked ? 'done' : ''}`">
            {{ todo.label }}
        </div>
        <div class="todoDelete">
            <i-foundation-page-delete class="todo-delete" @click="removeTodo(todo.id)" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { Todo } from '../stores/todoStore'
    import { useTodoStore } from '../stores/todoStore';

    defineProps<{
        todo: Todo
    }>()

    const todoStore = useTodoStore();
    const { toggleToDo, removeTodo } = todoStore;
</script>

<style lang="scss" scoped>
    .todo {
        @apply flex justify-between items-center p-2;
        &:not(:last-child) {
            @apply border-b-2 border-green-500
        }
        .todo-cb {
            color-scheme: none;
            cursor: pointer;
        }
        .todo-label {
            font-weight: bold;
            @apply text-green-500;
            &.done {
                text-decoration: line-through;
                @apply text-gray-500 italic;
            }
        }
        .todo-delete {
            @apply text-gray-800 hover:text-red-500 cursor-pointer
        }
    }
</style>
