import React, { Fragment } from 'react'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'

import { ProductPane } from '../components/products/ProductPane'
import { Header } from '../components/core/Header'
import { Footer } from '../components/core/Footer'

export const ProductsPage = () => {
  const { products } = useSelector(state => state.stock)

  const [gridRef] = useAutoAnimate()

  return (
    <Fragment>
      <Helmet>
        <title>Products &#8211; Wella Commerce</title>
      </Helmet>
      <Header currentIndex={0} />
      <main className="w-[1252px] max-w-[1252px] min-h-[148px] my-24 mx-auto px-32">
        <section className="flex flex-col items-center justify-center w-full p-4 md:p-8 mt-8">
          <section ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-16">
            {products.map(product => <ProductPane key={product.id} {...product} />)}
          </section>
        </section>
      </main>
      <Footer />
    </Fragment>
  )
}
