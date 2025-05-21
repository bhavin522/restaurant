import React from 'react';
import heroImage from '../assets/images/Hero Image.png';

const HeroSection = () => (
  <div className="hero" style={{
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  }}>
  </div>
);

export default HeroSection; 