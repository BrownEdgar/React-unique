import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../features/users/usersSlice'
import counterReducer from '../features/counter/counterSLice'




export default configureStore({
	reducer: {
		users: usersReducer,
		counter: counterReducer
	},
})