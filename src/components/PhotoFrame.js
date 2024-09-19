
import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/photoFrame.css' 

Modal.setAppElement('#root');

const PhotoFrame = ({ photo }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="photo-frame">
      <img src={photo.src} alt={photo.alt} onClick={()=> openModal(photo.src)} className='floating-img' />
      <p>{photo.description}</p>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal-content" overlayClassName="modal-overlay">
        <img src={currentImage} alt="Foto ampliada" className="modal-img" />
        <button onClick={closeModal} className="modal-close-btn">Cerrar</button>
      </Modal>
    </div>
  );
};

export default PhotoFrame;