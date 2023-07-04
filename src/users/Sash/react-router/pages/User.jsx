import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function User() {
  const [user, setUser] = useState({})

  const { id } = useParams()
  const navigate = useNavigate()

  const userId = Number(id)
  useEffect(() => {
    if (userId || userId <= 30) {
      axios.get(`https://dummyjson.com/users/${id}`)
        .then(res => setUser(res.data))
    }
  }, [id])
  if (!userId || userId > 30) {
    return <h1>Invalid user id of user not found</h1>
  }

  const goback = () => {
    navigate(-1)
  }

  return (
    <div>
      <div className='card'>
        <div className='card-text'>
          <p><span>Firstname:</span> {user.firstName}</p>
          <p><span>Lastname:</span> {user.lastName}</p>
          <p><span>Maide name:</span> {user.maidenName}</p>
          <p><span>Age:</span> {user.age}</p>
          <p><span>Gender:</span> {user.gender}</p>
          <p><span>Email:</span> {user.email}</p>
          <p><span>Phone:</span> {user.phone}</p>
          <p><span>Birth Date:</span> {user.birthDate}</p>
          <p><span>Height:</span> {user.height}</p>
          <p><span>Weight:</span> {user.weight}</p>
        </div>
        <div className='card-image'>
          <img src={user.image} alt="Robot image" />
        </div>
      </div>
      <button onClick={goback} className='btn'>Go back</button>
    </div>
  )
}
