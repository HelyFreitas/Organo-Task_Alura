import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Select } from './components/Select'
import "./styles/global.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
