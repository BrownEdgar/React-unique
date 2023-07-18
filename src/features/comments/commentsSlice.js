import { createSlice,createSelector } from "@reduxjs/toolkit";

const initialStateValue = {
    data: [],
    filter:"allComplitide"
}
const commentsSlice = createSlice({
    name:"comments",
    initialState:initialStateValue,
    reducers:{
     addComments:(_,action) =>{
        return {
            data: action.payload,
            filter:"allComplitide"
        }
     }
    }
})
 const allCommentsSelector = state => state.comments.data;
 const getAllComplitedCommentsSelector = state => {
    return state.comments.data.filter(comment => comment.completed)
}
const getParrentFilterSelector = state => state.comments.filter
 const getAllunComplitedCommentsSelector = state => {
    return state.comments.data.filter(comment => !comment.completed)
}
 export const getComments = createSelector(
    [
        allCommentsSelector ,
        getAllComplitedCommentsSelector,
        getAllunComplitedCommentsSelector,
        getParrentFilterSelector,
    ],
    (allcomments,cmpcomments,unCmpcomments,filterName) => {
      switch(filterName){
        case 'all':return allcomments
        case 'allComplitide': return cmpcomments
        case 'unComplitide': return unCmpcomments
        default:return allcomments
      }
    }
)


export default commentsSlice.reducer
export const{addComments} = commentsSlice.actions