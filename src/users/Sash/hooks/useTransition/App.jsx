import { useState, useEffect, useTransition } from 'react'
import axios from 'axios'
import Products from './Products'
import "./App.scss"

const filteredData = (data, value) => {
  return data.filter(elem => {
    if (value.trim() === "" || value.trim().length < 2) return data
    return elem.title.toLowerCase().includes(value.toLowerCase())
  })
}

export default function App() {
  const [data, setData] = useState([])
  const [value, setValue] = useState("")
  const [currentTimeOutId, setcurrentTimeOutId] = useState(null)
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(res => setData(res.data.products))
  }, [])

  const handleChange = (e) => {
    const t = setTimeout(() => {
      startTransition(() => setValue(e.target.value))
    }, 200);
    setcurrentTimeOutId(t)
  }

  return (
    <div className='container'>
      <form>
        <input type="search" name='productsSearch' id='productsSearch' onChange={handleChange} />
      </form>
      {isPending ? <h1>Loading...</h1> : <Products data={filteredData(data, value)} />}

    </div>
  )
}
