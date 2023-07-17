import { createSlice } from '@reduxjs/toolkit'


const initialStateValue = 0

const counterSlice = createSlice({
	name: 'counter',
	initialState: initialStateValue,
	reducers: {
		addCount:(state) => state + 1
	}
})

export default counterSlice.reducer;
export const { addCount } = counterSlice.actions