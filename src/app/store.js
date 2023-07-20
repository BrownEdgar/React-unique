import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersReducer from '../feauchers/user/usersSlice1';
import postsReducer from '../feauchers/posts/postsSlice';
import todosReducer from '../feauchers/todos/todosSlice1'; 
import albumsReducer from '../feauchers/albums/albumsSlice';

const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  todos: todosReducer,
  albums: albumsReducer,
  });

const store = configureStore({
  reducer: rootReducer,
});

export default store;
