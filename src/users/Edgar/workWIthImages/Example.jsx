import  { useState } from 'react'
import Photo from "./photo.jpg";
import Photo2 from "../../../assets/images/photo.jpg";
import './App.css'

export default function App() {
	const [imageUrl, setImageUrl] = useState('https://images.unsplash.com/photo-1535083783855-76ae62b2914e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80')
	return (
		<div style={{ backgroundImage: `url('${imageUrl}')`}}>
			<h1>Images in react</h1>
			<img src="https://images.unsplash.com/photo-1621028371023-c282af22372e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="woatch" />
			<hr />
			<img src={imageUrl} alt="bird" />
			<hr />
			<img src={Photo} alt="bird" />
			<hr />
			<img src={Photo2} alt="bird" />
			<hr />
			
		</div>
	)
}
