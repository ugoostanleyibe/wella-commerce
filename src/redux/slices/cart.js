import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || {}
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeItemFromCart: (state, action) => {
      const duplicateItems = { ...state.items }
      delete duplicateItems[action.payload]
      state.items = duplicateItems
      localStorage.setItem('cartItems', JSON.stringify(state.items))
    },
    updateItemInCart: (state, action) => {
      const { id, quantity } = action.payload
      state.items = { ...state.items, [id]: { ...state.items[id], quantity } }
      localStorage.setItem('cartItems', JSON.stringify(state.items))
    },
    addItemToCart: (state, action) => {
      const { item, quantity } = action.payload
      state.items = { ...state.items, [item.id]: { ...item, quantity: (state.items[item.id]?.quantity || 0) + quantity } }
      localStorage.setItem('cartItems', JSON.stringify(state.items))
    },
    clearCart: state => {
      state.items = {}
      localStorage.setItem('cartItems', JSON.stringify(state.items))
    }
  }
})

export const { removeItemFromCart, updateItemInCart, addItemToCart, clearCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer
