import {useEffect} from 'react'
import {useParams} from 'eact-router-dom'

export default function Todo() {
    const {id} = useParams()

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com')
    }, [])
  return (
    <div>
      <h1>Welcome to todo page N {id}</h1>  
    </div>
  )
}
