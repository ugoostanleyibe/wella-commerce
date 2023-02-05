import React, { Fragment, useState } from 'react'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { sumBy } from 'lodash'

import { removeItemFromCart, updateItemInCart } from '../redux/slices/cart'
import { Header } from '../components/core/Header'
import { Footer } from '../components/core/Footer'

export const CartPage = () => {
  const { items } = useSelector(state => state.cart)

  const [couponCode, setCouponCode] = useState('')

  const [listRef] = useAutoAnimate()

  const dispatch = useDispatch()

  const getTotal = () => sumBy(Object.values(items), item => item.price * item.quantity)

  const handleSubmitCouponCode = event => {
    event.preventDefault()
  }

  return (
    <Fragment>
      <Helmet>
        <title>Cart &#8211; Wella Commerce</title>
      </Helmet>
      <Header currentIndex={-1} />
      <main className="w-[1252px] max-w-[1252px] min-h-[148px] my-24 mx-auto">
        <h1 className="font-medium text-center text-[33px] leading-[50px] mb-10">Cart</h1>
        {
          Object.entries(items).length === 0 && (
            <section className="flex flex-col w-full">
              <div className="bg-bright-grey border-t-2 border-beaver text-dark-liver w-full px-10 py-6 mb-6">
                <span>Your cart is currently empty</span>
              </div>
              <Link to="/" className="bg-black hover:bg-white font-bold text-white hover:text-black text-center uppercase rounded border border-black w-[172px] py-2.5">
                <span>Return To Shop</span>
              </Link>
            </section>
          )
        }
        {
          Object.entries(items).length > 0 && (
            <section className="flex justify-between w-full">
              <section className="flex flex-col w-[598px]">
                <section ref={listRef} className="flex flex-col space-y-10">
                  {
                    Object.values(items).map(item => {
                      const { id, name, image, price, quantity } = item
                      return (
                        <article key={id} className="flex justify-between border-b border-light-silver pb-10">
                          <div className="flex items-center space-x-10">
                            <Link to={`/${id}`}>
                              <img src={image} className="rounded w-[50px] h-[50px]" alt={name} />
                            </Link>
                            <p className="flex flex-col space-y-2">
                              <Link to={`/${id}`} className="text-xl">
                                {name}
                              </Link>
                              <span className="text-beaver">
                                {Number(price).toLocaleString('en', { style: 'currency', currency: 'USD' })}
                              </span>
                            </p>
                          </div>
                          <div className="flex space-x-12">
                            <input type="number" className="bg-bright-grey text-dark-silver text-center text-sm leading-4 rounded border-0 focus:ring-0 w-20 ml-10" value={quantity} onChange={event => dispatch(updateItemInCart({ id, quantity: +event.target.value }))} title="quantity" min="1" max="1000" step="1" inputMode="numeric" autoComplete="off" />
                            <button onClick={() => dispatch(removeItemFromCart(id))}>
                              <svg className="fill-dark-silver hover:fill-[#FF0000] w-5 h-5" title="cancel" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path d="M205.657 194.343a8 8 0 1 1-11.314 11.314L128 139.313l-66.343 66.344a8 8 0 0 1-11.314-11.314L116.687 128L50.343 61.657a8 8 0 0 1 11.314-11.314L128 116.687l66.343-66.344a8 8 0 0 1 11.314 11.314L139.313 128z"></path></svg>
                            </button>
                          </div>
                        </article>
                      )
                    })
                  }
                </section>
                <form className="flex justify-between mt-20" onSubmit={handleSubmitCouponCode}>
                  <input required value={couponCode} onChange={event => setCouponCode(event.target.value)} className="focus:ring-0 outline-none border-0 focus:border-0 border-b focus:border-b border-light-silver focus:border-beaver placeholder-dark-silver text-sm leading-4 w-[354px] py-3" placeholder="Coupon code" />
                  <button type="submit" className="bg-black hover:bg-white font-bold text-white hover:text-black text-center text-sm uppercase rounded border border-black w-[172px] py-4">Apply Coupon</button>
                </form>
              </section>
              <section className="flex flex-col bg-ghost-white w-[598px] px-[60px] py-10">
                <h2 className="text-[26px] leading-10 mt-0 mb-8">Cart Totals</h2>
                <p className="flex">
                  <span className="uppercase w-56">Subtotal</span>
                  <span className="text-dark-silver">
                    {getTotal().toLocaleString('en', { style: 'currency', currency: 'USD' })}
                  </span>
                </p>
                <p className="flex border-b border-light-silver mt-5 pb-16">
                  <span className="uppercase w-56">Shipping</span>
                  <span className="text-dark-silver">
                    {(0).toLocaleString('en', { style: 'currency', currency: 'USD' })}
                  </span>
                </p>
                <p className="flex justify-between mt-2.5">
                  <span className="uppercase">Total</span>
                  <span className="font-bold text-dark-silver">
                    {getTotal().toLocaleString('en', { style: 'currency', currency: 'USD' })}
                  </span>
                </p>
                <Link to="/checkout" className="bg-black hover:bg-white font-bold text-white hover:text-black text-center uppercase rounded border border-black w-full mt-[38px] py-4">
                  <span>Proceed To Checkout</span>
                </Link>
              </section>
            </section>
          )
        }
      </main>
      <Footer />
    </Fragment>
  )
}
