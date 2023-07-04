import {useState, useEffect } from 'react'
import axios from 'axios'

export default function Todos() {
 const [todos, setTodos] = useState([]);
 useEffect(() => {
    const fetchData = async() => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/togos')
      setTodos(response.data)
    }
    fetchData()
 }, [])

return (
   <div>
      {todos.map(elem => {
         return (
            <div key={elem.id}>
               <h2>{elem.title}</h2>
            </div>
         )
      })}
   </div>
)
}
