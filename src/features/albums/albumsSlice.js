import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data:[],
    status:'idle',
}

export const getPromiseAlbums = createAsyncThunk('albums/getAlbumsPromise', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums')
    return response.data
})  

const albumsSlice = createSlice ({
name:'albums',
initialState,
reducers:{},
extraReducers:(builder) => {
  builder
  .addCase(getPromiseAlbums.pending,(state) => {
    state.status = 'panding'
  })
  .addCase(getPromiseAlbums.fulfilled,(state,{payload}) => {
    return{
        data:payload,
        status:'success'
    }
  })
  .addCase(getPromiseAlbums.rejected,(state,action) => {
    return{
        data:[],
        status:'fail',
        error:action.error.message
    }
  })
}
})

export const getAlbums = (state) => state.albums

export default albumsSlice.reducer