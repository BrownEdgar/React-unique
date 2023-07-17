import { createSlice } from '@reduxjs/toolkit';

const initialTodosValue = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialTodosValue,
  reducers: {
    addTodos: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const allTodosSelector = (state) => state.todos;
export const getAllCompletedTodosSelector = (state) => {
  return state.todos.filter((todo) => todo.completed);
};

export default todosSlice.reducer;
export const { addTodos } = todosSlice.actions;
