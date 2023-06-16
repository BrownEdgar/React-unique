import { useState } from 'react'

import './App.scss'

export default function App() {
	const [users, setusers] = useState([
		{
			id: 1,
			email: 'example@gmail.com',
			username: "Eleonor",
			password: 'qwerty1324',
		}
	]);
	const [currentUserId, setCurrentUserId] = useState(-1);
	const [mailError, setmailError] = useState(false);
    const [passwordError, setpasswordError] = useState(false);
    const [lengthError, setlengthError] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault();
		const { username, password, email } = e.target;
        const errorPass = /\d/.test(password.value)
		const iseEmailExists = users.some(user => user.email.toLowerCase() === email.value.toLowerCase())
		if (iseEmailExists) {
			setmailError(true)
			setTimeout(() => {
				setmailError(false)
			}, 6000)
		}else if(!errorPass){  
            setpasswordError(true)
            setTimeout(() => {
                setpasswordError(false)
            },6000)
         }else if(password.value.length < 10){
            setlengthError(true)
            setTimeout(() => {
                setlengthError(false)
            }, 6000);
         } else {
			const user = {
				id: Date.now(),
				email: email.value,
				username: username.value,
				password: password.value,
			}
			setusers([...users, user]);
			setmailError(false)
		}

		e.target.reset()
	}

	const setUserId = (id) => {
		(id === currentUserId)
			? setCurrentUserId(-1)
			: setCurrentUserId(id)
	}

	return (
		<div className='container'>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="email">Email</label>
					<input type="email" id="email" required />
					<p className="error">{mailError ? 'this email is alredy exist!' : null}</p> 
				</div>
				<div>
					<label htmlFor="username">Username</label>
					<input type="text" id="username" required />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input type="password" id="password" required />
                    <p className="error">{passwordError ? 'Password must contain numbers!': null}</p> 
                    <p className="error">{lengthError ? 'Password is short!': null}</p>
                    
				</div>
				<div>
					<input type="submit" value="save" />
				</div>
			</form>
			<hr />
			<div className="users">
				<ul className="users-list">
					{
						users.map(user => {
							return (
								<li key={user.id}>
									<p><span>email:</span>{user.email}</p>
									<p><span>username:</span>{user.username}</p>
									<p className='password-line'>
										<span>password:</span>
										{(currentUserId === user.id) ? user.password : "*".repeat(Math.min(10, user.password.length))}
										<i
											onClick={() => setUserId(user.id)}
											className={`fa-regular fa-eye${(currentUserId === user.id) ? '-slash' : ''}`} ></i>
									</p>
								</li>
							)
						})
					}
				</ul>
			</div>

		</div>
	)
}