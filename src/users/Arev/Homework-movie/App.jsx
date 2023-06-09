import { useState, useEffect, useRef } from 'react'
import json from './data.json'
// import photo from "./rus.png"
// import Photo from "./usa.png"
import classNames from 'classnames'
import "./App.scss"

export default function App() {
	const [data, setData] = useState(json);
	const [expensiveId, setExpensiveId] = useState(null);


	const longDurationMovie = () => {
		let movieId;
		let duration = "";
		
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
					<button onClick={longDurationMovie}>
						Longest duration movie
					</button>
				</div>
				{data.map(elem => {
					return (
						<div key={elem.id} className={expensiveId === elem.id ? "expensive" : ""}>
							<div className="img_movie">
								<img src={elem.img} alt="" />
								<p className={classNames(`language-${elem.lang}`)}></p>
								<p className={classNames({
									is3D: elem.is3d
								})}></p>
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
