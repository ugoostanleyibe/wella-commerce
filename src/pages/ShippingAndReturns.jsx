import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import { Header } from '../components/core/Header'
import { Footer } from '../components/core/Footer'

export const ShippingAndReturnsPage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Shipping And Returns &#8211; Wella Commerce</title>
      </Helmet>
      <Header currentIndex={-1} />
      <main className="w-[1252px] max-w-[1252px] min-h-[148px] my-24 mx-auto">
      </main>
      <Footer />
    </Fragment>
  )
}
