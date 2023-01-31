/* eslint-disable react/prop-types */
import React from 'react'

import { Link } from 'react-router-dom'

import { logoImg } from '../../assets'

export const Header = ({ currentIndex }) => {
  const navItems = [
    {
      path: '/',
      name: 'Products'
    },
    {
      path: '/our-story',
      name: 'Our Story'
    },
    {
      path: '/blog',
      name: 'Blog'
    }
  ]

  const handleSearchButtonClick = event => {
  }

  return (
    <header className="flex items-start justify-between border-b border-light-silver w-[1252px] max-w-[1252px] mt-12 mx-auto">
      <Link to="/">
        <img src={logoImg} className="max-h-[25px]" alt="logo" />
      </Link>
      <nav className="flex">
        <ul className="flex space-x-16">
          {
            navItems.map((item, index) => {
              return (
                <li key={item.name} className={`pb-7${index === currentIndex ? ' border-b-2 border-black' : ''}`}>
                  <Link to={item.path} className="hover:text-beaver">
                    {item.name}
                  </Link>
                </li>
              )
            })
          }
        </ul>
        <span className="header-separator mt-1 ml-12"></span>
        <div className="flex items-center ml-6 -mt-7">
          <button onClick={handleSearchButtonClick}>
            <svg className="hover:fill-beaver" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path d="M229.651 218.344l-43.222-43.223a92.112 92.112 0 1 0-11.315 11.314l43.223 43.223a8 8 0 1 0 11.314-11.314zM40 116a76 76 0 1 1 76 76a76.086 76.086 0 0 1-76-76z"></path></svg>
          </button>
          <Link to="/cart" className="ml-6">
            <svg className="hover:fill-beaver" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path d="M217.065 146.862l13.091-72A16 16 0 0 0 214.414 56H46.677l-4.884-26.862A15.992 15.992 0 0 0 26.051 16H8a8 8 0 0 0 0 16h18.05l26.703 146.862a16.003 16.003 0 0 0 1.187 3.765A27.993 27.993 0 1 0 97.293 192h69.414A27.997 27.997 0 1 0 192 176H68.495l-2.91-16h135.738a15.992 15.992 0 0 0 15.742-13.138zM84 204a12 12 0 1 1-12-12a12.013 12.013 0 0 1 12 12zm120 0a12 12 0 1 1-12-12a12.013 12.013 0 0 1 12 12zM49.586 72h164.828l-13.09 72H62.676z"></path></svg>
          </Link>
          <Link to="/my-account" className="ml-6">
            <svg className="hover:fill-beaver" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path d="M231.937 211.986a120.486 120.486 0 0 0-67.12-54.142a72 72 0 1 0-73.633 0a120.488 120.488 0 0 0-67.12 54.14a8 8 0 1 0 13.85 8.013a104.037 104.037 0 0 1 180.174.002a8 8 0 1 0 13.849-8.013zM72 96a56 56 0 1 1 56 56a56.064 56.064 0 0 1-56-56z"></path></svg>
          </Link>
        </div>
      </nav>
    </header>
  )
}
