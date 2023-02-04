import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
      // localStorage.setItem('cartItems', JSON.stringify(state.items))
    },
    addItemToCart: (state, action) => {
      state.items = [...state.items, ...Array(action.payload.quantity).fill(action.payload.item)]
      // localStorage.setItem('cartItems', JSON.stringify(state.items))
    },
    clearCart: state => {
      state.items = []
    }
  }
})

export const { removeItemFromCart, addItemToCart, clearCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer
