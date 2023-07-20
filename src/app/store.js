import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './features/user/usersSlice1';
import postsReducer from './features/posts/postsSlice';
import todosReducer from './features/todos/todosSlice1'; 
import albumsReducer from './features/albums/albumsSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    todos: todosReducer,
    albums: albumsReducer,
  },
});
