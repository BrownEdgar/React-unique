import { useState } from 'react'

import './App.scss'

export default function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      email: 'example@gmail.com',
      username: "Eleonor",
      password: 'qwerty1324',
    }
  ]);
  const [currentUserId, setCurrentUserId] = useState(-1);
  const [mailError, setMailError] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, email } = e.target;
    const isEmailExists = users.some(user => user.email.toLowerCase() === email.value.toLowerCase());
    const passwordRegex = /\d/; 

    if (isEmailExists) {
      setMailError(true);
      setTimeout(() => {
        setMailError(false);
      }, 6000);
    } else if (password.value.length < 10) {
      setPasswordError('Password must contain at least 10 characters');
    } else if (!passwordRegex.test(password.value)) {
      setPasswordError('Password must contain at least 1 digit');
    } else {
      const user = {
        id: Date.now(),
        email: email.value,
        username: username.value,
        password: password.value,
      };
      setUsers([...users, user]);
      setMailError(false);
      setPasswordError('');
    }

    e.target.reset();
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
          {mailError && <p className="error">This email already exists!</p>}
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
          {passwordError && <p className="error">{passwordError}</p>}
        </div>
        <div>
          <input type="submit" value="Save" />
        </div>
      </form>
      <hr />
      <div className="users">
        <ul className="users-list">
          {users.map(user => {
            return (
              <li key={user.id}>
                <p><span>Email:</span>{user.email}</p>
                <p><span>Username:</span>{user.username}</p>
                <p className='password-line'>
                  <span>Password:</span>
                  {(currentUserId === user.id) ? user.password : "*".repeat(Math.min(10, user.password.length))}
                  <i
                    onClick={() => setUserId(user.id)}
                    className={`fa-regular fa-eye${(currentUserId === user.id) ? '-slash' : ''}`} ></i>
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
