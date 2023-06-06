import { useState, useEffect } from 'react'
import "./App.css"
export default function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = () => {
			fetch('https://jsonplaceholder.typicode.com/todos')
				.then(res => res.json())
				.then(json => setData(json))
		}
		getData()
	}, [])

	const deleteBox = (id) => {
		const filtered = data.filter(elem => elem.id != id)
		setData(filtered)
	}

	return (
		<div className='box'>
			{
				data.map(elem => {
					return (
						<div key={elem.id} className='text'>
							<h2>
								<span>Title:</span>
								{elem.title}
								<span className='del' onClick={() => deleteBox(elem.id)}>
									&#10060;
								</span>
							</h2>
							<p className='userid'>
								<span>UserId:</span>
								<b>{elem.userId}</b>
							</p>
							<p>
								<span>Completed:</span>
								{elem.completed}
							</p>
						</div>
					)
				})
			}
		</div>
	)
}