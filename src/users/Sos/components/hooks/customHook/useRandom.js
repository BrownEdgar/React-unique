import {useState,useEffect} from 'react'



export default function useRandom(countity = 0) {
const[value,setValue] = useState(countity)
const increment = () => {
	
  if(value < 15){
		setValue(value + 1)
  }
}

const decrement = () => {

  if(value > 0 ){
		setValue(value - 1)
  }
};
  return [value,{increment,decrement},setValue];
};
