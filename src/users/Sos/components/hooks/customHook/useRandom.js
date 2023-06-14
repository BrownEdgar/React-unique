import {useState,useEffect} from 'react'



export default function useRandom(countity = 0) {
const[value,setValue] = useState(countity)
const increment = () => {
  setValue(countity => countity + 1)
  if(value > 15){
    setValue(countity + 1)
  }
};
const decrement = () => {
  setValue(countity => countity - 1)
  if(value !== 0){
    setValue(countity - 1)
  }
};
  return [value,{increment,decrement},setValue];
};
