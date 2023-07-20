import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAlbums, getPromiseAlbums } from './features/albums/albumsSlice';
import { getPosts, getPromisePosts } from './features/posts/postsSlice';
import { getPromiseTodos, getTodos } from './features/todos/todosSlice';
import { getPromiseUsers, getUsers } from './features/users/usersSlice';
import './App.scss'


export default function App() {
  
  const albums = useSelector(getAlbums)
  const posts = useSelector(getPosts)
  const todos = useSelector(getTodos)
  const users = useSelector(getUsers)
  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(getPromiseAlbums)
  }, []);

  useEffect(() => {
    dispatch(getPromisePosts)
   }, []);

   useEffect(() => {
    dispatch(getPromiseTodos)
   }, []);

   useEffect(() => {
    dispatch(getPromiseUsers)
   }, [])
  
    
  return (
    <div className='head'>
      <div>
      <h1>status :{albums.status}</h1>
      <p>title:{albums.title}</p>
      </div>
      <div>
      <h2>status post :{posts.status}</h2>
      <p>body:{posts.body}</p>
      </div>
      <div>
        <h2>status todos:{todos.state}</h2>
        <p>title{todos.title}</p>
      </div>
      <div>
        <h2>status users:{users.state}</h2>
        <p>name{users.name}</p>
      </div>
    </div>
  )
}
