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
  productInView: null,
  products: [
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
    addProductToStock: (state, action) => {
      state.products = [...state.products, action.payload]
    },
    setProductInView: (state, action) => {
      state.productInView = action.payload
    },
    clearStock: state => {
      state.products = []
    }
  }
})

export const { addProductToStock, setProductInView, clearStock } = stockSlice.actions
export const stockReducer = stockSlice.reducer
