import React, { createContext, useState } from 'react'
import Items from './Items'
import './App.scss'
export const MyContext = createContext([])

export default function App() {
    const [data, setData] = useState([
        {
            id:1,
            image:"./images/photo.png.webp",
            description: '    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, dolorum modi. Dignissimos, error dolore maxime rerum quibusdam perferendis tenetur cumque exercitationem at, iste adipisci! Officiis quas earum quaerat asperiores nobis?',
        },
        {
            id:2,
            image:"./images/photo.png.webp",
            description: '    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, dolorum modi. Dignissimos, error dolore maxime rerum quibusdam perferendis tenetur cumque exercitationem at, iste adipisci! Officiis quas earum quaerat asperiores nobis?',
        },   {
            id:3,
            image:"./images/photo.png.webp",
            description: '    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, dolorum modi. Dignissimos, error dolore maxime rerum quibusdam perferendis tenetur cumque exercitationem at, iste adipisci! Officiis quas earum quaerat asperiores nobis?',
        },   {
            id:4,
            image:"./images/photo.png.webp",
            description: '    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, dolorum modi. Dignissimos, error dolore maxime rerum quibusdam perferendis tenetur cumque exercitationem at, iste adipisci! Officiis quas earum quaerat asperiores nobis?',
        }
    ])
  return (
    <div className='App'>
        <MyContext.Provider value={data}>
          <Items/>
        </MyContext.Provider>
    </div>
  )
}
