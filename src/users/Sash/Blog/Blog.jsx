import { useContext } from 'react'
import { MyContext } from './App'
import Item from './Item'


export default function Blog() {
  const blog = useContext(MyContext)
  return (
    <div className='container'>
      <h1>Blog</h1>
      {
        blog.map(elem => <Item key={elem.id} item={elem}/>)
      }
    </div>
  )
}
