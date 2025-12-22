import { useEffect } from 'react';

function ImageModal({ image, onClose }) {
  useEffect(() => {
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
    
    // Handle escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="image-modal" 
      style={{ display: 'grid' }}
      onClick={handleBackgroundClick}
    >
      <span className="modal-close" onClick={onClose}>&times;</span>
      <div className="modal-content-wrapper">
        <img 
          className="modal-content" 
          src={image.src} 
          alt={image.alt} 
        />
      </div>
    </div>
  );
}

export default ImageModal;

