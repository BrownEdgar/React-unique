import { useDispatch, useSelector } from 'react-redux'
// import { useEffect } from 'react'
// import { getAlbums, getPromiseAlbums } from './features/albums/albumsSlice';
// import { getPosts, getPromisePosts } from './features/posts/postsSlice';
// import { getPromiseTodos, getTodos } from './features/todos/todosSlice';
// import { getPromiseUsers, getUsers } from './features/users/usersSlice';
import './App.scss'
import { allCars } from './features/cars/carsSlice';




export default function App() {
  
//   const albums = useSelector(getAlbums)
//   const posts = useSelector(getPosts)
//   const todos = useSelector(getTodos)
//   const users = useSelector(getUsers)
     const cars = useSelector(allCars)
//   const dispatch = useDispatch()
    
  return (
   <div className='head'>
    {
        cars.map(elem => {
           return(
            <div className='block' key={elem.id}>
                   <div className='image'>
                <img src={elem.logo} alt="car-logo" />
                </div>
                <ul>
                    <li className='auto'>
                        {elem.auto}
                    </li>
                    <li className='model'>
                        <span>MODEL </span>
                        {elem.model}
                    </li>
                    <li className='year'>
                        <span>YEAR </span>
                        {elem.year}
                    </li>
                    <li className='addres'>
                    <span>ADDRESS </span>{elem.addres}
                    </li>
                    <li className='phone'>
                        <span>PHONE </span>
                        {elem.phone}
                    </li>
                    <li className='email'>
                        <span>E-MAIL </span>
                        {elem.email}
                    </li>
                </ul>
            </div>
           ) 
        })
    }
   </div>
  )
}
