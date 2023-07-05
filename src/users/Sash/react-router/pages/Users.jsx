import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const respone = await axios.get("https://dummyjson.com/users")
      setUsers(respone.data.users)
    }
    fetchData()
  }, [])

  return (
    <div className='grid'>
      {
        users.map(elem => {
          return (
            <Link key={elem.id} to={`${elem.id}`}>
              <h2>{elem.firstName}</h2>
              <h2>{elem.lastName}</h2>
              <img src={elem.image} alt="Robot image" />
            </Link>
          )
        })
      }
    </div>
  )
}
