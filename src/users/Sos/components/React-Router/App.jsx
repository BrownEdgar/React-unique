import React from 'react'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'
import {Route,RouterProvider,createRoutesFromElements,createBrowserRouter} from 'react-router-dom'
import Layouts from './Components/Navbar/Layouts'
import ROUTES from './Components/Navbar/routes/routes'
import Posts from './pages/Posts'
import History from './pages/History'
import './App.scss'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layouts/>}>
            <Route path={ROUTES.HOME} element={<Home/>}/>
            <Route path={ROUTES.BLOG} element={<Blog/>}/>
            <Route path={ROUTES.ABOUT} element={<About/>}/>
            <Route path={ROUTES.POSTS} element={<Posts/>}/>
            <Route path={ROUTES.HISTORY} element={<History/>}/>
            <Route path={ROUTES.ERRORPAGE} element={<ErrorPage/>}/>
        </Route>
    )
)

export default function App() {
  return (
    <div className='App'>
        <RouterProvider router={router}/>
    </div>
  )
}
