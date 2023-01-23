import { configureStore } from '@reduxjs/toolkit'

import { cartReducer } from './slices/cart'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
  reducer: {
    cart: cartReducer
  }
})
