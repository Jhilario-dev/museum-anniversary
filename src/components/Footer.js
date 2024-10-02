import React from 'react';
import '../styles/Footer.css' 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Contacto: <a href="mailto:tuemail@example.com">tuemail@example.com</a></p>
        <p>Fecha de creación: Septiembre 2024</p>
        <p>&copy; {currentYear} Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;