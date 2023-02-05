import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { ShippingAndReturnsPage } from '../pages/ShippingAndReturns'
import { TermsOfServicePage } from '../pages/TermsOfService'
import { ProductDetailsPage } from '../pages/ProductDetails'
import { PrivacyPolicyPage } from '../pages/PrivacyPolicy'
import { MyAccountPage } from '../pages/MyAccount'
import { ProductsPage } from '../pages/Products'
import { OurStoryPage } from '../pages/OurStory'
import { CheckoutPage } from '../pages/Checkout'
import { ContactPage } from '../pages/Contact'
import { BlogPage } from '../pages/Blog'
import { CartPage } from '../pages/Cart'

import { store } from '../redux/store'

export const AppFrame = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="*" element={<ProductsPage />} />
            <Route path=":productId" element={<ProductDetailsPage />} />
            <Route path="shipping-and-returns" element={<ShippingAndReturnsPage />} />
            <Route path="terms-of-service" element={<TermsOfServicePage />} />
            <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="my-account" element={<MyAccountPage />} />
            <Route path="our-story" element={<OurStoryPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route index element={<ProductsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
