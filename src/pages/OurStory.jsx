import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import { Header } from '../components/core/Header'
import { Footer } from '../components/core/Footer'

export const OurStoryPage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Our Story</title>
      </Helmet>
      <Header currentIndex={1} />
      <main>
      </main>
      <Footer />
    </Fragment>
  )
}
