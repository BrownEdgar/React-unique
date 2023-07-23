import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
  id: Math.random().toString(16).slice(2,6),
  name: "Carlos",
  surname: "Alcaraz",
  age: 20,
  nationality: "Spanish",
  ranking: 1,
}]

export const allPlayers = state => state.players

const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    addPlayer:(state, {payload}) =>{
      state.push(payload)
    }
  }
})

export const { addPlayer } = playersSlice.actions
export default playersSlice.reducer