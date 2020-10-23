export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        data: todo
    }
}

export const editTodo = (todo) => {
    return {
        type: 'EDIT_TODO',
        data: todo
    }
}

export const deleteTodo = (todo) => {
    return {
        type: 'DELETE_TODO',
        data: todo
    }
}
