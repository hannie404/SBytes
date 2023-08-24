import React from 'react';
import Navigation from '../components/Navigation';
import ShopCarousel from '../components/ShopCarousel';
import Footer from '../components/Footer';
import SlideCard from '../components/SlideCard';
import laptopsData from './Objects/laptopsData';
import topSaleData from './Objects/topSale';

function Home() {
  return (
    <div>
      <Navigation />
      <ShopCarousel />
      <SlideCard laptops={laptopsData} />
      <SlideCard laptops={topSaleData} />
      <Footer />
    </div>
  )
}

export default Home