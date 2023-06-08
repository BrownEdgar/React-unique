import {useState} from 'react'
import style from './Card.module.css'
export default function Card() {
    const [data, setdata] = useState({
        section:"Travel",
        title:"10 Best Things to Do in Seattle",
        description:"Seattle is a seaport city on the west coast of the United Sates...",
        fromWhom:"By Katherine Kato",
        cardImage:"https://images.unsplash.com/photo-1549092273-8b23dde8ac2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    })
  return (
    <div className={style.card}>
        <div className={style.cardImage}>
            <img src={data.cardImage} alt="seattle" />
        </div>
        <div className={style.cardInfo}>
            <a>{data.section}</a>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <h2>{data.fromWhom}</h2>
        </div>
    </div>
  )
}