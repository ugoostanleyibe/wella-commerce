import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSignedIn: JSON.parse(localStorage.getItem('isSignedIn')) || false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    signIn: state => {
      localStorage.setItem('isSignedIn', JSON.stringify(state.isSignedIn = true))
    },
    signOut: state => {
      localStorage.removeItem('isSignedIn')
      state.isSignedIn = false
    }
  }
})

export const { signIn, signOut } = cartSlice.actions
export const cartReducer = cartSlice.reducer
