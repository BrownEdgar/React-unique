import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = 0

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialStateValue,
    redusers: {}
})

export default counterSlice.reducer;