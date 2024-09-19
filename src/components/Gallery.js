import {React, useState}from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal';
import PhotoFrame from './PhotoFrame';
import { museumData } from '../data';
import backgroundImage from '../assets/images/background.jpg';
import '../ParallaxGallery.css' 

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

// Modal.setAppElement('#root');

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
        {gallery.photos.map((photo, index) => (
          <PhotoFrame key={index} photo={photo} />
        ))}
      </div>
      
      </div>
    </div>
  );
};

export default Gallery;