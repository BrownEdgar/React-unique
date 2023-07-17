import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodos, getTodos, setFilter } from './features/todos/todosSlice';

import './App.css';

export default function App() {
	const todos = useSelector(getTodos);
	const dispatch = useDispatch();

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos?_limit=12')
			.then(res => res.json())
			.then(data => dispatch(addTodos(data)))
	}, [])

	return (
		<>
			<button onClick={() => dispatch(setFilter('all'))}>add count</button>
			<button onClick={() => dispatch(setFilter('allCompleted'))}>add count</button>
			<button onClick={() => dispatch(setFilter('allUnCompleted'))}>add count</button>
			<div className='container'>

				{todos.map(elem => {
					return (
						<div key={elem.id}>
							<h2>{elem.title}</h2>
						</div>
					)
				})}
			</div>
		</>
	)
}
