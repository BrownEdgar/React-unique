import { useState } from 'react';
import useCounter from './useCounter'



export default function App() {
     const [count,{increment,decrement,reset}, setCount] = useCounter(0)

     
   return (
     <div>

        <h1>Count: {count}</h1>

        <button onClick={increment}>add count</button>
        <button onClick={decrement}>minus count</button>
        <button onClick={reset}>reset</button>
     </div>
   )
       
        
        
}
