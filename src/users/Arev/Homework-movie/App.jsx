import { useState, useEffect, useRef } from 'react'
import json from './data.json'
// import photo from "./rus.png"
// import Photo from "./usa.png"

import "./App.scss"

export default function App() {
	const [data, setData] = useState(json);
	const [expensiveId, setExpensiveId] = useState(null);
	const [lang, setLang] = useState();
	const [is3Dmovie, setIs3Dmovie] = useState(null);
	useEffect(() => {
		const languages = () => {
			let languageId;
			data.forEach(element => {
				if (element.lang === "english") {
					languageId = element.id
				}
			})
			setLang(languageId)
		}
		languages()
	}, [])
	useEffect(() => {
		const movie3D = () => {
			let movie;
			data.forEach(elem => {
				if (elem.is3d === true) {
					movie = elem.id
				}
			})
			setIs3Dmovie(movie)
		}
		movie3D()
	}, [])

	const longDurationMovie = () => {
		let movieId;
        let duration = "";
        let time_parts = duration.split(":");
		data.forEach(element => {
			if (element.duration > duration) {
				duration = element.duration;
				movieId = element.id;
			}
		})
		setExpensiveId(movieId)
	}


	return (
		<div className='App'>
			<div className="movie">
                <div className="text">
                    <h1>Choose your favorite movie</h1>
					<button  onClick={longDurationMovie}>
					Longest duration movie
					</button>
                </div>
				{data.map(elem => {
					return (
						<div key={elem.id} className={expensiveId === elem.id ? "expensive" : ""}>
                            <div className="img_movie">
                                <img src={elem.img} alt="" />
								<p className={lang === elem.id ? "eng" : "rus"}></p>
								<p className={is3Dmovie === elem.id ? "is3D" : ""}></p>
                            </div>
							<h2>{elem.name}</h2>
							<p><span>Release Year: </span> {elem.releaseYear}</p>
							<p><span>Country: </span> {elem.country}</p>
							<p><span>Genre: </span> {elem.genre}</p>
							<p><span>Duration of the movie: </span> {elem.duration}</p>
                            <p><span>Starts at: </span> {elem.time}</p>
							<p><span>Price: </span> {elem.price}</p>

						</div>
					)
				})}
			</div>
		</div>
	)
}
