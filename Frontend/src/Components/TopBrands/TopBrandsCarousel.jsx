import React from 'react';
import { Carousel } from 'react-bootstrap';
import './TopBrands.css'; // Custom CSS file
import img from '../../assets/Images/image 48.png'

const TopBrandsCarousel = () => {
  const brands = [
    
    { name: 'Apple', src: 'https://res-console.cloudinary.com/dfozstttc/media_explorer_thumbnails/025c0c95c87276a3529db890f2c4e8d3/detailed' },
    { name: 'Realme', src: 'https://res-console.cloudinary.com/dfozstttc/thumbnails/v1/image/upload/v1717130669/R3JvdXBfMjgyX2h1YXB5ag==/drilldown' },
    { name: 'Sony', src: 'https://res-console.cloudinary.com/dfozstttc/media_explorer_thumbnails/092057d41c08b7ff2fd23a652ccd55c5/detailed' },
    { name: 'Mi', src: 'https://res-console.cloudinary.com/dfozstttc/thumbnails/v1/image/upload/v1717130668/R3JvdXBfMjkwX2hsd2hrNQ==/drilldown' },
    { name: 'Samsung', src: 'https://res-console.cloudinary.com/dfozstttc/thumbnails/v1/image/upload/v1717130668/R3JvdXBfMjkyX2QxeHRnNw==/preview' },
    { name: 'LG', src: 'https://res-console.cloudinary.com/dfozstttc/thumbnails/v1/image/upload/v1717130669/R3JvdXBfMjkxX2xiNDZ3eA==/preview' },
    { name: 'Dell', src: 'https://res-console.cloudinary.com/dfozstttc/thumbnails/v1/image/upload/v1717130670/aW1hZ2VzXzFfLV9Db3B5X2lwY3RvaQ==/preview' },
    { name: 'Apple', src: 'https://res-console.cloudinary.com/dfozstttc/media_explorer_thumbnails/025c0c95c87276a3529db890f2c4e8d3/detailed' },
    { name: 'Realme', src: 'https://res-console.cloudinary.com/dfozstttc/thumbnails/v1/image/upload/v1717130669/R3JvdXBfMjgyX2h1YXB5ag==/drilldown' },
    { name: 'Sony', src: 'https://res-console.cloudinary.com/dfozstttc/media_explorer_thumbnails/092057d41c08b7ff2fd23a652ccd55c5/detailed' },
    { name: 'Mi', src: 'https://res-console.cloudinary.com/dfozstttc/thumbnails/v1/image/upload/v1717130668/R3JvdXBfMjkwX2hsd2hrNQ==/drilldown' },
    { name: 'Samsung', src: 'https://res-console.cloudinary.com/dfozstttc/thumbnails/v1/image/upload/v1717130668/R3JvdXBfMjkyX2QxeHRnNw==/preview' },
    { name: 'LG', src: 'https://res-console.cloudinary.com/dfozstttc/thumbnails/v1/image/upload/v1717130669/R3JvdXBfMjkxX2xiNDZ3eA==/preview' },
    { name: 'Dell', src: 'https://res-console.cloudinary.com/dfozstttc/thumbnails/v1/image/upload/v1717130670/aW1hZ2VzXzFfLV9Db3B5X2lwY3RvaQ==/preview' },
    { name: 'Apple', src: 'https://res-console.cloudinary.com/dfozstttc/media_explorer_thumbnails/025c0c95c87276a3529db890f2c4e8d3/detailed' },
    { name: 'Realme', src: 'https://res-console.cloudinary.com/dfozstttc/thumbnails/v1/image/upload/v1717130669/R3JvdXBfMjgyX2h1YXB5ag==/drilldown' },
    { name: 'Sony', src: 'https://res-console.cloudinary.com/dfozstttc/media_explorer_thumbnails/092057d41c08b7ff2fd23a652ccd55c5/detailed' },
    { name: 'Mi', src: 'https://res-console.cloudinary.com/dfozstttc/thumbnails/v1/image/upload/v1717130668/R3JvdXBfMjkwX2hsd2hrNQ==/drilldown' },
    { name: 'Samsung', src: 'https://res-console.cloudinary.com/dfozstttc/thumbnails/v1/image/upload/v1717130668/R3JvdXBfMjkyX2QxeHRnNw==/preview' },
    { name: 'LG', src: 'https://res-console.cloudinary.com/dfozstttc/thumbnails/v1/image/upload/v1717130669/R3JvdXBfMjkxX2xiNDZ3eA==/preview' },
    { name: 'Dell', src: 'https://res-console.cloudinary.com/dfozstttc/thumbnails/v1/image/upload/v1717130670/aW1hZ2VzXzFfLV9Db3B5X2lwY3RvaQ==/preview' },
    // Add more brands as needed
  ];

  const chunkSize = 7;
  const brandChunks = [];
  for (let i = 0; i < brands.length; i += chunkSize) {
    brandChunks.push(brands.slice(i, i + chunkSize));
  }

  return (
    <div className="top-brands-container">
      <h2>Top Brands</h2>
      <Carousel indicators={false} interval={3000}>
        {brandChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
              {chunk.map((brand, idx) => (
                <div key={idx} className="brand-item mx-2">
                  <img
                    className="d-block brand-image"
                    src={brand.src}
                    alt={brand.name}
                  />
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default TopBrandsCarousel;
