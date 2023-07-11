import { useState, useEffect, useTransition } from 'react';


import './App.scss'
import axios from 'axios';
import Albums from './Albums';


const filteredData = (data, value) => {
	return data.filter(elem => {
		if (value.trim() === '' || value.trim().length < 2) return data
		return elem.title.toLowerCase().includes(value.toLowerCase())
	})
}
export default function App() {
	const [data, setdata] = useState([]);
	const [value, setValue] = useState('')
	const [isPending, startTransition] = useTransition()
	const [currentTimeOutId, setCurrentTimeOutId] = useState(null)

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/photos')
			.then(res => setdata(res.data))
	}, [])
	
	const handleChange = (e) => { 
		if (currentTimeOutId) {
			clearTimeout(currentTimeOutId)
		}
		const t = setTimeout(() => {
			console.log('search')
			startTransition(() => setValue(e.target.value))
		}, 200);
		setCurrentTimeOutId(() => t)

		//bad way
		// console.log('search')
		// startTransition(() => setValue(e.target.value))
	}

	return (
		<div className='container'>
			<h3>{value}</h3>
			<form>
				<input type="search" name="photosSearch" id="photosSearch" onChange={handleChange}/>
			</form>
			{isPending ? <h1>Loading... </h1> : <Albums data={filteredData(data,value)} />}
			
		</div>
	)
}
