<script setup>
const store = useTestStore()
const newTodoText = ref('')

const handleAddTodo = () => {
    store.ACT_ADD_TODO(newTodoText.value)
    newTodoText.value = ''
}
</script>
<template>
    <div>
        <h1 class="text-white-1">Discover</h1>
            <TransitionGroup
                name="fade"
                tag="ul"
                class="flex flex-col gap-4"
            >
                <li
                    v-if="store.todos.length === 0"
                >
                    <p class="text-white-1">No todos yet</p>
                </li>
                <li
                    else
                    v-for="todo in store.todos"
                    :key="todo.id"
                    :class="['text-white-1 flex gap-2 border py-1 px-2 items-center justify-between', { 'bg-zinc-700': todo.completed }]"
                >
                    <span :class="{ 'line-through': todo.completed }">
                        {{ todo.text }}
                    </span>
                    <div class="flex items-center gap-2">
                        <input
                            type="checkbox"
                            :checked="todo.completed"
                            @change="() => store.ACT_TOGGLE_TODO_STATUS(todo.id)"
                            class="h-4 w-4 cursor-pointer"
                        />
                        <button
                            @click="store.ACT_REMOVE_TODO_BY_ID(todo.id)"
                            class="bg-red-500 text-white-1 px-4 py-2 whitespace-nowrap"
                        >
                            Remove
                        </button>
                    </div>
                </li>
            </TransitionGroup>
        <div class="flex gap-4 mt-2">
            <input
                v-model="newTodoText"
                type="text"
                class="w-full px-4 py-2 border"
            />
            <button
                @click="handleAddTodo"
                class="bg-green-500 text-white-1 px-4 py-2 whitespace-nowrap"
            >
                Add Todo
            </button>
        </div>
    </div>
</template>
<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s, transform 0.5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateX(100%);
}
</style>