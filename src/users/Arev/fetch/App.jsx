import axios from 'axios';
import { useState, useEffect } from 'react'

import './App.scss'

export default function App() {
	const [data, setData] = useState([]);

	useEffect(() => {

		const getData = () => {
			axios('https://jsonplaceholder.typicode.com/posts')
				.then(res => setData(res.data))
		}

		getData()
	}, [])

    const handleEditPost = (id,userId) => {
        const todo = {
            id,
            userId,
            title: "lorem ispum dolor it",
            body: "stex grum enq liqy ankap baner, vor texty lrana u erkar lini",
        }
        const currentPostIndex = data.findIndex(elem => elem.id === id);
        setData(data.with(currentPostIndex,todo))
    }
    return (
		<div className='grid'>
			{
				data.map(post => {
					return (
						<div className="grid-item" key={post.id}>
							<span>{post.id}</span>
							<h2 className='grid-title'>{post.title}</h2>
							<p className='grid-body'>{post.body}</p>
							<button className='btn-edit' onClick={() => handleEditPost(post.id, post.userId)}>edit post</button>
						</div>
					)
				})
			}

		</div>
	)
}