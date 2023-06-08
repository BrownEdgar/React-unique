import {useState} from 'react'
import style from './Card.module.css'
export default function Card() {
    const [data, setdata] = useState({
        date:"Feb. 2017",
        title:"This is the headline of this news",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, quae magni eveniet nobis optio esse suscipit laboriosam aut expedita culpa quas ullam aliquam, laudantium vel.",
        cardImage:"https://media.istockphoto.com/id/1146929175/photo/fresh-organic-vegetables-on-rustic-background.jpg?s=1024x1024&w=is&k=20&c=eKEodL1Xv7drI1JoJzl9QBwO0JReNGzIGsz1q9MrXNE=",
    })
  return (
    <div className={style.card}>
        <div className={style.cardInfo}>
            <a>{data.date}</a>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
                <button className={style.button}>Mehr erfahren</button>
        </div>
        <div className={style.cardImage}>
            <img src={data.cardImage} alt="seattle" />
        </div>
    </div>
  )
}
