import { configureStore } from "@reduxjs/toolkit";
import {usersReducer,counterReducer,todosReduser,
commentsReduser,postsReduser,albumsReduser, carsReduser,
} from '../features'


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

export default configureStore({
  reducer: {
    users:usersReducer,
    counter:counterReducer,
    todos:todosReduser,
    comments:commentsReduser,
    posts:postsReduser,
    albums:albumsReduser,
    cars:carsReduser,
  },
  middleware:[addIdMiddle,checkNumberPhoneMiddleWaer]
})
