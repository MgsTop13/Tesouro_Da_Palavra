import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavegationRouter from './routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavegationRouter/>
  </StrictMode>,
)
