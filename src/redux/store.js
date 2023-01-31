import { configureStore } from '@reduxjs/toolkit'

import { stockReducer } from './slices/stock'
import { cartReducer } from './slices/cart'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
  reducer: {
    stock: stockReducer,
    cart: cartReducer
  }
})
