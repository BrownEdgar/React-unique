import { createSlice } from "@reduxjs/toolkit";

const initialState = 0
 const counterSlice = createSlice({
    name:'counter',
    initialState:initialState,
    reducers:{}
 })
 export default counterSlice.reducer;