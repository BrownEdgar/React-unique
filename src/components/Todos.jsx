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
    <div>
      <h2>Todos</h2>
      {todos.map(todo => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.completed ? 'Completed' : 'Incomplete'}</p>
        </div>
      ))}
    </div>
  );
};
export default Todos;