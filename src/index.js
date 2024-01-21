import React from 'react'
import {createRoot} from 'react-dom/client'

import App from './App'

import './styles/reset.css'
import './styles/global.css'

const rootView = createRoot(document.getElementById('root'))
rootView.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)