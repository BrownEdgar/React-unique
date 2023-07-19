import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'
import { addTodo, clear } from './features/todos/todosSlice'
import { addComments } from './features/comments/commentsSlice'

import "./App.css"



export default function App() {
	const todos = useSelector(state => state.todos)
	const comments = useSelector(state => state.comments)
	
	const dispatch = useDispatch()
	const handleClick = () => {
		const todo = {
			"userId": 2,
			"id": new Date().getTime(),
			"title": "totam atque quo nesciunt",
			"completed": true
		}
		dispatch(addTodo(todo))
	}
	const clearAll = () => {
		dispatch(clear())
	}
	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/comments`)
		.then(res => dispatch(addComments(res.data)))
	}, [])
	
	return (
		<div className='container'>
			<div className='app'>
				{
					todos.map(elem => {
						return (
							<div key={elem.id} className='card'>
								<h2>{elem.title}</h2>
								<p>{elem.userId}</p>
							</div>
						)
					})
				}
			</div>
			<button onClick={handleClick}>Add Todo</button>
			<button onClick={clearAll}>Clear all</button>
			<div className='box'>
			{
				comments.map(elem => {
					return(
						<div key={elem.id} className='box-com'>
							<h3>{elem.name}</h3>
							<p>{elem.email}</p>
							<p>{elem.body}</p>
						</div>
					)
				})
			}
			</div>
		</div>
	)
}
