import { createSlice } from '@reduxjs/toolkit'

import {
  hairPinImg,
  halEarringsImg,
  yukiHairPinImg,
  liraEarringsImg,
  kaedeHairPinImg,
  plainNecklaceImg
} from '../../assets'

const initialState = {
  items: [
    {
      id: 'lira-earrings',
      name: 'Lira Earrings',
      image: liraEarringsImg,
      price: 20
    },
    {
      id: 'hal-earrings',
      name: 'Hal Earrings',
      image: halEarringsImg,
      price: 25
    },
    {
      id: 'kaede-hair-pin',
      name: 'Kaede Hair Pin Set Of Three',
      image: kaedeHairPinImg,
      price: 30
    },
    {
      id: 'hair-pin',
      name: 'Hair Pin Set Of Three',
      image: hairPinImg,
      price: 30
    },
    {
      id: 'plain-necklace',
      name: 'Plain Necklace',
      image: plainNecklaceImg,
      price: 19
    },
    {
      id: 'yuki-hair-pin',
      name: 'Yuki Hair Pin Set Of Three',
      image: yukiHairPinImg,
      price: 29
    }
  ]
}

const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    addItemToStock: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    clearStock: state => {
      state.items = []
    }
  }
})

export const { addItemToStock, clearStock } = stockSlice.actions
export const stockReducer = stockSlice.reducer
