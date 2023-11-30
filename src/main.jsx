import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { App, Card } from './components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="main">
      <App />
      <Card />
    </div>
  </React.StrictMode>,
)
