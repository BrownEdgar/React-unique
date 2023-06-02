import { useState, useEffect } from 'react'

export default function App() {
	const [data, setData] = useState([]);

	console.log("app run ...")
	useEffect(() => {
		console.log("useEffect run...")
		const getData = () => {
			fetch('https://jsonplaceholder.typicode.com/posts')
				.then(res => res.json())
				.then(json => setData(json))
		}
		getData()
	},[])

	return (
		<div>
			<h2>
				{JSON.stringify(data)}
			</h2>
		</div>
	)
}

