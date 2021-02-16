import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { applyMiddleware, createStore } from 'redux'
import Reducer from '../src/Reducer'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
const store = createStore(Reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
