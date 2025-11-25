import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Footer from './components/Footer.jsx'
import ScrollToTopButton from './components/ScrollToTopButtons.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Footer />
    <ScrollToTopButton />
  </StrictMode>,
)
