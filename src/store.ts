import { configureStore } from '@reduxjs/toolkit'
import giveMeFiveReducer from './store/giveMeFiveSlice'

export const store = configureStore({
  reducer: {
    giveMeFive: giveMeFiveReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
