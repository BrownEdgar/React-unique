import { configureStore } from '@reduxjs/toolkit'
import usersReduser from '../feauchers/user/usersSlice'
import counterReduser from '../feauchers/counter/counterSlice'





export default configureStore({
  reducer: {
    users: usersReduser,
    counter: counterReduser
  },
})