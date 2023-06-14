import React from 'react'
import useRandom from './useRandom'


export default function UseFetchData() {
    const[count,{increment,decrement},setCount] = useRandom(0)
     
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>add count</button>
        <button onClick={decrement}>min count</button>
    </div>
  )
}
