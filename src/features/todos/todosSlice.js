import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data:[],
    status:'idle',
}

export const getPromiseTodos = createAsyncThunk('todos/getTodosPromise', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    return response.data
}) 

const todosSlice = createSlice ({
name:'todos',
initialState,
reducers:{},
extraReducers:(builder) => {
    builder
    .addCase(getPromiseTodos.pending,(state) => {
      state.status = 'panding'
    })
    .addCase(getPromiseTodos.fulfilled,(state,{payload}) => {
      return{
          data:payload,
          status:'success'
      }
    })
    .addCase(getPromiseTodos.rejected,(state,action) => {
      return{
          data:[],
          status:'fail',
          error: action.error.message
      }
    })
  }
})

export const getTodos = (state) => state.todos
export default todosSlice.reducer

