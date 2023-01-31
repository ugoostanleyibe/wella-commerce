/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

import React from 'react'

export const ProductPane = props => {
  const { id, name, image, price } = props

  return (
    <article className="flex flex-col rounded-lg overflow-hidden">
      <Link to={`/products/${id}`} className="product-wrapper">
        <img src={image} className="rounded-lg mx-auto" alt="product image" />
      </Link>
      <Link to={`/products/${id}`} className="text-black hover:text-beaver text-xl mt-6">
        {name}
      </Link>
      <p className="font-medium text-beaver text-xl mt-2">
        {Number(price).toLocaleString('en', { style: 'currency', currency: 'USD' })}
      </p>
    </article>
  )
}
