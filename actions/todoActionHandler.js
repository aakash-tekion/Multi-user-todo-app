import { todoActionTypes } from "../actionTypeConstants/todoActionTypes";
import { FILTERS_MAP } from '../constants/constantMaps.js'
export const addTodo = (todo) => {
    return (dispatch,getState) => {
        let state = getState()['appData']
        const todoId = Math.floor(Math.random()*1000)+1
        todo['todoId']  = todoId
        todo['date'] = new Date()
        state.users[state.currentUser].todos.uncompleted[todoId] = todo    
        return dispatch({
            type:todoActionTypes.ADD_TODO,
            newState:state
        })
    }
}
export const deleteTodo = (todoId,completed) => {
    return (dispatch,getState) => {
        let newState =  getState()['appData']
        let todoToMove
        if(completed === 1){
            todoToMove = newState.users[newState.currentUser].todos.completed[todoId]
            delete newState.users[newState.currentUser].todos.completed[todoId]

        }
        else{
            todoToMove = newState.users[newState.currentUser].todos.uncompleted[todoId]
            delete newState.users[newState.currentUser].todos.uncompleted[todoId]
        }
        newState.users[newState.currentUser].todos.archived[todoToMove.todoId] = todoToMove
        return dispatch({
            type:todoActionTypes.DELETE_TODO,
            newState
        })
    }
}
export const editTodo = (todo)=>{
    return (dispatch,getState)=>{
        let state = getState()['appData']
        if(todo.status === 1){
            state.users[state.currentUser].todos.completed[todo.todoId] = todo
        }
        else{
            state.users[state.currentUser].todos.uncompleted[todo.todoId] = todo
        }
        return dispatch({
            type:todoActionTypes.EDIT_TODO,
            newState:state
        })
    }
}
export const updateTodo = (todoId,status) => {
    return (dispatch,getState)=>{
        let state = getState()['appData']
        if(status === 1){
            let todo = state.users[state.currentUser].todos.completed[todoId]
            delete state.users[state.currentUser].todos.completed[todoId]
            todo.status = 0
            state.users[state.currentUser].todos.uncompleted[todoId] = todo
        }
        else{
            let todo = state.users[state.currentUser].todos.uncompleted[todoId]
            delete state.users[state.currentUser].todos.uncompleted[todoId]
            todo.status = 1
            state.users[state.currentUser].todos.completed[todoId] = todo
        }
        return dispatch({
            type:todoActionTypes.UPDATE_TODO,
            newState:state
        })
    }
}
export const applyFilters = (filters) => {
    return (dispatch,getState)=>{
        let state = getState()['appData']
        state.filters = {
            [FILTERS_MAP.TAGS]:filters[FILTERS_MAP.TAGS],
            [FILTERS_MAP.ASSIGNED_BY]:filters[FILTERS_MAP.ASSIGNED_BY],
            [FILTERS_MAP.START_DATE]:String(filters[FILTERS_MAP.START_DATE]),
            [FILTERS_MAP.END_DATE]:String(filters[FILTERS_MAP.END_DATE])
        }
        return dispatch({
            type:todoActionTypes.APPLY_FILTER,
            newState:state
        })
    }
}
export const resetFilters = () => {
    return (dispatch,getState,)=>{
        let state = getState()['appData']
        state.filters = {}
        return dispatch({
            type:todoActionTypes.RESET_FILTER,
            newState:state
        })
    }
}


