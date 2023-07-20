import React from 'react';
import Users from './components/Users';
import Posts from './components/Posts';
import Todos from './components/Todos';
import Albums from './components/Albums';
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
