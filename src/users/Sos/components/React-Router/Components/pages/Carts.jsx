import { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Carts() {
const [carts, setCarts] = useState([]);
console.log(carts);
useEffect(() => {
const fetchData = async() => {
  const response = await axios.get('https://dummyjson.com/carts')
  setCarts(response.data.carts)
} 
fetchData()
},[])

  return (
    <div className='grid'>
      {carts.map(elem =>{
       return(
        <Link key={elem.id} to={`${elem.id}`}>
          <h2>{elem.title}</h2>
        </Link>
       )
      })}
    </div>
  )
}
