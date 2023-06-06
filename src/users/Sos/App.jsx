import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = () => {
			fetch(`https://jsonplaceholder.typicode.com/todos`)
				.then(res => res.json())
				.then(json => setData(json))
		}
		getData()
	}, [])
	const deleted = (id) => {
		const filterData = data.filter(todo => todo.id !== id)
		setData(filterData)
	}
	return (
		<div className='section'>
			<h1 className='header'>TODOS</h1>
			{
				data.map(todo => <div key={todo.id} className='todos'>
					<h2><span className='title'>Title</span>{todo.title}
						<span className='deletTitle' onClick={() => deleted(todo.id)}>
							&#10006;</span></h2>
					<p><span className='userid'>User Id</span>{todo.userId}</p>
					<p><span className='completed'>Completed</span>{todo.completed}</p>
				</div>
				)
			}
			<div className='footer'>END
				<p>
					To download an image, the user will have
					to follow the link to the original host site.
					<p className='span'>https://jsonplaceholder.typicode.com</p>
				</p>
			</div>
		</div>
	)
}
