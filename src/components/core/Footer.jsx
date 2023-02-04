import React, { useState } from 'react'

import { ImFacebook, ImInstagram, ImLinkedin2, ImTwitter } from 'react-icons/im'
import { Link } from 'react-router-dom'

export const Footer = () => {
  const [email, setEmail] = useState('')

  const socialItems = [
    {
      link: 'https://facebook.com/wellacommerce',
      icon: <ImFacebook title="Facebook" />
    },
    {
      link: 'https://instagram.com/wellacommerce',
      icon: <ImInstagram title="Instagram" />
    },
    {
      link: 'https://www.linkedin.com/in/wellacommerce',
      icon: <ImLinkedin2 title="LinkedIn" />
    },
    {
      link: 'https://twitter.com/wellacommerce',
      icon: <ImTwitter title="Twitter" />
    }
  ]

  const navItems = [
    {
      path: '/contact',
      name: 'Contact'
    },
    {
      path: '/terms-of-service',
      name: 'Terms Of Service'
    },
    {
      path: '/shipping-and-returns',
      name: 'Shipping And Returns'
    }
  ]

  const handleNewsletterFormSubmit = event => {
    event.preventDefault()
  }

  return (
    <footer className="flex justify-between border-t border-light-silver w-[1252px] max-w-[1252px] pt-8 pb-16 mx-auto">
      <section className="flex flex-col">
        <ul className="flex space-x-5">
          {
            navItems.map(item => {
              return (
                <li key={item.name}>
                  <Link to={item.path} className="text-dark-silver hover:text-black uppercase">
                    {item.name}
                  </Link>
                </li>
              )
            })
          }
        </ul>
        <p className="mt-14">
          {'© 2023 Wella Commerce. '}
          <Link to="/terms-of-service" className="text-dark-silver hover:text-beaver">
            Terms Of Service
          </Link>
          {' and '}
          <Link to="/privacy-policy" className="text-dark-silver hover:text-beaver">
            Privacy Policy
          </Link>
        </p>
      </section>
      <section className="flex flex-col items-end">
        <form className="flex space-x-5" onSubmit={handleNewsletterFormSubmit}>
          <input required type="email" value={email} onChange={event => setEmail(event.target.value)} className="focus:ring-0 focus:rounded focus:border-2 focus:border-black border-0 border-b border-black placeholder-dark-silver text-sm w-[354px] px-1 py-3" placeholder="Give an email, get the newsletter" />
          <button type="submit" className="bg-black hover:bg-beaver rounded font-bold text-white hover:text-black text-sm uppercase p-3.5">Subscribe</button>
        </form>
        <ul className="flex space-x-8 mt-14">
          {
            socialItems.map(item => {
              return (
                <li key={item.link}>
                  <a className="text-dark-silver hover:text-black text-lg leading-[18px]" target="_blank" rel="noreferrer" href={item.link}>
                    {item.icon}
                  </a>
                </li>
              )
            })
          }
        </ul>
      </section>
    </footer>
  )
}
