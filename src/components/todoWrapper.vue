<template>
    <div class="wrapper">
        <slot name="title" />
        <div class="content">
            <div class="content-head">
                <div class="text-left">
                    <label class="mr-2" for="new-todo">Label:</label>
                    <input id="new-todo" type="text" class="px-2 rounded-full" v-model="newTodo" />
                </div>
                <div class="text-left">
                    <label class="mr-2" for="new-todo-check">Checked:</label>
                    <input id="new-todo-check" type="checkbox" v-model="newTodoCheck" />
                </div>
                <div class="text-left">
                    <button class="btn-create-todo" @click="createTodo">
                        <i-foundation-plus class="mr-2" />
                        Add todo
                    </button>
                </div>
            </div>
            <slot name="items" />
        </div>
  </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue'
    import { useTodoStore } from '../stores/todoStore';
    export default defineComponent({
        setup () {
            const todoStore = useTodoStore();
            const { addTodo } = todoStore;

            const newTodo = ref('');
            const newTodoCheck = ref(false);

            const createTodo = () => {
                addTodo(newTodo.value, newTodoCheck.value);
                newTodo.value = '';
                newTodoCheck.value = false;
            }

            return {
                createTodo,
                newTodo,
                newTodoCheck,
            }
        },
    })
</script>

<style lang="scss" scoped>
    .wrapper {
        .content {
            height: calc(100vh - 20px);
            @apply mt-4;

            .content-head {
                .btn-create-todo {
                    @apply mt-2 flex justify-center items-center p-2 bg-green-500 rounded-full;
                }
            }
        }
    }
</style>
