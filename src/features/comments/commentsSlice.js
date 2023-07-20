import { createSlice,createSelector } from "@reduxjs/toolkit";

const initialStateValue = {
    data: [],
    filter:"allCompleted"
}
const commentsSlice = createSlice({
    name:"comments",
    initialState:initialStateValue,
    reducers:{
     addComments:(_,action) =>{
        return {
            data: action.payload,
            filter:"allCompleted"
        }
       
     },
     setFilter:(state,{payload}) => {
      state.filter = payload
     }
    }
})
 const allCommentsSelector = state => state.comments.data;
 const getAllComplitedCommentsSelector = state => {
    return state.comments.data.filter(comment => comment.completed)
}
const getCarrentFilterSelector = state => state.comments.filter
 const getAllunComplitedCommentsSelector = state => {
    return state.comments.data.filter(comment => !comment.completed)
}
 export const getComments = createSelector(
    
        allCommentsSelector,
        
        getCarrentFilterSelector,
    
    (allcomments,filterName) => {
      switch(filterName){
        case 'all':return allcomments
        case 'allCompleted': return allcomments.filter(comment =>comment.completed)
        case 'unCompleted': return   allcomments.filter(comment => !comment.completed) 
        default:return allcomments
      }
    }
)


export default commentsSlice.reducer
export const{addComments,setFilter} = commentsSlice.actions