// import React from 'react'
import style from './Component.module.css'

export default function Component(props) {
  return (
    <div className={style.container}>
        {props.title ? <h1>{props.title}</h1> : null}
        <hr />
        {props.children}
    </div>
  )
}
