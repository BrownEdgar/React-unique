import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return response.data;
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default todosSlice.reducer;
export const selectAllTodos = state => state.todos;