import {useState,useEffect} from 'react'



export default function useRandom(countity = 0) {
const[value,setValue] = useState(countity)
const increment = () => {
<<<<<<< HEAD
  if(value < 15){
    setValue(value + 1)
=======
	
  if(value < 15){
		setValue(value + 1)
>>>>>>> b255eb0040e214eed558a496847d080219fd2983
  }
}

const decrement = () => {
<<<<<<< HEAD
  if(value > 0){
    setValue(value - 1)
=======

  if(value > 0 ){
		setValue(value - 1)
>>>>>>> b255eb0040e214eed558a496847d080219fd2983
  }
};
  return [value,{increment,decrement},setValue];
};
