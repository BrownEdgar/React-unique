import {useState} from 'react'
import style from "./Card.module.css"
import Photo from "./images/img.jpg"


export default function Card() {
    const [data, setData] = useState({
        date: "FEB. 2017",
        tiltle: "THIS IS THE HEADLINE OF THIS NEWS",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, possimus reiciendis consectetur iure quis dicta illo architecto aut vel, temporibus fugiat eligendi molestiae pariatur.",
        cardImage: Photo,
        cardBgcolor:"white"
    })
  return (
    <div>
        <div className={style.box}>
            <div className={style.boxText}>
                <p className={style.feb}>{data.date}</p>
                <h2 className={style.title}>{data.tiltle}</h2>
                <p className={style.text}>{data.description}</p>
                <a href="#" className={style.btn}>Mehr erfahren</a>
            </div>
            <div className={style.boxImage}>
                <img src={data.cardImage} alt="Road" />
            </div>
        </div>
    </div>
  )
}
