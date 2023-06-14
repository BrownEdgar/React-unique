import {useState,useEffect}from 'react'
import useRandom from './useRandom'
import UseFetchData from './UseFetchData'


export default function useFetch() {
  const [count,setCount] = useRandom(0)
    
  return (
    <div>
      <h1>Count:{count}</h1>
    </div>
  )
}

