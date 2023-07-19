import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todosSlice";
import commentsReducer from "../features/comments/commentsSlice";

export default configureStore({
  reducer: {
    todos: todosReducer,
    comments: commentsReducer
  },
})