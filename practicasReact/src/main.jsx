import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Saludo } from './App.jsx'
import { Contador } from './contador.jsx'

import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Saludo nombre={'lucas'}/>
    <Contador />
  </StrictMode>,
)
