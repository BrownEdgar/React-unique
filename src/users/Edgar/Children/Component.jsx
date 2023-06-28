/* eslint-disable react/prop-types */
import classNames from 'classnames'
import style from './Component.module.css'


export default function Component(props) {
	return (
		<div className={classNames(style.container, {
			[`${style.dark}`]: props.type === 'dark'
		})}>
			{props.title ? (
				<>
					<h1>{props.title}</h1> 
					<hr />
				</>
			) : null}
			{props.children}
		</div>
	)
}
