import React from 'react';
import { mediaApplications } from '../constants';

const SocialMedia = () => {
  return (
    <div className='social-media-container'>
      <div className="social-media-icons">
        {mediaApplications.map((app, index) => (
          <div key={index} className="social-media-icon">
            <a href={app.hyperlink} target="_blank" rel="noopener noreferrer">
              <img src={app.icon} alt={`${app.name} Icon`} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;