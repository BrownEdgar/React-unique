import { createSlice, createSelector } from '@reduxjs/toolkit'

const initialTodosValue = {
    data: [],
    filter: 'allCompleted'
}

const todoSlice = createSlice({
    name: 'todos',
    initialState: initialTodosValue,
    reducers: {
        addTodos: (_, action) => {
            return {
                data: action.payload,
                filter: 'all'
            }
        },
        setFilter:(state,{payload}) => {
            state.filter = payload
        }
    }
})

//selectors
const allTodosSelector = state => state.todos.data
const gitCurrentFilterSelector = state => state.todos.filter

export const getTodos = createSelector(
        [allTodosSelector, gitCurrentFilterSelector],
    (allToodos,  filterName) => {

        switch (filterName) {
            case 'all': return allToodos;
            case 'allCompleted': return allToodos.filter(todo => todo.completed);
            case 'allUnCompleted': return allToodos.filter(todo => !todo.completed);
            default: return allToodos
        }
    }
)

export default todoSlice.reducer;
export const { addTodos, setFilter } = todoSlice.actions
