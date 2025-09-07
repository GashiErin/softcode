import React from 'react';
import './SahgriLogo.css';

const SahgriLogo = ({ size = 'medium', className = '' }) => {
  return (
    <div className="sahgri-logo">
      <div className="logo-main">
        <span className="company-name">SAHGRI</span>
        <div className="company-type">
          <span>SARL</span>
        </div>
      </div>
      <div className="logo-separator"></div>
      <div className="logo-tagline">PROJETS CONSEILS REALISATIONS</div>
    </div>
  );
};

export default SahgriLogo;