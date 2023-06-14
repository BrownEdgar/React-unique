import React from 'react'
import useCounter from './useCounter'
import "./App.css"
export default function App() {
    const [count, { increment, decrement, reset }, ] = useCounter(0)
    return (
        <div className='cont'>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Count +</button>
            <button onClick={decrement}>Count -</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
