import { useState, useEffect } from 'react'
import json from './data.json'

import "./App.scss"

export default function App() {
	const [data, setData] = useState(json);

	const [expensiveId, setExpensiveId] = useState(null)

useEffect(() => {
	const findExpensiveMovie = () => {
		let price = 0;
		let movieId;
		data.forEach(element => {
			if (element.price > price) {
				price = element.price;
				movieId = element.id;
			}
		})
		setExpensiveId(movieId)
	}
	findExpensiveMovie()
}, [])


	return (
		<div className='App'>
			<div className="movie">
				{data.map(elem => {
					return (
						<div key={elem.id} className={expensiveId === elem.id ? "expensive" : ""}>
							<h2>{elem.time}</h2>
							<p>{elem.price}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}
