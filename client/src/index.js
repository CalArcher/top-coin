/** @format */

import React from 'react'
import ReactDOM from 'react-dom/client'
import './custom.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import DataContext from './contexts/DataContext'
import ThemeContextSet from './contexts/ThemeContextSet'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ThemeContextSet>
    <DataContext>
      <App />
    </DataContext>
  </ThemeContextSet>
)
