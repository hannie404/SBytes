import React, { useEffect, useRef, useState } from "react";
import Navigation from "../components/Navigation";
import ShopCarousel from "../components/ShopCarousel";
import Footer from "../components/Footer";
import SlideCard from "../components/SlideCard";
import laptopsData from "./Objects/laptopsData";
import topSaleData from "./Objects/topSale";
import { useLocation } from "react-router-dom";


import axios from 'axios';

function Home() {
  // const currentUser = useLocation();
  // const authUser = currentUser.state;

  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  // const fetchProducts = async () => {
  //   await axios.get("/api/products").then(({ status, data }) => {
  //     if (status === 200) {
  //       setProducts(data.products);
  //       setLoading(false);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   fetchProducts();
  // },[]);

  // if (loading) {
  //   return (
  //     <div>
  //       <h1>
  //         Loading...
  //         <div className="spinner-border text-secondary" role="status">
  //           <span className="visually-hidden">Loading...</span>
  //         </div>
  //       </h1>
  //     </div>
  //   );
  // }
  

  return (
    <div>
      {/* <Navigation currentUser={authUser} /> */}
      <Navigation/>
      <ShopCarousel />
      <div className="container-fluid d-flex flex-wrap p-3 justify-content-center pt-5 align-items-center m-0">
        <div className="col-12 col-md-6 p-3 d-flex justify-content-center">
          <img
            src="https://static-ecpa.acer.com/media/wysiwyg/avp-secondary-banner.jpg"
            alt=""
            className="img-fluid w-100"
          />
        </div>
        <div className="col-12 col-md-6 p-3 d-flex justify-content-center">
          <img
            src="https://static-ecpa.acer.com/media/wysiwyg/vero-secondary-banner.jpg"
            alt=""
            className="img-fluid w-100"
          />
        </div>
        
      </div>
      {/* <SlideCard laptops={products} title={"Featured Products"} currentUser={authUser} /> */}
      {/* <SlideCard title={'Featured Products'} /> */}
      <SlideCard laptops={topSaleData} />
      <Footer />
    </div>
  );
}

export default Home;
