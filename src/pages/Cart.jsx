import React, { Fragment, useEffect } from 'react'

import { Helmet } from 'react-helmet'
// import { groupBy } from 'lodash'

import { Header } from '../components/core/Header'
import { Footer } from '../components/core/Footer'

export const CartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Fragment>
      <Helmet>
        <title>Cart &#8211; Wella Commerce</title>
      </Helmet>
      <Header currentIndex={-1} />
      <main className="w-[1252px] max-w-[1252px] min-h-[148px] my-24 mx-auto">
      </main>
      <Footer />
    </Fragment>
  )
}
