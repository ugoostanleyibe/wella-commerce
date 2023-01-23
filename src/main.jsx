import { Provider } from 'react-redux'

import ReactDOM from 'react-dom'
import React from 'react'

import { AppBrowserRouter } from './components/AppBrowserRouter'
import { store } from './redux/store'

import './index.scss'

ReactDOM.render(
  <Provider store={store}>
    <AppBrowserRouter />
  </Provider>,
  document.getElementById('root')
)
