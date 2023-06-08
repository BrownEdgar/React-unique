import React from 'react';
import PostList from './PostList';
import TodoList from './TodoList';
import './Index.css';

function App() {
  return (
    <div className="App">
      <PostList />
      <TodoList />
      <button className="edit">EDIT</button>
    </div>
    
  );
}

export default App;
