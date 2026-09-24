import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css'

export default function Navbar(){
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* LOGO */}
        <a href="#" className="navbar-brand">
          <img src="/img/logo_sumaq.png" alt="" />
        </a>

        {/* NAVEGACIÓN DESKTOP */}
        <div className="nav-links">
          <a href="/servicios" className="nav-link">Servicios</a>
          <a href="/talento" className="nav-link">Para talento</a>
          <a href="/nosotros" className="nav-link">Nosotros</a>
          <a href="/contacto" className="nav-link">Contacto</a>
        </div>

        {/* BOTONES DE ACCIÓN DESKTOP */}
        <div className="nav-actions">
          <a href="#apply-talent" className="btn-secondary">Postular como Talento</a>
          <a href="#contact" className="btn-primary">Contratar Talento</a>
        </div>

        {/* BOTÓN MÓVIL */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Abrir Menú"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <a href="/servicios" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Servicios</a>
          <a href="/talento" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Para talento</a>
          <a href="/nosotros" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Nosotros </a>
          <a href="/contacto" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contacto </a>
          <a href="#apply-talent" className="btn-secondary" onClick={() => setIsMobileMenuOpen(false)}>Postular como Talento</a>
          <a href="#contact" className="btn-primary" style={{ textAlign: 'center' }} onClick={() => setIsMobileMenuOpen(false)}>Contratar Talento</a>
        </div>
      )}
    </nav>
  );
}