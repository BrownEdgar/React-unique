import React from 'react'
import style from './Card.module.css'



export default function Card({ data }) {
	return (
		<div className={style.card}>
			<div className={style.avatar}>
				<img src={data.avatar} alt="avatar" />
			</div>
			<div className={style.card_info}>
				<h2>{data.name} {' '} {data.surName}</h2>
				<hr />
				<ul>
					<li>
						<span>Email:</span>
						<span>{data.email}</span>
					</li>
					<li>
						<span>Salary:</span>
						<span>{data.salary}</span>
					</li>
				</ul>
			</div>
		</div>
	)
}
