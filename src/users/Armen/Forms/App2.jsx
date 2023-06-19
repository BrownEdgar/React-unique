import { useState } from 'react'

const price = {
	barselona: '680$',
	'new-york': '1470$',
	dublin: '340$',
	yerevan: '150$'
}

export default function App2() {
	const [city, setCity] = useState('');
	const handleChange = (e) => {
		setCity(e.target.value)
	}
	return (
		<div>
			<h1>Select in React</h1>
			<hr />
			<form>
				<select name="cities" id="cities" onChange={handleChange}>
					{
						Object.keys(price).map(elem => {
							return (
								<option value={elem} key={elem}>
									{elem.replace(elem.at(0), elem.at(0).toUpperCase())}
								</option>
							)
						})
					}
				</select>
			</form>

			{city ? <h2>Ticket to
				<span style={{ background: '#ee6352', padding: '3px' }}>
					{city}
				</span>
				cost {price[city]}</h2> : null}
		</div>
	)
}
