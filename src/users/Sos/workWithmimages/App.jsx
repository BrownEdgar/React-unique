import React, { useState } from 'react'
import './App.css'

export default function () {
    const [imageUser,useImage] = useState({
        id:1,
        name:'Sebastian',
        surname:'Rodriges',
        avatar:'https://th.bing.com/th/id/OIP.pAcu7875Nl6e_M0tBXBzGQHaE5?pid=ImgDet&rs=1',
        email:'avatar@.com',
    })
  return (
    <div className='card'>
    <div className="avataar">
        <img src={imageUser.avatar} alt="" />
    </div>
    <div className="cartinfo">
        <h2>{imageUser.name} {' '} {imageUser.surname}</h2>
        <ul>
            <li>
                <span>Email:</span>
                {imageUser.email}
            </li>
        </ul>
    </div>
    </div>
  )
}
