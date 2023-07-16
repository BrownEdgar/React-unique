import { createSlice } from "@reduxjs/toolkit"

const initialState = [{
id:1,
name:'Armen'
}]

const UsersSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
      addUser:(state,action) =>{
      state.push(action.payload)
      }
    }
})
export default UsersSlice.reducer;
export const {addUser} = UsersSlice.actions