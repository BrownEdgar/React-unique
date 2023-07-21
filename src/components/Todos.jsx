import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, selectAllTodos } from '../feauchers/todos/todosSlice1';
const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectAllTodos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  console.log('todos:', todos);

  return (
    <div className='todos'>
      <h1>Todos</h1>
      {todos.map(todo => (
        <div key={todo.id}>
          <h2>{todo.id}</h2>
          <h3><strong>User ID: </strong>{todo.userId}</h3>
          <p><strong>Title: </strong>{todo.title}</p>
          <p>{todo.completed ? 'Completed' : 'Incomplete'}</p>
        </div>
      ))}
    </div>
  );
};
export default Todos;