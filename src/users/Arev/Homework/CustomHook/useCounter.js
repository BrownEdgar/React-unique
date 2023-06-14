import {useState} from 'react'

export default function useCounter(initialState = 0) {
    const [value,setValue] = useState(initialState);
    const increment = () => {
        if(value < 15){
        setValue(prevValue => prevValue + 1)
        }
    }
    const decrement = () => {
        if(value > 0){
        setValue(prevValue => prevValue - 1)
        }
    }
    const reset = () => {
        setValue(initialState)
    }
  return [value,{increment,decrement,reset}, setValue];
}
