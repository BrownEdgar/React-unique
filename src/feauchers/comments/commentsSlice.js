import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [],
  filter: '',
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComments: (state, action) => {
      state.comments = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addComments, setFilter } = commentsSlice.actions;

export const getComments = state => state.comments.comments;

export default commentsSlice.reducer;
