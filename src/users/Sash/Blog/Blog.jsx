import { useContext } from 'react'
import { MyContext } from './App'
import Item from './Item'


export default function Blog() {
  const blogs = useContext(MyContext)
  return (
    <div className='container'>
      <h1>Blog</h1>
      {
        blogs.map(elem => <Item key={elem.id} item={elem}/>)
      }
    </div>
  )
}
