import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import StateProvider from './context/provider/StateProvider.jsx'
import './index.css'
import './language/i18next.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
  <StateProvider>
  <App />
  </StateProvider>
   </BrowserRouter>
  </React.StrictMode>,
)
