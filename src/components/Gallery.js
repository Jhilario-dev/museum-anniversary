import {React, useState}from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal';
import PhotoFrame from './PhotoFrame';
import { museumData } from '../data';
import backgroundImage from '../assets/images/background.jpg';
import '../styles/Gallery.css' 

const parallaxStyle = {
  backgroundImage: `url(${backgroundImage})`,
  minHeight: '600px',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative',
  overflow: 'hidden',
  padding: '50px'
};

const Gallery = () => {
  const { id } = useParams();  // Capturamos el id desde la URL
  const gallery = museumData.find(gallery => gallery.id === parseInt(id)); // Buscamos la galería correspondiente

  if (!gallery) {
    return <h2>Galería no encontrada</h2>;  // Manejo de error si no existe la galería
  }

  return (
    <div className="gallery">
  <h2>{gallery.title}</h2>
  <div style={parallaxStyle}>
    
    <div className="floating-images">
      {gallery.photos.map((photo, idx) => {
        // Creamos un nuevo div por cada dos imágenes
        if (idx % 2 === 0) {
          return (
            <div className="div-back">
            <div className="image-pair" key={idx}>
              <PhotoFrame photo={gallery.photos[idx]} />
              {gallery.photos[idx + 1] && <PhotoFrame photo={gallery.photos[idx + 1]} />}
            </div>
            </div>
          );
        }
        return null;
      })}
    </div>

  </div>
</div>
  );
};

export default Gallery;