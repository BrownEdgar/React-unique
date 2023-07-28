import { combineReducers, configureStore } from '@reduxjs/toolkit';
import testReducer from '../feauchers/test/testSlise';

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

export default function 