import { ADD_COUNT, MINUS_COUNT, RESET_COUNT, PUSH_NUMBER } from "./actionTypes";

export const initialState = {count: 0,data:[54,48,222,695,43,247,515]}


export default function reducer(state = initialState,acttion) {
    switch (acttion.type) {
        case ADD_COUNT:   
            return {...state,  count: state.count + 1}
        case MINUS_COUNT: 
            return {...state,  count: state.count - 1}
        case PUSH_NUMBER: 
            return  sorter(state)
        case RESET_COUNT:  
            return initialState;
    
        default:return state;
    }

}

const sorter =(state) => {

  return{...state, data: state.data.sort((a,b) => a-b)}
}