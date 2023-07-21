import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAlbums, getPromiseAlbums } from './features/albums/albumsSlice';
import { getPosts, getPromisePosts } from './features/posts/postsSlice';
import { getPromiseTodos, getTodos } from './features/todos/todosSlice';
import { getPromiseUsers, getUsers } from './features/users/usersSlice';
import { films } from './features/test/testSlice';
import './App.scss'



export default function App() {
  
  // const albums = useSelector(getAlbums)
  // const posts = useSelector(getPosts)
  // const todos = useSelector(getTodos)
  // const users = useSelector(getUsers)
  const dispatch = useDispatch()
  // useEffect(() => {
  //  dispatch(getPromiseAlbums())
  // }, []);

  // useEffect(() => {
  //   dispatch(getPromisePosts())
  //  }, []);

  //  useEffect(() => {
  //   dispatch(getPromiseTodos())
  //  }, []);

  //  useEffect(() => {
  //   dispatch(getPromiseUsers())
  //  }, [])
   const handleClick = () =>{
    {films.id? films.id + 1: null}
   }
    
  return (
     films.map(test => {
      return(
      <div className='head' key={test.id}>
        <h2>{test.title}</h2>
        <ul>
          <li>
            <span>id:</span>
            {test.id}
          </li>
          <li><span>year:</span>
          {tets.year}
          </li>
        </ul>
        <form onClick={handleClick}>
          <input type="text" placeholder='title'/>
          <input type="text" placeholder='year' pattern='\d*'/>
          <input type="number" placeholder='title'/>
        </form>
    </div>
      )
     })
    
  )
}
