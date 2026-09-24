import React from 'react';
import './Servicios.css';

export default function Servicios() {
  const serviciosData = [
    {
      id: 1,
      titulo: "Reclutamiento y Selección",
      descripcion: "Encontramos al candidato ideal adaptado a la cultura y necesidades técnicas de tu empresa.",
      icono: "🎯"
    },
    {
      id: 2,
      titulo: "Staff Augmentation",
      descripcion: "Aumenta la capacidad de tu equipo de desarrollo de forma ágil con profesionales dedicados.",
      icono: "🚀"
    },
    {
      id: 3,
      titulo: "Evaluación de Talento",
      descripcion: "Pruebas técnicas y psicotécnicas exhaustivas para garantizar la calidad del personal.",
      icono: "📊"
    }
  ];

  return (
    <div className="servicios-page">
      {/* 1. HERO SECTION */}
      <section className="servicios-hero">
        <img src="img/Fondo-principal.jpg" alt="Servicios Sumaq" className="hero-bg" />
        <div className="hero-overlay">
          <h1>Nuestros Servicios</h1>
          <p>Soluciones de talento global diseñadas para hacer crecer tu empresa.</p>
        </div>
      </section>

      {/* 2. CATÁLOGO DE SERVICIOS */}
      <section className="servicios-container">
        <div className="section-title">
          <h2>¿Cómo te ayudamos?</h2>
          <p>Ofrecemos esquemas flexibles adaptados a startups y corporativos.</p>
        </div>

        <div className="grid-servicios">
          {serviciosData.map((servicio) => (
            <div key={servicio.id} className="card-servicio">
              <span className="card-icon">{servicio.icono}</span>
              <h3>{servicio.titulo}</h3>
              <p>{servicio.descripcion}</p>
              <a href="#contacto" className="link-saber-mas">Saber más →</a>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BANNERS DE LLAMADA A LA ACCIÓN (CTA) */}
      <section className="cta-servicios">
        <h2>¿Necesitas una solución a la medida?</h2>
        <button className="btn-primary">Agenda una reunión</button>
      </section>
    </div>
  );
}