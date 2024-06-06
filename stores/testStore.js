export const useTestStore = defineStore('testStore', {
    state: () => ({
        todos: [
            { id: 1, text: 'todo 1', completed: false },
            { id: 2, text: 'todo 2', completed: true },
            { id: 3, text: 'todo 3', completed: false },
        ],
    }),
    getters: {},
    actions: {
        ACT_ADD_TODO(text) {
            this.todos.push({
                id: this.todos.length + 1,
                text: text,
                completed: false,
            })
        },
        ACT_REMOVE_TODO_BY_ID(todoId) {
            this.todos = this.todos.filter(todo => todo.id !== todoId)
        },
        ACT_FIND_DONE_TODO_BY_ID(todoId) {
            const todo = this.todos.find(todo => todo.id === todoId)
            return todo ? todo.completed : false
        },
        ACT_TOGGLE_TODO_STATUS(todoId) {
            const todo = this.todos.find(todo => todo.id === todoId)
            if (todo) {
                todo.completed = !todo.completed
            }
        }
    },
})