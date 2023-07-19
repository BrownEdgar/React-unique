import { useDispatch, useSelector } from 'react-redux'
import { addTodos, getTodos } from './features/todos/todosSlice'
import { useEffect } from 'react'
import { getComments,addComments, setFilter } from './features/comments/commentsSlice';
import './App.scss'
export default function App() {

  const comments = useSelector(getComments);

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => dispatch(addComments(data)))
  },[])
    
  return (
    <div className='head'>
      <div className='selection'>
      <button onClick={() => dispatch(setFilter('all'))}>All Comments
      </button>
      <button onClick={() => dispatch(setFilter('allCompleted'))}>All Completed
      </button>
      <button onClick={() => dispatch(setFilter('unCompleted'))}>Un Completed
      </button>
      </div>
       {comments.map(elem => {
        return(
          <div key={elem.id} >
            <div className='block'>
            <h2 className='postid'>{elem.id}</h2>
			      <p className='name'><span>NAME </span>{elem.name}</p>
            <p className='mail'><span>E-MAIL </span>{elem.email}</p>
            <p className='body'><span>BODY </span>{elem.body}</p>
            </div>
          </div>
        )
       })}
    </div>
  )
}
