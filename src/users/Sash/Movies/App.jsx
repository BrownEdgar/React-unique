import { useState, useEffect } from 'react'
import json from './data.json'

import "./App.scss"

export default function App() {
	const [data] = useState(json);
	const [expensiveId, setExpensiveId] = useState(null)
	const [language, setlanguage] = useState(null)
	const [is3d, setIs3d] = useState(null)
	const [duration, setDuration] = useState(null)

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

	useEffect(() => {
		const findLenguage = () => {
			let langId;
			data.forEach(elem => {
				if (elem.language === "english") {
					langId = elem.id
				}
			})
			setlanguage(langId)
		}
		findLenguage()
	}, [])

	useEffect(() => {
		const findIs3d = () => {
			let is3dId;
			data.forEach(elem => {
				if (elem.is3d === true) {
					is3dId = elem.id
				}
			})
			setIs3d(is3dId)
		}
		findIs3d()
	}, [])

	const longDuration = () => {
		let durationnum = 0
		let durationId
		data.forEach(elem => {
			if (Number(elem.duration.replace(":", "") > durationnum)) {
				durationnum = elem.duration
				durationId = elem.id
			}
		})
		setDuration(durationId)
	}
	return (
		<div className='App'>
			<div className="movie">
				{data.map(elem => {
					return (
						<div key={elem.id} className={expensiveId === elem.id ? "expensive" : ""}>
							<p className={language === elem.id ? "lang" : ""}><span>Time:</span> {elem.time}</p>
							<p className={is3d === elem.id ? "is3d" : ""}><span>Price:</span> {elem.price}</p>
							<p className={duration === elem.id ? "duration" : ""}><span>Duration:</span> {elem.duration}</p>
						</div>
					)
				})}
				<button onClick={longDuration}>Long duration</button>
			</div>

		</div>
	)
}
