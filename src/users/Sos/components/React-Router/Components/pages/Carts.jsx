import { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Carts() {
	const [carts, setCarts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get('https://dummyjson.com/carts')
			console.log(response.data.carts)
			setCarts(response.data.carts)
		}
		fetchData()
	}, [])

	return (
		<div className='grid'>
			{carts.map(elem => {
				return (
					<Link key={elem.id} to={`${elem.id}`}>
						{elem.products.map(elems => {
							return <h6 key={elems.id}>{elems.title}</h6>
						})}
					</Link>
				)
			})}
		</div>
	)
}
