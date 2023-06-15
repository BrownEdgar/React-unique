import { ADD_COUNT,MINUSE_COUNT,RESET_COUNT,PLUSE_DATA } from './actionTypes';
export const inishallState = {count:0,data:[]}

export default function reducer(state = 0,action) {
    if(action.type === 'ADD_COUNT'){
    return {...state,count:state.count + 1}
    }   
    if(action.type === 'MINUSE_COUNT'){
        return {...state,count: state.count -1}
       }
    if(action.type === 'PLUSE_DATA'){
        return{...state,data:state.data.concat(5)}
    }
   return state; 

}