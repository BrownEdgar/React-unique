import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {usersReducer,counterReducer,todosReduser,
commentsReduser,postsReduser,albumsReduser, carsReduser,productsReducer
} from '../features'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import productsSlice from "../features/products/productsSlice";

const addIdMiddle = (store) => (next) => (action) => {
  if(action.type === 'cars/addCars'){
    const id = Math.random().toString(16).slice(2,6)
    action.payload.id = id;
    next(action)
  }else{
    next(action)
  }
}

const checkNumberPhoneMiddleWaer = (store) => (next) => (action) => {
  if(action.type === 'cars/addCars'){
   const cars = store.getState().cars;
   const isNumberExists = cars.some(car => car.phone === action.payload.phone);
   if(isNumberExists){
    return "sorry"
   }
    next(action)
  }else{
    next(action)
  }
}


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist:['cars']
 }

 
 const rootReducer = combineReducers({
  users:usersReducer,
  counter:counterReducer,
  todos:todosReduser,
  comments:commentsReduser,
  posts:postsReduser,
  albums:albumsReduser,
  cars:carsReduser,
  products:productsReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)


 export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,addIdMiddle,checkNumberPhoneMiddleWaer],
    },
  }),
})

export default persistStore(store)





















