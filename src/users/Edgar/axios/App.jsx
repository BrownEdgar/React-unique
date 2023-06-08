import { useState, useEffect } from 'react';
import axios from 'axios';
// import instance from './instance';


export default function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		function fetchData() {
			// axios('https://jsonplaceholder.typicode.com/posts')
			// 	.then(res => setData(res.data))

			// axios.get('https://jsonplaceholder.typicode.com/posts')
			// 	.then(res => setData(res.data))

			// axios.get('https://jsonplaceholder.typicode.com/posts', {
			// 	params: {
			// 		_limit: 15,
			// 		_start: 10
			// 	}
			// })
			// 	.then(res => setData(res.data))

			// axios({
			// 	baseURL: 'https://jsonplaceholder.typicode.com',
			// 	url: '/albums',
			// 	params: {
			// 		_limit: 4
			// 	}
			// })
			// 	.then(res => setData(res.data))

			// axios.all([
			// 	axios.get('https://jsonplaceholder.typicode.com/posts'),
			// 	axios.get('https://jsonplaceholder.typicode.com/toos'),
			// 	axios.get('https://jsonplaceholder.typicode.com/albums'),
			// ]).then(([posts, todos, albums]) => console.log(posts, todos, albums))

			// instance.get('/posts?_limit=4').then(res => setData(res.data))
			// axios.delete('https://jsonplaceholder.typicode.com/posts/1')
			// .then(res => {

			// 	if (res.status === 200) {
			// 			console.log("post successfuly deleted")
			// 	}else{
			// 		console.log("check data 😮")
			// 	}
			// })
			// .catch(err => console.log(err))

			axios({
				method: 'get',
				baseURL: 'https://jsonplaceholder.typicode.com',
				url: '/posts',
				params: {
					_limit: 10
				}
			}).then(res => setData(res.data))

				.catch(err => console.log(err))

		}
		fetchData()
	}, [])


	return (
		<div>

			{
				data.map(elem => {
					return (
						<div key={elem.id}>
							<p>{elem.title}</p>
						</div>
					)
				})
			}

		</div>
	)
}
