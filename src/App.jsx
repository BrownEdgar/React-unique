import { useDispatch, useSelector } from 'react-redux'
import { addTodos, getTodos } from './features/todos/todosSlice'
import { useEffect } from 'react'
import { getComments,addComments } from './features/comments/commentsSlice';
export default function App() {

  const comments = useSelector(getComments);

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
    .then(res => res.json())
    .then(data => dispatch(addComments(data)))
  },[])
    
  return (
    <div>
       {comments.map(elem => {
        return(
          <div key={elem.id}>
            <h2>{elem.body}</h2>
			<p>{elem.name}</p>
          </div>
        )
       })}
    </div>
  )
}
