import { configureStore, combineReducers } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { reduxBatch } from '@manaflair/redux-batch';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import chapter01 from './chapters/chapter_01_poozs_revenge/redux';

const reducers = combineReducers({
  chapter01,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }).concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: {},
  enhancers: [reduxBatch],
})

const persistor = persistStore(store);

export { persistor };

export default store;