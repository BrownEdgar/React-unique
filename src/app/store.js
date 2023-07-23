import { configureStore } from "@reduxjs/toolkit";
import testReducer from "../features/test/testSlice";
import playersReducer from "../features/players/playersSlice";

const addIdMiddleWare = () => (next) => (action) => {
if (action.type === "players/addPlayer") {
  const id =  Math.random().toString(16).slice(2,6)
  action.payload.id = id
}
  next(action)
}

const checkNameMiddleWare = (store) => (next) => (action) => {
  if (action.type === "players/addPlayer") {
    const players = store.getState().players;
    const isNameExists = players.some(player => player.name.toLowerCase() === action.payload.name.toLowerCase())
    if (isNameExists) {
      alert("this player alredy exist")
      return
    }
  }
  next(action)
}

export default configureStore({
  reducer: {
    test: testReducer,
    players: playersReducer
  },
  middleware: [addIdMiddleWare, checkNameMiddleWare,dateMiddleWare]
})