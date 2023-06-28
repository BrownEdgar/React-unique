/* eslint-disable react/prop-types */
import classNames from 'classnames'
import style from './Component.module.css'

export default function Component(props) {

	return (
		<div className={classNames(style.contanier, {
			[`${style[props.type]}`]: !!props.type === 'dark',
			[`${style[props.size]}`]: !!props.size === 'small',
		})}
			style={{
				backgroundImage: `url(${props.withImage})`,
				backgroundSize: 'cover',
			}}
		>
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
