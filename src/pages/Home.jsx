import React from 'react';
import Navigation from '../components/Navigation';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import SlideCard from '../components/SlideCard';

const laptopsData = [
  {
    name: 'Laptop 1',
    description: 'This is a description for Laptop 1',
    price: 1000
  },
  {
    name: 'Laptop 2',
    description: 'This is a description for Laptop 2',
    price: 1200
  },
  {
    name: 'Laptop 3',
    description: 'This is a description for Laptop 2',
    price: 1200
  },
  {
    name: 'Laptop 4',
    description: 'This is a description for Laptop 2',
    price: 1200
  },
  {
    name: 'Laptop 5',
    description: 'This is a description for Laptop 2',
    price: 1200
  },
  {
    name: 'Laptop 6',
    description: 'This is a description for Laptop 2',
    price: 1200
  },
  {
    name: 'Laptop 7',
    description: 'This is a description for Laptop 2',
    price: 1200
  },
  {
    name: 'Laptop 8',
    description: 'This is a description for Laptop 2',
    price: 1200
  },
];

function Home() {
  return (
    <div>
      <Navigation />
      <Carousel />
      <SlideCard laptops={laptopsData} />
      <Footer />
    </div>
  )
}

export default Home