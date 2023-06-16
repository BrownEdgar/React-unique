import { useState } from 'react'

export default function App3() {
	const [users, setusers] = useState([])

	const handleSubmit = (e) => {  
		e.preventDefault()
		const { username } = e.target;
		const languages = Array.from(e.target.elements).filter((elem) => {
			return elem.type === 'checkbox' && elem?.checked
		}).map(elem => elem.name);
		console.log(languages)
		const user = {
			id: Date.now(),
			username: username.value,
			languages
		}
		setusers([...users, user]);
		e.target.reset()
	}
	return (
		<div>
			<h1>what languages do you prefer?</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="username">username</label>
					<input type="text" name="username" id='username' required/>
				</div>
				<div>
					<input type="checkbox" name="html&css" id="html&css" />
					<label htmlFor="html&css">html&css</label>
				</div>
				<div>
					<input type="checkbox" name="javascript" id="javascript" />
					<label htmlFor="javascript">javascript</label>
				</div>
				<div>
					<input type="checkbox" name="react.js" id="react.js" />
					<label htmlFor="react.js">react.js</label>
				</div>
				<div>
					<input type="checkbox" name="next.js" id="next.js" />
					<label htmlFor="next.js">next.js</label>
				</div>
				<div>
					<input type="submit" value='register'  />
					
				</div>
			</form>
				<pre>
					{JSON.stringify(users,null,1)}
				</pre>
		</div>
	)
}
