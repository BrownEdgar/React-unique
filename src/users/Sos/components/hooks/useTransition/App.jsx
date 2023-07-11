import {useState,useEffect,useTransition} from 'react'
import axios from 'axios'
import Products from './Products'
import './App.scss'



const filterData = (data,value) =>{
  return data.filter(product => {
    if(value.trim() === '' || value.trim().length < 2) return data
    return product.title.toLowerCase().includes(value.toLowerCase())
    })
}

export default function App() {
    const [data, setData] = useState([])
    const [value, setValue] = useState('')
    const [ispending, startTransition] = useTransition()
    const [currentTimoutId, setCurrentTimoutId] = useState(null)


    useEffect(() => {
     axios.get('https://dummyjson.com/products')
     .then(res => setData(res.data))
    }, [])


    const handleChange = (e) => {
        if(currentTimoutId){
          clearTimeout(currentTimoutId)
        }
        const outTime = setTimeout(() => {
            startTransition(() => setValue(e.target.value))
        },200);
        setCurrentTimoutId(() => outTime)
    };
    
  return (
    <div className='contanier'>
        <h3>{value}</h3>
        <form>
            <input type="search" name='productSearch' id='productSearch' onChange={handleChange} />
        </form>
        {ispending ? <h1> Loading ... </h1> : <Products data = {filterData(data,value)}/>}
    </div>
  )
}

