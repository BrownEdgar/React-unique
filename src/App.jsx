import { useDispatch, useSelector } from 'react-redux'
import { addTodos, getTodos } from './features/todos/todosSlice'
import { useEffect } from 'react'

export default function App() {

  const todos = useSelector(getTodos);

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => dispatch(addTodos(data)))
  }, [])
    
  return (
    <div>
       {todos.map(elem => {
        return(
          <div key={elem.id}>
            <h2>{elem.title}</h2>
          </div>
        )
       })}
    </div>
  )
}
