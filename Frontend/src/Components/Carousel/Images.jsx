// src/components/ExampleCarouselImage.js
import React from 'react';
import img from '../../assets/Images/image1.png'

const ExampleCarouselImage = ({ text }) => {
  return (
    <div style={{ backgroundColor: 'lightgray', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={img} alt="" className="img-fluid" />
    </div>
  );
}

export default ExampleCarouselImage;
