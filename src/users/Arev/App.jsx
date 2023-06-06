import { useState, useEffect } from 'react'
import "./style.css"

export default function App() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const getTodos = () => {
			fetch('https://jsonplaceholder.typicode.com/todos')
				.then(res => res.json())
				.then(json => setTodos(json))
		}
		getTodos()
	},[])


		const deleteTodo = (id)=>{
			const filtered = todos.filter(elem => elem.id != id)
			setTodos(filtered)
		 	}


	return (
		<div className={`box`}>
			{
				todos.map(elem => <div key={elem.id} className={`box-text ${elem.completed ? "completed" : ''}`}>
				<span className='btn-delete' onClick={()=>deleteTodo(elem.id)}>&#10060;</span>
				<h2> <span>Title: </span>{elem.title} </h2>
				<p className='id'> <span>UserId:</span><b>{elem.userId}</b></p>
				
				</div>)
			}
		</div>
	)
}
