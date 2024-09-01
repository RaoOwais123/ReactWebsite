import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouters from './Route'



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AppRouters/>
  </StrictMode>
)
