import { Link, useLoaderData } from 'react-router-dom'

function Todos() {
	const todos = useLoaderData()

	return (
		<div className='grid'>
			{todos.map(elem => {
				return (
					<Link key={elem.id} to={`${elem.id}`}>
						<h2>{elem.title}</h2>
					</Link>
				)
			})}
		</div>
	)
}

export default Todos;