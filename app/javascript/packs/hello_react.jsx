import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from '../components/theme/GlobalStyle'
import Homepage from '../components/views/Homepage'
import store from '../components/store'
import { Provider } from 'react-redux'

const App = () => (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <Homepage />
    </Provider>  
  </>
  )

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App/>,
    document.body.appendChild(document.createElement('div')),
  )
})
