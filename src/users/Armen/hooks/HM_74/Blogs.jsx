import { useContext } from 'react'
import { MyContext } from './App'
import Blog from './Blog'

export default function Items() {
    const items = useContext(MyContext)
  return (
    <div className='container'>
        {
            items.map(item => <Blog key={item.id} item={item}/>)
        }
    </div>
  )
}
