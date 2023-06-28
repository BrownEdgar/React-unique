import classNames from 'classnames'
import style from './Component.module.css'

export default function Component(props) {

  return (
    <div  className={classNames (style.contanier,{
      [`${style.dark}`]:props.type === 'dark',
      [`${style.light}`]:props.type === 'light',
      [`${style.URL}`]:props.whithImage === 'url'
    })}>
        {props.title ? (
        <>
        <h1>{props.title}</h1>
        <hr />
        </>
        ): null}
        {props.children}
    </div>
  )
}
