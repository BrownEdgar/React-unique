import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import counterReducer from "../features/counter/counterSlice";
import todosReduser from "../features/todos/todosSlice";




export default configureStore({
  reducer: {
    users:usersReducer,
    counter:counterReducer,
    todos:todosReduser
  },
})
