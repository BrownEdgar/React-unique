import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchTodos, clearTodos } from './features/todos/todosSlice';

import './App.css';

export default function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [displayedTodos, setDisplayedTodos] = useState([]);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  useEffect(() => {
    setDisplayedTodos(todos.slice(0, displayedTodos.length));
  }, [todos]);

  const handleClick = () => {
    setDisplayedTodos(todos.slice(0, displayedTodos.length + 1));
  };

  const clearAll = () => {
    setDisplayedTodos([]);
    dispatch(clearTodos());
  };

  return (
    <div className="container">
      <div className="app">
        {displayedTodos.map((elem) => (
          <div key={elem.id} className="card">
            <h2>{elem.title}</h2>
            <p>{elem.userId}</p>
          </div>
        ))}
      </div>
      <button className="add" onClick={handleClick}>
        Add Todo
      </button>
      <button className="clear" onClick={clearAll}>
        Clear all
      </button>
    </div>
  );
}
