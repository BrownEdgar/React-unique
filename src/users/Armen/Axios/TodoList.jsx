import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  return (
    <div>
      <h1>TODOS</h1>
      <div className="todoList">
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <p className="todo-userId">User ID: {todo.userId}</p>
          <p className="todo-id">ID: {todo.id}</p>
          <p className="todo-title">{todo.title}</p>
          <p className="todo-status">Status: {todo.completed ? 'Completed' : 'Incomplete'}</p>
       
        </div>))}
      </div>
      
      
    </div>
  );
}
