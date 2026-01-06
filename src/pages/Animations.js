import './Animations.css';
import { AnimationList } from '../imagesLabeled/AnimationList';
import { useState } from 'react';

function Animations() {
  const [selectedAnimation, setSelectedAnimation] = useState(null);

  const openAnimation = (animation) => {
    setSelectedAnimation(animation);
  };

  const closeAnimation = () => {
    setSelectedAnimation(null);
  };

  return (
    <section id="Animations">
      <h2>Animations</h2>
      <div className="animations-layout">
        {AnimationList.map((singleAnimation) => (
          <div key={singleAnimation.id} className="animation-item">
            <img
              src={singleAnimation.image}
              alt={singleAnimation.title}
              className="animation-size"
              loading="lazy"
              onClick={() => openAnimation(singleAnimation)}
            />
            <h3>{singleAnimation.title}</h3>
            <p className="description">{singleAnimation.description}</p>
            {singleAnimation.instagramLink && (
              <a 
                href={singleAnimation.instagramLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="instagram-link"
              >
                View on Instagram
              </a>
            )}
            {singleAnimation.tiktokLink && (
              <a 
                href={singleAnimation.tiktokLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="tiktok-link"
              >
                View on TikTok
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedAnimation && (
        <div className="enlarge-image-overlay" onClick={closeAnimation}>
          <button className="enlarge-image-close" onClick={closeAnimation}>×</button>
          <img
            src={selectedAnimation.image}
            alt={selectedAnimation.title}
            className="enlarge-image-format"
          />
        </div>
      )}
    </section>
  );
}

export default Animations;