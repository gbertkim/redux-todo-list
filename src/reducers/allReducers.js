import { combineReducers } from 'redux'

const crudReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TODO':
            return action.payload.todoArr
        case 'PUSH_TOD':
            return [...state].push(action.payload.todo)
        case 'DELETE_TODO':
            return [...state].filter((task) => {
                return task.id !== action.payload.id;
            })
        case 'PATCH_NAME':
            let tempState = [...state]
            tempState.find(task => {
                return task.id === action.payload.id
            }).title = action.payload.newTitle
            return tempState
        case 'PATCH_COMPLETED':
            let completedState = [...state]
            completedState.find(task => {
                return task.id === action.payload.id
            }).completed = action.payload.completedTask
            console.log(completedState)
            return completedState
        default:
            return state
    }
}

const allReducers = combineReducers({
    crudReducer
})

export default allReducers