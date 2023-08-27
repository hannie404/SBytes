import React from "react";
import Navigation from "../components/Navigation";
import BusinessCarousel from "../components/BusinessCarousel";
import Footer from "../components/Footer";
import BusinessDataList from "../components/BusinessCard";
import BusinessDataList2 from "../components/BusinessCard2";

function Business() {
  return (
    <div>
      <Navigation />
      <BusinessCarousel />
      <BusinessDataList />
      <BusinessDataList2 />
      <Footer />
    </div>
  );
}

export default Business;
