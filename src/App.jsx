import { useDispatch, useSelector } from 'react-redux'
import { addTodos, getTodos } from './features/todos/todosSlice'
import { useEffect } from 'react'
import { getComments} from './features/comments/commentsSlice';
import './App.scss'
import { getAlbums, getPromiseAlbums } from './features/albums/albumsSlice';
import { getPosts, getPromisePosts } from './features/posts/postsSlice';
export default function App() {
  
  const albums = useSelector(getAlbums)
  const posts = useSelector(getPosts)
  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(getPromiseAlbums)
  }, [])

  useEffect(() => {
    dispatch(getPromisePosts)
   }, [])
  
    
  return (
    <div className='head'>
      <h1>status :{albums.status}</h1>
      <p>title:{albums.title}</p>
      <h2>status post :{posts.status}</h2>
      <p>body:{posts.body}</p>

    </div>
  )
}
