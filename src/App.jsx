import { useDispatch, useSelector } from 'react-redux'
import { addTodo, clear } from './features/todos/todosSlice'

import "./App.css"
export default function App() {
	const todos = useSelector(state => state.todos)
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
		dispatch(clear(todos))
	}
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
		</div>
	)
}
