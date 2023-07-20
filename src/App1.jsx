import React from 'react';
import Users from './feauchers/user/usersSlice1';
import Posts from './feauchers/posts/postsSlice';
import Todos from './feauchers/todos/todosSlise1';
import Albums from './feauchers/albums/albumsSlice';
import './App.css';

export default function App() {
  return (
    <div>
      <Users />
      <Posts />
      <Todos />
      <Albums />
    </div>
  );
}
