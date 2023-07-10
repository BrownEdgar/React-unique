import React from 'react'
import { MyContext } from './App'
import { useContext } from 'react'
import Item from './Item'

export default function Items() {
  const items = useContext( MyContext)
  return (
    <div className='container'>
     {
        items.map(item => <Item key={item.id} item={item}/>)
     }
    </div>
  )
}
