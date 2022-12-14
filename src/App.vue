<template>
    <todo-wrapper>
        <template #items>
            <div v-if="todos.length" class="content-body">
                <div class="todos">
                    <todo v-for="todo in todos" :key="todo.id" :todo="todo" />
                </div>
            </div>
        </template>
        <template #title>
            <h1 class="title">TODO with Vue 3 / Typescript / Pinia</h1>
        </template>
    </todo-wrapper>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue'
    import { useTodoStore } from './stores/todoStore';
    import { storeToRefs } from 'pinia'
    import TodoWrapper from './components/todoWrapper.vue'
    export default defineComponent({
        components: {TodoWrapper},
        setup () {
            const todoStore = useTodoStore();
            const { todos } = storeToRefs(todoStore);

            return {
                todos,
            }
        },
    })
</script>

<style lang="scss" scoped>
    .title {
        @apply font-bold text-green-500;
    }
</style>
