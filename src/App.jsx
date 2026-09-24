import { useState } from 'react'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/NavBar'
import Servicios from './pages/Servicios'
import './App.css'
import Contacto from './pages/Contacto'
import Nosotros from './pages/Nosotros'
import Talento from './pages/For-Talent'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/talento" element={<Talento />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
