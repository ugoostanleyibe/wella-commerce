import { ToastContainer, Slide } from 'react-toastify'
import { Provider } from 'react-redux'

import ReactDOM from 'react-dom'
import React from 'react'

import 'react-toastify/dist/ReactToastify.min.css'
import 'react-slidedown/lib/slidedown.css'

import { AppBrowserRouter } from './components/AppBrowserRouter'
import { store } from './redux/store'

import './index.scss'

ReactDOM.render(
  <Provider store={store}>
    <AppBrowserRouter />
    <ToastContainer
      style={{ textAlign: 'center' }}
      position="bottom-center"
      closeButton={false}
      transition={Slide}
      draggable={false}
      autoClose={4096}
      pauseOnFocusLoss
      hideProgressBar
      closeOnClick
      pauseOnHover
      newestOnTop
    />
  </Provider>,
  document.getElementById('root')
)
