import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Aboutus from './Pages/Aboutus.jsx'
import Services from './Pages/Services.jsx'
import Contactus from './Pages/Contactus.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<Aboutus/>}/>
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contactus/>} />
        </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
