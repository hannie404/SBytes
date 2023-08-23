import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

function SlideCard({ laptops }) {
  return (
    <Splide
      options={{
        type: 'loop',
        perPage: 4,
        autoplay: true,
        arrows: true
      }}>
      {laptops.map((laptop, index) => (
        <SplideSlide key={index}>
          <div className="laptop-card">
            <h3>{laptop.name}</h3>
            <p>{laptop.description}</p>
            <p>Price: ${laptop.price}</p>
            <button>Add to Cart</button>
            <button>Add to Wishlist</button>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  )
}

export default SlideCard