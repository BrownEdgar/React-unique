import { createSlice } from "@reduxjs/toolkit";
const initialState = []
const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComments:(state, action) => action.payload
  }
})

export default commentSlice.reducer
export const { addComments } = commentSlice.actions