import classNames from "classnames"
import style from "./Component.module.css"

export default function Component(props) {
  return (
    <div className={classNames(style.container,{
        [`${style.dark}`]: props.type === "dark", 
        [`${style.light}`]: props.type === "light",
        [`${style.default}`]: props.type === "default",
        [`${style.border}`]: props.border,
        [`${style.sm}`]: props.size === "sm",
        [`${style.md}`]: props.size === "md",
        [`${style.lg}`]: props.size === "lg",
        [`${style.withImage}`]: props.withImage,

    })}>
        {props.title ? <h1>{props.title}</h1> : null}
        <hr />
        {props.children}
    </div>
  )
}
