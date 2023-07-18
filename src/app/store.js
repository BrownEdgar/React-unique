import { configureStore } from '@reduxjs/toolkit'
// import usersReducer from '../features/users/usersSlice'
// import counterReducer from '../features/counter/counterSLice'
// import todosReducer from '../features/todos/todosSlice'
import commentsReduser from '../feauchers/comments/commentsSlice'



export default configureStore({
    reducer: {
        // users: usersReducer,
        // counter: counterReducer,
        // todos: todosReducer,
		comments: commentsReduser
    },
})
