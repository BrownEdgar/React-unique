import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import usersSlice from "../features/users/usersSlice";
import counterSlice from "../features/counter/counterSlice";




export default configureStore({
  reducer: {
    users:usersReducer,
    counter:counterSlice
  },
})
