import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist'


export const store = configureStore({
    reducer: persistedReducer,
    middleware,
  });
  
  export default persistStore(store);