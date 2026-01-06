import './Illustrations.css';
import { IllustrationsList } from '../imagesLabeled/IllustrationList';
import { useState } from 'react';

function Illustrations() {
    const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section id="Illustrations">
      <h2>Illustrations</h2>
      <div className="illustrations-layout">
        {IllustrationsList.map((singleImage) => (
          <div key={singleImage.id} className="illustration-item">
            <img
              src={singleImage.imagePath}
              alt={singleImage.title}
              className="illustration-size"
              loading="lazy"
              onClick={() => openImage(singleImage)}
            />
            <h3>{singleImage.title}</h3>
            <p>{singleImage.description}</p>
            <a
              href={singleImage.link}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-link"
            >
              View on Instagram </a>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="enlarge-image-overlay" onClick={closeImage}>
          <button className="enlarge-image-close" onClick={closeImage}>X</button>
          <img
            src={selectedImage.imagePath}
            alt={selectedImage.title}
            className="enlarge-image-format"
          />
        </div>
      )}
    </section>
  );
}

export default Illustrations;