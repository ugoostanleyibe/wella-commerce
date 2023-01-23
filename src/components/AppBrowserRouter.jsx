import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ProductDetailsPage } from '../pages/ProductDetails'
import { ShoppingCartPage } from '../pages/ShoppingCart'
import { ProductsPage } from '../pages/Products'
import { OurStoryPage } from '../pages/OurStory'
import { BlogPage } from '../pages/Blog'

export const AppBrowserRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="product">
            <Route path=":productId" element={<ProductDetailsPage />} />
          </Route>
          <Route path="our-story" element={<OurStoryPage />} />
          <Route path="cart" element={<ShoppingCartPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route index element={<ProductsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
