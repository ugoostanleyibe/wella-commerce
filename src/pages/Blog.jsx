import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import { Header } from '../components/core/Header'
import { Footer } from '../components/core/Footer'

export const BlogPage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <Header currentIndex={2} />
      <main>
      </main>
      <Footer />
    </Fragment>
  )
}
