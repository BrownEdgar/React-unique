import React, { useReducer } from 'react'
import reducer, { inishallState } from './reducer'
import { ADD_COUNT,MINUSE_COUNT,RESET_COUNT,PLUSE_DATA } from './actionTypes';

export default function App() {
    const [state, dispatch] = useReducer(reducer, inishallState);

const handleClickPluse = () =>{
    dispatch({type:'ADD_COUNT'})


}
const handleClickMinuse = () =>{
    dispatch({type:'MINUSE_COUNT'})
}
const handleClickData = () => {
    dispatch({type:'PLUSE_DTAT'})
}
  return (
    <div>
     <h1>State:{state}</h1>
     <button onClick={handleClickPluse}>increment</button>
     <button onClick={handleClickMinuse}>min</button>
     <button onClick={handleClickData}>Data Count</button>
    </div>
  )
}
