import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ShippingAndReturnsPage } from '../pages/ShippingAndReturns'
import { TermsOfServicePage } from '../pages/TermsOfService'
import { ProductDetailsPage } from '../pages/ProductDetails'
import { PrivacyPolicyPage } from '../pages/PrivacyPolicy'
import { MyAccountPage } from '../pages/MyAccount'
import { ProductsPage } from '../pages/Products'
import { OurStoryPage } from '../pages/OurStory'
import { ContactPage } from '../pages/Contact'
import { BlogPage } from '../pages/Blog'
import { CartPage } from '../pages/Cart'

export const AppBrowserRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="*" element={<ProductsPage />} />
          <Route path="shipping-and-returns" element={<ShippingAndReturnsPage />} />
          <Route path="terms-of-service" element={<TermsOfServicePage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="my-account" element={<MyAccountPage />} />
          <Route path="our-story" element={<OurStoryPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route index element={<ProductsPage />} />
          <Route path="products">
            <Route path=":productId" element={<ProductDetailsPage />} />
            <Route index element={<ProductsPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
