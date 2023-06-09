import { useState } from 'react'

import './App.css'
import Card from './components/Card/Card'

export default function App() {
	const [data, setData] = useState({
		id: 1,
		name: "Sebastian",
		surName: "Rodriges",
		email: 'sebastian@gmial.com',
		avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
		salary: 500_000,
	})

	return (
		<>
			<Card data={data} />
		</>
	)
}
