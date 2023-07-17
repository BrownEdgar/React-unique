import { createSlice,createSelector } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    filter:"allComplitide"
}
const todosSlice = createSlice({
    name:"todos",
    initialState:initialState,
    reducers:{
     addTodos:(_,action) =>{
        return {
            data: action.payload,
            filter:"allComplitide"
        }
     }
    }
})
 const alltodosSelector = state => state.todos.data;
 const getAllComplitedTodosSelector = state => {
    return state.todos.data.filter(todo => todo.completed)
}
const getParrentFilterSelector = state => state.todos.filter
 const getAllunComplitedTodosSelector = state => {
    return state.todos.data.filter(todo => !todo.completed)
}
 export const getTodos = createSelector(
    [
        alltodosSelector ,
        getAllComplitedTodosSelector,
        getAllunComplitedTodosSelector,
        getParrentFilterSelector,
    ],
    (allTodos,cmpTodos,unCmpTodos,filterName) => {
      switch(filterName){
        case 'all':return allTodos
        case 'allComplitide': return cmpTodos
        case 'unComplitide': return unCmpTodos
        default:return allTodos
      }
    }
)


export default todosSlice.reducer
export const{addTodos} = todosSlice.actions
