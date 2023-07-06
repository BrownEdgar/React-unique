import { useState } from 'react';



export default function App() {
		const [usernames, setUsername] = useState([]);

	const handleSubmit = (e) => { 
		e.preventDefault();
		if (usernames.includes(e.target[0].value.toLowerCase())) {
			alert("this item is alredy exist in aur list!")
		}else{
			setUsername([...usernames, e.target[0].value])
		}
		e.target[0].value = ''
	}

	return (
		<div>
			
			<form onSubmit={handleSubmit}>
				<input type="text"  required/>	
				<input type="submit" value="save" />
			</form>		
			<ul>
				{usernames.map((user,index) => <li key={index}>{user}</li>)}
			</ul>
		</div>
	)
}
