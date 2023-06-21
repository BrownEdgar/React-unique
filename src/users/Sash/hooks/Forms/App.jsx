import { useState } from 'react'
import "./App.scss"
export default function App() {
  const [users, setUsers] = useState([{
    id: 1,
    email: "example@gmail.com",
    username: "asdasdas",
    password: "sadasdsad",
  }])

  const [currenUserId, setCurrenUserId] = useState(-1)
  const [mailError, setMailError] = useState(false)
  const [passwordError, setpasswordError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const { username, password, email } = e.target;
    const isEmailExists = users.some(user => user.email.toLowerCase() === email.value.toLowerCase())
    if (isEmailExists) {
      setMailError(true)
      setTimeout(() => {
        setMailError(false)
      }, 3000);
    } else if (password.value.length < 10) {
      setpasswordError(true)
      setTimeout(() => {
        setpasswordError(false)
      }, 3000);
    } else if (!/\d/.test(password.value)) {
      setpasswordError(true)
      setTimeout(() => {
        setpasswordError(false)
      }, 3000);
    }
    else {
      const user = {
        id: Date.now(),
        email: email.value,
        username: username.value,
        password: password.value,
      }
      setUsers([...users, user])
      setMailError(false)
      setpasswordError(false)
    }
    e.target.reset()
  }
  const setUserId = (id) => {
    (id === currenUserId)
      ? setCurrenUserId(-1)
      : setCurrenUserId(id)
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email</label>
          <input type="email" id="email" required />
          {mailError ? <p className="error">This "Email" is alredy exist!</p> : null}
        </div>
        <div>
          <label htmlFor='username'>Username</label>
          <input type="text" id="username" required />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type="password" id="password" required />
          {passwordError ? <p className='error'>Your "Password" is short or does not contain a number!</p> : null}
        </div>
        <div>
          <input type="submit" value="Save" />
        </div>
      </form>
      <hr />
      <div className='users'>
        <ul className='users-list'>
          {
            users.map(user => {
              return (
                <li key={user.id}>
                  <p><span>Email:</span>{user.email}</p>
                  <p><span>Username:</span>{user.username}</p>
                  <p className='password-line'>
                    <span>Password:</span>{
                      (currenUserId === user.id) ? user.password : "*".repeat(Math.min(10, user.password.length))}
                    <i
                      onClick={() => setUserId(user.id)}
                      className={`fa-regular fa-eye${(currenUserId === user.id) ? '-slash' : ''}`}></i>
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
