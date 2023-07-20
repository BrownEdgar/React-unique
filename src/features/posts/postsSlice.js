import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data:[],
    status:'idle',
}

export const getPromisePosts = createAsyncThunk('posts/getPostsPromise', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return response.data
}) 

const postsSlice = createSlice ({
name:'posts',
initialState,
reducers:{},
extraReducers:(builder) => {
    builder
    .addCase(getPromisePosts.pending,(state) => {
      state.status = 'panding'
    })
    .addCase(getPromisePosts.fulfilled,(state,{payload}) => {
      return{
          data:payload,
          status:'success'
      }
    })
    .addCase(getPromisePosts.rejected,(state,action) => {
      return{
          data:[],
          status:'fail',
          error: action.error.message
      }
    })
  }
})

export const getPosts = (state) => state.posts

export default postsSlice.reducer