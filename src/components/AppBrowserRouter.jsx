import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ProductDetailsPage } from '../pages/ProductDetails'
import { MyAccountPage } from '../pages/MyAccount'
import { ProductsPage } from '../pages/Products'
import { OurStoryPage } from '../pages/OurStory'
import { BlogPage } from '../pages/Blog'
import { CartPage } from '../pages/Cart'

export const AppBrowserRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="my-account" element={<MyAccountPage />} />
          <Route path="our-story" element={<OurStoryPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route index element={<ProductsPage />} />
          <Route path="product">
            <Route path=":productId" element={<ProductDetailsPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
