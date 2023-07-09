import React from 'react'

export default function Item({item}) {
  return (
    <div className='box'>
      <h2 className='title'>{item.title}</h2>
      <p className='data'>{item.data} <span>{item.text}</span></p>
      <p className='description'>{item.description}</p>
    </div>
  )
}
