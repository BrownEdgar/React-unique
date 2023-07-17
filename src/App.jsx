import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTodos, allTodosSelector } from "./features/todos/todosSlice";

export default function App() {
  const todos = useSelector(allTodosSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => dispatch(addTodos(data)));
  }, []);

  return (
    <div>
      {todos.map(elem => (
        <div key={elem.id}>
          <h2>{elem.title}</h2>
        </div>
      ))}
    </div>
  );
}
