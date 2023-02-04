import React, { Fragment, useEffect, useState } from 'react'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'

import { setProductInView } from '../redux/slices/stock'
import { addItemToCart } from '../redux/slices/cart'
import { Header } from '../components/core/Header'
import { Footer } from '../components/core/Footer'

import { successIcon } from '../assets'

export const ProductDetailsPage = () => {
  const { productInView, products } = useSelector(state => state.stock)

  const [shouldShowInfoBanner, setShouldShowInfoBanner] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const [listRef] = useAutoAnimate()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { productId } = useParams()

  useEffect(() => {
    if (productInView === null) {
      const product = products.find(product => product.id === productId)
      if (product !== undefined) {
        dispatch(setProductInView(product))
      } else {
        navigate('/products')
      }
    }

    window.scrollTo(0, 0)
  }, [productInView])

  const handleAddToCart = event => {
    event.preventDefault()
    dispatch(addItemToCart({ item: productInView, quantity }))
    setShouldShowInfoBanner(true)
  }

  if (productInView !== null) {
    const { name, image, price } = productInView
    return (
      <Fragment>
        <Helmet>
          <title>{name} &#8211; Wella Commerce</title>
        </Helmet>
        <Header currentIndex={0} />
        <main className="w-[1252px] max-w-[1252px] min-h-[148px] my-24 mx-auto">
          <section ref={listRef} className="flex flex-col w-full">
            {
              shouldShowInfoBanner && (
                <div className="flex items-center justify-between bg-bright-grey border-t-2 border-beaver w-full px-10 py-6 mb-6">
                  <p className="flex items-center space-x-4">
                    <img src={successIcon} className="w-8 h-8" alt="success" />
                    <span>This item was successfully added to your shopping cart</span>
                  </p>
                  <Link to="/cart">
                    <span className="font-bold text-beaver hover:text-black uppercase">View Cart</span>
                  </Link>
                </div>
              )
            }
            <div className="flex justify-between">
              <div className="w-[600px]">
                <img src={image} className="object-center object-cover w-full h-full" alt={name} />
              </div>
              <div className="flex flex-col w-[600px]">
                <h1 className="text-[26px]">{name}</h1>
                <p className="font-medium text-beaver text-xl mt-6">
                  {Number(price).toLocaleString('en', { style: 'currency', currency: 'USD' })}
                </p>
                <form className="flex mt-16" onSubmit={handleAddToCart}>
                  <input required type="number" className="bg-bright-grey text-dark-silver text-center rounded border-0 focus:ring-0 w-28 py-4" value={quantity} onChange={event => setQuantity(+event.target.value)} title="quantity" min="1" max="1000" step="1" inputMode="numeric" autoComplete="off" />
                  <button type="submit" className="hover:bg-black font-bold text-black hover:text-white text-center uppercase rounded border border-black w-full ml-6 p-4">Add to Cart</button>
                </form>
                <div className="flex flex-col space-y-2 mt-8">
                  <p>Description:&nbsp;&nbsp;<span className="text-dark-silver">This product is officially named {name}</span></p>
                  <p>Category:&nbsp;&nbsp;<span className="text-dark-silver">Gold</span></p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </Fragment>
    )
  }

  return null
}
