import { configureStore } from "@reduxjs/toolkit"
import contactReducer from "./slices/contactSlice"
import bannerReducer from "./slices/bannerSlice"

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    banner: bannerReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
