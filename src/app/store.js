import { configureStore } from "@reduxjs/toolkit";
import {usersReducer,counterReducer,todosReduser,
commentsReduser,postsReduser,albumsReduser
} from '../features'



export default configureStore({
  reducer: {
    users:usersReducer,
    counter:counterReducer,
    todos:todosReduser,
    comments:commentsReduser,
    albums:albumsReduser,
    posts:postsReduser,
  },
})
