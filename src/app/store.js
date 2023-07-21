import { configureStore } from "@reduxjs/toolkit";
import {usersReducer,counterReducer,todosReduser,
commentsReduser,postsReduser,albumsReduser,testReduser
} from '../features'



export default configureStore({
  reducer: {
    users:usersReducer,
    counter:counterReducer,
    todos:todosReduser,
    comments:commentsReduser,
    posts:postsReduser,
    albums:albumsReduser,
    test:testReduser,
  },
})
