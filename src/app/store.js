import { configureStore } from '@reduxjs/toolkit'
import todoReduser from '../feauchers/todos/todosSlice'




export default configureStore({
  reducer: {
    users: usersReduser,
    counter: counterReduser,
    todos: todoReduser
  },
})