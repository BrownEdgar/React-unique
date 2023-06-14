import React from 'react'
import useCounter from './useCount'

export default function App() {
    const [count, setCount] = useCounter()
  return (
    <div>
        <h1>Count: {count}</h1>

        <button onClick={decriment}>add count</button>
    </div>
  )
}
