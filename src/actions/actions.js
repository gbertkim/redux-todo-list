export const setTodos = (todoArr) => {
    return {
        type: 'SET_TODO',
        payload: { todoArr }
    }
}
export const addTodo = (todo) => {
    return {
        type: 'PUSH_TODO',
        payload: { todo }
    }
}
export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        payload: { id }
    }
}
export const patchTodo = (id, newTitle) => {
    return {
        type: "PATCH_NAME",
        payload: { id, newTitle }
    }
}
export const patchCompletedTodo = (id, completedTask) => {
    return {
        type: "PATCH_COMPLETED",
        payload: { id, completedTask }
    }
}