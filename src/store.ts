import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { reduxBatch } from '@manaflair/redux-batch'

const reducer = {}

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: {},
  enhancers: [reduxBatch],
})

export default store;