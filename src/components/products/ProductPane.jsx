/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import React from 'react'

import { setProductInView } from '../../redux/slices/stock'

export const ProductPane = product => {
  const { id, name, image, price } = product

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setProductInView(product))
  }

  return (
    <article className="flex flex-col rounded-lg overflow-hidden">
      <Link to={`/${id}`} onClick={handleClick} className="product-wrapper">
        <img src={image} className="rounded-lg mx-auto" alt={name} />
      </Link>
      <Link to={`/${id}`} onClick={handleClick} className="text-black hover:text-beaver text-xl mt-6">
        {name}
      </Link>
      <p className="font-medium text-beaver text-xl mt-2">
        {Number(price).toLocaleString('en', { style: 'currency', currency: 'USD' })}
      </p>
    </article>
  )
}
