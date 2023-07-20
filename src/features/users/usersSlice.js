import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data:[],
    status:'idle',
}

export const getPromiseUsers = createAsyncThunk('todos/getUsersPromise', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
}) 

const usersSlice = createSlice ({
name:'users',
initialState,
reducers:{},
extraReducers:(builder) => {
    builder
    .addCase(getPromiseUsers.pending,(state) => {
      state.status = 'panding'
    })
    .addCase(getPromiseUsers.fulfilled,(state,{payload}) => {
      return{
          data:payload,
          status:'success'
      }
    })
    .addCase(getPromiseUsers.rejected,(state,action) => {
      return{
          data:[],
          status:'fail',
          error: action.error.message
      }
    })
  }
})

export const getUsers = (state) => state.users
export default usersSlice.reducer