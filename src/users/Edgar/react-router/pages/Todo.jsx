import { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import ROUTES from '../routes/routes'

import axios from 'axios'
export default function Todo() {
	const [todo, setTodo] = useState({})

	const  {id} = useParams() 
	const navigate = useNavigate()

	const todoId = Number(id)

	useEffect(() => {
		if (todoId && todoId <= 100) {
		axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res => setTodo(res.data))
		}
	}, [id])

	if (!todoId || todoId > 200) {
		return <h1>Invalid todo id of post not found</h1>
	}

	const goback = () => {  
		navigate(`/${ROUTES.TODOS}`)
	}
	return (
		<div>
			<h1>Welcome to special post page N {id}</h1>
			<button onClick={goback}>All posts</button>
			<div>
				<h2>{todo.title}</h2>
				<hr />
				<p>{todo.body}</p>
			</div>
		</div>
	)
}
