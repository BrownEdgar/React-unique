import React, { useState } from 'react'
import './cards_style.css'

export default function () {
    const [imageUser,useImage] = useState({
        id:1,
        cardimage:'https://oliwia.world/wp-content/uploads/2021/01/zupa-tom-yum-przepis-Oliwia-Papatanasis-2403-600x450.jpg',
        title:"THIS IS THE HEADLING OF DIVS NEWS",
        descriptions:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat repellendus unde tenetur magnam nihil pariatur quas. Quo, cumque. Molestias, nesciunt veniam iusto quisquam sapiente praesentium?"
    })
  return (
    <div className='card'>
    <div className="avataar">
        <img src={imageUser.cardimage} alt="" />
    </div>
    <div className="cartinfo">
        <span className='idpositions'>{imageUser.id}</span>
        <h2 className='headerText'>{imageUser.title}</h2>
        <p className='text'>{imageUser.descriptions}</p>
        <button className='buttonStyle'>More erfahren</button>
    </div>
    </div>
  )
}
