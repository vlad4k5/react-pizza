import React from 'react'
import ReactDOM from 'react-dom'
import './scss/app.scss'
import App from './App'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
)
