import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'

export default function Cart() {
	const [cart, setCart] = useState({})
	const { id } = useParams()
	const navigate = useNavigate()

	const cartId = Number(id)

	useEffect(() => {

		if (cartId && cartId <= 20) {
			axios.get(`https://dummyjson.com/carts/${id}`)
				.then(res => setCart(res.data))
		}
	}, [id])

	if (cartId > 20) {
		return <h1>invalid cart id cart not found</h1>
	}

	const goBack = () => {
		navigate(-1)
	}

	return (
		<div>
			<h1>Welcome to special cart page N {id}</h1>
			<button onClick={goBack}>go back</button>
			<div>
				<h2>{cart.products[0].title}</h2>

				<p>{cart.discountedTotal}</p>

			</div>
		</div>
	)
}
