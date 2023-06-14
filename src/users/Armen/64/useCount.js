import {useState} from 'react'

export default function useCount() {
    const [value, setValue] = useState(initialState);
    const increment = () => {
        setValue(prevValue => prevValue + 1)
    }
    const decrement = () => {
        setValue(prevValue => prevValue - 1)
    }
  return [value, {increment, decrement}, setValue]
  
}
