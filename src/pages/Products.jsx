import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import { Header } from '../components/core/Header'
import { Footer } from '../components/core/Footer'

export const ProductsPage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Wella Commerce | Products</title>
      </Helmet>
      <Header currentIndex={0} />
      <main>
      </main>
      <Footer />
    </Fragment>
  )
}
