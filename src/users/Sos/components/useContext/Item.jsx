import React from 'react'

export default function Item({item}) {
  return (
    <div className='item'>
      <div className="item__image">
        <img src={item.image} alt="" />
      </div>
      <div className="item__content">
        <p>{item.description}</p>
        <div className="item__icon">
        <span><i class="fa-solid fa-arrow-up-right"></i></span>
        </div>
      </div>
    </div>
  )
}
