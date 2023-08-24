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
      {/* <div className='container-fluid d-flex flex-wrap p-0 justify-content-center pt-5'>
        <img src="https://static-ecpa.acer.com/media/wysiwyg/avp-secondary-banner.jpg" alt="" className='m-3 w-auto img-fluid'/>
        <img src="https://static-ecpa.acer.com/media/wysiwyg/vero-secondary-banner.jpg" alt="" className='m-3 w-auto img-fluid'/>
      </div> */}
      <div className='container-fluid d-flex flex-wrap p-3 justify-content-center pt-5 align-items-center m-0'>
        <div className="col-12 col-md-6 p-3 d-flex justify-content-center"> 
          <img src="https://static-ecpa.acer.com/media/wysiwyg/avp-secondary-banner.jpg" alt="" className='img-fluid w-100'/>
        </div>
        <div className="col-12 col-md-6 p-3 d-flex justify-content-center">
          <img src="https://static-ecpa.acer.com/media/wysiwyg/vero-secondary-banner.jpg" alt="" className='img-fluid w-100'/>
        </div>
      </div>
      <SlideCard laptops={laptopsData} />
      <SlideCard laptops={topSaleData} />
      <Footer />
    </div>
  )
}

export default Home