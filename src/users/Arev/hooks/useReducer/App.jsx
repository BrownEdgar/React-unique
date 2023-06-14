import {useReducer} from 'react'
import reducer,{initialState} from './reducer'
import { ADD_COUNT, MINUS_COUNT, RESET_COUNT } from "./actionTypes";

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)



    const handleClickPlus = () => {
        dispatch({type: ADD_COUNT})
    }
    const handleClickMinus = () => {
        dispatch({type: MINUS_COUNT})
    }
    const reset = () => {
        dispatch({type: RESET_COUNT})
    }


  return (
    <div>
        <h1>State: {JSON.stringify(state)}</h1>
        <button onClick={handleClickPlus}>increment</button>
        <button onClick={reset}>reset</button>
        <button onClick={handleClickMinus}>increment</button>
        <button onClick={() => dispatch({type: 'PUSH_NUMBER', payload: 2003})}>dataplus</button>
    </div>
  )
}
