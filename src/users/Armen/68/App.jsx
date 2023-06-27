import { useState, useEffect } from 'react';
import classNames from 'classnames'
import json from './data.json';
import './App.scss';



export default function App() {
  const [data, setData] = useState(json);
  const [expensiveId, setExpensiveId] = useState(null);
  const [highlightedId, setHighlightedId] = useState(null);

  useEffect(() => {
		const findExpensiveMovie = () => {
			let price = 0;
			let movieId;
			data.forEach((element) => {
				if (element.price > price) {
					price = element.price;
					movieId = element.id;
				}
			});
			setExpensiveId(movieId);
		}
    findExpensiveMovie();
  }, [])

  const highlightLongestDurationMovie = () => {
    let maxDuration = 0;
    let movieId;
    data.forEach((element) => {
      const durationInSeconds = convertDurationToSeconds(element.duration);
      if (durationInSeconds > maxDuration) {
        maxDuration = durationInSeconds;
        movieId = element.id;
      }
    })
    setHighlightedId(movieId);
  }

  const convertDurationToSeconds = (duration) => {
    const [hours, minutes] = duration.split(':');
    return parseInt(hours) * 3600 + parseInt(minutes) * 60;
  }

  return (
    <div className="App">
      <div className="movie">
        {data.map((elem) => (
          <div
            key={elem.id}
						className={classNames('movie-card', {
							expensive: expensiveId === elem.id,
							highlighted: highlightedId === elem.id
						})}
          >
            {elem.is3d && <div className="is3d-label">3D</div>}
						<div className={classNames(`language-flag`)}>
							<img src={elem.flagUrl} alt={`${elem.language}-flag`} />
						</div>
            <h2>{elem.time}</h2>
            <p>{elem.price}</p>
          </div>
        ))}
      </div>
      <button onClick={highlightLongestDurationMovie}>Longest Film</button>
    </div>
  );
}
